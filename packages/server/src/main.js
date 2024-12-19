import { resolve } from 'node:path'
import { cwd } from 'node:process'
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import error from 'koa-json-error'
import responseTime from 'koa-response-time'
import Static from 'koa-static'
import { decodeCookie, genSession, log, logger } from '@/utils'
import router from '@/controller'

const app = new Koa()

app
  .use(responseTime())
  .use(logger())
  .use(error())
  .use(Static(resolve(cwd(), 'www')))
  .use(bodyParser())
  .use(decodeCookie())
  .use(genSession(app))
  .use(router.routes())
  .use(router.allowedMethods())

if (import.meta.env.PROD) {
  const port = import.meta.env.VITE_PORT || 3000
  app.listen(
    port,
    () => {
      log(`Server is running, listen on ${port}`)
    },
  )
}

export const viteNodeApp = app
