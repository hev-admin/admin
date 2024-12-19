<script setup>
const { t } = useI18n()

const captcha = ref('')
function getCaptcha() {
  axios.get('/api/auth/captcha').then((res) => {
    captcha.value = res.data
  })
}

const inputCaptcha = ref('')
function login() {
  axios.post('/api/auth/login', {
    username: 'admin',
    password: '123456',
    captcha: inputCaptcha.value,
  }).then((res) => {
    console.log(res)
  })
}

const imgUrl = ref('')

function fileChange(e) {
  const file = e.target.files[0]
  const formData = new FormData()
  formData.append('file', file)
  axios.post('/api/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }).then((res) => {
    console.log(res)

    imgUrl.value = res.data.data.url
  })
}
</script>

<template>
  <div>Welcome</div>
  <div>{{ t('test.preset') }}</div>
  <div h="[1200px]">
    <el-button
      type="primary"
      @click="getCaptcha"
    >
      captcha
    </el-button>
    <div v-html="captcha" />
    <el-input v-model="inputCaptcha" />
    <el-button
      type="primary"
      @click="login"
    >
      login
    </el-button>

    <input
      type="file"
      @change="fileChange"
    >
    <img :src="imgUrl">
  </div>
</template>
