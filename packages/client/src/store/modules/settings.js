import { useDark, useFullscreen, useToggle } from '@vueuse/core'

export const useSettings = defineStore('settings', () => {
  // Layout
  const layout = ref('HorizonLayout')
  const headerHeight = ref(48)

  const changeLayout = (layout) => {
    layout.value = layout
  }

  // App settings
  const show = ref(false)
  const toggleSettings = () => {
    show.value = !show.value
  }

  //  Dark Mode
  const isDark = useDark({
    selector: 'html',
    attribute: 'class',
    valueDark: 'dark',
    valueLight: 'light',
  })
  const toggleDark = useToggle(isDark)

  // Fullscreen
  const fullscreenEl = document.documentElement
  const { toggle: toggleFullscreen, isFullscreen } = useFullscreen(fullscreenEl)

  // Menu Status
  const menuHide = ref(false)
  const menuExpand = ref(true)
  const asideWidth = computed(() => {
    return menuHide.value ? 0 : (menuExpand.value ? 240 : 48)
  })

  function toggleMenuHide() {
    menuHide.value = !menuHide.value
  }

  function toggleMenuExpand() {
    menuExpand.value = !menuExpand.value
  }

  // Content Maximize
  const contentMaximize = ref(false)
  const toggleContentMaximize = () => {
    contentMaximize.value = !contentMaximize.value
  }

  return {
    layout,
    headerHeight,
    changeLayout,
    show,
    toggleSettings,
    isDark,
    toggleDark,
    isFullscreen,
    toggleFullscreen,
    menuHide,
    menuExpand,
    asideWidth,
    toggleMenuHide,
    toggleMenuExpand,
    contentMaximize,
    toggleContentMaximize,
  }
}, {
  persist: {
    key: 'settings',
    storage: localStorage,
    pick: ['layout', 'menuHide', 'menuExpand', 'contentMaximize'],
  },
})
