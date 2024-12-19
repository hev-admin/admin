import PersistedState from 'pinia-plugin-persistedstate'

export * from './modules'

export const pinia = createPinia()

pinia.use(PersistedState)

export function setupStore(app) {
  app.use(pinia)
}
