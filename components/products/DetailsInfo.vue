<template>
    <div class="col-lg-12 col-md-12">
        <div class="tab products-details-tab">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <ul class="tabs">
                        <li>
                            <div class="dot"></div> About {{namel}}
                        </li>
                    </ul>
                </div>

                <div class="col-lg-6 col-md-6">
                                        <ul>
                                            <li>RAM: {{ram}} GB</li>
                                            <li>os: {{os}}</li>
                                            <li>processor: {{processor}}</li>
                                            <li v-if="storage > 999">storage: {{storage/1000}} TB</li>
                                            <li v-else>Storage: {{storage}} GB</li>
                                            <li>weight: {{weight}} Pounds</li>
                                            <li>battery life: {{batterylife}} Pounds</li>
                                            <li>GPU: {{gpu}} Pounds</li>
                                        </ul>
                                    </div>

                <div class="col-lg-12 col-md-12">
                    <div class="tab_content">
                        <div class="tabs_item">
                            <div class="products-details-tab-content">
                                <p>{{description}}.</p>
                                  </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            getExistPId: false,
            quantity: 1
        }
    },
    props: ['id', 'namel', 'price', 'image', 'star1', 'star2', 'star3', 'star4', 'star5', 'link', 'description', 'ram', 'os', 'processor', 'storage', 'weight', 'gpu', 'batterylife'],
    methods: {
    }
}
</script>
