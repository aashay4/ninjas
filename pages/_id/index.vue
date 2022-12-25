<template>
    <div>
        <!-- Start Page Title Area -->
        <div class="page-title-area">
            <div class="container">
                <ul>
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li>{{product.namel}}</li>
                </ul>
            </div>
        </div>
        <!-- End Page Title Area -->

        <!-- Start Products Details Area -->
        <section class="products-details-area ptb-60">
            <div class="container">
                <div class="row">
                  <!--  <img class="infeed" :src="product.bigimage" :alt="product.namel" style="align: center"> -->
                  <div class="col-lg-6 col-md-6 col-sm-12">
                      <div class="products-page-gallery">
                          <div class="product-page-gallery-main">

                                  <img class="infeed" :src="product.bigimage" :alt="product.namel">
                          </div>
                      </div>
                  </div>
                    <Details
                        :id = "product.id"
                        :namel = "product.namel"
                        :price = "product.price"
                        :image = "product.image"
                        :star1 = "product.star1"
                        :star2 = "product.star2"
                        :star3 = "product.star3"
                        :star4 = "product.star4"
                        :star5 = "product.star5"
                        :link = "product.link"
                        :os = "product.os"
                    />
                    <DetailsInfo
                    :description = "product.description"
                    :namel = "product.namel"
                    :ram = "product.ram"
                    :os = "product.os"
                    :processor = "product.processor"
                    :storage = "product.storage"
                    :weight = "product.weight"
                    :batterylife = "product.batterylife"
                    :gpu = "product.gpu"
                     />
                    <RelatedProducts
                    :id = "product.id" />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import ProductImages from '../../components/products/ProductImages';
import Details from '../../components/products/Details';
import DetailsInfo from '../../components/products/DetailsInfo';
import RelatedProducts from '../../components/products/RelatedProducts';
export default {
    components: {
        ProductImages, Details, DetailsInfo, RelatedProducts
    },
    head () {
    return {
      title: this.product.namel,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: this.product.namel + ' review and specs'},
        { hid: 'robots', name: 'robots', content: 'index,follow' }
      ],
      link: [
 {rel: 'canonical', href: 'https://laptops.ninja/' + this.product.id }
]
    }
  },
    data(){
        return {
            id: this.$route.params.id
        }
    },
    computed: {
        product(){
            return this.$store.state.products.all.find(product => product.id === this.id);
        }
    }
}
</script>
<style media="screen" scoped>
@media (max-width: 370px) {
  .infeed {
    height: 290px;
  }
}
</style>
