<template>
    <div>
    <nav class="navbar navbar-inverse navbar-fixed-top' go-header"
     id="go-header">
    <div class="container">
        <br/>
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <input type="hidden" id="log-state" value="Errol"/>
            <button href="/go/menu" type="button" class="navbar-toggle front-ajax-btn"
                    id="toggle-menu">
                <svg viewBox="0 0 32 32" class="svg-white">
                    <use xlink:href="#icon-menu"></use>
                </svg>
            </button>
            <a href="/go" class="navbar-toggle front-ajax-btn" id="toggle-menu-close" style="display:none;">
                <svg viewBox="0 0 32 32">
                    <use xlink:href="#icon-menu_close"></use>
                </svg>
            </a>
            <button href="/go/search" type="button"
                    class="navbar-toggle go-toggle front-ajax-btn" id="toggle-browse">
                <svg viewBox="0 0 32 32" class="svg-mid svg-white">
                    <use xlink:href="#icon-browse"></use>
                </svg>
            </button>

            <button href="/go/user_landing"
                    type="button" class="navbar-toggle go-toggle front-ajax-btn" id="toggle-login">
                <svg viewBox="0 0 48 48">
                    <use xlink:href="#icon-account"></use>
                </svg>
            </button>
            <a class="navbar-brand" href="/go" id="header-logo">&nbsp;</a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li><a href="/go" id="header-home">
                        <svg class="icon icon-home svg-white" viewBox="0 0 32 32">
                            <use xlink:href="#icon-home"></use>
                        </svg>
                        <span class="svg-text">Home</span>
                    </a>
                </li>
                <li><a href="/go/support" id="header-support">
                        <svg class="icon icon-home svg-white" viewBox="0 0 32 32">
                            <use xlink:href="#icon-support"></use>
                        </svg>
                        <span class="svg-text">Support</span></a>
                </li>

                <li>
                    <!-- ANZGO-3725 Modified by Shane Camus 05/17/18 -->
                    <a href="https://cambridge.edu.au/education/"
                       target="_blank"
                       rel="noopener noreferrer"
                       id="header-store">
                        <svg class="icon icon-home svg-white" viewBox="0 0 32 32">
                            <use xlink:href="#icon-store"></use>
                        </svg>
                        <span class="svg-text">Store</span></a>
                </li>
                <li><a href="/go/contact" class="front-ajax-btn" id="header-contact">
                        <svg class="icon icon-home svg-white" viewBox="0 0 32 32">
                            <use xlink:href="#icon-contact"></use>
                        </svg>
                        <span class="svg-text">Contact Us</span></a>
                </li>
            </ul>
            <form class="navbar-form navbar-right">
                <div class="row">
                    <div class="col-lg-6">
                        <div id="header-login"
                             href="/go/user_landing"
                             class="btn btn-success btn-block btn-black-text front-ajax-btn"
                             style="text-align:left;font-size: 16px;">
                            <svg>
                                <use xlink:href="#icon-account">
                                </use>
                            </svg>
                            <LoginSVG />
                            <span class="svg-text">Errol</span>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div id="header-browse" href="/go/search"
                             class="btn btn-info btn-block btn-black-text front-ajax-btn"
                             style="text-align:left;font-size: 16px;">
                            <svg>
                                <use xlink:href="#icon-browse"></use>
                            </svg>
                            <SearchSVG />
                            <span class="svg-text">Browse</span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <br/>
</nav>
<div class="container breadcrumb-container">
    <div class="row" id="breadcrumb-row">
        <div class="col-lg-12">
            <br/>
            <ol class="breadcrumb">
                <li class="crumb-head">
                    <svg>
                        <use xlink:href="#icon-breadcrumbs"></use>
                    </svg>
                    <BreadCrumbSVG/>
                    <span>You are here:</span>
                </li>
                <li class="activeactive"><a
                            href="/go">Home</a></li>
            </ol>
        </div>
    </div>
</div>
<br/>
<br/>
<!-- do not delete.  -->
<input type="hidden" id="login-text" value="Errol"/>
<br/>
</div>
</template>

<script>
    import LoginSVG from '@/assets/svgs/login.svg'
    import SearchSVG from '@/assets/svgs/search.svg'
    import BreadCrumbSVG from '@/assets/svgs/breadcrumb.svg'
    export default {
        name: 'Header',
        components: {
            LoginSVG,
            SearchSVG,
            BreadCrumbSVG
        }
    }
</script>
