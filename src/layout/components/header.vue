<template>
  <div class="nav-bar flex j-sb a-center">
    <router-link to="/home" class="logo">Edward's Blog</router-link>
    <div class="navigation flex a-center">
      <el-link :underline="false" @click="showPopup" href="javascript:void(0);">
        <icon icon="mdi:folder-search" size="medium" />
        <span>搜索</span></el-link
      >
      <template v-for="item in allRoutes">
        <template v-if="item.meta!.show">
          <router-link :to="item.path">
            <icon :icon="item.meta!.icon" size="medium" />
            <span>{{ item.meta!.name }}</span>
          </router-link>
        </template>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['show'])

const allRoutes = useRouter().getRoutes()

window.addEventListener('scroll', () => {
  const header = document.querySelector('.el-header')!
  header.classList.toggle('sticky', window.scrollY > 0)
})

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
