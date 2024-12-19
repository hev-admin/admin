import Router from '@koa/router'
import swaggerJSDoc from 'swagger-jsdoc'
import { koaSwagger } from 'koa2-swagger-ui'
import { genJWT, genMulter, log } from '@/utils'

const modules = import.meta.glob('./modules/*.js', { eager: true })

const controllers = Object.keys(modules)
  .map(key => modules[key].default)
  .reduce((acc, item) => {
    acc = { ...acc, ...item }
    return acc
  }, {})

const router = new Router()

function requestWrapper(auth = false, upload = false) {
  return async function (ctx, next) {
    if (auth || upload) {
      if (auth) {
        await genJWT()(ctx, next)
      }
      if (upload) {
        await genMulter()(ctx, next)
      }
    }
    else {
      await next()
    }
  }
}

Object.keys(controllers).forEach((key) => {
  const [method, url] = key.split(' ')
  const { handler, auth, upload } = controllers[key]
  router[method.toLowerCase()](`/api${url}`, requestWrapper(auth, upload), handler)
  log(`↑ ${method.toUpperCase()} /api${url} (${auth ? 'SECURE' : 'PUBLIC'})`)
})

const swaggerDefinition = {
  openapi: '3.0.0', // Specification (optional, defaults to swagger: '2.0')
  info: {
    title: 'Hev Admin API',
    version: '1.0.0',
    description: 'Hev Admin API Documentation',
  },
  servers: [
    {
      url: '/api',
    },
  ],
}

const options = {
  swaggerDefinition,
  apis: ['./src/controller/modules/*.js'],
}

const swaggerSpec = swaggerJSDoc(options)

router.get('/swagger.json', async (ctx) => {
  ctx.set('Content-Type', 'application/json')
  ctx.body = swaggerSpec
})

router.get(
  '/swagger',
  koaSwagger({
    routePrefix: false,
    swaggerOptions: {
      url: '/swagger.json',
    },
  }),
)

export default router
