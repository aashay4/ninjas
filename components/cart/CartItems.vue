<template>
    <!-- Start Cart Area -->
		<section class="cart-area ptb-60">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <form>
                            <div class="cart-table table-responsive">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Unit Price</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Total</th>
                                        </tr>
                                    </thead>

                                    <tbody v-if="cart.length > 0">

                                        <tr v-for="(cart, i) in cart" :key="i">
                                            <td class="product-thumbnail">
                                                <a href="#">
                                                    <img :src="cart.image" :alt="cart.namel" />
                                                </a>
                                            </td>

                                            <td class="product-name">
                                                <nuxt-link :to="`/${cart.id}`">
                                                    {{cart.namel}}
                                                </nuxt-link>
                                                </td>

                                            <td class="product-price">
                                                <span class="unit-amount">${{cart.price}}</span>
                                            </td>

                                            <td class="product-quantity">
                                                <div class="input-counter">
                                                    {{cart.quantity}}
                                                </div>
                                            </td>

                                            <td class="product-subtotal">
                                                <span class="subtotal-amount">${{cart.price}}</span>

                                                <a href="javascript:void(0)" @click="removeItemFromCart(cart.id)" class="remove"><i class="far fa-trash-alt"></i></a>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                            <div class="cart-buttons">
                                <div class="row">
                                    <div class="col-lg-7 col-md-7">
                                        <div class="continue-shopping-box">
                                            <nuxt-link to="/" class="btn btn-light">Continue Shopping</nuxt-link>
                                        </div>
                                    </div>
                                    <div class="col-lg-5 col-md-5 text-right">
                                        <div class="cart-totals">
                                            <h3>Cart Totals</h3>

                                            <ul>
                                                <li>Subtotal <span>${{cartTotal}}</span></li>
                                            </ul>
                                            </div>

                                    </div>
																		<form id="contactForm" class="col-lg-12 col-md-12">
																				<div class="row">
																						<div class="col-lg-12 col-md-12">
																								<div class="form-group">
																										<label>Name <span>(required)*</span></label>
																										<input type="text" name="name" v-model="name" class="form-control" placeholder="Enter your name">
																								</div>
																						</div>

																						<div class="col-lg-12 col-md-12">
																								<div class="form-group">
																										<label>Email <span>(required)*</span></label>
																										<input type="email" name="email" v-model="email" class="form-control" placeholder="Enter your Email Address">
																								</div>
																						</div>

																						<div class="col-lg-12 col-md-12">
																								<div class="form-group">
																										<label>Phone Number <span>(required)*</span></label>
																										<input type="text" name="phone_number" v-model="phone" class="form-control" placeholder="Enter your Phone Number">
																								</div>
																						</div>

																						<div class="col-lg-12 col-md-12">
																								<div class="form-group">
																										<label>Your Message <span>(required)*</span></label>
																										<textarea name="message" v-model="message" cols="30" rows="8" class="form-control" placeholder="Enter your Message"></textarea>
																								</div>
																						</div>

																						<div class="col-lg-12 col-md-12">
																								<div class="form-group">
																										<label>Street Address <span>(required)*</span></label>
																										<textarea name="message" v-model="street" cols="30" rows="8" class="form-control" placeholder="Enter your Message"></textarea>
																								</div>
																						</div>

																						<div class="col-lg-12 col-md-12">
																								<button type="button" @click="checkcart();writeToFirestore();" class="btn btn-primary">Send Message</button>
																						</div>
																				</div>
																		</form>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
		<!-- End Cart Area -->
</template>

<script>
import {fireDb} from '~/plugins/firebase.js'

export default {
	data(){
		return {
			first: [],
			contactinfo: [{
				name: '',
				email: '',
				phone: '',
				message: '',
				street: ''
			}],
			name: '',
			email: '',
			phone: '',
			message: '',
			street: ''
		}
	},
    computed: {
        cart(){
            return this.$store.getters.cart
        },
        cartTotal(){
            return this.$store.getters.totalAmount
        }
    },
    methods: {
			checkcart(){
//			console.log(JSON.stringify(this.cart.length));
for(var i=0;i<this.cart.length;i++){
	console.log(this.cart[i].link)
	this.first.push(this.cart[i]);
}

			},
			async writeToFirestore() {
				var today = new Date();
				var dd = String(today.getDate()).padStart(2, '0');
				var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
				var yyyy = today.getFullYear();
				var hour = today.getHours();
				var minute = today.getMinutes();
				var second = today.getSeconds();
				today = dd + '_' + mm + '_' + yyyy + '_' + hour + '_' + minute + '_' + second;
	  const ref = fireDb.collection("cart").doc(today)
	  const document = {
	    order: this.first,
			name: this.name,
			email: this.email,
			phone: this.phone,
			message: this.message,
			street: this.street
	  }
	  try {
	    await ref.set(document)
	  } catch (e) {
	    // TODO: error handling
	    console.error(e)
	  }
	//  this.writeSuccessful = true
},
        removeItemFromCart(id){
            this.$store.dispatch('deleteCart', id)
        },
        onIncrement(id){
            this.$store.dispatch('updateCart', {
                id,
                unit: 1,
                cart: this.cart
            })
        },
        onDecrement(id, quantity){
            if (quantity > 1) {
                this.$store.dispatch('updateCart', {
                    id,
                    unit: -1,
                    cart: this.cart
                })
            } else {
                this.removeItemFromCart(id);
                this.$toast.warning("Item deleted!");
            }
        },
    }
}
</script>
