<template>
  <md-editor v-model="text" />
</template>

<script setup lang="ts">
import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'

const text = ref('Hello Editor!')
</script>

<style lang="scss" scoped>
.md-editor {
  height: 100%;
}
</style>