<template>
  <el-container>
    <el-header>
      <Header @show="showDialog" />
    </el-header>
    <SearchDialog ref="searchDialog"></SearchDialog>
    <section class="page-container flex">
      <router-view v-slot="{ Component }">
        <transition name="fade-transform" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
      <Aside v-show="hide" />
    </section>
    <el-footer>
      <Footer />
    </el-footer>
  </el-container>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/modules/app'
const appStore: any = useAppStore()
const hide = ref(true)
appStore.$subscribe((mutation: any, state: any) => {
  /*
  * mutation主要包含三个属性值：
  *   events：当前state改变的具体数据，包括改变前的值和改变后的值等等数据
  *   storeId：是当前store的id
  *   type：用于记录这次数据变化是通过什么途径，主要有三个分别是
  *     direct：通过 action 变化的
  *     patch object：通过 $patch 传递对象的方式改变的
  *     patch function：通过 $patch 传递函数的方式改变的
  *
  * */
  hide.value = state.showAside
})

const searchDialog = ref()
const showDialog = () => {
  searchDialog.value.pop()
}
</script>

<style lang="scss" scoped>
.page-container {
  width: 100%;
  margin: 7rem auto;
  padding: 0 45px;
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
    max-width: 1300px;
  }
}

/*=======Media query max-width 1920px=======*/
@media screen and (min-width: 1920px) {
  .page-container {
    max-width: 1600px;
  }
}
</style>
