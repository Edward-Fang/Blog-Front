<template>
  <div class="main">article page</div>
</template>

<script lang="ts" setup>
import axios from '@/api'

const post = ref(<any>{})
const getPost = async (id: number) => {
  const res = await axios.getPostById(id)
  const resData = res.data ?? {}
  post.value = resData
  console.log(resData)
}
const route: any = useRoute()
getPost(route.query.id)
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
