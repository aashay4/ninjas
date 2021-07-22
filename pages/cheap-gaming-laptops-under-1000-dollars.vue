<template>
    <div>
        <div class="page-title-area">
            <div class="container">
                <ul>
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li>Cheap Gaming Laptops Under 1000 Dollars</li>
                </ul>
            </div>
        </div>

        <section class="blog-details-area ptb-60">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                      <div class="blog-details">
                          <div class="article-content">
                              <ul class="entry-meta">
                                <li><i class="far fa-calendar-alt"></i> July 13, 2021</li>
                                  <li><i class="far fa-user"></i> <a href="#">Adam P Legge</a></li>
                                  </ul>

                              <h1>Cheap Gaming Laptops Under 1000 Dollars</h1>
                              <blockquote class="wp-block-quote">
                                  <p>There is a “myth” that Gaming laptops are often too expensive but the fact is they are not. You can buy cheap gaming laptops for under 1000 dollars. A laptop’s performance is not measured based on price but is measured on basis of software and hardware specification.</p>
                              </blockquote>
                              <p>There are a lot of laptops available within this budget and these machines are produced by multiple known companies like HP, Acer, Lenovo, and many others. So, despite the cheap price, you won’t be compromising much of the performance or specification of these machines.</p>
                              <p>Our goal is to go through every single gaming laptop that’s under 1000, study the specification in detail and list out the best models that match your expectation. In this list, all the laptops are powered by the latest GPU, CPU, graphics cards, and other important specifications.</p>
                              <h2>Affordable Gaming Laptops Below $1000</h2>
                              <p>
                              <b>1) ACER NITRO 5</b> <br>
                              <p>Acer Nitro 5 is a great performer and it is amongst the best gaming laptops list. It comes with Nvidia GTX 1650 with 4GB of VRAM and 2.4 GHz intel i5 CPU, you can smoothly play almost any game on this laptop.</p>
                              <p>Acer nitro starts from just $699, just add a few more bucks and increase the specification of this laptop. It has a big 15.6 inches screen so it might be difficult for you to carry it while traveling. Apart from gaming, you can install and use video and sound editing software, programming software and this laptop will work just fine. It deserves a place in the list of cheap laptops under $1000.</p>
                              <a
                                  href="https://amzn.to/3yTMNyw"
                                  class="btn btn-light"
                                  >
                                  Buy Now
                              </a> <hr>
                              <b>2) Dell G3 15</b> <br>
                              <p>The biggest advantage of this laptop is its battery life. You don’t see many laptops with great battery life but it offers an above-average battery life. Of course, the performance of this laptop is a plus. Just like Nitro, Dell G3 15 stands tall in front of higher-budget gaming laptops. Though it offers lesser storage space and a dull display other specifications are worth considering when opting for gaming laptops below 1000 dollars.</p>
                              <p>You can play almost all the games smoothly and a comfortable keyboard adds a better playing experience. It is an all-purpose laptop that’s going to help you in using different software and performing other office tasks as well.</p>
                              <a
                                  href="https://amzn.to/3z0IXDV"
                                  class="btn btn-light"
                                  >
                                  Buy Now
                              </a> <hr>

                              <b>3) MSI GF63</b> <br>
                              <p>With an intel I 7 processor and Nvidia GeForce GTX 1050 Ti with 4GB of VRAM, MSI GF63 is one of the best performers in this budget. It has a big 15.6 inch HD screen that makes your gaming experience even better. With the kind of performance, it offers, you get to play almost all the modern games smoothly. A perfect choice for gaming enthusiasts and want to spend a limited amount on a gaming laptop.</p>
                              <a
                                  href="https://amzn.to/3i6CK2Z"
                                  class="btn btn-light"
                                  >
                                  Buy Now
                              </a> <hr>

                              <b>4) Dell G7 15</b> <br>
                              <p>As we said earlier, there are very few gaming laptops available in the market that offers good battery life and Dell G7 15 is one of them. It has a stylish design and it’s very slim. You get an outstanding gaming experience with medium-sized games. If you want to install and play multiple large games, then this laptop won’t be a good choice. It is good for daily work and gaming.</p>
                              <a
                                  href="https://amzn.to/3wMnNHr"
                                  class="btn btn-light"
                                  >
                                  Buy Now
                              </a> <hr>


                                </p>

                                </div>
                      </div>

                        <div class="">
                          <section class="products-collections-area ptb-60" ref="porto">
                              <div class="container">
                                <div class="section-title without-bg">
                                <h2><span class="dot"></span> Sub-$1000 Laptops</h2>
                              </div>
                                  <div class="row">
                                    <div class="col-lg-4 col-md-12">
                                        <div class="woocommerce-sidebar-area">
                                            <div class="collapse-widget filter-list-widget">
                                                <h3 v-b-toggle.collapse-1 class="collapse-widget-title">
                                                    Current Selection
                                                    <i class="fas fa-angle-up"></i>
                                                </h3>

                                                <b-collapse visible id="collapse-1" class="selected-filters-wrap-list">
                                                    <ul>
                                                        <li><a @click.prevent="clearpurpose()" v-if="purpose !== 'No Preference'">{{purpose}}</a></li>
                                                        <li><a @click.prevent="clearcompany()" v-if="company !== 'No Preference'">{{company}}</a></li>
                                                        <li><a @click.prevent="clearprice()" v-if="price !== 'No Preference'">{{price}}</a></li>
                                                        <li><a @click.prevent="clearsize()" v-if="size !== 'No Preference'">{{size}}</a></li>

                                                    </ul>

                                                    <div class="delete-selected-filters">
                                                        <a @click.prevent="clearall()"><i class="far fa-trash-alt"></i> <span>Clear All</span></a>
                                                    </div>
                                                </b-collapse>
                                            </div>

                                            <div class="collapse-widget collections-list-widget">
                                                <h3 v-b-toggle.collapse-2 class="collapse-widget-title">
                                                    Best Laptop Company

                                                    <i class="fas fa-angle-up"></i>
                                                </h3>
                                                <b-collapse invisible id="collapse-2">
                                                    <ul class="collections-list-row">
                                                        <li><input type="radio" id="HP" value="HP" v-model="company"> <label for="HP">HP</label></li>
                                                        <li><input type="radio" id="Apple" value="Apple" v-model="company"> <label for="Apple">Apple</label></li>
                                                        <li><input type="radio" id="Dell" value="Dell" v-model="company"> <label for="Dell">Dell</label></li>
                                                        <li><input type="radio" id="Lenovo" value="Lenovo" v-model="company"> <label for="Lenovo">Lenovo</label></li>
                                                        <li><input type="radio" id="Razer" value="Razer" v-model="company"> <label for="Razer">Razer</label></li>
                                                        <li><input type="radio" id="Asus" value="Asus" v-model="company"> <label for="Asus">Asus</label></li>
                                                        <li><input type="radio" id="Acer" value="Acer" v-model="company"> <label for="Acer">Acer</label></li>
                                                        <li><input type="radio" id="No Preference" value="No Preference" v-model="company"> <label for="No Preference">No Preference</label></li>
                                                    </ul>
                                                </b-collapse>
                                            </div>

                                            <div class="collapse-widget brands-list-widget">
                                                <h3 v-b-toggle.collapse-3 class="collapse-widget-title">
                                                    Purpose

                                                    <i class="fas fa-angle-up"></i>
                                                </h3>

                                                <b-collapse invisible id="collapse-3">
                                                    <ul class="brands-list-row">
                      <li><input type="radio" id="Gaming" value="Gaming" v-model="purpose"> <label for="Gaming">Gaming</label></li>
                                                    </ul>
                                                </b-collapse>
                                            </div>

                                            <div class="collapse-widget size-list-widget">
                                                <h3 v-b-toggle.collapse-4 class="collapse-widget-title">
                                                    Size - in Inches

                                                    <i class="fas fa-angle-up"></i>
                                                </h3>

                                                <b-collapse invisible id="collapse-4">
                                                    <ul class="size-list-row">
                  <li><input type="radio" id="11" value="11" v-model="size"> <label for="11">11</label></li>
                  <li><input type="radio" id="12" value="12" v-model="size"> <label for="12">12</label></li>
                  <li><input type="radio" id="13" value="13" v-model="size"> <label for="13">13</label></li>
                  <li><input type="radio" id="14" value="14" v-model="size"> <label for="14">14</label></li>
                  <li><input type="radio" id="15" value="15" v-model="size"> <label for="15">15</label></li>
                  <li><input type="radio" id="16" value="16" v-model="size"> <label for="16">16</label></li>
                  <li><input type="radio" id="No Preference" value="No Preference" v-model="size"> <label for="No Preference">No Preference</label></li>
                                                    </ul>
                                                </b-collapse>
                                            </div>

                                            <div class="collapse-widget price-list-widget">
                                                <h3 v-b-toggle.collapse-5 class="collapse-widget-title">
                                                    Laptop Price

                                                    <i class="fas fa-angle-up"></i>
                                                </h3>

                                                <b-collapse invisible id="collapse-5">
                                                    <ul class="price-list-row">
                  <li><input type="radio" id="100" value="100" v-model="price"> <label for="100">< $100</label></li>
                  <li><input type="radio" id="200" value="200" v-model="price"> <label for="200">< $200</label></li>
                  <li><input type="radio" id="300" value="300" v-model="price"> <label for="300">< $300</label></li>
                  <li><input type="radio" id="500" value="500" v-model="price"> <label for="500">< $500</label></li>
                  <li><input type="radio" id="700" value="700" v-model="price"> <label for="700">< $700</label></li>
                  <li><input type="radio" id="1000" value="1000" v-model="price"> <label for="1000">< $1000</label></li>
                  <li><input type="radio" id="1500" value="1500" v-model="price"> <label for="1500">< $1500</label></li>
                  <li><input type="radio" id="2000" value="2000" v-model="price"> <label for="2000">< $2000</label></li>
                  <li><input type="radio" id="No Preference" value="No Preference" v-model="price"> <label for="No Preference">No Preference</label></li>
                                                    </ul>
                                                </b-collapse>
                                            </div>

                                              </div>
                                    </div>
                                      <div class="col-lg-8 col-md-12">
                                          <div class="products-filter-options">
                                              <div class="row align-items-center">

                                                  <div class="col d-flex">
                                                      <div class="products-ordering-list">
                                                          <select>
                                                              <option value="1">All</option>
                                                              </select>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>

                                          <div id="products-filter" class="products-collections-listing row">
                                              <ProductItem
                                                  v-for="(product, index) in products"
                                                  :product="product"
                                                  :key="index"
                                                  @clicked="toggle"
                                                  :className="`col-lg-4 col-md-4 products-col-item`"
                                              ></ProductItem>

                                          </div>

                                          <QuckView />
                                      </div>

                                  </div>
                              </div>
                          </section>
                        </div>
                        <div class="comments-area">
                            <div class="comment-respond">
                                <h3 class="comment-reply-title">Leave a Reply</h3>

                                <form class="comment-form" method="post">
                                    <p class="comment-notes">
                                        <span id="email-notes">Your email address will not be published.</span>
                                         Required fields are marked
                                        <span class="required">*</span>
                                    </p>
                                    <p class="comment-form-comment">
                                        <label for="comment">Comment</label>
                                        <textarea name="comment" id="comment" cols="45" rows="5" maxlength="65525" required="required"></textarea>
                                    </p>
                                    <p class="comment-form-author">
                                        <label for="name">Name <span class="required">*</span></label>
                                        <input type="text" id="author" name="author" required="required">
                                    </p>
                                    <p class="comment-form-email">
                                        <label for="email">Email <span class="required">*</span></label>
                                        <input type="email" id="email" name="email" required="required">
                                    </p>
                                    <p class="comment-form-url">
                                        <label for="url">Website</label>
                                        <input type="url" id="url" name="url">
                                    </p>
                                    <p class="comment-form-cookies-consent">
                                        <input type="checkbox" value="yes" name="wp-comment-cookies-consent" id="wp-comment-cookies-consent">
                                        <label for="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
                                    </p>
                                    <p class="form-submit">
                                        <input type="submit" name="submit" id="submit" class="submit" value="Post Comment">
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                    <popularposts />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import popularposts from '../components/landing-one/popularposts';
import Sidebar from '../components/all-products/Sidebar';
import QuckView from '../components/modals/QuckView';
import { mutations } from '../utils/sidebar-util';
import ProductItem from '../components/landing-one/ProductItem';
  export default {
    components: {
      popularposts,
      Sidebar,
      QuckView,
      ProductItem
    },
    head () {
    return {
      title: 'Cheap Gaming Laptops Under 1000 Dollars',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'Cheap gaming laptops under $1000.' },
        { hid: 'robots', name: 'robots', content: 'index,follow' }
      ],
      link: [
 {rel: 'canonical', href: 'https://laptops.ninja/cheap-gaming-laptops-under-1000-dollars' }
]
    }
  },
  data() {
    return {
      company: 'No Preference',
      purpose: 'Gaming',
      price: 1000,
      size: 'No Preference'
    }
  },
  methods: {
    scrollMeTo(refName) {
  var element = this.$refs[refName];
  var top = element.offsetTop;

  window.scrollTo(0, top);
},
    clearpurpose(){
      this.purpose = 'No Preference'
    },
    clearsize(){
      this.size = 'No Preference'
    },
    clearcompany(){
      this.company = 'No Preference'
    },
    clearprice(){
      this.price = 'No Preference'
    },
    clearall(){
      this.price = 'No Preference',
      this.company = 'No Preference',
      this.purpose = 'No Preference',
      this.size = 'No Preference'
    },
    toggle() {
        mutations.toggleQuickView();
    }
  },
  computed: {
      products(){
        if(this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference'){
          return this.$store.state.products.all.filter(product => product.company === this.company && product.price <= this.price && product.size <= this.size && product.purpose.indexOf(this.purpose) !== -1)
            }
        else if(this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size === 'No Preference'){
          return this.$store.state.products.all.filter(product => product.company === this.company && product.price <= this.price && product.purpose.indexOf(this.purpose) !== -1)
        }
        else if(this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size === 'No Preference'){
          return this.$store.state.products.all.filter(product => product.company === this.company && product.purpose.indexOf(this.purpose) !== -1)
        }
        else if(this.company !== 'No Preference' && this.purpose === 'No Preference' && this.price === 'No Preference' && this.size === 'No Preference'){
          return this.$store.state.products.all.filter(product => product.company === this.company)
        }
        else if(this.company !== 'No Preference' && this.purpose === 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference'){
          return this.$store.state.products.all.filter(product => product.company === this.company && product.price <= this.price && product.size <= this.size)
        }
        else if(this.company === 'No Preference' && this.purpose === 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference'){
          return this.$store.state.products.all.filter(product => product.price <= this.price && product.size <= this.size)
        }
        else if(this.company === 'No Preference' && this.purpose === 'No Preference' && this.price !== 'No Preference' && this.size === 'No Preference'){
          return this.$store.state.products.all.filter(product => product.price <= this.price)
        }
        else if(this.company === 'No Preference' && this.purpose === 'No Preference' && this.price === 'No Preference' && this.size !== 'No Preference'){
          return this.$store.state.products.all.filter(product => product.size <= this.size)
        }
        else if(this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size !== 'No Preference'){
          return this.$store.state.products.all.filter(product => product.company === this.company && product.purpose.indexOf(this.purpose) !== -1 && product.size <= this.size)
        }
        else if(this.company !== 'No Preference' && this.purpose === 'No Preference' && this.price === 'No Preference' && this.size !== 'No Preference'){
          return this.$store.state.products.all.filter(product => product.company === this.company && product.size <= this.size)
        }
        else if(this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size !== 'No Preference'){
          return this.$store.state.products.all.filter(product => product.purpose.indexOf(this.purpose) !== -1 && product.size <= this.size)
        }
        else if(this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size === 'No Preference'){
          return this.$store.state.products.all.filter(product => product.purpose.indexOf(this.purpose) !== -1)
        }
        else if(this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference'){
          return this.$store.state.products.all.filter(product => product.price <= this.price && product.size <= this.size && product.purpose.indexOf(this.purpose) !== -1)
            }
        else if(this.company !== 'No Preference' && this.purpose === 'No Preference' && this.price === 'No Preference' && this.size === 'No Preference'){
          return this.$store.state.products.all.filter(product => product.company === this.company)
        }
        else if(this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size === 'No Preference'){
          return this.$store.state.products.all.filter(product => product.price <= this.price && product.company === this.company && product.purpose.indexOf(this.purpose) !== -1)
        }
        else if(this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size === 'No Preference'){
          return this.$store.state.products.all.filter(product => product.price <= this.price && product.purpose.indexOf(this.purpose) !== -1)
        }
        else if(this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size === 'No Preference'){
          return this.$store.state.products.all.filter(product => product.company === this.company && product.purpose.indexOf(this.purpose) !== -1)
        }
        else if(this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size === 'No Preference'){
          return this.$store.state.products.all.filter(product => product.company === this.company && product.price <= this.price && product.purpose.indexOf(this.purpose) !== -1)
        }
        else if(this.company !== 'No Preference' && this.purpose === 'No Preference' && this.price !== 'No Preference' && this.size === 'No Preference'){
          return this.$store.state.products.all.filter(product => product.company === this.company && product.price <= this.price)
        }
        else{
          return this.$store.state.products.all
        }
      }
  },
}
</script>
