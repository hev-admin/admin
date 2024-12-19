export function createParams(router) {
  router.beforeEach((to, from, next) => {
    if (to.query) {
      const params = {}
      for (const key in to.query) {
        params[key] = to.query[key]
      }
      to.params = params
      next()
    }
  })
}
