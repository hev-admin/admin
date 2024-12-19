<script setup>
import AppHeader from '../components/AppHeader/index.vue'
import AppMain from '../components/AppMain.vue'
import AppAside from '../components/AppAside/index.vue'
import { useSettings } from '@/store'

const settings = useSettings()
const { headerHeight, asideWidth, contentMaximize } = storeToRefs(settings)
</script>

<template>
  <el-container
    h-full
    w-full
  >
    <el-aside
      :width="contentMaximize ? '0px' : `${asideWidth}px`"
      transition-width="200"
      flex
    >
      <app-aside />
    </el-aside>
    <el-container
      h-screen
      flex="col"
    >
      <el-header
        :height="contentMaximize ? '0px' : `${headerHeight}px`"
        px="![10px]"
        border-b="solid 1px [var(--el-border-color)]"
        overflow-hidden
        transition-height="200"
      >
        <app-header />
      </el-header>
      <el-main
        p="!0"
      >
        <app-main>
          <router-view />
        </app-main>
      </el-main>
    </el-container>
  </el-container>
</template>
