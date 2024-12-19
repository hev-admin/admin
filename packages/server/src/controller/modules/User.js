import { prisma } from '@/database'

async function getUserInfo(ctx, next) {
  await next()
  ctx.body = {
    code: 200,
    message: 'user info',
    data: null,
  }
}

async function getUsersList(ctx, next) {
  // 用 prisma 搜索数据库中的所有用户
  await next()
  const users = await prisma.user.findMany(
    {
      select: { id: true, name: true, email: true },
    },
  )
  ctx.body = {
    code: 200,
    message: 'users list',
    data: users,
  }
}

export default {
  'get /user/info': {
    handler: getUserInfo,
    auth: true,
  },
  'get /user/list': {
    handler: getUsersList,
    auth: false,
  },
}
