<template>
  <div class="root">
    <div class="slideshow">
      <ul class="slide">
        <li class="slide__item">
          <img class="slide__img" src="../assets/ulnar.png" />
          <span class="slide__text">Kitchen Cabinet</span>
        </li>
      </ul>
    </div>
    <div class="primary-menu">
      <ul class="menu">
        <li class="menu__item">
          <router-link class="menu__link" to="/">Home</router-link>
        </li>
        <li class="menu__item">
          <router-link class="menu__link" to="/about">About Us</router-link>
        </li>
        <li class="menu__item">
          <router-link class="menu__link" to="/pages">Pages</router-link>
        </li>
        <li class="menu__item">
          <router-link class="menu__link" to="/addons">Addons</router-link>
        </li>
        <li class="menu__item">
          <router-link class="menu__link" to="/blog">Blog</router-link>
        </li>
        <li class="menu__item">
          <router-link class="menu__link" to="/portfolio">Portfolio</router-link>
        </li>
        <li class="menu__item">
          <router-link class="menu__link" to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>
    <img class="liner" src="../assets/liner.png" />
  </div>
</template>

<script>
export default {
  name: 'header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slide {
  list-style: none;
  padding: 0;
  margin: 0;
}

.slide__item {
  background-color: #000;
  position: relative;
}

.slide__img {
  display: block;
  opacity: .5;
  object-fit: cover;
  width: 100%;
  height: 540px;
}

.slide__text {
  color: #fff;
  border: .15em solid #fff;
  font-size: 3em;
  text-transform: uppercase;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 1em;
  transform: translate(-50%, -50%);
}

.liner {
  display: block;
  width: 100%;
  height: 10px;
  object-fit: cover;
}

.primary-menu {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}

.menu {
  display: flex;
  justify-content: center;
  letter-spacing: 0.05em;
  list-style: none;
  padding: 0;
  margin: 2em 0;
}

.menu__item {
  color: #fff;
  font-weight: bold;
  font-size: 1.25em;
  padding: .25em;
  margin: 0 .25em;
}

.menu__link {
  color: #fff;
  text-decoration: none;
}

.menu__link:hover {
  color: #328ce4;
}
</style>
