<template>
  <el-container>
    <el-header>
      <Header @show="showDialog"></Header>
    </el-header>
    <SearchDialog ref="searchDialog"></SearchDialog>
    <slot></slot>
    <el-footer>
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>

<script lang="ts" setup>
const searchDialog = ref()
const showDialog = () => {
  searchDialog.value.pop()
}
</script>

<style lang="scss" scoped>
.el-header {
  z-index: 999;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: unset;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: var(--box-shadow);
  backdrop-filter: blur(5px);

  &.sticky {
    .nav-bar {
      height: 3.5rem;
    }
  }
}

.el-footer {
  padding: unset;
}
</style>
