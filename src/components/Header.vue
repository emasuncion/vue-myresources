<template>
    <div>
        <nav class="navbar navbar-inverse navbar-fixed-top' go-header"
             id="go-header">
            <div class="container">
                <br/>
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <input type="hidden" id="log-state" value="Errol"/>
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
                    </button>
                    <a class="navbar-brand" href="/" id="header-logo">&nbsp;</a>
                </div>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li><router-link to="/" id="header-home">
                            <svg class="icon icon-home svg-white" viewBox="0 0 32 32">
                                <use xlink:href="#icon-home"></use>
                            </svg>
                            <span class="svg-text">Home</span>
                        </router-link>
                        </li>
                        <li><router-link to="/support" id="header-support">
                            <svg class="icon icon-home svg-white" viewBox="0 0 32 32">
                                <use xlink:href="#icon-support"></use>
                            </svg>
                            <span class="svg-text">Support</span></router-link>
                        </li>

                        <li>
                            <a href="https://cambridge.edu.au/education/"
                               target="_blank"
                               rel="noopener noreferrer"
                               id="header-store">
                                <svg class="icon icon-home svg-white" viewBox="0 0 32 32">
                                    <use xlink:href="#icon-store"></use>
                                </svg>
                                <span class="svg-text">Store</span></a>
                        </li>
                        <li><router-link to="/contact" class="front-ajax-btn" id="header-contact">
                            <svg class="icon icon-home svg-white" viewBox="0 0 32 32">
                                <use xlink:href="#icon-contact"></use>
                            </svg>
                            <span class="svg-text">Contact Us</span></router-link>
                        </li>
                    </ul>
                    <form class="navbar-form navbar-right">
                        <div class="row">
                            <div class="col-lg-6">
                                <div id="header-login"
                                     href="/user_landing"
                                     class="btn btn-success btn-block btn-black-text front-ajax-btn"
                                     style="text-align:left;font-size: 16px;">
                                    <LoginSVG/>
                                    <span class="svg-text">Vue Group</span>
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
                    </form>
                </div>
            </div>
            <br/>
        </nav>
        <!--- You are here Home -->
        <div class="breadcrumb-container">
            <div class="container" id="breadcrumb-row">
                <div class="col-lg-12">
                    <br/>
                    <ol class="breadcrumb">
                        <li class="crumb-head">
                            <BreadCrumbSVG/>
                            <span>You are here:</span>
                        </li>
                        <li class="activeactive">
                            <router-link to="/">Home</router-link>
                        </li>
                    </ol>
                    <!--- Activate Component -->
                    <div class="row">
                        <Activate v-show="$route.path === '/myresources'"/>
                        <ActivateLogin v-show="$route.path === '/'" />
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
  import LoginSVG from '@/assets/svgs/login.svg'
  import SearchSVG from '@/assets/svgs/search.svg'
  import BreadCrumbSVG from '@/assets/svgs/breadcrumb.svg'
  import Activate from './Activate'
  import ActivateLogin from './ActivateLogin'

  export default {
    name: 'Header',
    components: {
      LoginSVG,
      SearchSVG,
      BreadCrumbSVG,
      Activate,
      ActivateLogin
    }
  }
</script>
