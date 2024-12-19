<script setup>
import { useSettings } from '@/store'

const settings = useSettings()
const { toggleMenuHide } = settings
</script>

<template>
  <el-button
    text
    px="![8px]"
    @click="toggleMenuHide"
  >
    <hev-icon name="i-ant-design:menu-outlined" />
  </el-button>
</template>
