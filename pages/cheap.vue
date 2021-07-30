<template>
    <div>
        <div class="page-title-area">
            <div class="container">
                <ul>
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li>Cheap Laptops</li>
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
                                <li><i class="far fa-calendar-alt"></i> July 29, 2021</li>
                                  <li><i class="far fa-user"></i> <a href="#">Adam P Legge</a></li>
                                  </ul>

                              <h1>The Cheap Affordable Laptops for 2021</h1>
                              <blockquote class="wp-block-quote">
                                  <p>In this article, we bring you the best cheap laptops. There are some inexpensive laptops available in the market today that are capable of getting the job done quickly. Select the price that and we will get you the best cheap laptops from our database. Remember one thing, all the affordable laptops won't be able to pull out all the tasks/load that you throw at them. The inexpensive laptops are not as good at performance as all the other gaming laptops. But the laptops on this list are capable of performing all the daily tasks smoothly.</p>
                              </blockquote>
                              <p>If you want more customization options then you can visit our laptop finder tool. With this tool, you can customize price, operating system, laptop size and purpose.</p>
                              <h2>Top Cheap Laptops</h2>
                              <p>
                              <b>1) Acer Aspire 5</b> <br>
                              <p>With good performance, 8 hours of battery life, and an intel core i-3 processor, the Acer Aspire 5 comes at just $399. Apart from that, it offers 8 GB of RAM and 256 GB of storage. With these features, Acer Aspire 5 deserves to be on this list. If you are looking for an all-purpose cheap laptop then you can choose this laptop. This machine is not receiving good reviews when it comes to graphics and display.</p>
                              <a
                                  href="https://amzn.to/3yQWPQJ"
                                  rel="noopener noreferrer nofollow"
                                  class="btn btn-light"
                                  >
                                  Buy Now
                              </a> <hr>
                              <b>2) HP 15</b> <br>
                              <p>If you are looking for a cheap laptop with a huge storage capacity then HP 15 is the right option for you. HP 15 offers 1 TB storage and 8 GB RAM, it is not usual for a machine just around $450. With AMD Ryzen processor, it is a powerful performer.</p>
                              <p>The battery life of this machine is not impressive, it lasts just below 5 hours. Choose this laptop if you are a fan of the AMD Ryzen processor and require a lot of internal storage to save your data.</p>
                              <a
                                  href="https://amzn.to/2RaMJJJ"
                                  rel="noopener noreferrer nofollow"
                                  class="btn btn-light"
                                  >
                                  Buy Now
                              </a> <hr>

                              <b>3) Dell Inspiron 15 3000</b> <br>
                              <p>This is a great performer for day-to-day tasks. Dell Inspiron 15 can be considered as a general-purpose laptop. It offers 4 GB of RAM and 1 TB storage and an Intel Celeron processor. On this machine, you can perform regular daily tasks and store a lot of data. Just like HP 11, you can buy this laptop if you are dealing with a lot of data and requires a lot of storage on your machine.</p>
                              <a
                                  href="https://amzn.to/3uDj3Tg"
                                  rel="noopener noreferrer nofollow"
                                  class="btn btn-light"
                                  >
                                  Buy Now
                              </a> <hr>

                              <b>4) Lenovo Chromebook C340-11</b> <br>
                              <p>Chromebook laptops are often way cheaper but great performers at the same time. Lenovo Chromebook C340 is an inexpensive laptop but a good performer comes with a long-lasting battery of 10-hours. Apart from that, it offers 4GB RAM, 64GB storage, and an Intel Celeron N4000 processor. With just an 11.6 inch screen, you can carry this laptop easily while traveling.</p>

                              <a
                                  href="https://amzn.to/3p8w1qH"
                                  rel="noopener noreferrer nofollow"
                                  class="btn btn-light"
                                  >
                                  Buy Now
                              </a> <hr>
                                </p>

                                <b>5) Lenovo Ideapad 1</b> <br>
                                <p>This is a good all-purpose laptop that offers 4 GB RAM, 64 GB storage, AMD A6-9220E processor, and AMD Radeon graphics. With professional design and good battery life, this machine can be a great choice for college students and businessmen. Dolly audio at such a cheap budget is a plus.</p>

                                <a
                                    href="https://amzn.to/34xg04p"
                                    rel="noopener noreferrer nofollow"
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
                                <h2><span class="dot"></span> Cheap Laptops</h2>
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
      title: 'Cheap laptops 2021',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'List of affordable laptops: 1) Acer Aspire 5, 2) HP 15, 3) Dell Inspiron 15 3000, 4) Lenovo Chromebook C340-11, 5) Lenovo Ideapad 1' },
        { hid: 'robots', name: 'robots', content: 'index,follow' }
      ],
      link: [
 {rel: 'canonical', href: 'https://laptops.ninja/cheap' }
]
    }
  },
  data() {
    return {
      company: 'No Preference',
      purpose: 'No Preference',
      price: 500,
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
