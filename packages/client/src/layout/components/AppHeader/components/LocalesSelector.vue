<script setup>
import { useStorage } from '@vueuse/core'
import { locales } from '@/locales'

const { locale } = useI18n()

function handleCommand(command) {
  if (command === locale.value)
    return
  const localLocale = useStorage('locale')
  locale.value = command
  localLocale.value = command
}
</script>

<template>
  <el-dropdown
    trigger="click"
    @command="handleCommand"
  >
    <el-button
      text
      circle
      outline="!none"
      focus:ring="!0"
    >
      <hev-icon name="i-ant-design:translation-outlined" />
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="lang in locales"
          :key="lang.key"
          :style="locale === lang.key ? { color: 'var(--el-color-primary)' } : {}"
          :command="lang.key"
        >
          {{ lang.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
