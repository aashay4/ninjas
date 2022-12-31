<template>
    <!-- Start Top Panel Area -->
    <client-only>
      <div :class="['navbar-area', {'is-sticky': isSticky}]">
        <transition name="fade">
            <div class="top-panel">
                <div class="container">
                    <div class="panel-content">
                        <div class="top-panel-slides">
                            <carousel
                                :autoplay = true
                                :autoplayTimeout = 1000
                                :paginationEnabled = false
                                :perPageCustom = "[[0, 1], [768, 1], [1024, 1]]"
                            >
                                <slide v-for="item in items" :key="item.id">
                                    <div class="single-item-box">
                                        <p v-html="item.text"></p>
                                    </div>
                                </slide>
                            </carousel>
                        </div>

                    </div>
                </div>
            </div>
        </transition>
</div>
    </client-only>
    <!-- End Top Panel Area -->
</template>

<script>
export default {
    data() {
        return {
            isShowing: true,
            isSticky: false,
            items: [
                {
                    id: 1,
                    text: '<strong>Do not reload the page otherwise cart items will be vanished</strong>'
                }
            ]
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
    methods: {
        emitToParent(){
            this.$emit('clicked', this.isShowing = !this.isShowing);
        }
    },
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
