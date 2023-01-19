<template>
  <div class="nav-bar flex j-sb a-center">
    <router-link to="/home" class="logo">Edward's Blog</router-link>
    <div class="navigation flex a-center">
      <el-link :underline="false" @click="showPopup" href="javascript:void(0);">
        <icon icon="mdi:folder-search" size="medium" />
        <span>搜索</span></el-link
      >
      <router-link to="/home">
        <icon icon="mdi:home" size="medium" />
        <span>主页</span>
      </router-link>
      <router-link to="/menu">
        <icon icon="mdi:microsoft-xbox-controller-menu" size="medium" />
        <span>目录</span></router-link
      >
      <router-link to="/timeline">
        <icon icon="mdi:timeline-clock" size="medium" />
        <span>时间轴</span></router-link
      >
      <router-link to="/amusement">
        <icon icon="mdi:motion-play" size="medium" />
        <span>娱乐</span></router-link
      >
      <router-link to="/aboutme">
        <icon icon="mdi:account-box-multiple" size="medium" />
        <span>关于我</span></router-link
      >
      <router-link to="/messageboard">
        <icon icon="mdi:message-text" size="medium" />
        <span>留言板</span></router-link
      >
    </div>
  </div>
</template>

<script setup lang="ts">
window.addEventListener('scroll', () => {
  const header = document.querySelector('.el-header')!
  header.classList.toggle('sticky', window.scrollY > 0)
})

const emit = defineEmits(['show'])
const showPopup = () => {
  emit('show')
}
</script>

<style lang="scss" scoped>
.nav-bar {
  height: 4.2rem;
  position: relative;
  margin-left: auto;
  margin-right: auto;

  .logo {
    color: var(--first-color);
    font-size: 1.3rem;
    font-weight: 600;
  }

  .navigation {
    a {
      color: var(--first-color);
      font-size: var(--normal-font-size);
      font-weight: 600;
      display: inline-flex;
      align-items: center;

      span {
        font-size: 1.1em;
      }
    }
    a.active {
      color: var(--second-color);
    }

    a:not(:last-child) {
      margin-right: 35px;
    }

    a:hover {
      color: var(--second-color);
    }
  }
}
</style>
