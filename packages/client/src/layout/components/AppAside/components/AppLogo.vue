<script setup>
import { useSettings } from '@/store'

const settings = useSettings()
const { headerHeight, menuHide, menuExpand } = storeToRefs(settings)
</script>

<template>
  <div
    w="[var(--el-aside-width)]"
    flex
    items-center
    :style="{ height: `${headerHeight}px` }"
    px="[10px]"
  >
    <hev-icon
      name="i-custom:logo"
      :size="24"
    />
    <h1
      v-show="menuExpand && !menuHide"
      pl="[16px]"
    >
      Hev Admin
    </h1>
  </div>
</template>
