<script setup>
import TabsView from './TabsView/index.vue'
// import { useSettings } from '@/store'

const scrollbarRef = ref(null)
// const settings = useSettings()

// const { headerHeight } = storeToRefs(settings)
</script>

<template>
  <div
    flex="~ col"
    h-full
    w-full
  >
    <tabs-view />
    <el-scrollbar
      ref="scrollbarRef"
      class="main-content"
    >
      <slot />
      <el-backtop
        target=".main-content .el-scrollbar__wrap"
        :right="30"
        :bottom="50"
      />
    </el-scrollbar>
  </div>
</template>
