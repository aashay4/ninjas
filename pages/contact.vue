<template>
    <div>
        <div class="page-title-area">
            <div class="container">
                <ul>
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>

        <section class="contact-area ptb-60">
            <div class="container">
                <div class="section-title">
                    <h2><span class="dot"></span> Contact Us</h2>
                </div>

                <div class="row">
                    <div class="col-lg-5 col-md-12">
                        <div class="contact-info">
                            <h3>Here to Help</h3>
                            <p>Have a question? You may find an answer in our FAQs. But you can also contact us.</p>

                            <ul class="contact-list">
                                <li><i class="far fa-envelope"></i> Email Us: <a href="mailto:support@laptops.ninja">support@laptops.ninja</a></li>
                            </ul>

                            <h3>Opening Hours:</h3>
                            <ul class="opening-hours">
                                <li><span>Monday:</span> 24 Hours</li>
                                <li><span>Tuesday:</span> 24 Hours</li>
                                <li><span>Wednesday:</span> 24 Hours</li>
                                <li><span>Thursday - Friday:</span> 24 Hours</li>
                                <li><span>Sunday:</span> 24 Hours</li>
                            </ul>

                            <h3>Follow Us:</h3>
                            <ul class="social">
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="#"><i class="fab fa-behance"></i></a></li>
                                <li><a href="#"><i class="fab fa-skype"></i></a></li>
                                <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                                <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-7 col-md-12">
                        <div class="contact-form">
                            <h3>Drop Us A Line</h3>
                            <p>We’re happy to answer any questions you have or provide you with an estimate. Just send us a message in the form below with any questions you may have.</p>

                            <form id="contactForm">
                                <div class="row">
                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <label>Name <span>(required)*</span></label>
                                            <input type="text" name="name" v-model="name" class="form-control" placeholder="Enter your name">
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <label>Email <span>(required)*</span></label>
                                            <input type="email" name="email" v-model="email" class="form-control" placeholder="Enter your Email Address">
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <label>Phone Number <span>(required)*</span></label>
                                            <input type="text" name="phone_number" v-model="phone_number" class="form-control" placeholder="Enter your Phone Number">
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <label>Your Message <span>(required)*</span></label>
                                            <textarea name="message" v-model="message" cols="30" rows="8" class="form-control" placeholder="Enter your Message"></textarea>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <button type="button" @click="writeToFirestore()" class="btn btn-primary">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import {fireDb} from '~/plugins/firebase.js'

  export default {
    head () {
    return {
      title: 'Contact Us!',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: '' },
        { hid: 'robots', name: 'robots', content: 'index,follow' }
      ],
      link: [
 {rel: 'canonical', href: 'https://laptops.ninja/contact' }
]
    }
  },
  data(){
    return {
      name: '',
      email: '',
      phone_number: '',
      message: ''
    }
  },
  methods: {
    async writeToFirestore() {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      var hour = today.getHours();
      var minute = today.getMinutes();
      var second = today.getSeconds();
      today = dd + '_' + mm + '_' + yyyy + '_' + hour + '_' + minute + '_' + second;
  const ref = fireDb.collection("contact").doc(today)
  const document = {
    name: this.name,
    email: this.email,
    phone_number: this.phone_number,
    message: this.message
  }
  try {
    await ref.set(document)
  } catch (e) {
    // TODO: error handling
    console.error(e)
  }
//  this.writeSuccessful = true
}

  }
  }
</script>
