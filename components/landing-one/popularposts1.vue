<template lang="html">
  <div class="col-lg-4 col-md-4"><br>
      <aside class="widget-area" id="secondary">
          <section class="widget widget_comero_posts_thumb">
              <h3 class="widget-title">Popular Posts</h3>

              <article class="item">
                  <nuxt-link to="/blog-details" class="thumb">
                      <span class="fullimage cover bg1" role="img"></span>
                  </nuxt-link>
                  <div class="info">
                      <time datetime="2021-05-4">May 4, 2021</time>
                      <h4 class="title usmall"><nuxt-link to="/best-budget-laptops">Best Budget Laptops</nuxt-link></h4>
                  </div>

                  <div class="clear"></div>
              </article>

              <article class="item">
                  <nuxt-link to="/hp" class="thumb">
                      <span class="fullimage cover bg2" role="img"></span>
                  </nuxt-link>
                  <div class="info">
                      <time datetime="2021-05-4">May 4, 2021</time>
                      <h4 class="title usmall"><nuxt-link to="/hp">Best HP Laptops</nuxt-link></h4>
                  </div>

                  <div class="clear"></div>
              </article>

                </section>

              </aside>
  </div>

</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
