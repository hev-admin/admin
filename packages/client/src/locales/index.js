import elementZh from 'element-plus/es/locale/lang/zh-cn'
import elementEn from 'element-plus/es/locale/lang/en'
import { useStorage } from '@vueuse/core'
import zhCN from './zhCN.json'
import enUS from './enUS.json'

export const locales = [
  { key: 'zhCN', label: '简体中文' },
  { key: 'enUS', label: 'English' },
]

const localLocale = useStorage('locale')

if (!localLocale.value) {
  localLocale.value = 'zhCN'
}

const i18n = createI18n({
  Legacy: false,
  locale: localLocale.value,
  messages: {
    zhCN: { ...zhCN, el: elementZh },
    enUS: { ...enUS, el: elementEn },
  },
})

export function setupI18n(app) {
  app.use(i18n)
}

export default i18n
