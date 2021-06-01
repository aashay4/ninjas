import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _35f365af = () => interopDefault(import('..\\pages\\acer.vue' /* webpackChunkName: "pages_acer" */))
const _0d7667aa = () => interopDefault(import('..\\pages\\apple.vue' /* webpackChunkName: "pages_apple" */))
const _083018aa = () => interopDefault(import('..\\pages\\best-budget-laptops.vue' /* webpackChunkName: "pages_best-budget-laptops" */))
const _b9a73770 = () => interopDefault(import('..\\pages\\best-chromebook-laptops.vue' /* webpackChunkName: "pages_best-chromebook-laptops" */))
const _07c08e94 = () => interopDefault(import('..\\pages\\best-gaming-laptops.vue' /* webpackChunkName: "pages_best-gaming-laptops" */))
const _be0364d0 = () => interopDefault(import('..\\pages\\best-lenovo-laptops.vue' /* webpackChunkName: "pages_best-lenovo-laptops" */))
const _38ac2086 = () => interopDefault(import('..\\pages\\best-windows-laptops.vue' /* webpackChunkName: "pages_best-windows-laptops" */))
const _9b971000 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages_cart" */))
const _5c176770 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages_contact" */))
const _39fe7bbe = () => interopDefault(import('..\\pages\\dell.vue' /* webpackChunkName: "pages_dell" */))
const _70099a15 = () => interopDefault(import('..\\pages\\general-purpose-laptops.vue' /* webpackChunkName: "pages_general-purpose-laptops" */))
const _79467030 = () => interopDefault(import('..\\pages\\hp.vue' /* webpackChunkName: "pages_hp" */))
const _5c1f0849 = () => interopDefault(import('..\\pages\\laptop-finder.vue' /* webpackChunkName: "pages_laptop-finder" */))
const _8e0ec55a = () => interopDefault(import('..\\pages\\msi.vue' /* webpackChunkName: "pages_msi" */))
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
    path: "/acer",
    component: _35f365af,
    name: "acer"
  }, {
    path: "/apple",
    component: _0d7667aa,
    name: "apple"
  }, {
    path: "/best-budget-laptops",
    component: _083018aa,
    name: "best-budget-laptops"
  }, {
    path: "/best-chromebook-laptops",
    component: _b9a73770,
    name: "best-chromebook-laptops"
  }, {
    path: "/best-gaming-laptops",
    component: _07c08e94,
    name: "best-gaming-laptops"
  }, {
    path: "/best-lenovo-laptops",
    component: _be0364d0,
    name: "best-lenovo-laptops"
  }, {
    path: "/best-windows-laptops",
    component: _38ac2086,
    name: "best-windows-laptops"
  }, {
    path: "/cart",
    component: _9b971000,
    name: "cart"
  }, {
    path: "/contact",
    component: _5c176770,
    name: "contact"
  }, {
    path: "/dell",
    component: _39fe7bbe,
    name: "dell"
  }, {
    path: "/general-purpose-laptops",
    component: _70099a15,
    name: "general-purpose-laptops"
  }, {
    path: "/hp",
    component: _79467030,
    name: "hp"
  }, {
    path: "/laptop-finder",
    component: _5c1f0849,
    name: "laptop-finder"
  }, {
    path: "/msi",
    component: _8e0ec55a,
    name: "msi"
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
