<template>
  <div class="config-container">
    <div class="theme-btn flex a-center j-center" @click="changeTheme">
      <mdi-moon-waning-crescent class="fa-sun" />
      <mdi-moon-full class="fa-moon" />
    </div>
    <div class="scrollToTop-btn flex a-center j-center" @click="scrollToTop">
      <mdi-arrow-up-bold class="v-icon" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const scrollToTop = () => {
  document.documentElement.scrollTop = 0
}

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

    .fa-sun {
      display: none;
    }

    .sun {
      .fa-moon {
        display: none;
      }
      .fa-sun {
        display: block;
      }
    }
  }

  .scrollToTop-btn {
    height: 45px;
    border-radius: 8px;
    cursor: pointer;
    background: var(--transparent-color-01);
  }
}
</style>
