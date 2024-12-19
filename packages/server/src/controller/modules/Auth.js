import { create } from 'svg-captcha'
import { hashPassword, signJWT } from '@/utils'

async function createCaptcha(ctx, next) {
  const captcha = create({
    size: 4,
    ignoreChars: '0o1il',
    noise: 4,
    color: true,
  })
  ctx.session = ctx.session || {}
  ctx.session.captcha = captcha.text.toLowerCase()
  ctx.type = 'image/svg+xml'
  ctx.body = captcha.data

  await next()
}

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: 用户登录
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: 登录成功
 */
async function login(ctx, next) {
  const {
    // username,
    password,
    captcha,
  } = ctx.request.body

  // console.log(username)

  if (ctx.session.captcha !== captcha.toLowerCase()) {
    ctx.status = 200
    ctx.body = {
      code: 200,
      success: false,
      message: 'captcha is not correct',
      data: null,
    }
    return await next()
  }

  const user = null

  if (!user) {
    ctx.status = 200
    ctx.body = {
      code: 200,
      success: false,
      message: 'username is not exist',
      data: null,
    }

    return await next()
  }

  const [salt] = user.password.split(':')

  const hashedPassword = await hashPassword(password, salt)

  if (hashedPassword !== user.password) {
    ctx.status = 400
    ctx.body = {
      code: 400,
      message: '密码错误',
      data: null,
    }
    return await next()
  }

  ctx.status = 200
  ctx.body = {
    code: 200,
    message: '登录成功',
    data: {
      accessToken: signJWT({
        id: user.id,
      }),
    },
  }

  await next()
}

export default {
  'get /auth/captcha': {
    handler: createCaptcha,
    auth: false,
  },
  'post /auth/login': {
    handler: login,
    auth: false,
  },
}
