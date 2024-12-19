<script setup>
import AppSettings from './components/AppSettings.vue'
import { useSettings } from '@/store'
import * as layouts from '@/layout/layouts'

const settings = useSettings()
const { layout } = storeToRefs(settings)
const currentLayout = computed(() => layouts[layout.value])
</script>

<template>
  <component :is="currentLayout">
    <router-view />
  </component>
  <app-settings />
</template>
