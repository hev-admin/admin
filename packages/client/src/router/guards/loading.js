export function createLoading(router) {
  router.beforeEach(async (to, from, next) => {
    if (!to.meta.loaded) {
      // start page loading
      // document.body.classList.add('page-loading')
    }
    next()
  })
}
