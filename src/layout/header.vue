<template>
  <div class="nav-bar flex j-sb a-center">
    <router-link to="/home" class="logo">Edward's Blog</router-link>
    <div class="navigation flex a-center">
      <el-link :underline="false" @click="showPopup" href="javascript:void(0);">
        <mdi-folder-search class="v-icon medium" />
        <span>搜索</span></el-link
      >
      <router-link to="/home">
        <mdi-home class="v-icon medium" />
        <span>主页</span>
      </router-link>
      <router-link to="/menu">
        <mdi-microsoft-xbox-controller-menu class="v-icon medium" /><span
          >目录</span
        ></router-link
      >
      <router-link to="/time-line">
        <mdi-timeline-clock class="v-icon medium" />
        <span>时间轴</span></router-link
      >
      <router-link to="/amusement">
        <mdi-motion-play class="v-icon medium" /><span>娱乐</span></router-link
      >
      <router-link to="/about-me">
        <mdi-account-box-multiple class="v-icon medium" />
        <span>关于我</span></router-link
      >
      <router-link to="/message-board">
        <mdi-message-text class="v-icon medium" />
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
