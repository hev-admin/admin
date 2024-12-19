<script setup>
import forbidden from '@/assets/images/forbidden.svg'
</script>

<template>
  <div
    flex="~ col"
    h-full
    w-full
    items-center
    pt-80
  >
    <img
      w-240
      :src="forbidden"
      alt="403"
    >
    <div
      text="28"
      pb-60
      pt-30
      font-bold
    >
      禁止访问 请联系管理员
    </div>
    <router-link
      v-slot="{ navigate }"
      to="/"
      :replace="true"
      custom
    >
      <el-button
        type="text"
        plain
        @click="navigate"
      >
        返回首页
      </el-button>
    </router-link>
  </div>
</template>
