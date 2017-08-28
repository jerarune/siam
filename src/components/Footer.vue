<template>
  <div class="root">
    <div class="footer">
      <div class="footer__item">
        <h4 class="header">Siam House &amp; Home Co., Ltd</h4>
        <div class="caption">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </div>
        <table class="address">
          <tbody>
            <tr>
              <td>A</td>
              <td>2659-2667 Ladprao rd., Klogjaokunsingha, Wangthonglang BKK 10310</td>
            </tr>
            <tr>
              <td>E</td>
              <td>info@siamhouse.co.th</td>
            </tr>
            <tr>
              <td>T</td>
              <td>+66 0 2542 1920</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="footer__item">
        <h4 class="header">Quick Link</h4>
        <ul class="menu">
          <li>
            <router-link class="menu__link" to="/about">About Us</router-link>
          </li>
          <li>
            <router-link class="menu__link" to="/team">Our Team</router-link>
          </li>
          <li>
            <router-link class="menu__link" to="/service">Services</router-link>
          </li>
          <li>
            <router-link class="menu__link" to="/project">Projects</router-link>
          </li>
          <li>
            <router-link class="menu__link" to="/blog">Blog</router-link>
          </li>
          <li>
            <router-link class="menu__link" to="/contact">Contact Us</router-link>
          </li>
        </ul>
      </div>

      <div class="footer__item">
        <h4 class="header">Support</h4>
        <ul class="menu">
          <li>
            <router-link class="menu__link" to="/job">Jobs</router-link>
          </li>
          <li>
            <router-link class="menu__link" to="/privacy">Privacy Policy</router-link>
          </li>
        </ul>

        <h4 class="header">Follow Us</h4>
        <ul class="menu icon-menu">
          <li>
            <a class="menu__icon" href="https://twitter.com">
              twitter
            </a>
          </li>
          <li>
            <a class="menu__icon" href="https://plus.google.com">
              gplus
            </a>
          </li>
          <li>
            <a class="menu__icon" href="https://www.facebook.com">
              facebook
            </a>
          </li>
          <li>
            <a class="menu__icon" href="https://youtube.com">
              youtube
            </a>
          </li>
        </ul>
      </div>

      <div class="footer__item">
        <h4 class="header">Subscribe Us</h4>
        <div class="caption">
          This sounded a very good reason and alike was quite pleased to know it. I never thought.
        </div>
        <input type="text" class="subscribe__email" placeholder="your@email.com" />
        <button class="subscribe__sub">Subscribe</button>
      </div>
    </div>

    <div class="credit">
      <div>
        Copyright &copy; 2017 siamhouse.
      </div>
      <div>
        Design &amp; Development By siamhouse.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.root {
  color: #fff;
  background-color: #3f3f3f;
}
.footer {
  display: flex;
  justify-content: space-between;
  margin: 2em 0 1em;
}

.footer__item {
  width: 20%;
  margin: 0 2%;
}

.footer__item:first-child,
.footer__item:last-child {
  width: 30%;
}
.header {
  text-transform: uppercase;
}
.caption {
  margin: 1.75em 0 1em;
}
.menu {
  padding: 0;
  margin: 0;
  list-style: none;
}
.menu__link {
  color: #fff;
  display: block;
  text-decoration: none;
  transition: padding .5s ease-out;
  padding: .5em 1em .5em 0;
}
.menu__link:hover {
  background-color: #4f4f4f;
  padding-left: 1em;
}
.address {
  line-height: 1.7;
}
.address td:first-child {
  color: #cf2020;
  font-weight: bold;
  vertical-align: top;
  width: 1.5em;
}
.subscribe__email {
  border: 1px solid #ccc;
  display: block;
  line-height: 1;
  box-sizing: border-box;
  width: 100%;
  padding: .4em;
}
.subscribe__sub {
  color: #fff;
  background-color: #e63b3b;
  border: 1px solid #cf2020;
  display: block;
  font-size: .75em;
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 1;
  cursor: pointer;
  text-transform: uppercase;
  padding: 1em 1.5em;
  margin: 1em 0 .75em auto;
}
.credit {
  border-top: 2px solid #aaa;
  display: flex;
  justify-content: space-between;
  padding: 1em 0;
  margin: 0 2%;
}
</style>
