<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="管理博客" name="manage">
      <manage />
    </el-tab-pane>
    <el-tab-pane label="创建博客" name="create">
      <create />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
const activeName = ref('manage')

const handleClick = () => {}
</script>
