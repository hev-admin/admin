<script setup>
import { useSettings } from '@/store'

const settings = useSettings()
const { isDark } = storeToRefs(settings)
const { toggleDark } = settings
</script>

<template>
  <el-button
    text
    circle
    @click="toggleDark()"
  >
    <hev-icon :name="isDark ? 'i-ant-design:sun-filled' : 'i-ant-design:moon-filled'" />
  </el-button>
</template>
