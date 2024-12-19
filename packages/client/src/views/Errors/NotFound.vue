<script setup>
import notFound from '@/assets/images/not_found.svg'

defineOptions({
  name: 'NotFound',
})
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
      :src="notFound"
      alt="404"
    >
    <div
      text="28"
      pb-60
      pt-30
      font-bold
    >
      您访问的页面不存在
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
