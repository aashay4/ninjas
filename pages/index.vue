<template>
    <div>
      <div class="main-banner main-banner-three item-bg4">
          <div class="d-table">
              <div class="d-table-cell">
                  <div class="container">
                      <div class="main-banner-content white-color">
                          <span>Check out our collection</span>
                          <h1>PLASTIC OPTIC FIBER CABLES!</h1>
                          <p>New Products 2023</p>

                          <button class="btn btn-primary">Shop Cables</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
        <Offerr />
        <TrendingProducts />
        <BestSellers />
        <Offer />
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
              return this.$store.state.products.all.filter(product => product.company === this.company && product.os === this.os && product.price <= this.price && product.size <= this.size && product.purpose.indexOf(this.purpose) !== -1 && product.processor.indexOf(this.processor) !== -1)
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
                    return this.$store.state.products.all.filter(product => product.os === this.os && product.company === this.company && product.purpose.indexOf(this.purpose) !== -1)
                  }
                  else if(this.os !== 'No Preference' && this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.os === this.os && product.company === this.company && product.purpose.indexOf(this.purpose) !== -1 && product.price <= this.price)
                  }
                  else if(this.os !== 'No Preference' && this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.os === this.os && product.company === this.company && product.purpose.indexOf(this.purpose) !== -1 && product.price <= this.price && product.size <= this.size)
                  }
                  else if(this.os !== 'No Preference' && this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size !== 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.os === this.os && product.company === this.company && product.purpose.indexOf(this.purpose) !== -1 && product.size <= this.size)
                  }
                  else if(this.os !== 'No Preference' && this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.os === this.os && product.company === this.company && product.purpose.indexOf(this.purpose) !== -1 && product.price <= this.price)
                  }
                  else if(this.os !== 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.os === this.os && product.purpose.indexOf(this.purpose) !== -1)
                  }
                  else if(this.os !== 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.os === this.os && product.purpose.indexOf(this.purpose) !== -1 && product.price <= this.price)
                  }
                  else if(this.os !== 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.os === this.os && product.purpose.indexOf(this.purpose) !== -1 && product.price <= this.price && product.size <= this.size)
                  }
                  else if(this.os !== 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor !== 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.os === this.os && product.purpose.indexOf(this.purpose) !== -1 && product.price <= this.price && product.size <= this.size && product.processor.indexOf(this.processor) !== -1)
                  }
                  else if(this.os !== 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.os === this.os && product.purpose.indexOf(this.purpose) !== -1)
                  }
                  else if(this.os !== 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.os === this.os && product.purpose.indexOf(this.purpose) !== -1 && product.price <= this.price)
                  }
                  else if(this.os !== 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.os === this.os && product.purpose.indexOf(this.purpose) !== -1 && product.price <= this.price && product.size <= this.size)
                  }
                  else if(this.os !== 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor !== 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.os === this.os && product.purpose.indexOf(this.purpose) !== -1 && product.price <= this.price && product.size <= this.size && product.processor.indexOf(this.processor) !== -1)
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
                    return this.$store.state.products.all.filter(product => product.company === this.company && product.purpose.indexOf(this.purpose) !== -1)
                  }
                  else if(this.os === 'No Preference' && this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size === 'No Preference' && this.processor !== 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.company === this.company && product.purpose.indexOf(this.purpose) !== -1 && product.processor.indexOf(this.processor) !== -1)
                  }
                  else if(this.os === 'No Preference' && this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size !== 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.company === this.company && product.purpose.indexOf(this.purpose) !== -1 && product.size <= this.size)
                  }
                  else if(this.os === 'No Preference' && this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.company === this.company && product.purpose.indexOf(this.purpose) !== -1 && product.price <= this.price)
                  }
                  else if(this.os === 'No Preference' && this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.company === this.company && product.purpose.indexOf(this.purpose) !== -1 && product.price <= this.price && product.size <= this.size)
                  }
                  else if(this.os === 'No Preference' && this.company !== 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor !== 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.company === this.company && product.purpose.indexOf(this.purpose) !== -1 && product.price <= this.price && product.size <= this.size && product.processor.indexOf(this.processor) !== -1)
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
                    return this.$store.state.products.all.filter(product => product.purpose.indexOf(this.purpose) !== -1)
                  }
                  else if(this.os === 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size === 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.purpose.indexOf(this.purpose) !== -1 && product.price <= this.price)
                  }
                  else if(this.os === 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.purpose.indexOf(this.purpose) !== -1 && product.price <= this.price && product.size <= this.size)
                  }
                  else if(this.os === 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price !== 'No Preference' && this.size !== 'No Preference' && this.processor !== 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.purpose.indexOf(this.purpose) !== -1 && product.price <= this.price && product.size <= this.size && product.processor.indexOf(this.processor) !== -1)
                  }
                  else if(this.os === 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size !== 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.purpose.indexOf(this.purpose) !== -1 && product.size <= this.size)
                  }
                  else if(this.os === 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size !== 'No Preference' && this.processor !== 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.purpose.indexOf(this.purpose) !== -1 && product.size <= this.size && product.processor.indexOf(this.processor) !== -1)
                  }
                  else if(this.os === 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size !== 'No Preference' && this.processor === 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.purpose.indexOf(this.purpose) !== -1 && product.size <= this.size)
                  }
                  else if(this.os === 'No Preference' && this.company === 'No Preference' && this.purpose !== 'No Preference' && this.price === 'No Preference' && this.size === 'No Preference' && this.processor !== 'No Preference'){
                    this.options = "All";
                    return this.$store.state.products.all.filter(product => product.purpose.indexOf(this.purpose) !== -1 && product.processor.indexOf(this.processor) !== -1)
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
