export function createTitle(router) {
  const commonTitle = import.meta.env.VITE_TITLE
  router.beforeEach(async (to) => {
    if (to.meta.title) {
      document.title = `${to.meta.title} | ${commonTitle}`
    }
    else {
      document.title = commonTitle
    }
  })
}
