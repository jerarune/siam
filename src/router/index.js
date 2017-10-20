import Vue from 'vue'
import Router from 'vue-router'

function load(component) {
  return () => System.import(`@/pages/${component}`)
}

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'home',
      component: load('Home')
    },
    {
      path: '/test',
      name: 'test',
      component: load('Test')
    }
  ]
})
