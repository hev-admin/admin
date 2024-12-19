<script setup>
import { useSettings } from '@/store'

const settings = useSettings()
</script>

<template>
  <el-drawer
    v-model="settings.show"
    title="Settings"
    append-to-body
  >
    Settings
  </el-drawer>
</template>
