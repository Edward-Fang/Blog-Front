<template>
  <div class="main">article page</div>
</template>

<script lang="ts" setup>
onMounted(() => {
  const route = useRoute()
  console.log(route.query.id)
})
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 900px;
  padding: 50px;
  margin-bottom: 30px;
  border-radius: 16px;
  box-shadow: var(--box-shadow);
  background-color: var(--card-bg-color);
  overflow: hidden;
}
</style>
