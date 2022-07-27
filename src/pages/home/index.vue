<template>
  <div class="home-container flex j-sb">
    <Main></Main>
    <Aside></Aside>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@media screen and (max-width: 1070px) {
  .home-container {
    flex-direction: column;
  }
}
</style>
