import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Callback from '@/views/Callback.vue'
import Contact from '@/views/Contact.vue'
import Sell from '@/views/Sell.vue'
import Buy from '@/views/Buy.vue'
import Upload from '@/views/Upload.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/callback',
      name: 'callback',
      component: Callback
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/buy',
      name: 'buy',
      component: Buy
    },
    {
      path: '/sell',
      name: 'sell',
      component: Sell
    },
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    }
  ]
})

// very basic "setup" of a global guard
router.beforeEach((to, from, next) => {
  if(to.name == 'callback') { // check if "to"-route is "callback" and allow access
    next()
  } else if (router.app.$auth.isAuthenticated()) { // if authenticated allow access
    next()
  } else { // trigger auth0 login
    router.app.$auth.login()
  }
})

export default router