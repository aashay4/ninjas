<template>
    <div>
      <div class="main-banner main-banner-three item-bg4">
          <div class="d-table">
              <div class="d-table-cell">
                  <div class="container">
                      <div class="main-banner-content white-color">
                          <span>New Laptops 2021</span>
                          <h1>Laptops selections made easy for you!</h1>
                          <p>Meet our new arrivals</p>

                          <button @click.prevent="scrollMeTo('porto')" class="btn btn-primary">Shop Laptops</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
        <Facility />
        <Offerr />
        <TrendingProducts />
        <BestSellers />
        <Offer />
        <div>
            <!-- Start Page Title Area -->
            <section class="products-collections-area ptb-60" ref="porto">
                <div class="container">
                    <div class="section-title">
                        <h2><span class="dot"></span> All Laptops</h2>
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
                                      Laptop Company

                                      <i class="fas fa-angle-up"></i>
                                  </h3>
                                  <b-collapse visible id="collapse-2">
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


                              <div class="collapse-widget aside-products-widget">
                                  <h3 class="aside-widget-title">
                                      Popular LAPTOPS
                                  </h3>

                                  <div class="aside-single-products">
                                      <div class="products-image">
                                          <a href="#">
                                              <img src="../assets/img/Apple_MacBook_pro_13.jpg" alt="image">
                                          </a>
                                      </div>

                                      <div class="products-content">
                                          <span><a href="#">Apple Laptop</a></span>
                                          <h3><a href="#">Apple Macbook Pro 13</a></h3>

                                          <div class="product-price">
                                              <span class="new-price">$1799</span>
                                          </div>
                                      </div>
                                  </div>

                                  <div class="aside-single-products">
                                      <div class="products-image">
                                          <a href="#">
                                              <img src="../assets/img/alienware.jpg" alt="image">
                                          </a>
                                      </div>

                                      <div class="products-content">
                                          <span><a href="#">Dell Laptop</a></span>
                                          <h3><a href="#">Alienware m17 R3</a></h3>

                                          <div class="product-price">
                                              <span class="new-price">$3529</span>
                                          </div>
                                      </div>
                                  </div>

                                  <div class="aside-single-products">
                                      <div class="products-image">
                                          <a href="#">
                                              <img src="../assets/img/ACER_NITRO_5.jpg" alt="image">
                                          </a>
                                      </div>

                                      <div class="products-content">
                                          <span><a href="#">Acer Laptop</a></span>
                                          <h3><a href="#">Acer Nitro 5</a></h3>

                                          <div class="product-price">
                                              <span class="new-price">$680</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                                </div>
                      </div>
                        <div class="col-lg-8 col-md-12">
                            <div class="products-filter-options">
                                <div class="row align-items-center">

                                    <div class="col d-flex">
                                        <div class="products-ordering-list">
                                            <select>
                                                <option value="1">Featured</option>
                                                <option value="2">Best Selling</option>
                                                <option value="3">Price Ascending</option>
                                                <option value="4">Price Descending</option>
                                                <option value="5">Date Ascending</option>
                                                <option value="6">Date Descending</option>
                                                <option value="7">Name Ascending</option>
                                                <option value="8">Name Descending</option>
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
                                    :className="`col-lg-3 col-md-3 products-col-item`"
                                ></ProductItem>

                            </div>

                            <QuckView />
                        </div>

                    </div>
                </div>
            </section>
            <!-- End Collections Area -->
        </div>
        <Subscribe />
    </div>
</template>

<script>
import Offerr from '../components/landing-one/Offer';
import Facility from '../components/diction-two/Facility';
import TrendingProducts from '../components/diction-two/TrendingProducts';
import BestSellers from '../components/diction-two/BestSellers';
import Offer from '../components/diction-two/Offer';
import Subscribe from '../components/common/Subscribe';
import Sidebar from '../components/all-products/Sidebar';
import QuckView from '../components/modals/QuckView';
import { mutations } from '../utils/sidebar-util';
import ProductItem from '../components/landing-one/ProductItem';
export default {
    components: {
        Facility,
        TrendingProducts,
        BestSellers,
        Offer,
        Offerr,
        Subscribe,
        QuckView,
        ProductItem
    },
    head () {
    return {
      title: 'Best Laptops of 2021',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'Best laptops of 2021. Travel through this article and know more' },
        { hid: 'robots', name: 'robots', content: 'noindex,nofollow' }
      ],
      link: [
 {rel: 'canonical', href: 'https://laptops.ninja/' }
]
    }
  },
    data(){
      return {
        company: 'No Preference',
        purpose: 'No Preference',
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
            return this.$store.state.products.all.filter(product => product.company === this.company && product.price <= this.price && product.size <= this.size && product.purpose === this.purpose)
              }
          else if(this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size === 'No Preference'){
            return this.$store.state.products.all.filter(product => product.company === this.company && product.price <= this.price && product.purpose === this.purpose)
          }
          else if(this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size === 'No Preference'){
            return this.$store.state.products.all.filter(product => product.company === this.company && product.purpose === this.purpose)
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
            return this.$store.state.products.all.filter(product => product.company === this.company && product.purpose === this.purpose && product.size <= this.size)
          }
          else if(this.company !== 'No Preference' && this.purpose === 'No Preference' && this.price === 'No Preference' && this.size !== 'No Preference'){
            return this.$store.state.products.all.filter(product => product.company === this.company && product.size <= this.size)
          }
          else if(this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size !== 'No Preference'){
            return this.$store.state.products.all.filter(product => product.purpose === this.purpose && product.size <= this.size)
          }
          else if(this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size === 'No Preference'){
            return this.$store.state.products.all.filter(product => product.purpose === this.purpose)
          }
          else if(this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference'){
            return this.$store.state.products.all.filter(product => product.price <= this.price && product.size <= this.size && product.purpose === this.purpose)
              }
          else if(this.company !== 'No Preference' && this.purpose === 'No Preference' && this.price === 'No Preference' && this.size === 'No Preference'){
            return this.$store.state.products.all.filter(product => product.company === this.company)
          }
          else if(this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size === 'No Preference'){
            return this.$store.state.products.all.filter(product => product.price <= this.price && product.company === this.company && product.purpose === this.purpose)
          }
          else if(this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size === 'No Preference'){
            return this.$store.state.products.all.filter(product => product.price <= this.price && product.purpose === this.purpose)
          }
          else if(this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size === 'No Preference'){
            return this.$store.state.products.all.filter(product => product.company === this.company && product.purpose === this.purpose)
          }
          else if(this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size === 'No Preference'){
            return this.$store.state.products.all.filter(product => product.company === this.company && product.price <= this.price && product.purpose === this.purpose)
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
