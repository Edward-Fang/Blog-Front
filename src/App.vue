<template>
  <ElConfigProvider :locale="zhCn">
    <Layout>
      <router-view></router-view>
      <AsideConfig />
    </Layout>
  </ElConfigProvider>
</template>

<script setup lang="ts">
// import upperCase from 'lodash-es/upperCase'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
// console.log(upperCase('hhh'))
</script>
<style lang="scss"></style>
