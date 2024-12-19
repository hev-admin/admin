<script setup>
defineProps({
  tabName: {
    type: String,
    required: true,
  },
  current: {
    type: Boolean,
    default: false,
  },
  fixed: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div
    h-full
    min-w="[106px]"
    pl="[6px]"
    pt="[4px]"
    :pb="current ? '' : '[4px]'"
  >
    <div
      :rounded="current ? '' : '[5px]'"
      :rounded-t="current ? '[5px]' : ''"
      :bg="current ? '[var(--el-border-color)]' : 'transparent'"
      hover:bg="[var(--el-border-color)]"
      transition-all="200"
      text="[14px]"
      relative
      h-full
      w-full
      flex
      cursor-pointer
      items-center
      justify-center
      line-height-1
      pr="[28px]"
      pl="[20px]"
    >
      <span>{{ tabName }}</span>
      <hev-icon
        absolute
        bottom-0
        right="[7px]"
        top-0
        m-auto
        opacity-60
        hover:opacity-100
        :name="fixed ? 'i-ant-design:pushpin-outlined' : 'Close'"
        :size="14"
      />
    </div>
  </div>
</template>
