<template>
<div>
    <!-- User Component -->
    <div class="container-fluid container-bg-1 resources-container" v-for="data in resources" :key="data.id">
    <br><br>
        <div class="row">
            <div class="col-lg-12 col-nd-12 col-sm-12 col-xs-12">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-2 col-md-3 col-sm-3 col-xs-6">
                            <div class="book-wrap">
                                <div class="load cover">
                                <img src="https://www.staging.cf.cambridge.edu.au/files/cup_content/images/titles/9781107526686_180.jpg" class="book-cover"></div>
                                <div class="undercover" style="border-color: #5c5959;"></div>
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-6 col-sm-5 col-xs-12 rsrc-display">
                            <a :href="'/go/titles/' + data.title.split(' ').join('-')">
                                <h3 class="title-name">{{ data.title }}</h3>
                            </a>
                            <div v-for="sub in data.subscription" :key="sub.index">
                                <br>
                                <p class="subscription-p">
                                    <label>{{ sub.type }}</label>
                                </p>
                                <p v-if="sub.entitlement !== null">
                                    {{ sub.entitlement }}
                                </p>
                                <p>
                                    <strong> {{ sub.expiry }} </strong> <e v-if="sub.accessCode !== null"> ({{ sub.accessCode }}) </e>
                                </p>    
                            </div>
                            <!-- View all Resources -->

                        </div>
                            <!-- Right Handside Launcher -->
                    </div>
                </div>
            </div>
        </div>
        <br><br>
    </div>
    <div class="text-center" v-show="loading"><img :src="spinner"/></div>
</div>    
</template>

<script>
    import dataJson from '../assets/myresources.json'
    import spinner from '../assets/svgs/load.gif'

    export default {
        data() {
            return {
                bottom: false,
                resources: [],
                loading: false,
                spinner
            }
        },
        methods: {
            bottomVisible() {
                const scrollY = window.scrollY
                const visible = document.documentElement.clientHeight
                const pageHeight = document.documentElement.scrollHeight
                const bottomOfPage = visible + scrollY >= pageHeight
                return bottomOfPage || pageHeight < visible
            },
            addResources(count) {
                if (this.resources.length >= dataJson.length){
                    this.loading = false;
                    return;
                }

                this.loading = true
                setTimeout(()=> {
                    if (count > 1) {
                        for (let i = this.resources.length; i < count; i++) {
                            this.resources.push(dataJson[i])
                        }
                    } else {
                        this.resources.push(dataJson[this.resources.length])
                    }
                    this.loading = false
                }, 100)
            }
        },
        watch: {
            bottom(bottom) {
                if (bottom) {
                    this.addResources(1)
                }
            }
        },
        created() {
            window.addEventListener('scroll', () => {
              this.bottom = this.bottomVisible()
            })
            // load 5 initial resources
            this.addResources(5)
        }
    }
</script>
