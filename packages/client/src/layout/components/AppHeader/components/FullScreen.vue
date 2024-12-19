<script setup>
import { useSettings } from '@/store'

const settings = useSettings()
const { toggleFullscreen } = settings
const { isFullscreen } = storeToRefs(settings)
</script>

<template>
  <el-button
    text
    circle
    @click="toggleFullscreen()"
  >
    <hev-icon :name="isFullscreen ? 'i-ant-design:compress-outlined' : 'i-ant-design:expand-outlined'" />
  </el-button>
</template>
