<template>
    <div class="col-lg-5 col-md-5">
        <div class="product-details-content">
            <h3>{{namel}}</h3>

            <div class="price">
                <span class="new-price">${{price}}</span>
            </div>

            <div class="product-review">
                <div class="rating">
                    <i :class="star1"></i>
                    <i :class="star2"></i>
                    <i :class="star3"></i>
                    <i :class="star4"></i>
                    <i :class="star5"></i>
                </div>
            </div>

            <div class="product-add-to-cart">
                <div class="input-counter">
                    <span @click="decreaseQuantity()" class="minus-btn"><i class="fas fa-minus"></i></span>
                    {{quantity}}
                    <span @click="increaseQuantity()" class="plus-btn"><i class="fas fa-plus"></i></span>
                </div>

                <button v-if="getExistPId" type="submit" class="btn btn-danger" @click="addToCart()">
                    <i class="fas fa-cart-plus"></i> Already Added
                </button>

                <button v-else type="submit" class="btn btn-primary" @click="addToCart()">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>

            <div class="buy-checkbox-btn">
                <div class="item">
                    <input class="inp-cbx" id="cbx" type="checkbox">
                    <label class="cbx" for="cbx">
                        <span>
                            <svg width="12px" height="10px" viewbox="0 0 12 10">
                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                            </svg>
                        </span>
                    </label>
                </div>

                <div class="item">
                    <a rel="noopener noreferrer nofollow" :href="link" class="btn btn-primary">Buy it now!</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            getExistPId: false,
            quantity: 1
        }
    },
    props: ['id', 'namel', 'price', 'image', 'star1', 'star2', 'star3', 'star4', 'star5', 'link', 'os' ],
    computed: {
        cart(){
            return this.$store.getters.cart
        }
    },
    methods: {
        addToCart(){
            const product = [{
                id: this.id,
                namel: this.namel,
                price: this.price,
                image: this.image,
                quantity: this.quantity,
                star1: this.star1,
                star2: this.star2,
                star3: this.star3,
                star4: this.star4,
                star5: this.star5,
                link: this.link
            }]

            if(this.cart.length > 0){
                let id = this.id
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
                    this.getExistPId = true
                    this.$toast.info("Already added to the cart");
                }
            } else {
                this.$store.dispatch('addToCart', product)
                this.$toast("Added to cart",{
                    icon: 'fas fa-cart-plus'
                });
            }
        },
        increaseQuantity(){
            if(this.quantity > 9){
                this.$toast("Can't add more than 10",{
                    icon: 'fas fa-cart-plus'
                });
            } else {
                this.quantity++
            }
        },
        decreaseQuantity() {
            if(this.quantity < 2){
                this.$toast("Can't add less than 1",{
                    icon: 'fas fa-cart-plus'
                });
            } else {
                this.quantity--;
            }
        },
    }
}
</script>
