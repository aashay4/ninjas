<template>
    <div>
        <div class="page-title-area">
            <div class="container">
                <ul>
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li>Best Gaming Laptops</li>
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
                                <li><i class="far fa-calendar-alt"></i> July 22, 2021</li>
                                  <li><i class="far fa-user"></i> <a href="#">Adam P Legge</a></li>
                                  </ul>

                              <h1>The Best Budget Laptops for 2021</h1>
                              <blockquote class="wp-block-quote">
                                  <p>A good gaming laptop is a kind of blessing for a gamer. Buying the best gaming laptop can be confusing because there are some magnificent models available in the market now. Let us guide you through this web and help you choose the best gaming laptops.</p>
                              </blockquote>
                              <p>In this article, we will guide you through all the specifications, features, advantages, and disadvantages (in any!) of the best gaming laptops. We visited different e-commerce websites and company stores and we have come up with top-notch laptops from different companies.</p>
                              <p>Our team has several years of gaming experience starting from the 90’s games Road rash & GTA: vice city to COD, Counterstrike, FIFA, GTA:5, call of duty: warzone, and many other games. We have played games on several machines and here the list we share is our experience. Here, we share the best gaming laptops which are great performers and affordable at the same time. For affordable gaming laptops, refer <a href="https://laptops.ninja/cheap-gaming-laptops-under-1000-dollars"> these cheap gaming laptops under 1000 dollars</a>.</p>
                              <h2>Top Gaming Laptops</h2>
                              <p>
                              <b>1) Alienware m17 R3</b> <br>
                              <p>Overall one of the best gaming laptops, Alienware m17 R3 deserves a place. With Nvidia RTX 2080 Super GPU, Intel Core i9-10980HK processor, and 32 GB RAM, Alienware m17 R3 is built to give a magnificent gaming experience. 17.3 inches’ screen and 4K display enhance the gaming experience.</p>
                              <p>Alienware m17 R3 is very expensive, that’s the only disadvantage of this laptop. Due to so many advanced features, the battery is below average. The design of this machine is out of the box. Slight white paint gives it a classy look.</p>
                              <a
                                  href="https://amzn.to/3i8PLcq"
                                  class="btn btn-light"
                                  >
                                  Buy Now
                              </a> <hr>
                              <b>2) Razer Blade 15</b> <br>
                              <p>Razer Blade 15 has everything that the best gaming laptop requires, outstanding performance, amazing gaming experience, well built, display, and lighting. Razer laptops are known for all these qualities. This laptop’s design is unique and cool and it is smaller than the other competitor laptops. With a 10th-gen intel processor with 16 GB of RAM, performance can never be an issue.</p>
                              <p>The bottom line is any game that can easily be installed and played on this machine with outstanding performance. There are several other configurations available that you can choose or replace while buying. Do check the configuration before buying this laptop.</p>
                              <a
                                  href="https://amzn.to/3p7wBFe"
                                  class="btn btn-light"
                                  >
                                  Buy Now
                              </a> <hr>

                              <b>3) ACER PREDATOR TRITON 500</b> <br>
                              <p>The Acer predator triton 500 is one of the most attractive laptops and delivers awesome performance. It deserves a place on this list. With 15.6 inches widescreen, 16 GB of RAM, Intel Core i7-8750H, 2.20GHz, it can run every game smoothly. Ray tracing capable RTX graphics is a plus. This laptop is not quite as expensive as the other laptops on this list. It can be considered a high-performing budget gaming laptop.</p>
                              <a
                                  href="https://amzn.to/2Qfynqp"
                                  class="btn btn-light"
                                  >
                                  Buy Now
                              </a> <hr>

                              <b>4) Razer Blade Pro 17</b> <br>
                              <p>Razer laptops have the image of great performers and so do Razer blade pro 17. It is a powerhouse and provides the best gaming experience. It has a 17.6 inches large screen with a 1080p display that works great for gaming. It has 16GB RAM and 512 GB SSD and weighs almost 6.1 pounds.</p>
                              <p>With Nvidia GeForce RTX 2080 Super Max-Q and 10th generation octa-core processor, it gives tough competition to other laptops in every aspect of the specification. Pricing might be a disadvantage but overall it’s a great machine and has long-lasting battery life. You can consider it in the best gaming laptops.</p>

                              <a
                                  href="https://amzn.to/2S3aqns"
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
                                <h2><span class="dot"></span> Gaming Laptops</h2>
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
                    <div class="col-lg-12 col-md-12"><br>
                        <aside class="widget-area" id="secondary">
                            <section class="widget widget_comero_posts_thumb">
                                <h3 class="widget-title">Popular Posts</h3>

                                <article class="item">
                                    <nuxt-link to="/cheap-gaming-laptops-under-1000-dollars" class="thumb">
                                        <span class="fullimage cover bg1" role="img"></span>
                                    </nuxt-link>
                                    <div class="info">
                                        <time datetime="2021-05-4">May 4, 2021</time>
                                        <h4 class="title usmall"><nuxt-link to="/cheap-gaming-laptops-under-1000-dollars">Cheap Gaming Laptops</nuxt-link></h4>
                                    </div>

                                    <div class="clear"></div>
                                </article>


                                <article class="item">
                                    <nuxt-link to="/laptops-for-students" class="thumb">
                                        <span class="fullimage cover bg2" role="img"></span>
                                    </nuxt-link>
                                    <div class="info">
                                        <time datetime="2021-05-4">May 4, 2021</time>
                                        <h4 class="title usmall"><nuxt-link to="/laptops-for-students">Best Laptops for Students</nuxt-link></h4>
                                    </div>

                                    <div class="clear"></div>
                                </article>

                                <article class="item">
                                    <nuxt-link to="/designing-sketchup-laptops" class="thumb">
                                        <span class="fullimage cover bg2" role="img"></span>
                                    </nuxt-link>
                                    <div class="info">
                                        <time datetime="2021-05-4">June 23, 2021</time>
                                        <h4 class="title usmall"><nuxt-link to="/designing-sketchup-laptops">Designing and Sketch Up Laptops</nuxt-link></h4>
                                    </div>

                                    <div class="clear"></div>
                                </article>

                                  </section>

                                </aside>
                    </div>

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
      title: 'Best gaming laptops 2021',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'Collection of the best gaming laptops.' },
        { hid: 'robots', name: 'robots', content: 'index,follow' }
      ],
      link: [
 {rel: 'canonical', href: 'https://laptops.ninja/best-gaming-laptops' }
]
    }
  },
  data() {
    return {
      company: 'No Preference',
      purpose: 'Gaming',
      price: 'No Preference',
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
