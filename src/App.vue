<template>
  <ElConfigProvider :locale="zhCn">
    <Layout>
      <router-view></router-view>
      <template v-slot:aside>
        <Aside v-show="showAside"/>
      </template>
    </Layout>
    <AsideConfig v-model="showAside"/>
  </ElConfigProvider>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

const showAside = ref(true)
</script>