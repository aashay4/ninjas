<template>
    <div>
        <!-- Start Page Title Area -->
        <div class="page-title-area">
            <div class="container">
                <ul>
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
        <!-- End Page Title Area -->
        <CartItems />

    </div>
</template>

<script>
import CartItems from '../components/cart/CartItems';
export default {
    components: {
        CartItems
    },
    head () {
    return {
      title: '',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: '' },
        { hid: 'robots', name: 'robots', content: 'noindex,nofollow' }
      ],
      link: [
  {rel: 'canonical', href: 'https://laptops.ninja/cart' }
  ]
    }
  }
}
</script>
