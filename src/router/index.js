import Vue from 'vue'
import Router from 'vue-router'

function load(component) {
  return () => System.import(`@/pages/${component}`)
}

Vue.use(Router)

export default new Router({
  history: true,

  routes: [
    {
      path: '/',
      name: 'home',
      component: load('Home')
    }
  ]
})
