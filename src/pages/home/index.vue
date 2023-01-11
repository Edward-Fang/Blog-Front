<template>
  <div class="main flex flex-column">
    <div
      class="article flex"
      v-for="(item, index) in posts"
      :key="index"
      @click="goPost(item.id)"
    >
      <div class="left">
        <a href="#"><img src="src/assets/images/avatar.jpg" alt="" /></a>
      </div>
      <div class="right">
        <a href="#"
          ><h2>{{ item.title }}</h2></a
        >
        <h5>发表于{{ item.createAt }}</h5>
        <h4>
          {{ item.introduction  }}
        </h4>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from '@/api'

const posts = ref(<any>[
  // {
  //   id: 1,
  //   title: 1,
  //   createAt: 1,
  //   introduction: 1
  // },
  // {
  //   id: 1,
  //   title: 1,
  //   createAt: 1,
  //   introduction: 1
  // },
  // {
  //   id: 1,
  //   title: 1,
  //   createAt: 1,
  //   introduction: 1
  // }
])
const getPosts = async (limit: number, offset: number) => {
  const res = await axios.getPosts({limit, offset})
  posts.value = res.data ?? []
}
onMounted(() => {
  getPosts(0, 0)
})

const router = useRouter()
const goPost = (id: number) => {
  router.push({ path: '/post', query: { id } })
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;

  .article {
    max-width: 100%;
    height: 250px;
    margin-bottom: 30px;
    border-radius: 16px;
    box-shadow: var(--box-shadow);
    background-color: var(--card-bg-color);
    overflow: hidden;

    .left {
      width: 35%;
      height: 100%;
      aspect-ratio: 1/0.5;
      overflow: hidden;

      img {
        height: 100%;
        cursor: pointer;
        transition: all 0.6s;
      }
    }

    .left:hover {
      img {
        transform: scale(1.1);
      }
    }

    .right {
      max-width: 65%;
      padding: 65px 80px;
      margin: auto;

      a {
        color: var(--first-color);
        h2 {
          line-height: 45px;
          font-weight: 500;
        }
      }

      a:hover {
        color: var(--hover-color);
      }

      h5 {
        line-height: 30px;
        font-weight: 400;
      }

      h4 {
        font-weight: 400;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
      }
    }
  }
}

@media screen and (max-width: 1070px) {
  .main {
    width: 100%;
  }
}
</style>
