async function isAlive(ctx, next) {
  await next()
  ctx.body = {
    code: 200,
    message: 'ok',
    data: null,
  }
}

export default {
  'get /common/alive': {
    handler: isAlive,
    auth: false,
  },
}
