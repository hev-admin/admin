import session from 'koa-session'

export function decodeCookie() {
  return async (ctx, next) => {
    ctx.headers.cookie = decodeURIComponent(ctx.headers.cookie)
    await next()
  }
}

export function genSession(app) {
  const config = {
    key: 'koa:sess',
    maxAge: 86400000,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: true,
    renew: true,
    secure: false,
  }

  const secret = import.meta.env.VITE_SECRET || 'HEV_ADMIN_SERVER_SECRET'
  app.keys = [secret]

  return session(config, app)
}
