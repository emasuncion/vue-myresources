<template>
    <div>
        <div id="main-footer">
            <nav class="navbar navbar-default go-footer upper">
                <div class="container">
                    <ul class="nav navbar-nav">
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/myresources" id="footer-resources" class="front-ajax-btn homepage-login">
                            My Resources</router-link></li>
                        <li><router-link to="/support">Support</router-link></li>
                        <li><router-link to="/contactus">Contact Us</router-link></li>
                    </ul>
                </div>
            </nav>

            <nav class="navbar navbar-inverse go-footer middle">
                <div class="container">
                    <p class="navbar-text" style="width: 100%;text-align: center">© 2018 Cambridge University
                        Press Australia and New Zealand · ABN 28 508 204 178 · <a href="/privacy">Privacy
                            Statement</a> ·
                        <a href="/terms" id="footer-terms">Terms Of Use</a>
                    </p>
                </div>
            </nav>

            <nav class="navbar navbar-default go-footer lower" @click="showCookies">
                <div class="container">
                    <p class="navbar-text">Cookies</p>
                </div>
            </nav>
        </div>

        <div id="cookie-info" class="navbar-inverse go-footer cookie-info" style="display: none;">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"><br/>
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-10" id="cookie-info-warning">
                                    <h1 style="color:white;">
                                        <IWhiteSVG id="cookie-point" style="margin-left: 2px;"/>
                                        <span class="svg-text"
                                              id="cookie-info-warning-text">Cambridge GO uses cookies</span>
                                    </h1>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-2" id="cookie-info-dismiss-div"
                                     @click="hideCookies">
                                    <a id="dismiss-cookie" class="pull-right" style="color:white;">
                                        <span class="svg-text" id="cookie-info-dismiss-text">Dismiss</span>
                                        <DismissSVG id="dismiss-cookie-svg" style="margin-left: 2px;"/>
                                    </a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <p style="color:white;">
                                        Our site uses cookies to distinguish you from other users. This helps us to provide you with a better experience while you browse and allows us to improve our site.</p>
                                </div>
                                <div class="col-lg-2 col-lg-offset-4 col-md-3 col-md-offset-3 col-sm-4
                                col-sm-offset-4 col-xs-12 text-center">
                                    <a href="/findoutmore"
                                       class="bn btn-info btn-lg btn-black-text btn-block pull-right"
                                       style="opacity: 1;">
                                        Find out more </a>
                                </div>
                            </div>
                        </div>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
        <div id="loadTeamp" style="display: none;"></div>
    </div>
</template>

<script>
    import DismissSVG from '@/assets/svgs/dismiss.svg'
    import IWhiteSVG from '@/assets/svgs/iWhite.svg'
  export default {
    name: 'Footer',
    components: {
        DismissSVG,
        IWhiteSVG
    },
    methods: {
      showCookies () {
        document.getElementById('cookie-info').style.display = 'block'
      },
      hideCookies () {
        document.getElementById('cookie-info').style.display = 'none'
      }
    }
  }
</script>
