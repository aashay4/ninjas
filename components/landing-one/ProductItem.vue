<template>
    <div
        :class="className">
        <div class="single-product-box">
            <div class="product-image">
                <nuxt-link :to="'/' + product.id">
                    <img :src="product.image" :alt="product.namel" style="height: 150px; width: 185px">
                    <img :src="product.imageHover" :alt="product.namel">
                </nuxt-link>


                <Timer v-if="product.timePeriod" v-bind:dateTime="product.dateTime"></Timer>
            </div>

            <div class="product-content">
                <h3>
                    <nuxt-link :to="`/${product.id}`">{{product.namel}}</nuxt-link>
                </h3>

                <div class="product-price">
                    <span
                        class="old-price"
                        v-if="product.offer"
                    >
                        ${{product.price - product.offerPrice}}
                    </span>
                    <span class="new-price">${{product.price}}</span>
                </div>

                <div class="rating">
                    <i :class="product.star1"></i>
                    <i :class="product.star2"></i>
                    <i :class="product.star3"></i>
                    <i :class="product.star4"></i>
                    <i :class="product.star5"></i>
                </div>

                <a
                    v-if="getExistPId === product.id"
                    href="javascript:void(0)"
                    class="btn btn-light added-btn"
                    @click="addToCart(product)">
                    Added Already!
                </a>

                <a
                    v-else
                    href="javascript:void(0)"
                    class="btn btn-light"
                    @click="addToCart(product)">
                    Add to Cart
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import Timer from './Timer';
export default {
    name: 'ProductItem',
    components: {
        Timer
    },
    data(){
        return {
            getExistPId: null,
        }
    },
    props: ['product', 'className'],
    computed: {
        cart(){
            return this.$store.getters.cart
        }
    },
    methods: {
        quickView(e){
            this.$emit('clicked')
        },
        addToCart(item){
            const product = [{
                id: item.id,
                namel: item.namel,
                price: item.price,
                image: item.image,
                quantity: 1,
                star1: item.star1,
                star2: item.star2,
                star3: item.star3,
                star4: item.star4,
                star5: item.star5
            }]

            if(this.cart.length > 0){
                let id = item.id
                this.getExistPId = id
                let cartIndex = this.cart.findIndex(cart => {
                    return cart.id == id
                })

                if(cartIndex == -1){
                    this.$store.dispatch('addToCart', product);
                    this.$toast("Added to cart", {
                        icon: 'fas fa-cart-plus'
                    });
                } else {
                    this.$store.dispatch('updateCart', {
                        id, unit: 1, cart: this.cart
                    });
                    this.$toast.info("Already added to the cart and update with one");
                }
            } else {
                this.$store.dispatch('addToCart', product)
                this.$toast("Added to cart",{
                    icon: 'fas fa-cart-plus'
                });
            }
        }
    },
}
</script>
