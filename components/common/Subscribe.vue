<template>
    <!-- Start Subscribe Area -->
    <section class="subscribe-area ptb-60">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="newsletter-content">
                        <h3>Subscribe to our newsletter</h3>
                        <p>You will receive latest news and offers regarding plastic optic fiber cables</p>
                    </div>
                </div>

                <div class="col-lg-6">
                    <form class="newsletter-form" v-on:submit.prevent>
                        <input type="email" class="form-control" placeholder="Enter your email address" id="email" v-model="subscriptions.email" autocomplete="off">
                        <button type="submit">Subscribe!</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!-- End Subscribe Area -->
</template>
<script>
export default {
    data(){
        return{
            subscriptions: {
                email: '',
                createdAt: new Date()
            }
        }
    },
    methods: {

        validateEmail(email)
        {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
            {
                return true;
            } else {
                return false;
            }
        }
    }
}
</script>
