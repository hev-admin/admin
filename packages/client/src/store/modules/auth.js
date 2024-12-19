export const useAuth = defineStore('auth', () => {
  const token = ref('')
  const setToken = (newToken) => {
    token.value = newToken
  }
  return { token, setToken }
}, {
  persist: {
    key: 'auth',
    storage: sessionStorage,
    pick: ['token'],
  },
})
