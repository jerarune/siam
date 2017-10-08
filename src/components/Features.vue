<template>
  <div class="root">
    <div class="main-feature">
      <div class="feature__item">
        <div class="feature__icon">
          <group />
        </div>
        <h4 class="feature__caption">
          Includes carefully crafted pre-built page Floox
        </h4>
        <div class="feature__desc">
          Layouts for your next project.
        </div>
      </div>
    </div>
    
    <div class="feature">
      <div class="feature__item">
        <div class="feature__icon">
          <crown />
        </div>
        <h4 class="feature__caption">
          Brand Strategy
        </h4>
        <div class="feature__desc">
          Dummy text of the printing and typesetting industry
        </div>
      </div>
      <div class="feature__item">
        <div class="feature__icon">
          <light />
        </div>
        <h4 class="feature__caption">
          Creative Design
        </h4>
        <div class="feature__desc">
          Dummy text of the printing and typesetting industry
        </div>
      </div>
      <div class="feature__item">
        <div class="feature__icon">
          <creation />
        </div>
        <h4 class="feature__caption">
          Clean Structure
        </h4>
        <div class="feature__desc">
          Dummy text of the printing and typesetting industry
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Creation from 'icons/creation'
import Crown from 'icons/crown'
import Light from 'icons/lightbulb-on-outline'
import Group from 'icons/group'

export default {
  name: 'features',

  components: {
    Creation,
    Crown,
    Light,
    Group,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.root {
  color: #fff;
  background-color: #232323;
  text-align: center;
  position: relative;
  padding: 2em 2%;
}
.main-feature {
  margin: 0 auto 3em;
}
.feature {
  display: flex;
  justify-content: space-between;
}
.feature .feature__item {
  width: 33.333333%;
  padding: 0 2em;
}
.feature .feature__item:first-child {
  border-right: 5px solid #fff;
  padding-left: 0;
}
.feature .feature__item:last-child {
  border-left: 5px solid #fff;
  padding-right: 0;
}
.feature__icon {
  font-size: 3em;
}
.feature__caption {
  font-size: 1.5em;
  margin: .5em 0;
}
.feature {}
</style>
