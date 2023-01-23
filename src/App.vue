<template>
  <ElConfigProvider :locale="zhCn">
    <router-view />
    <AsideConfig />
  </ElConfigProvider>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

</script>
