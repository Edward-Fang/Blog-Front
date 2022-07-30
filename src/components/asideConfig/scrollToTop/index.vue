<template>
  <div class="scrollToTop-btn flex a-center j-center" @click="scrollToTop">
    <mdi-arrow-up-bold class="v-icon" />
  </div>
</template>

<script setup lang="ts">
window.addEventListener('scroll', () => {
  const scrollToTop = document.querySelector('.scrollToTop-btn')!
  scrollToTop.classList.toggle('active', window.scrollY > 500)
})
const scrollToTop = () => {
  document.documentElement.scrollTop = 0
}
</script>

<style lang="scss" scoped>
.scrollToTop-btn {
  z-index: 9999;
  position: fixed;
  right: 0;
  bottom: 20px;
  width: 45px;
  height: 45px;
  background: var(--second-color);
  color: #fff;
  font-size: var(--small-font-size);
  border-radius: 3px;
  cursor: pointer;
  opacity: 0;
  transition: 0.5s ease;
}

.scrollToTop-btn.active {
  right: 20px;
  pointer-events: all;
  opacity: 1;
}
</style>
