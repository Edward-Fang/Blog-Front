<template>
  <div class="login-container flex j-sa a-center">
    <el-form
      ref="form"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <div class="title-container">
        Edward's Blog
        <el-divider></el-divider>
      </div>

      <el-form-item prop="username">
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="请输入用户名"
          auto-complete="on"
          clearable
        >
          <template #prepend> <icon icon="mdi:account" /> </template
        ></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          type="password"
          placeholder="请输入密码"
          show-password
          auto-complete="on"
          @keyup.enter.native="handler"
          clearable
        >
          <template #prepend>
            <icon icon="mdi:lock-outline" />
          </template>
        </el-input>
      </el-form-item>

      <el-button
        :loading="loading"
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click.native.prevent="handler"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script setup lang="ts">
import axios from '@/api'
import { setToken } from '@/utils/auth'
import { addRoutes } from '@/router'
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router';
const validateUsername = (rule: any, value: string, callback: any) => {
  // if (value?.length < 4) {
  //   callback(new Error('请输入正确的用户名！'))
  // } else {
  callback()
  // }
}
const validatePassword = (rule: any, value: string, callback: any) => {
  // if (value?.length < 6) {
  //   callback(new Error('密码长度不能小于六位!'))
  // } else {
  //   callback()
  // }
  callback()
}

const loginForm = ref({
  username: 'admin',
  password: '123456'
})
const loginRules = ref({
  username: [{ required: true, trigger: 'blur', validator: validateUsername }],
  password: [{ required: true, trigger: 'blur', validator: validatePassword }]
})
const loading = ref(false)

const router = useRouter()
const form = ref()
const handler = () => {
  form.value.validate(async (valid: Boolean) => {
    if (valid) {
      loading.value = true
      const { username, password } = loginForm.value
      const res = await axios.login({ username, password })
      setToken(res.data.token)
      // 登录后添加新的路由
      addRoutes()
      loading.value = false
      router.push('/home')
    }
  })
}
</script>

<style lang="scss" scoped>
.login-container {
  height: 100%;
  width: 100%;
  background: linear-gradient(-45deg, #ee7752, #e73ce7, #23a6d5, #23d5ab);
  background-size: 1000%, 1000%;
  animation: gradient 15s ease infinite;
  .login-form {
    width: 30%;
    padding: 65px 40px 50px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 0 5px rgb(0 0 0 / 30%);
  }

  .title-container {
    color: #222;
    font-size: 26px;
    margin: 0px auto 40px;
    text-align: center;
    font-weight: 500;
  }
}

::v-deep .el-form-item__content {
  line-height: unset;
}
</style>
