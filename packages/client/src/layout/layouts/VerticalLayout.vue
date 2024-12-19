<script setup>
import AppHeader from '../components/AppHeader/index.vue'
import AppMain from '../components/AppMain.vue'
import AppAside from '../components/AppAside/index.vue'
import { useSettings } from '@/store'

const settings = useSettings()
const { headerHeight, asideWidth } = storeToRefs(settings)
</script>

<template>
  <el-container
    h-full
    w-full
  >
    <el-header
      :height="`${headerHeight}px`"
      px="![10px]"
      border-b="solid 1px [var(--el-border-color)]"
    >
      <app-header />
    </el-header>
    <el-container>
      <el-aside
        :width="`${asideWidth}px`"
        transition-width="200"
        flex
      >
        <app-aside />
      </el-aside>
      <el-main p="!0">
        <app-main>
          <router-view />
        </app-main>
      </el-main>
    </el-container>
  </el-container>
</template>
