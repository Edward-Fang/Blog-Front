<template>
  <div class="aside">
    <div class="aside-item flex a-center flex-column">
      <div class="avatar">
        <a href="#">
          <img src="src/assets/images/avatar.jpg" alt="" />
        </a>
      </div>
      <div class="message flex flex-column">
        <h5>Edward</h5>
        <h6>前端学习者</h6>
        <span>骑行、电影</span>
      </div>
      <div class="contact flex j-sa">
        <el-link href="#"><mdi-folder-search class="v-icon medium" /></el-link>
        <el-link href="#"><mdi-folder-search class="v-icon medium" /></el-link>
        <el-link href="#"><mdi-folder-search class="v-icon medium" /></el-link>
      </div>
    </div>
    <div class="aside-item"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.aside {
  max-width: 25%;

  .aside-item {
    min-width: 250px;
    padding: 30px 50px;
    margin-bottom: 30px;
    background-color: var(--card-bg-color);
    border-radius: 10px;
    box-shadow: var(--box-shadow);

    .avatar {
      width: 100px;
      margin-bottom: 30px;

      img {
        width: 100%;
        aspect-ratio: 1/1;
        border-radius: 50%;
        transition: all 0.4s linear;
      }

      img:hover {
        transform: rotate(360deg);
      }
    }

    .message {
      text-align: center;
      h5 {
        margin-bottom: 10px;
        font-size: var(--max-font-size);
        font-weight: 500;
      }
      h6 {
        margin-bottom: 10px;
        font-size: var(--large-font-size);
        font-weight: 500;
      }

      span {
        margin-bottom: 20px;
        font-size: large;
      }
    }

    .contact {
      width: 70%;
      font-size: larger;
    }
  }
}
</style>
