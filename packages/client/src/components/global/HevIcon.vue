<script setup>
import * as ElementPlusIcons from '@element-plus/icons-vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    default: 16,
  },
  color: {
    type: String,
    default: 'currentColor',
  },
})

const iconNames = Object.keys(ElementPlusIcons)

const iconType = computed(() => {
  if (iconNames.includes(props.name)) {
    return 'ep'
  }
  return 'iconify'
})
</script>

<template>
  <el-icon
    v-if="iconType === 'ep'"
    h="[1em]"
    w="[1em]"
    inline-block
    vertical-align="middle"
    :size="size"
    :color="color"
  >
    <component :is="ElementPlusIcons[name]">
      <slot />
    </component>
  </el-icon>
  <i
    v-else
    :style="{ fontSize: `${size}px` }"
    :class="name"
  >
    <slot />
  </i>
</template>
