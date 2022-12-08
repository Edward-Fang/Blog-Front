<template>
  <div class="config-container">
    <div class="theme-btn flex a-center j-center" @click="changeTheme">
      <mdi-moon-waning-crescent v-if="sun" />
      <mdi-moon-full v-else />
    </div>
    <div class="scrollToTop-btn flex a-center j-center" @click="scrollToTop">
      <mdi-arrow-up-bold class="v-icon" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const sun = ref(false)
const scrollToTop = () => {
  document.documentElement.scrollTop = 0
}
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
  height: 90px;
  cursor: pointer;

  .theme-btn {
    height: 45px;
    border-radius: 8px;
    cursor: pointer;
    background: var(--transparent-color-01);
  }

  .scrollToTop-btn {
    height: 45px;
    border-radius: 8px;
    cursor: pointer;
    background: var(--transparent-color-01);
  }
}
</style>
