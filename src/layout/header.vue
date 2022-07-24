<template>
  <div class="header">
    <div class="nav-bar flex j-sb a-center">
      <router-link to="/home" class="logo">Edward's Blog</router-link>
      <div class="navigation">
        <div class="nav-items">
          <div class="nav-close-btn"></div>
          <a @click="showPopup" href="javascript:void(0);">搜索</a>
          <router-link to="/home">主页</router-link>
          <router-link to="/menu">目录</router-link>
          <router-link to="/time-line">时间轴</router-link>
          <router-link to="/article">娱乐</router-link>
          <router-link to="/about-me">关于我</router-link>
          <router-link to="/message-board">留言板</router-link>
        </div>
      </div>
      <div class="nav-menu-btn"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header')!
  header.classList.toggle('sticky', window.scrollY > 0)
})

const emit = defineEmits(['show'])
const showPopup = () => {
  emit('show')
}
</script>

<style lang="scss" scoped>
.header {
  z-index: 999;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: var(--box-shadow);
  backdrop-filter: blur(5px);
  transition: 0.6x ease;

  .nav-bar {
    height: 4.2rem;
    padding: 0 20px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    transition: 0.6x ease;

    .logo {
      color: var(--first-color);
      font-size: 1.3rem;
      font-weight: 600;
    }

    .nav-menu-btn {
      display: none;
    }
  }
}

.header.sticky {
  .nav-bar {
    height: 3.5rem;
  }
}

.nav-items {
  a {
    color: var(--first-color);
    font-size: var(--normal-font-size);
    font-weight: 600;
  }
  a.active {
    color: var(--second-color);
  }

  a:not(:last-child) {
    margin-right: 40px;
  }

  a:hover {
    color: var(--second-color);
  }
}
</style>
