<template>
  <div class="main">article page</div>
</template>

<script lang="ts" setup>
import graphql from '@/api'

const posts = ref(<any>[])
const getPost = async (id: String) => {
  const res = await graphql.findOnePost({
    id
  })
  const resData = res.data?.findOnePost ?? []
  posts.value = resData
  console.log(resData)
}
onMounted(async () => {
  const route = useRoute()
  await getPost(String(route.query.id))
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
