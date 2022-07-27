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
// import upperCase from 'lodash-es/upperCase'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
// console.log(upperCase('hhh'))
const width = document.body.clientWidth
console.log(width)
</script>
<style lang="scss">
.page-container {
  width: 100%;
  margin: 5rem auto;
  padding: 0 45px;
}

/*=======Media query max-width 1680px=======*/
@media screen and (min-width: 1500px) {
  .page-container {
    max-width: 1200px;
  }
}

/*=======Media query max-width 1920px=======*/
@media screen and (min-width: 1920px) {
  .page-container {
    max-width: 1600px;
  }
}
</style>
