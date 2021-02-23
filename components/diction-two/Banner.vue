<template>
    <!-- Start Main Banner Area -->
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
    <!-- End Main Banner Area -->
</template>

<script>
export default {
    name: 'Banner',
    methods: {
      scrollMeTo(refName) {
    var element = this.$refs[refName];
    var top = element.offsetTop;

    window.scrollTo(0, top);
  }
    }
}
</script>
