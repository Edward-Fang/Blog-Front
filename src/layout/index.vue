<template>
  <el-container>
    <el-header>
      <Header @show="showDialog" />
    </el-header>
    <SearchDialog ref="searchDialog"></SearchDialog>
    <section class="page-container flex">
      <router-view v-slot="{ Component }">
        <transition name="fade-transform" mode="out-in">
          <component :is="Component"/>
        </transition>
      </router-view>
    </section>
    <el-footer>
      <Footer />
    </el-footer>
  </el-container>
</template>

<script lang="ts" setup>
const searchDialog = ref()
const showDialog = () => {
  searchDialog.value.pop()
}

const ifShow = ref(true)
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

.page-container {
  width: 100%;
  margin: 7rem auto;
  padding: 0 45px;
}

.el-footer {
  padding: unset;
}

/*=======Media query max-width 1070px=======*/
@media screen and (max-width: 950px) {
  .page-container {
    // max-width: 1200px;
    display: flex;
    flex-direction: column;
  }
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
