<template>
  <div class="footer flex j-center a-center flex-column">
    <div class="footer-container flex j-sb">
      <div class="about">
        <h2>Edward</h2>
        <p>Front-end Developer</p>
        <a href="#about">About Me</a>
      </div>
      <div class="hr"></div>
      <div class="info flex a-center flex-column">
        <h3>More</h3>
        <ul>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <h3 class="hr"></h3>
      <div class="follow flex a-center flex-column">
        <h3>Follow</h3>
        <ul>
          <li>
            <a><mdi-moon-full class="v-icon.small" /></a>
          </li>
          <li>
            <a><mdi-moon-full class="v-icon.small" /></a>
          </li>
          <li>
            <a><mdi-moon-full class="v-icon.small" /></a>
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
  color: #fff;
  background-color: var(--second-color);

  a {
    color: #fff;
  }
}
.footer-container {
  width: 100%;
  max-width: 1150px;

  .about {
    h2 {
      font-size: 3em;
      font-weight: 600;
      background: linear-gradient(to top, transparent 0%, #fff 50%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      opacity: 0.8;
    }

    p {
      font-size: var(--normal-font-size);
      font-weight: 300;
      margin-bottom: 30px;
    }
  }

  .info {
    h3 {
      font-size: 1.1em;
      font-weight: 500;
      margin-bottom: 30px;
    }

    ul {
      display: flex;
    }

    a {
      margin: 20px;
    }
  }

  .follow {
    h3 {
      font-size: 1.1em;
      font-weight: 500;
      margin-bottom: 30px;
    }

    ul {
      display: flex;
    }

    a {
      font-size: 1.5em;
      margin: 15px;
    }
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
