<template>
  <div class="main flex flex-column">
    <div class="article flex" v-for="(item, index) in 4">
      <div class="left">
        <a href="#"><img src="src/assets/images/avatar.jpg" alt="" /></a>
      </div>
      <div class="right">
        <a href="#"><h2>Butterfly 安裝文檔(一) 快速開始</h2></a>
        <h5>置頂|發表於2020-5-28|Docs文檔|0 條評論</h5>
        <h4>
          📖 本教程更新於 2022 年 05 月📖 本教程更新於 2022 年 05 月 📖
          本教程更新於 2022 年 05 月📖 本教程更新於 2022 年 05 月
        </h4>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.main {
  width: 75%;
  min-width: 500px;

  .article {
    max-width: 100%;
    height: 250px;
    margin-bottom: 30px;
    border-radius: 16px;
    box-shadow: var(--box-shadow);
    background-color: var(--card-bg-color);
    overflow: hidden;

    .left {
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
      width: 100%;
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
</style>
