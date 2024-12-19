export const useUser = defineStore('user', () => {
  const info = ref({
    avatar: '/images/logo_with_bg.png',
  })

  return { info }
})
