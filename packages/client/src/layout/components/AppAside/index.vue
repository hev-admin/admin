<script setup>
// import { useSettings } from '@/store'

// const settings = useSettings()
import AppLogo from './components/AppLogo.vue'
import AppMenuControl from './components/AppMenuControl.vue'
import AppMenu from './components/AppMenu.vue'
</script>

<template>
  <div
    w-full
    border-r="solid 1px [var(--el-border-color)]"
    flex="~ col 1"
    justify-between
    overflow-hidden
  >
    <app-logo />
    <app-menu />
    <app-menu-control />
  </div>
</template>
