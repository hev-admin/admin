<script setup>
const showHandler = ref(false)
</script>

<template>
  <div
    h-full
    flex="~ 1"
  >
    <el-button
      v-if="showHandler"
      text
      h="!full"
      w="!38px"
      rounded="!none"
      border-r="!solid !1px ![var(--el-border-color)]"
    >
      <hev-icon
        name="CaretLeft"
        :size="18"
      />
    </el-button>
    <el-scrollbar
      h-full
      flex-1
    >
      <div
        h="[37px]"
        flex-inline
        items-center
      >
        <slot />
      </div>
    </el-scrollbar>
    <el-button
      v-if="showHandler"
      text
      h="!full"
      w="!38px"
      rounded="!none"
      border-l="!solid !1px ![var(--el-border-color)]"
    >
      <hev-icon
        name="CaretRight"
        :size="18"
      />
    </el-button>
  </div>
</template>
