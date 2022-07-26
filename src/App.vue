<template>
  <ElConfigProvider :locale="zhCn">
    <Layout>
      <div class="page-container">
        <router-view></router-view>
      </div>
      <ScrollToTop></ScrollToTop>
      <ThemeBtn></ThemeBtn>
    </Layout>
  </ElConfigProvider>
</template>

<script setup lang="ts">
import upperCase from 'lodash-es/upperCase'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
console.log(upperCase('hhh'));
</script>
<style lang="scss" scoped>
.page-container {
  width: 100%;
  max-width: 1500px;
  margin: 6rem auto;
  padding: 0 45px;
}
</style>
