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
        <Offerr />
        <TrendingProducts />
        <BestSellers />
        <Offer />

        <div class="">

          <section class="products-collections-area ptb-60" ref="porto">
            <div class="section-title without-bg">
            <h2><span class="dot"></span> Select Perfect Laptop</h2>
          </div>
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
                                    Choose Laptop Company

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

                            <div class="collapse-widget collections-list-widget">
                                <h3 v-b-toggle.collapse-7 class="collapse-widget-title">
                                    Choose OS

                                    <i class="fas fa-angle-up"></i>
                                </h3>
                                <b-collapse invisible id="collapse-7">
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

                                <b-collapse invisible id="collapse-3">
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

                            <div class="collapse-widget price-list-widget">
                                <h3 v-b-toggle.collapse-6 class="collapse-widget-title">
                                    Laptop Processor
                                    <i class="fas fa-angle-up"></i>
                                </h3>

                                <b-collapse invisible id="collapse-6">
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
                                          <select @change="optionchanged()" v-model="options">
                                              <option value="All">All</option>
                                              <option value="Weight Less then 3 Pounds"> Weight Less then 3 Pounds</option>
                                              <option value="Weight Less then 4 Pounds"> Weight Less then 4 Pounds</option>
                                              <option value="4 GB RAM"> 4 GB RAM</option>
                                              <option value="8 GB RAM"> 8 GB RAM</option>
                                              <option value="16 GB RAM"> 16 GB RAM</option>
                                              <option value="32 GB RAM"> 32 GB RAM</option>
                                              <option value="10 Hours Battery life"> 10+ Hours Battery life</option>
                                              <option value="Intel Core i3 processor"> Intel Core i3 processor</option>
                                              <option value="Intel Core i5 processor"> Intel Core i5 processor</option>
                                              <option value="Intel Core i7 processor"> Intel Core i7 processor</option>
                                              <option value="NVIDIA GeForce RTX 2060"> NVIDIA GeForce RTX 2060</option>
                                              <option value="NVIDIA GeForce GTX 1660 Ti"> NVIDIA GeForce GTX 1660 Ti</option>
                                              <option value="NVIDIA GeForce RTX 2070"> NVIDIA GeForce RTX 2070</option>
                                              <option value="Intel UHD Graphics 620"> Intel UHD Graphics 620</option>
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
        { hid: 'description', name: 'description', content: 'The best laptops of 2021. This list includes best laptop companies like Dell, Apple, HP and many more.' },
        { hid: 'robots', name: 'robots', content: 'index,follow' }
      ],
      link: [
 {rel: 'canonical', href: 'https://laptops.ninja/' }
]
    }
  },
    data(){
      return {
        company: 'No Preference',
        processor: 'No Preference',
        purpose: 'No Preference',
        price: 'No Preference',
        size: 'No Preference',
        os: 'No Preference',
        options: 'All'
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
      clearos(){
        this.os = 'No Preference'
      },
      clearprocessor(){
        this.processor = 'No Preference'
      },
      clearall(){
        this.price = 'No Preference',
        this.company = 'No Preference',
        this.purpose = 'No Preference',
        this.size = 'No Preference',
        this.processor = 'No Preference',
        this.os = 'No Preference'
      },
      toggle() {
          mutations.toggleQuickView();
      },
      optionchanged(){
        this.price = 'No Preference',
        this.company = 'No Preference',
        this.purpose = 'No Preference',
        this.size = 'No Preference',
        this.processor = 'No Preference',
        this.os = 'No Preference'
      }
    },
    computed: {
        products(){
          if(this.os !== 'No Preference' && this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor !== 'No Preference'){
            this.options = "All";
              return this.$store.state.products.all.filter(product => product.company === this.company && product.os === this.os && product.price <= this.price && product.size <= this.size && product.purpose === this.purpose && product.processor.indexOf(this.processor) !== -1)
              }
              else if(this.os !== 'No Preference' && this.company === 'No Preference' && this.purpose === 'No Preference' && this.price === 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                this.options = "All";
                return this.$store.state.products.all.filter(product => product.os === this.os)
                  }
                  else if(this.os !== 'No Preference' && this.company !== 'No Preference' && this.purpose === 'No Preference' && this.price === 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.os === this.os && product.company === this.company)
                  }
                  else if(this.os !== 'No Preference' && this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.os === this.os && product.company === this.company && product.purpose === this.purpose)
                  }
                  else if(this.os !== 'No Preference' && this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.os === this.os && product.company === this.company && product.purpose === this.purpose && product.price <= this.price)
                  }
                  else if(this.os !== 'No Preference' && this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.os === this.os && product.company === this.company && product.purpose === this.purpose && product.price <= this.price && product.size <= this.size)
                  }
                  else if(this.os !== 'No Preference' && this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size !== 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.os === this.os && product.company === this.company && product.purpose === this.purpose && product.size <= this.size)
                  }
                  else if(this.os !== 'No Preference' && this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.os === this.os && product.company === this.company && product.purpose === this.purpose && product.price <= this.price)
                  }
                  else if(this.os !== 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.os === this.os && product.purpose === this.purpose)
                  }
                  else if(this.os !== 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.os === this.os && product.purpose === this.purpose && product.price <= this.price)
                  }
                  else if(this.os !== 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.os === this.os && product.purpose === this.purpose && product.price <= this.price && product.size <= this.size)
                  }
                  else if(this.os !== 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor !== 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.os === this.os && product.purpose === this.purpose && product.price <= this.price && product.size <= this.size && product.processor.indexOf(this.processor) !== -1)
                  }
                  else if(this.os !== 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.os === this.os && product.purpose === this.purpose)
                  }
                  else if(this.os !== 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.os === this.os && product.purpose === this.purpose && product.price <= this.price)
                  }
                  else if(this.os !== 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.os === this.os && product.purpose === this.purpose && product.price <= this.price && product.size <= this.size)
                  }
                  else if(this.os !== 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor !== 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.os === this.os && product.purpose === this.purpose && product.price <= this.price && product.size <= this.size && product.processor.indexOf(this.processor) !== -1)
                  }
                  else if(this.os !== 'No Preference' && this.company === 'No Preference' && this.purpose === 'No Preference' && this.price !== 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.os === this.os && product.price <= this.price)
                  }
                  else if(this.os !== 'No Preference' && this.company === 'No Preference' && this.purpose === 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.os === this.os && product.price <= this.price && product.size <= this.size)
                  }
                  else if(this.os !== 'No Preference' && this.company === 'No Preference' && this.purpose === 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor !== 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.os === this.os && product.price <= this.price && product.size <= this.size && product.processor.indexOf(this.processor) !== -1)
                  }
                  else if(this.os !== 'No Preference' && this.company === 'No Preference' && this.purpose === 'No Preference' && this.price === 'No Preference' && this.size !== 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.os === this.os && product.size <= this.size)
                  }
                  else if(this.os !== 'No Preference' && this.company === 'No Preference' && this.purpose === 'No Preference' && this.price === 'No Preference' && this.size !== 'No Preference' && this.processor !== 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.os === this.os && product.size <= this.size && product.processor.indexOf(this.processor) !== -1)
                  }
                  else if(this.os !== 'No Preference' && this.company === 'No Preference' && this.purpose === 'No Preference' && this.price === 'No Preference' && this.size === 'No Preference' && this.processor !== 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.os === this.os && product.processor.indexOf(this.processor) !== -1)
                  }
                  else if(this.os === 'No Preference' && this.company !== 'No Preference' && this.purpose === 'No Preference' && this.price === 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.company === this.company)
                  }
                  else if(this.os === 'No Preference' && this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.company === this.company && product.purpose === this.purpose)
                  }
                  else if(this.os === 'No Preference' && this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size === 'No Preference' && this.processor !== 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.company === this.company && product.purpose === this.purpose && product.processor.indexOf(this.processor) !== -1)
                  }
                  else if(this.os === 'No Preference' && this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size !== 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.company === this.company && product.purpose === this.purpose && product.size <= this.size)
                  }
                  else if(this.os === 'No Preference' && this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.company === this.company && product.purpose === this.purpose && product.price <= this.price)
                  }
                  else if(this.os === 'No Preference' && this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.company === this.company && product.purpose === this.purpose && product.price <= this.price && product.size <= this.size)
                  }
                  else if(this.os === 'No Preference' && this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor !== 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.company === this.company && product.purpose === this.purpose && product.price <= this.price && product.size <= this.size && product.processor.indexOf(this.processor) !== -1)
                  }
                  else if(this.os === 'No Preference' && this.company !== 'No Preference' && this.purpose === 'No Preference' && this.price !== 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.company === this.company && product.price <= this.price)
                  }
                  else if(this.os === 'No Preference' && this.company !== 'No Preference' && this.purpose === 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.company === this.company && product.price <= this.price && product.size <= this.size)
                  }
                  else if(this.os === 'No Preference' && this.company !== 'No Preference' && this.purpose === 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor !== 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.company === this.company && product.price <= this.price && product.size <= this.size && product.processor.indexOf(this.processor) !== -1)
                  }
                  else if(this.os === 'No Preference' && this.company !== 'No Preference' && this.purpose === 'No Preference' && this.price === 'No Preference' && this.size !== 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.company === this.company && product.size <= this.size)
                  }
                  else if(this.os === 'No Preference' && this.company !== 'No Preference' && this.purpose === 'No Preference' && this.price === 'No Preference' && this.size !== 'No Preference' && this.processor !== 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.company === this.company && product.size <= this.size && product.processor.indexOf(this.processor) !== -1)
                  }
                  else if(this.os === 'No Preference' && this.company !== 'No Preference' && this.purpose === 'No Preference' && this.price === 'No Preference' && this.size === 'No Preference' && this.processor !== 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.company === this.company && product.processor.indexOf(this.processor) !== -1)
                  }
                  else if(this.os === 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.purpose === this.purpose)
                  }
                  else if(this.os === 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.purpose === this.purpose && product.price <= this.price)
                  }
                  else if(this.os === 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.purpose === this.purpose && product.price <= this.price && product.size <= this.size)
                  }
                  else if(this.os === 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor !== 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.purpose === this.purpose && product.price <= this.price && product.size <= this.size && product.processor.indexOf(this.processor) !== -1)
                  }
                  else if(this.os === 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size !== 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.purpose === this.purpose && product.size <= this.size)
                  }
                  else if(this.os === 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size !== 'No Preference' && this.processor !== 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.purpose === this.purpose && product.size <= this.size && product.processor.indexOf(this.processor) !== -1)
                  }
                  else if(this.os === 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size !== 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.purpose === this.purpose && product.size <= this.size)
                  }
                  else if(this.os === 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size === 'No Preference' && this.processor !== 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.purpose === this.purpose && product.processor.indexOf(this.processor) !== -1)
                  }
                  else if(this.os === 'No Preference' && this.company === 'No Preference' && this.purpose === 'No Preference' && this.price !== 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.price <= this.price)
                  }
                  else if(this.os === 'No Preference' && this.company === 'No Preference' && this.purpose === 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                      return this.$store.state.products.all.filter(product => product.price <= this.price && product.size <= this.size)
                  }
                  else if(this.os === 'No Preference' && this.company === 'No Preference' && this.purpose === 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor !== 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.price <= this.price && product.size <= this.size && product.processor.indexOf(this.processor) !== -1)
                  }
                  else if(this.os === 'No Preference' && this.company === 'No Preference' && this.purpose === 'No Preference' && this.price !== 'No Preference' && this.size === 'No Preference' && this.processor !== 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.price <= this.price && product.processor.indexOf(this.processor) !== -1)
                  }
                  else if(this.os === 'No Preference' && this.company === 'No Preference' && this.purpose === 'No Preference' && this.price === 'No Preference' && this.size !== 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                      return this.$store.state.products.all.filter(product => product.size <= this.size)
                  }
                  else if(this.os === 'No Preference' && this.company === 'No Preference' && this.purpose === 'No Preference' && this.price === 'No Preference' && this.size !== 'No Preference' && this.processor !== 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.size <= this.size && product.processor.indexOf(this.processor) !== -1)
                  }
                  else if(this.os === 'No Preference' && this.company === 'No Preference' && this.purpose === 'No Preference' && this.price === 'No Preference' && this.size === 'No Preference' && this.processor !== 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.processor.indexOf(this.processor) !== -1)
                  }
                  else if(this.os === 'No Preference' && this.company === 'No Preference' && this.purpose === 'No Preference' && this.price === 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference' && this.options !== 'All'){
                    if(this.options === "Weight Less then 3 Pounds")
                    {
                    return this.$store.state.products.all.filter(product => product.weight < 3)
                  }
                  else if(this.options === "Weight Less then 4 Pounds")
                  {
                  return this.$store.state.products.all.filter(product => product.weight < 4)
                }
                else if(this.options === "4 GB RAM")
                {
                return this.$store.state.products.all.filter(product => product.ram === 4)
              }
              else if(this.options === "8 GB RAM")
              {
              return this.$store.state.products.all.filter(product => product.ram === 8)
            }
            else if(this.options === "16 GB RAM")
            {
            return this.$store.state.products.all.filter(product => product.ram === 16)
          }
          else if(this.options === "32 GB RAM")
          {
          return this.$store.state.products.all.filter(product => product.ram === 32)
        }
        else if(this.options === "10 Hours Battery life")
        {
        return this.$store.state.products.all.filter(product => product.batterylife > 10)
      }
      else if(this.options === "Intel Core i5 processor")
      {
      return this.$store.state.products.all.filter(product => product.processor.indexOf("i5") !== -1)
    }
    else if(this.options === "Intel Core i3 processor")
    {
    return this.$store.state.products.all.filter(product => product.processor.indexOf("i3") !== -1)
  }
  else if(this.options === "Intel Core i7 processor")
  {
  return this.$store.state.products.all.filter(product => product.processor.indexOf("i7") !== -1)
}
else if(this.options === "NVIDIA GeForce RTX 2060")
{
return this.$store.state.products.all.filter(product => product.gpu === "NVIDIA GeForce RTX 2060")
}
else if(this.options === "NVIDIA GeForce GTX 1660 Ti")
{
return this.$store.state.products.all.filter(product => product.gpu === "NVIDIA GeForce GTX 1660 Ti")
}
else if(this.options === "NVIDIA GeForce RTX 2070")
{
return this.$store.state.products.all.filter(product => product.gpu.indexOf("NVIDIA GeForce RTX 2070") !== -1)
}
else if(this.options === "Intel UHD Graphics 620")
{
return this.$store.state.products.all.filter(product => product.gpu.indexOf("Intel UHD Graphics 620") !== -1)
}
                  }
                    else{
                      this.options = "All";
                      return this.$store.state.products.all
          }
        }
    },
}
</script>
