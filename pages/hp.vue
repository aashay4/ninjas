<template>
    <div>
        <div class="page-title-area">
            <div class="container">
                <ul>
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li>Best HP Laptops</li>
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
                                  <li><i class="far fa-calendar-alt"></i> May 04, 2021</li>
                                    <li><i class="far fa-user"></i> <a href="#">Adam P Legge</a></li>
                                    </ul>

                                <h1>The Best HP Laptops 2021</h1>

                                <p>HP has been the brand widely used by students and businessmen. Here in this article, we bring the best HP laptop of 2021.</p>

                                <p>The biggest advantage of an HP laptop is nothing but the reliability, longer battery life and it is affordable at the same time. In this article, we included all the affordable HP laptops, read this article and get detailed information about the same!</p>

                                <blockquote class="wp-block-quote">
                                    <p>In this article, we have listed the top performing HP laptops with advanced features and they are cheap at the same time.</p>

                                    <cite>Admin</cite>
                                </blockquote>
                                <h2>List of the best HP laptops</h2>
                                <p>
                              <h3>HP Elite Dragonfly</h3>
                                <p>This is a great laptop for businessmen and students who are into group projects. When it comes to the style of a machine, this one beats everyone around. With around 13 hours of battery life, you can probably work on this laptop for hours. Price can only be an issue with this machine as it costs above $2000 which might not fall in the budget.</p>
                                <a
                                    href="https://amzn.to/3ufPIid"
                                    class="btn btn-light"
                                    >
                                    Buy Now
                                </a> <hr>
                                <h3>HP Spectre x360</h3>
                                <p>If you are a fan of 2-in-1 laptops then you are gonna like this laptop, this one is one of the best 2-in-1 laptops available right now. Along with that, it is cheaper than the Elite Dragonfly. If you are a student or a businessman then this machine can be the right choice. You can buy this machine for around $1200.</p>
                                <a
                                    href="https://amzn.to/3toM0S6"
                                    class="btn btn-light"
                                    >
                                    Buy Now
                                </a> <hr>
                                <h3>HP Envy 15</h3>
                                <p>The HP Envy 15 is a comparatively old laptop but when it comes to the performance, HP Envy 15 is good. You can rely on this machine if you are looking for a laptop with the best performance.</p>
                                <a
                                    href="https://amzn.to/3uxUvMh"
                                    class="btn btn-light"
                                    >
                                    Buy Now
                                </a> <hr>
                                <h3>HP Chromebook 14</h3>
                                <p>Chromebook laptops are way cheaper than windows or macOS laptops. If you are looking for an affordable HP laptop then this machine can be the right choice. Along with that, this is a lighter laptop with longer battery life which makes it easier to carry while traveling.</p>
                                <a
                                    href="https://amzn.to/2Rs1J5u"
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
                                                        <li><a @click.prevent="clearprocessor()" v-if="processor !== 'No Preference'">{{processor}}</a></li>
                                                        <li><a @click.prevent="clearcompany()" v-if="company !== 'No Preference'">{{company}}</a></li>
                                                        <li><a @click.prevent="clearprice()" v-if="price !== 'No Preference'">{{price}}</a></li>
                                                        <li><a @click.prevent="clearsize()" v-if="size !== 'No Preference'">{{size}}</a></li>
                                                        <li><a @click.prevent="clearos()" v-if="os !== 'No Preference'">{{os}}</a></li>
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
                                                <b-collapse visible id="collapse-2">
                                                    <ul class="collections-list-row">
                                                        <li><input type="radio" id="HP" value="HP" v-model="company"> <label for="HP">HP</label></li>
                                                          </ul>
                                                </b-collapse>
                                            </div>

                                            <div class="collapse-widget collections-list-widget">
                                                <h3 v-b-toggle.collapse-7 class="collapse-widget-title">
                                                    Choose OS

                                                    <i class="fas fa-angle-up"></i>
                                                </h3>
                                                <b-collapse visible id="collapse-7">
                                                    <ul class="collections-list-row">
                                                        <li><input type="radio" id="MacOS" value="MacOS" v-model="os"> <label for="MacOS">MacOS</label></li>
                                                        <li><input type="radio" id="Windows 10" value="Windows 10" v-model="os"> <label for="MacOS">Windows</label></li>
                                                        <li><input type="radio" id="ChromeOS" value="ChromeOS" v-model="os"> <label for="ChromeOS">ChromeOS</label></li>
                                                        <li><input type="radio" id="No Preference" value="No Preference" v-model="os"> <label for="No Preference">No Preference</label></li>
                                                    </ul>
                                                </b-collapse>
                                            </div>

                                            <div class="collapse-widget brands-list-widget">
                                                <h3 v-b-toggle.collapse-3 class="collapse-widget-title">
                                                    Purpose

                                                    <i class="fas fa-angle-up"></i>
                                                </h3>

                                                <b-collapse visible id="collapse-3">
                                                    <ul class="brands-list-row">
                      <li><input type="radio" id="Gaming" value="Gaming" v-model="purpose"> <label for="Gaming">Gaming</label></li>
                      <li><input type="radio" id="High-performance" value="High-performance" v-model="purpose"> <label for="High-performance">High-performance (Video/Designing)</label></li>
                      <li><input type="radio" id="All-purpose" value="All-purpose" v-model="purpose"> <label for="All-purpose">All-purpose (Business/Student/Writing/Programming)</label></li>
                      <li><input type="radio" id="General-purpose" value="General-purpose" v-model="purpose"> <label for="All-purpose">General-purpose (Kids/Cheap/Daily-use)</label></li>
                      <li><input type="radio" id="No Preference" value="No Preference" v-model="purpose"> <label for="No Preference">No Preference</label></li>
                                                    </ul>
                                                </b-collapse>
                                            </div>

                                            <div class="collapse-widget size-list-widget">
                                                <h3 v-b-toggle.collapse-4 class="collapse-widget-title">
                                                    Size - in Inches

                                                    <i class="fas fa-angle-up"></i>
                                                </h3>

                                                <b-collapse visible id="collapse-4">
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

                                                <b-collapse visible id="collapse-5">
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

                                            <div class="collapse-widget price-list-widget">
                                                <h3 v-b-toggle.collapse-6 class="collapse-widget-title">
                                                    Laptop Processor
                                                    <i class="fas fa-angle-up"></i>
                                                </h3>

                                                <b-collapse visible id="collapse-6">
                                                    <ul class="price-list-row">
                  <li><input type="radio" id="processor" value="Intel" v-model="processor"> <label for="100">Intel</label></li>
                  <li><input type="radio" id="processor" value="Ryzen" v-model="processor"> <label for="200">Ryzen</label></li>
                  <li><input type="radio" id="No Preference" value="No Preference" v-model="processor"> <label for="No Preference">No Preference</label></li>
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
export default{
  components: {
    popularposts,
    Sidebar,
    QuckView,
    ProductItem
  },
  head () {
  return {
    title: 'Best HP laptops',
    meta: [
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { hid: 'description', name: 'description', content: 'The collection of the best HP laptops for 2021.' },
      { hid: 'robots', name: 'robots', content: 'index,follow' }
    ],
    link: [
{rel: 'canonical', href: 'https://laptops.ninja/hp' }
]
  }
},
data() {
  return {
    company: 'HP',
    purpose: 'No Preference',
    price: 'No Preference',
    size: 'No Preference',
    os: 'No Preference',
    processor: 'No Preference'
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
  clearos(){
    this.os = 'No Preference'
  },
  clearprocessor(){
    this.processor = 'No Preference'
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
    this.size = 'No Preference',
    this.os = 'No Preference'
  },
  toggle() {
      mutations.toggleQuickView();
  }
},
computed: {
    products(){
      if(this.os !== 'No Preference' && this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor !== 'No Preference'){
          return this.$store.state.products.all.filter(product => product.company === this.company && product.os === this.os && product.price <= this.price && product.size <= this.size && product.purpose.indexOf(this.purpose) !== -1 && product.processor.indexOf(this.processor) !== -1)
          }
          else if(this.os !== 'No Preference' && this.company === 'No Preference' && this.purpose === 'No Preference' && this.price === 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
            return this.$store.state.products.all.filter(product => product.os === this.os)
              }
              else if(this.os !== 'No Preference' && this.company !== 'No Preference' && this.purpose === 'No Preference' && this.price === 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                return this.$store.state.products.all.filter(product => product.os === this.os && product.company === this.company)
              }
              else if(this.os !== 'No Preference' && this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                return this.$store.state.products.all.filter(product => product.os === this.os && product.company === this.company && product.purpose.indexOf(this.purpose) !== -1)
              }
              else if(this.os !== 'No Preference' && this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                return this.$store.state.products.all.filter(product => product.os === this.os && product.company === this.company && product.purpose.indexOf(this.purpose) !== -1 && product.price <= this.price)
              }
              else if(this.os !== 'No Preference' && this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor === 'No Preference'){
                return this.$store.state.products.all.filter(product => product.os === this.os && product.company === this.company && product.purpose.indexOf(this.purpose) !== -1 && product.price <= this.price && product.size <= this.size)
              }
              else if(this.os !== 'No Preference' && this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size !== 'No Preference' && this.processor === 'No Preference'){
                return this.$store.state.products.all.filter(product => product.os === this.os && product.company === this.company && product.purpose.indexOf(this.purpose) !== -1 && product.size <= this.size)
              }
              else if(this.os !== 'No Preference' && this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                return this.$store.state.products.all.filter(product => product.os === this.os && product.company === this.company && product.purpose.indexOf(this.purpose) !== -1 && product.price <= this.price)
              }
              else if(this.os !== 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                return this.$store.state.products.all.filter(product => product.os === this.os && product.purpose.indexOf(this.purpose) !== -1)
              }
              else if(this.os !== 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                return this.$store.state.products.all.filter(product => product.os === this.os && product.purpose.indexOf(this.purpose) !== -1 && product.price <= this.price)
              }
              else if(this.os !== 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor === 'No Preference'){
                return this.$store.state.products.all.filter(product => product.os === this.os && product.purpose.indexOf(this.purpose) !== -1 && product.price <= this.price && product.size <= this.size)
              }
              else if(this.os !== 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor !== 'No Preference'){
                return this.$store.state.products.all.filter(product => product.os === this.os && product.purpose.indexOf(this.purpose) !== -1 && product.price <= this.price && product.size <= this.size && product.processor.indexOf(this.processor) !== -1)
              }
              else if(this.os !== 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                return this.$store.state.products.all.filter(product => product.os === this.os && product.purpose.indexOf(this.purpose) !== -1)
              }
              else if(this.os !== 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                return this.$store.state.products.all.filter(product => product.os === this.os && product.purpose.indexOf(this.purpose) !== -1 && product.price <= this.price)
              }
              else if(this.os !== 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor === 'No Preference'){
                return this.$store.state.products.all.filter(product => product.os === this.os && product.purpose.indexOf(this.purpose) !== -1 && product.price <= this.price && product.size <= this.size)
              }
              else if(this.os !== 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor !== 'No Preference'){
                return this.$store.state.products.all.filter(product => product.os === this.os && product.purpose.indexOf(this.purpose) !== -1 && product.price <= this.price && product.size <= this.size && product.processor.indexOf(this.processor) !== -1)
              }
              else if(this.os !== 'No Preference' && this.company === 'No Preference' && this.purpose === 'No Preference' && this.price !== 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                return this.$store.state.products.all.filter(product => product.os === this.os && product.price <= this.price)
              }
              else if(this.os !== 'No Preference' && this.company === 'No Preference' && this.purpose === 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor === 'No Preference'){
                return this.$store.state.products.all.filter(product => product.os === this.os && product.price <= this.price && product.size <= this.size)
              }
              else if(this.os !== 'No Preference' && this.company === 'No Preference' && this.purpose === 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor !== 'No Preference'){
                return this.$store.state.products.all.filter(product => product.os === this.os && product.price <= this.price && product.size <= this.size && product.processor.indexOf(this.processor) !== -1)
              }
              else if(this.os !== 'No Preference' && this.company === 'No Preference' && this.purpose === 'No Preference' && this.price === 'No Preference' && this.size !== 'No Preference' && this.processor === 'No Preference'){
                return this.$store.state.products.all.filter(product => product.os === this.os && product.size <= this.size)
              }
              else if(this.os !== 'No Preference' && this.company === 'No Preference' && this.purpose === 'No Preference' && this.price === 'No Preference' && this.size !== 'No Preference' && this.processor !== 'No Preference'){
                return this.$store.state.products.all.filter(product => product.os === this.os && product.size <= this.size && product.processor.indexOf(this.processor) !== -1)
              }
              else if(this.os !== 'No Preference' && this.company === 'No Preference' && this.purpose === 'No Preference' && this.price === 'No Preference' && this.size === 'No Preference' && this.processor !== 'No Preference'){
                return this.$store.state.products.all.filter(product => product.os === this.os && product.processor.indexOf(this.processor) !== -1)
              }
              else if(this.os === 'No Preference' && this.company !== 'No Preference' && this.purpose === 'No Preference' && this.price === 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                return this.$store.state.products.all.filter(product => product.company === this.company)
              }
              else if(this.os === 'No Preference' && this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                return this.$store.state.products.all.filter(product => product.company === this.company && product.purpose.indexOf(this.purpose) !== -1)
              }
              else if(this.os === 'No Preference' && this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                return this.$store.state.products.all.filter(product => product.company === this.company && product.purpose.indexOf(this.purpose) !== -1 && product.price <= this.price)
              }
              else if(this.os === 'No Preference' && this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor === 'No Preference'){
                return this.$store.state.products.all.filter(product => product.company === this.company && product.purpose.indexOf(this.purpose) !== -1 && product.price <= this.price && product.size <= this.size)
              }
              else if(this.os === 'No Preference' && this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor !== 'No Preference'){
                return this.$store.state.products.all.filter(product => product.company === this.company && product.purpose.indexOf(this.purpose) !== -1 && product.price <= this.price && product.size <= this.size && product.processor.indexOf(this.processor) !== -1)
              }
              else if(this.os === 'No Preference' && this.company !== 'No Preference' && this.purpose === 'No Preference' && this.price !== 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                return this.$store.state.products.all.filter(product => product.company === this.company && product.price <= this.price)
              }
              else if(this.os === 'No Preference' && this.company !== 'No Preference' && this.purpose === 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor === 'No Preference'){
                return this.$store.state.products.all.filter(product => product.company === this.company && product.price <= this.price && product.size <= this.size)
              }
              else if(this.os === 'No Preference' && this.company !== 'No Preference' && this.purpose === 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor !== 'No Preference'){
                return this.$store.state.products.all.filter(product => product.company === this.company && product.price <= this.price && product.size <= this.size && product.processor.indexOf(this.processor) !== -1)
              }
              else if(this.os === 'No Preference' && this.company !== 'No Preference' && this.purpose === 'No Preference' && this.price === 'No Preference' && this.size !== 'No Preference' && this.processor === 'No Preference'){
                return this.$store.state.products.all.filter(product => product.company === this.company && product.size <= this.size)
              }
              else if(this.os === 'No Preference' && this.company !== 'No Preference' && this.purpose === 'No Preference' && this.price === 'No Preference' && this.size !== 'No Preference' && this.processor !== 'No Preference'){
                return this.$store.state.products.all.filter(product => product.company === this.company && product.size <= this.size && product.processor.indexOf(this.processor) !== -1)
              }
              else if(this.os === 'No Preference' && this.company !== 'No Preference' && this.purpose === 'No Preference' && this.price === 'No Preference' && this.size === 'No Preference' && this.processor !== 'No Preference'){
                return this.$store.state.products.all.filter(product => product.company === this.company && product.processor.indexOf(this.processor) !== -1)
              }
              else if(this.os === 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                return this.$store.state.products.all.filter(product => product.purpose.indexOf(this.purpose) !== -1)
              }
              else if(this.os === 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                return this.$store.state.products.all.filter(product => product.purpose.indexOf(this.purpose) !== -1 && product.price <= this.price)
              }
              else if(this.os === 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor === 'No Preference'){
                return this.$store.state.products.all.filter(product => product.purpose.indexOf(this.purpose) !== -1 && product.price <= this.price && product.size <= this.size)
              }
              else if(this.os === 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor !== 'No Preference'){
                return this.$store.state.products.all.filter(product => product.purpose.indexOf(this.purpose) !== -1 && product.price <= this.price && product.size <= this.size && product.processor.indexOf(this.processor) !== -1)
              }
              else if(this.os === 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size !== 'No Preference' && this.processor === 'No Preference'){
                return this.$store.state.products.all.filter(product => product.purpose.indexOf(this.purpose) !== -1 && product.size <= this.size)
              }
              else if(this.os === 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size !== 'No Preference' && this.processor !== 'No Preference'){
                return this.$store.state.products.all.filter(product => product.purpose.indexOf(this.purpose) !== -1 && product.size <= this.size && product.processor.indexOf(this.processor) !== -1)
              }
              else if(this.os === 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size !== 'No Preference' && this.processor === 'No Preference'){
                return this.$store.state.products.all.filter(product => product.purpose.indexOf(this.purpose) !== -1 && product.size <= this.size)
              }
              else if(this.os === 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size === 'No Preference' && this.processor !== 'No Preference'){
                return this.$store.state.products.all.filter(product => product.purpose.indexOf(this.purpose) !== -1 && product.processor.indexOf(this.processor) !== -1)
              }
              else if(this.os === 'No Preference' && this.company === 'No Preference' && this.purpose === 'No Preference' && this.price !== 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                return this.$store.state.products.all.filter(product => product.price <= this.price)
              }
              else if(this.os === 'No Preference' && this.company === 'No Preference' && this.purpose === 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor === 'No Preference'){
                return this.$store.state.products.all.filter(product => product.price <= this.price && product.size <= this.size)
              }
              else if(this.os === 'No Preference' && this.company === 'No Preference' && this.purpose === 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor !== 'No Preference'){
                return this.$store.state.products.all.filter(product => product.price <= this.price && product.size <= this.size && product.processor.indexOf(this.processor) !== -1)
              }
              else if(this.os === 'No Preference' && this.company === 'No Preference' && this.purpose === 'No Preference' && this.price !== 'No Preference' && this.size === 'No Preference' && this.processor !== 'No Preference'){
                return this.$store.state.products.all.filter(product => product.price <= this.price && product.processor.indexOf(this.processor) !== -1)
              }
              else if(this.os === 'No Preference' && this.company === 'No Preference' && this.purpose === 'No Preference' && this.price === 'No Preference' && this.size !== 'No Preference' && this.processor === 'No Preference'){
                return this.$store.state.products.all.filter(product => product.size <= this.size)
              }
              else if(this.os === 'No Preference' && this.company === 'No Preference' && this.purpose === 'No Preference' && this.price === 'No Preference' && this.size !== 'No Preference' && this.processor !== 'No Preference'){
                return this.$store.state.products.all.filter(product => product.size <= this.size && product.processor.indexOf(this.processor) !== -1)
              }
              else if(this.os === 'No Preference' && this.company === 'No Preference' && this.purpose === 'No Preference' && this.price === 'No Preference' && this.size === 'No Preference' && this.processor !== 'No Preference'){
                return this.$store.state.products.all.filter(product => product.processor.indexOf(this.processor) !== -1)
              }
      else{
        return this.$store.state.products.all
      }
    }
}
}
</script>
