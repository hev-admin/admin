<script setup>
// import { useSettings, useUser } from '@/store'
import { useSettings } from '@/store'

const router = useRouter()
const settings = useSettings()
// const user = useUser()
// const { headerHeight, menuHide, menuExpand } = storeToRefs(settings)
const { headerHeight } = storeToRefs(settings)

console.log(router.getRoutes().filter(route => route?.meta?.menu))
</script>

<template>
  <div
    :max-h="[`calc(100%-${headerHeight * 2}px)`]"
    w="[var(--el-aside-width)]"
    flex="~ col 1"
    items-center
    :style="{ height: `${headerHeight}px` }"
  >
    <el-scrollbar
      h-full
      w-full
    >
      <el-menu />
    </el-scrollbar>
  </div>
</template>
