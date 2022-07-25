<template>
  <ElConfigProvider :locale="zhCn">
    <Header @show="showDialog"></Header>
    <SearchDialog ref="searchDialog"></SearchDialog>
    <div class="page-container">
      <router-view></router-view>
    </div>
    <ScrollToTop></ScrollToTop>
    <ThemeBtn></ThemeBtn>
    <Footer></Footer>
  </ElConfigProvider>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

const searchDialog = ref()
const showDialog = () => {
  searchDialog.value.pop()
}
</script>

<style lang="scss" scoped>
.page-container {
  width: 100%;
  max-width: 1200px;
  margin: 6rem auto;
  padding: 0 45px;
}
</style>
