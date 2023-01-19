<template>
  <ElConfigProvider :locale="zhCn">
    <router-view />

    <!-- <Aside v-show="showAside" /> -->

    <AsideConfig v-model="showAside" />
  </ElConfigProvider>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

const showAside = ref(true)
</script>
