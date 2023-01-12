<template>
  <div class="config-container">
    <div class="btn flex a-center j-center" @click="hideAside">
      <mdi-arrow-right-circle v-if="modelValue"/>
      <mdi-arrow-left-circle  v-else/>
    </div>
    <div class="btn flex a-center j-center" @click="changeTheme">
      <mdi-white-balance-sunny v-if="sun" />
      <mdi-weather-night v-else />
    </div>
    <div class="btn flex a-center j-center" @click="scrollToTop">
      <mdi-arrow-up-circle />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: true
  }
})
const emits = defineEmits(['update:modelValue'])

const hideAside = () => {
  emits('update:modelValue', !props.modelValue)
}

const scrollToTop = () => {
  document.documentElement.scrollTop = 0
}

const sun = ref(false)
const getCurrentTheme = () =>
  document.body.classList.contains('dark-theme') ? 'dark' : 'light'

const changeTheme = () => {
  document.body.classList.toggle('dark-theme')
  localStorage.setItem('save-theme', getCurrentTheme())
  const savedTheme = localStorage.getItem('save-theme')
  if (savedTheme) {
    document.body.classList[savedTheme === 'dark' ? 'add' : 'remove']('dark-theme')
  }
  sun.value = savedTheme === 'dark'
}
</script>

<style lang="scss" scoped>
.config-container {
  z-index: 9999;
  position: fixed;
  right: 30px;
  bottom: 45px;
  width: 45px;
  cursor: pointer;

  .btn {
    height: 45px;
    border-radius: 8px;
    cursor: pointer;
    background: var(--transparent-color-01);
  }
}
</style>
