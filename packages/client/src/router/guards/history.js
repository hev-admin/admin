export function createHistory(router) {
  router.beforeEach(async (to, from, next) => {
    next()
  })
}
