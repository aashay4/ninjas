<template>
    <div>
        <!-- Start Navbar Area -->
        <div :class="['navbar-area', {'is-sticky': isSticky}]">
            <div class="comero-nav">
                <div class="container">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <nuxt-link class="navbar-brand" to="/">
                            <h1>Laptops</h1>
                        </nuxt-link>

                        <b-navbar-toggle target="navbarSupportedContent"></b-navbar-toggle>

                        <b-collapse class="collapse navbar-collapse" id="navbarSupportedContent" is-nav>
                            <ul class="navbar-nav">

                                <li class="nav-item">
                                    <nuxt-link to="/laptop-finder" class="nav-link"> Laptop Finder |</nuxt-link>
                                </li>
                                <li class="nav-item">
                                    <nuxt-link to="/msi" class="nav-link"> MSI |</nuxt-link>
                                </li>

                                <li class="nav-item">
                                    <nuxt-link to="/dell" class="nav-link"> Dell |</nuxt-link>
                                </li>

                                <li class="nav-item">
                                    <nuxt-link to="/acer" class="nav-link"> Acer |</nuxt-link>
                                </li>
                                <li class="nav-item">
                                    <nuxt-link to="/hp" class="nav-link"> HP |</nuxt-link>
                                </li>
                                <li class="nav-item">
                                    <nuxt-link to="/best-budget-laptops" class="nav-link"> Budget Laptops |</nuxt-link>
                                </li>
                                <li class="nav-item">
                                    <nuxt-link to="/best-gaming-laptops" class="nav-link"> Gaming Laptops |</nuxt-link>
                                </li>
                                <li class="nav-item">
                                    <nuxt-link to="/best-lightweight-laptop" class="nav-link">Light Laptops </nuxt-link>
                                </li>
                            </ul>

                            <div class="others-option">
                                <div class="option-item">
                                    <a @click.prevent="toggle" href="#">
                                        Cart({{cart.length}}) <i class="fas fa-shopping-bag"></i>
                                    </a>
                                </div>
                            </div>
                        </b-collapse>
                    </nav>
                </div>
            </div>
        </div>
        <!-- End Navbar Area -->

        <SidebarPanel></SidebarPanel>
    </div>
</template>

<script>
import SidebarPanel from '../layouts/SidebarPanel';
import { mutations } from '../utils/sidebar-util';
export default {
    components: {
        SidebarPanel
    },
    data(){
        return {
            isSticky: false
        }
    },
    mounted(){
        const that = this;
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY;
            if(scrollPos >= 100){
                that.isSticky = true;
            } else {
                that.isSticky = false;
            }
        })
    },
    computed: {
        cart(){
            return this.$store.getters.cart
        }
    },
    methods: {
        toggle() {
            mutations.toggleNav()
        }
    }
}
</script>
