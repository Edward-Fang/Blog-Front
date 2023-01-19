<template>
  <div class="footer flex j-center a-center flex-column">
    <div class="footer-container flex j-sb">
      <div class="about">
        <h2>Edward</h2>
        <p>Front-end Developer</p>
        <router-link to="aboutme">About Me</router-link>
      </div>
      <div class="hr"></div>
      <div class="info flex a-center flex-column">
        <h3>More</h3>
        <ul>
          <li><router-link to="home">主页</router-link></li>
          <li><router-link to="menu">目录</router-link></li>
          <li><router-link to="timeline">时间轴</router-link></li>
          <li><router-link to="amusement">娱乐</router-link></li>
          <li><router-link to="aboutme">关于我</router-link></li>
          <li><router-link to="messageboard">留言板</router-link></li>
        </ul>
      </div>
      <h3 class="hr"></h3>
      <div class="follow flex a-center flex-column">
        <h3>Follow</h3>
        <ul>
          <li>
            <el-link :underline="false"
              ><icon icon="mdi:github" size="small"
            /></el-link>
          </li>
          <li>
            <el-link :underline="false"
              ><icon icon="mdi:qqchat" size="small"
            /></el-link>
          </li>
          <li>
            <el-link :underline="false"
              ><icon icon="mdi:wechat" size="small"
            /></el-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-copyright">
      <p>© 2022 by Edward. All rights reserved.</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  margin-top: 50px;
  padding: 2rem;
  color: var(--first-color);
  background-color: var(--second-color);

  a {
    color: var(--first-color);
  }
}
.footer-container {
  width: 100%;
  max-width: 1150px;

  .about {
    h2 {
      font-size: 3em;
      font-weight: 500;
      background: linear-gradient(to top, transparent 0%, #fff 50%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: var(--first-color);
    }

    p {
      font-size: var(--normal-font-size);
      font-weight: 300;
      margin-bottom: 30px;
    }
  }

  .info {
    a {
      margin: 20px;
    }
  }

  .follow {
    a {
      font-size: 1.5em;
      margin: 15px;
    }
  }

  h3 {
    font-size: 1.1em;
    font-weight: 600;
    margin-bottom: 30px;
  }

  ul {
    display: flex;
  }

  ul,
  ol {
    list-style: none;
  }
}

.footer-copyright {
  p {
    font-size: var(--normal-font-size);
    font-weight: 300;
    margin-top: 50px;
  }
}
</style>
