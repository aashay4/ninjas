<template>
    <div class="col-lg-5 col-md-5">
        <div class="product-details-content">
            <h3>{{namel}}</h3>

            <div class="product-add-to-cart">
              <table class="table table-bordered">
                  <thead>
                      <tr>
                          <th scope="col">Length</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Rate(Per Unit)</th>
                      </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{{inputprice}}</td>
                      <td>1 to 9</td>
                      <td>{{rate}}</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>10 to 49</td>
                      <td>{{rate1}}</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>50 to 99</td>
                      <td>{{rate2}}</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>100+</td>
                      <td>{{rate3}}</td>
                    </tr>
                  </tbody>
                </table>
              <div class="">
                <p>Enter length <b style="color: blue">(Unit in mm in Miltiple of 100 mm)</b> : </p>
<input type="number" class="form-control" v-model="inputprice" @input="validathun()" placeholder="Enter length in multiple of 100">
</div><br>
                <div class="">
                  <p>Enter quantity : </p>
                  <input type="number" class="form-control" v-model="quantity" @input="validathun()" placeholder="Enter Quantity">
                </div><br>

                <button v-if="getExistPId" type="submit" class="btn btn-danger" @click="addToCart()">
                    <i class="fas fa-cart-plus"></i> Already Added
                </button>

                <button v-else type="submit" class="btn btn-primary" @click="addToCart()">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button><br><hr>

                <div class="price" style="color: teal">
                    <h2 class="new-price">${{tprice}}</h2>
                </div>
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
                            <div class="product-cart-btn">
                      <nuxt-link to="/cart" class="btn btn-light">Verify your order and contact us!</nuxt-link>
                  </div><br>
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
            length: '',
            inputprice: '',
            quantity: 1,
            tprice: null,
            rate: '',
            rate1: '',
            rate2: '',
            rate3: '',
            cprice: null
        }
    },
    props: ['id', 'namel', 'price', 'image', 'star1', 'star2', 'star3', 'star4', 'star5', 'link', 'os' ],
    computed: {
        cart(){
            return this.$store.getters.cart
        }
    },
    methods: {
      validathun(){
      if(this.inputprice %100 != 0){
        this.$toast("Please add value in the multiple of 100", {
            icon: 'fas fa-cart-plus'
        });
      }
      else {
        if(this.inputprice === "500" || this.inputprice === "400" || this.inputprice === "300" || this.inputprice === "200" || this.inputprice === "100") {
          alert(this.price)
if(this.quantity >= 1 && this.quantity < 10){
    this.rate = 2.50;
    this.rate1 = 2.45;
    this.rate2 = 2.42;
    this.rate3 = 2.37;
           this.tprice = this.price * this.quantity; // <== The calculation
           alert("1 to 10")
           this.tprice = this.tprice.toFixed(2);
}
else if(this.quantity >= 10 && this.quantity < 50){
  this.rate = 2.50;
  this.rate1 = 2.45;
  this.rate2 = 2.42;
  this.rate3 = 2.37;
           this.tprice = (this.price * this.quantity) - (this.price * 0.02 * this.quantity) ; // <== The calculation
           alert("11 to 49")
           this.tprice = this.tprice.toFixed(2);
}
else if(this.quantity >= 50 && this.quantity < 100){
  this.rate = 2.50;
  this.rate1 = 2.45;
  this.rate2 = 2.42;
  this.rate3 = 2.37;
           this.tprice = (this.price * this.quantity) - (this.price * 0.03 * this.quantity); // <== The calculation
           alert("50 to 99")
           this.tprice = this.tprice.toFixed(2);
}
else if(this.quantity >= 100){
  this.rate = 2.50;
  this.rate1 = 2.45;
  this.rate2 = 2.42;
  this.rate3 = 2.37;
           this.tprice = (this.price * this.quantity) - (this.price * 0.05 * this.quantity); // <== The calculation
           alert("more then 100")
           this.tprice = this.tprice.toFixed(2);
}
else{
  alert("else")
           this.tprice = 198 * this.quantity; // <== The calculation
}
}
//else if(this.quantity == 1) {
//            this.price = this.price + ( this.quantity * 208 ) + ( this.inputprice * 0.08 ) ; // <== The calculation
            //$cart_item['custom_data']['price'] = round(this.price, 2); // Save the price in the custom data

// }
else {

if(this.quantity >= 1 && this.quantity < 10){
  alert(this.inputprice)
  this.rate = 3;
  this.rate1 = 2.94;
  this.rate2 = 2.91;
  this.rate3 = 2.86;
           this.tprice = ((this.inputprice - 500) * 0.001) + (this.price * this.quantity); // <== The calculation
           alert("1 to 10 fo 1000")
           this.tprice = this.tprice.toFixed(2);
}
else if(this.quantity >= 10 && this.quantity < 50){
             this.cprice = ((this.inputprice - 500) * 0.001) + this.price;
             alert(this.cprice);
           this.tprice = ((this.inputprice - 500) * 0.001) + (this.cprice * this.quantity) - (this.cprice * 0.02 * this.quantity) ; // <== The calculation
           alert("11 to 49")
           this.tprice = this.tprice.toFixed(2);
}
else if(this.quantity >= 50 && this.quantity < 100){
  this.cprice = ((this.inputprice - 500) * 0.001) + this.price;
           this.tprice = ((this.inputprice - 500) * 0.001) + (this.cprice * this.quantity) - (this.cprice * 0.03 * this.quantity); // <== The calculation
           alert("50 to 99")
           this.tprice = this.tprice.toFixed(2);
}
else if(this.quantity >= 100){
  this.cprice = ((this.inputprice - 500) * 0.001) + this.price;
           this.tprice = ((this.inputprice - 500) * 0.001) + (this.cprice * this.quantity) - (this.cprice * 0.05 * this.quantity); // <== The calculation
           alert("more then 100")
           this.tprice = this.tprice.toFixed(2);
}
else{
  alert("else")
           this.tprice = 198 * this.quantity; // <== The calculation
}
}
      }
    },
      correctlength(){
        alert(this.length)
      },
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

                    this.$store.dispatch('addToCart', product);
                    this.$toast("Added to cart", {
                        icon: 'fas fa-cart-plus'
                    });
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
                this.quantity++;
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
