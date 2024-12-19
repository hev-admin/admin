<script setup>
import UserAvatar from './components/UserAvatar/index.vue'
import LocalesSelector from './components/LocalesSelector.vue'
import FullScreen from './components/FullScreen.vue'
import DarkMode from './components/DarkMode.vue'
import SettingsDrawer from './components/SettingsDrawer.vue'
import AsideStatus from './components/AsideStatus.vue'
// import { useSettings } from '@/store'

// const settings = useSettings()
</script>

<template>
  <div
    h-full
    flex
    items-center
    justify-between
  >
    <div
      h-full
      flex
      items-center
    >
      <aside-status />
    </div>
    <div
      h-full
      flex
      items-center
    >
      <settings-drawer />
      <dark-mode />
      <full-screen />
      <locales-selector ml="[12px]" />
      <user-avatar ml="[12px]" />
    </div>
  </div>
</template>
