<script setup>
import { useSettings } from '@/store'

const settings = useSettings()
const { toggleMenuExpand } = settings
const { headerHeight, menuExpand } = storeToRefs(settings)
</script>

<template>
  <div
    w="[var(--el-aside-width)]"
    flex
    items-center
    :style="{ height: `${headerHeight}px` }"
    px="[10px]"
  >
    <el-button
      text
      h="![24px]"
      p="![6px]"
      @click="toggleMenuExpand"
    >
      <hev-icon
        :name="menuExpand ? 'i-ant-design:vertical-right-outlined' : 'i-ant-design:vertical-left-outlined'"
        :size="12"
      />
    </el-button>
  </div>
</template>
