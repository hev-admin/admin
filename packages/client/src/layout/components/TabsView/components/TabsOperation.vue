<script setup>
import { useSettings } from '@/store'

const settings = useSettings()
const { toggleContentMaximize } = settings
const { contentMaximize } = storeToRefs(settings)
</script>

<template>
  <div
    h-full
    flex
  >
    <el-dropdown trigger="click">
      <el-button
        text
        h="!full"
        w="!38px"
        rounded="!none"
        border-l="!solid !1px ![var(--el-border-color)]"
      >
        <hev-icon
          :size="18"
          name="ArrowDown"
        />
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <hev-icon name="i-ep:close" />
            关闭
          </el-dropdown-item>
          <el-dropdown-item>
            <hev-icon name="i-ant-design:pushpin-outlined" />
            固定
          </el-dropdown-item>
          <el-dropdown-item>
            <hev-icon name="i-ep:refresh-right" />
            重新加载
          </el-dropdown-item>
          <el-dropdown-item>
            <hev-icon name="i-material-symbols:open-in-new-rounded" />
            在新窗口打开
          </el-dropdown-item>
          <el-dropdown-item divided>
            <hev-icon name="i-ep:back" />
            关闭左侧标签页
          </el-dropdown-item>
          <el-dropdown-item>
            <hev-icon name="i-ep:right" />
            关闭右侧标签页
          </el-dropdown-item>
          <el-dropdown-item>
            <hev-icon name="i-fluent:arrow-fit-24-regular" />
            关闭两侧标签页
          </el-dropdown-item>
          <el-dropdown-item>
            <hev-icon name="i-fluent:arrow-swap-24-regular" />
            关闭所有标签页
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-button
      text
      h="!full"
      w="!38px"
      rounded="!none"
      border-l="!solid !1px ![var(--el-border-color)]"
      @click="toggleContentMaximize"
    >
      <hev-icon
        :size="18"
        :name="contentMaximize ? 'i-ant-design:fullscreen-exit-outlined' : 'i-ant-design:fullscreen-outlined'"
      />
    </el-button>
  </div>
</template>
