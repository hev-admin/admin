<script setup>
import { useSettings } from '@/store'

const settings = useSettings()
</script>

<template>
  <el-config-provider :locale="settings.elementLocale">
    <router-view />
  </el-config-provider>
</template>
