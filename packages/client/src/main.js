import App from './App.vue'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import { setupI18n } from '@/locales'

import '@/styles'

const app = createApp(App)

setupStore(app)

setupRouter(app)

setupI18n(app)

app.mount('#app')
