<script setup>
import { useSettings } from '@/store'

const settings = useSettings()
const { toggleSettings } = settings
</script>

<template>
  <el-button
    text
    circle
    @click="toggleSettings"
  >
    <hev-icon name="i-ant-design:setting-outlined" />
  </el-button>
</template>
