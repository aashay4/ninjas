import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _083018aa = () => interopDefault(import('..\\pages\\best-budget-laptops.vue' /* webpackChunkName: "pages_best-budget-laptops" */))
const _907f7ba8 = () => interopDefault(import('..\\pages\\blog-detail.vue' /* webpackChunkName: "pages_blog-detail" */))
const _9b971000 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages_cart" */))
const _5c176770 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages_contact" */))
const _79467030 = () => interopDefault(import('..\\pages\\hp.vue' /* webpackChunkName: "pages_hp" */))
const _5a269122 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _91adbd90 = () => interopDefault(import('..\\pages\\_id\\index.vue' /* webpackChunkName: "pages__id_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/best-budget-laptops",
    component: _083018aa,
    name: "best-budget-laptops"
  }, {
    path: "/blog-detail",
    component: _907f7ba8,
    name: "blog-detail"
  }, {
    path: "/cart",
    component: _9b971000,
    name: "cart"
  }, {
    path: "/contact",
    component: _5c176770,
    name: "contact"
  }, {
    path: "/hp",
    component: _79467030,
    name: "hp"
  }, {
    path: "/",
    component: _5a269122,
    name: "index"
  }, {
    path: "/:id",
    component: _91adbd90,
    name: "id"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
