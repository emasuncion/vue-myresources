<template>
<div>
    <!-- User Component -->
    <div class="container-fluid container-bg-1 resources-container" v-for="(data, index) in resources" :key="data.id">
    <br><br>
        <div class="row">
            <div class="col-lg-12 col-nd-12 col-sm-12 col-xs-12">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-2 col-md-3 col-sm-3 col-xs-6">
                            <div class="book-wrap">
                                <div class="load cover">
                                <img :src="data.imgSrc" class="book-cover"></div>
                                <div class="undercover" style="border-color: #5c5959;"></div>
                            </div>
                            <a class="btn btn-danger btn-block go-btn" href="#" v-if="data.expiryStatus === 'expired'"> PURCHASE? </a>
                        </div>
                        <div class="col-lg-7 col-md-6 col-sm-5 col-xs-12 rsrc-display">
                            <a :href="'/go/titles/' + data.title.split(' ').join('-')">
                                <h3 class="title-name" v-bind:class="[data.expiryStatus === 'expired' ? 'expired': '']">{{ data.title }}</h3>
                            </a>
                            <div v-if="data.expiryStatus !== 'expired'" v-for="sub in data.subscription" :key="sub.index">
                                <br>
                                <p class="subscription-p">
                                    <label>{{ sub.type }}</label>
                                </p>
                                <p v-if="sub.entitlement !== null">
                                    {{ sub.entitlement }}
                                </p>
                                <p>
                                    <strong> {{ sub.expiry }} </strong><span v-if="sub.accessCode !== null"> ({{ sub.accessCode }}) </span>
                                </p>
                            </div>
                            <!-- View all Resources -->

                        <!-- Right Handside Launcher -->
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12 text-right" v-if="data.expiryStatus === 'expired'">
                            <a class="expired resource-action" href="#" @click="deleteResource(index)">
                                <span class="svg-text delete_resource" style="margin-right:13px">Delete Resource</span>
                                <svg>
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-delete">
                                        <svg id="icon-delete" viewBox="0 0 32 32" width="100%" height="100%"><title>delete</title>
                                            <g id="delete-icons">
                                                <g>
                                                    <path d="M25,8H13.8c-0.5,0-1,0.2-1.4,0.6L5,16l7.4,7.4c0.4,0.4,0.9,0.6,1.4,0.6H25c1.1,0,2-0.9,2-2V10
                    C27,8.9,26.1,8,25,8z M23,19l-1,1l-3-3l-3,3l-1-1l3-3l-3-3l1-1l3,3l3-3l1,1l-3,3L23,19z" fill="#FA6060"></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </use>
                                </svg>
                            </a>
                        </div>
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
    // import dataJson from '../assets/myresources.json'
    import spinner from '../assets/svgs/load.gif'

    export default {
        name: 'Resources',
        data() {
            return {
                bottom: false,
                // resources: this.$store.state.resources,
                loading: false,
                spinner,
                sessionData: this.$store.state.sessionData, // dataJson for current session only
                sortJson: this.$store.state.sortJson
            }
        },
        created() {
            window.addEventListener('scroll', () => {
              this.bottom = this.bottomVisible()
            })

            const initialItemCount = 4
            this.addResources(initialItemCount)
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
                const remaining = this.sessionData.length - this.resources.length
                if (remaining <= 0) {
                    this.loading = false
                    return
                }

                this.loading = true
                const numberOfItemsToAdd = remaining < count ? remaining : count
                const listCount = this.resources.length + numberOfItemsToAdd

                setTimeout(()=> {
                    for (let i = this.resources.length; i < listCount; i++) {
                        this.$store.commit('addResource', this.sessionData[i])
                    }

                    this.loading = false
                }, 100)
            },
            deleteResource(index) {
                this.$store.commit('deleteResource', index)
            }
        },
        watch: {
            bottom(bottom) {
                if (bottom) {
                    const addItemCount = 2
                    this.addResources(addItemCount)
                }
            }
        },
        computed: {
            resources: function() {
                return this.$store.state.resources
            }
        }
    }
</script>
