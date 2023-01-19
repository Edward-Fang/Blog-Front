<template>
  <Icon :icon="icon" class="icon" :class="size" />
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
defineProps({
  icon: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'medium'
  }
})
</script>

<style lang="scss" scoped>
.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  font-size: 1.8em;

  &.large {
    font-size: 2em;
  }

  &.medium {
    font-size: 1.4em;
  }

  &.small {
    font-size: 1em;
  }
}
</style>
