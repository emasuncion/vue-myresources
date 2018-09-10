<template>
    <div>
        <nav class="navbar navbar-inverse navbar-fixed-top' go-header"
             id="go-header">
            <div class="container">
                <br/>
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                   <!--  <input type="hidden" id="log-state" value="Errol"/>
                    <button href="/menu" type="button" class="navbar-toggle front-ajax-btn"
                            id="toggle-menu">
                        <svg viewBox="0 0 32 32" class="svg-white">
                            <use xlink:href="#icon-menu"></use>
                        </svg>
                    </button>
                    <a href="/" class="navbar-toggle front-ajax-btn" id="toggle-menu-close" style="display:none;">
                        <svg viewBox="0 0 32 32">
                            <use xlink:href="#icon-menu_close"></use>
                        </svg>
                    </a>
                    <button href="/search" type="button"
                            class="navbar-toggle go-toggle front-ajax-btn" id="toggle-browse">
                        <svg viewBox="0 0 32 32" class="svg-mid svg-white">
                            <use xlink:href="#icon-browse"></use>
                        </svg>
                    </button>

                    <button href="/user_landing"
                            type="button" class="navbar-toggle go-toggle front-ajax-btn" id="toggle-login">
                        <svg viewBox="0 0 48 48">
                            <use xlink:href="#icon-account"></use>
                        </svg>
                    </button> -->
                    <a class="navbar-brand" href="/" id="header-logo">&nbsp;</a>
                </div>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <!-- <form class="navbar-form navbar-right">
                        <div class="row">
                            <div class="col-lg-6">
                                <div id="header-login"
                                     href="/user_landing"
                                     class="btn btn-success btn-block btn-black-text front-ajax-btn"
                                     style="text-align:left;font-size: 16px;">
                                    <PadlockSVG v-if="$route.path === '/'"/>
                                    <LoginSVG v-else/>
                                    <span v-if="$route.path === '/'" class="svg-text">Login</span>
                                    <span v-else class="svg-text">Vue Group</span>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div id="header-browse" href="/search"
                                     class="btn btn-info btn-block btn-black-text front-ajax-btn"
                                     style="text-align:left;font-size: 16px;">
                                    <SearchSVG/>
                                    <span class="svg-text">Browse</span>
                                </div>
                            </div>
                        </div>
                    </form> -->
                </div>
            </div>
            <br/>
        </nav>
        <!--- You are here Home -->
        <div class="breadcrumb-container">
            <div class="container" id="breadcrumb-row">
                <div class="col-lg-12">
                    <br/>
                    <!--- Activation Component -->
                    <div class="row">
                        <Activation v-show="$route.path === '/go/activate/'"/>
                    </div>

                    <!--- Contact Component -->
                    <div class="row">
                        <Contact v-show="$route.path === '/contact'"/>
                    </div>

                </div>
            </div>
        </div>
        <!--- End of You are here Home -->
        <br/>
        <!-- do not delete.  -->
        <input type="hidden" id="login-text" value="Errol"/>
        <br/>
        <div class="row">
            <router-view></router-view>
        </div>
        <br/>
    </div>
</template>

<script>
  import BreadCrumbSVG from '@/assets/svgs/breadcrumb.svg'
  import Activation from '@/components/Activation'
  import Contact from '@/components/Contact'

  export default {
    name: 'ModalHeader',
    components: {
      BreadCrumbSVG,
      Activation,
      Contact
    }
  }
</script>
