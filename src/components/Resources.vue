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
                            <a class="btn btn-danger btn-block go-btn" v-if="data.expiryStatus === 'expired'"> PURCHASE? </a>
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
                            <div class="view-all-resources" v-if="data.expiryStatus === 'available'">
                                <a class="toggle-rsrc-panel" @click="showResourcesPanel(data.id)">
                                    <img class=view-all-png src="@/assets/svgs/view_all.png"/>
                                    <span class="svg-text">View All Resources</span>
                                </a>
                                <div class="panel panel-default" style="display: none" v-bind:id="'panel-'+data.id">
                                    <div class="panel-body">
                                        <ul>
                                            <li v-for="tabs in data.tabs" :key="tabs.index">
                                                <a class="resource-tabs">
                                                    <span v-bind:class="{view_all_resources_active : tabs.hasAccess, view_all_resources_inactive : !tabs.hasAccess}">{{ tabs.name }}</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        <!-- Expiry -->
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12 text-right" v-if="data.expiryStatus === 'expired'">
                            <a class="expired resource-action" @click="deleteResource(index)">
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

                        <!-- Right Handside Launcher -->
                        <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12 text-right" v-else>
                            <span v-for="tabs in data.tabs" :key="tabs.index">
                                <a v-if="tabs.isLauncher === true"
                                    class="btn btn-default btn-block go-resource-btn edu-green edu-green-pdf edu-downloadables" @click="showModal">
                                    {{ tabs.name }}
                                </a>
                            </span>
                            <modal name="right-hand-side-modal" class="modal-mask" :width="900" :height="800">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" 
                                                class="close" 
                                                data-dismiss="modal" 
                                                aria-label="Close"
                                                @click="hideModal">
                                            <span aria-hidden="true">x</span>
                                        </button>
                                        <h4 class="modal-title" id="generalModalLabel">Sample</h4>
                                    </div>
                                    <div class="modal-body container-bg-2">
                                        <div style="cursor: pointer;">
                                            <p>
                                                <strong>Sample</strong>
                                                <p style="margin-left:10px">1. Sample</p>
                                                <p style="margin-left:10px">2. Sample</p>
                                                <p style="margin-left:10px">3. Sample</p>
                                                <p style="margin-left:10px">4. Sample</p>
                                                <p style="margin-left:10px">5. Sample</p>
                                            <br>
                                            <p>
                                                <strong>Sample</strong>
                                                <p style="margin-left:10px">1. Sample</p>
                                                <p style="margin-left:10px">2. Sample</p>
                                                <p style="margin-left:10px">3. Sample</p>
                                                <p style="margin-left:10px">4. Sample</p>
                                                <p style="margin-left:10px">5. Sample</p>
                                                <p style="margin-left:10px">6. Sample</p>
                                                <p style="margin-left:10px">7. Sample</p>
                                                <p style="margin-left:10px">8. Sample</p>
                                                <p style="margin-left:10px">9. Sample</p>
                                                <p style="margin-left:10px">10. Sample</p>
                                                <p style="margin-left:10px">11. Sample</p>
                                                <p style="margin-left:10px">12. Sample</p>
                                                <p style="margin-left:10px">13. Sample</p>
                                                <p style="margin-left:10px">14. Sample</p>
                                                <p style="margin-left:10px">15. Sample</p>
                                                <p style="margin-left:10px">16. Sample</p>
                                            </p>
                                        </div>
                                            <div class="pdf_info">
                                                <p>
                                                    You are entitled to download and store these PDFs. However they may not be transferred to another party, including other students, as electronic or print versions.</p>
                                                <p>
                                                    To use the enhanced PDF functions, such as note taking, you must download these PDFs to your computer and open them with Adobe Reader 9 or later.</p>
                                                <p>
                                                    The PDF Textbook is designed for full functionality using the latest version of Adobe Reader. The markup function is available in selected PDF readers for the iPad and other devices using iOS. Check your PDF reader specifications. At the time of publication, Adobe Reader, Good Reader and PDF Expert were viable options.</p>
                                                <p>
                                                    Note that some PDF file names may comprise the ISBN and chapter number.</p>

                                                    <br></br>
                                                <table border="0" cellpadding="1" cellspacing="3" style="width: 325px;">
                                                    <tbody>
                                                        <tr>
                                                            <td> 
                                                                You must have Adobe Reader installed to view the PDF files.
                                                            </td>
                                                            <td style="text-align: right;">
                                                                <a href="http://www.adobe.com/go/EN_US-H-GET-READER" target="_blank">
                                                                    <img alt src="http://www.adobe.com/images/shared/download_buttons/get_adobe_reader.png" style="width: 158px; height: 39px;">
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </tbody>                                                
                                                </table>
                                            </div>
                                            
                                    </div>

                                </div>
                            </modal>
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
    import spinner from '../assets/svgs/load.gif'

    export default {
        name: 'Resources',
        data() {
            return {
                bottom: false,
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

            this.addResources(this.$store.state.initialItemCount)
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
            },
            showResourcesPanel(id) {
                var panel = document.getElementById("panel-" + id)
                    if (panel.style.display === "none"){
                        panel.style.display = "block"
                    } else {
                        panel.style.display = "none"
                    }
            },
            showModal() {
                this.$modal.show('right-hand-side-modal');
            },
            hideModal() {
                this.$modal.hide('right-hand-side-modal');
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
