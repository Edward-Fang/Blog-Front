<template>
  <div class="theme-btn flex a-center j-center" @click="changeTheme">
    <mdi-moon-waning-crescent class="fa-sun" />
    <mdi-moon-full class="fa-moon" />
  </div>
</template>

<script setup lang="ts">
const changeTheme = () => {
  const themeBtn = document.querySelector('.theme-btn')!
  document.body.classList.toggle('dark-theme')
  themeBtn.classList.toggle('sun')

  const getCurrentTheme = () =>
    document.body.classList.contains('dark-theme') ? 'dark' : 'light'
  const getCurrentIcon = () =>
    themeBtn.classList.contains('sun') ? 'sun' : 'moon'

  localStorage.setItem('save-theme', getCurrentTheme())
  localStorage.setItem('save-icon', getCurrentIcon())

  const savedTheme = localStorage.getItem('saved-theme')
  const savedIcon = localStorage.getItem('saved-icon')

  if (savedTheme) {
    document.body.classList[savedTheme === 'dark' ? 'add' : 'remove'](
      'dark-theme'
    )
    themeBtn.classList[savedIcon === 'sun' ? 'add' : 'remove']('sun')
  }
}
</script>

<style lang="scss" scoped>
.theme-btn {
  z-index: 9999;
  position: fixed;
  right: 0;
  top: 100px;
  background: var(--transparent-color-01);
  backdrop-filter: blur(20px);
  width: 50px;
  height: 50px;
  font-size: 1.2em;
  border-radius: 5px;
  box-shadow: var(--box-shadow);
  cursor: pointer;

  .fa-sun {
    display: none;
  }
}

.theme-btn.sun {
  .fa-moon {
    display: none;
  }
  .fa-sun {
    display: block;
  }
}
</style>
