<template>
  <div class="aside flex flex-column">
    <div class="aside-item flex-column">
      <div class="avatar">
        <a href="#">
          <img src="src/assets/images/avatar.jpg" alt="" />
        </a>
      </div>
      <div class="message flex-column">
        <h5>Edward</h5>
        <h6>前端学习者</h6>
        <span>骑行、电影</span>
      </div>
      <div class="contact">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
      </div>
    </div>
    <div class="aside-item flex-column">
      <div class="avatar">
        <img src="src/assets/images/avatar.jpg" alt="" />
      </div>
      <div class="message flex-column">
        <h5>Edward</h5>
        <h6>前端学习者</h6>
        <span>骑行、电影</span>
      </div>
      <div class="contact flex j-sb a-center">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.aside {
  min-width: 25%;
  padding: 0 2.5%;

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
