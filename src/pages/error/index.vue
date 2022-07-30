<template>
  <el-empty>
    <el-button :image-size="250" type="primary" @click="goHome"
      >点击返回主页面</el-button
    >
  </el-empty>
</template>

<script lang="ts" setup>
const router = useRouter()
const goHome = () => {
  router.push('/home')
}
</script>

<style lang="scss" scoped>
.el-empty {
  padding: unset;
  height: 80vh;

  border-radius: 16px;
  box-shadow: var(--box-shadow);
  background-color: rgba(220, 220, 220, 0.4);
}
</style>
