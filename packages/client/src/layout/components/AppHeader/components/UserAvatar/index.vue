<script setup>
import { UserFilled } from '@element-plus/icons-vue'
import UserShortProfile from './UserShortProfile.vue'
import { useUser } from '@/store'

const user = useUser()
const avatar = ref('')

onMounted(() => {
  avatar.value = user?.info?.avatar
})
</script>

<template>
  <el-dropdown>
    <el-button
      text
      circle
      outline="!none"
    >
      <el-avatar
        :size="24"
        :src="avatar"
        :icon="UserFilled"
        cursor-pointer
      />
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <user-short-profile />
        <el-dropdown-item
          divided
        >
          <hev-icon name="i-ant-design:file-text-outlined" />
          <span>文档</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
