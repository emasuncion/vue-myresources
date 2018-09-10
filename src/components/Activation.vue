<template>
<div class="container-fluid">
    <div class="col-lg-12">
        <br>
        <ol class="breadcrumb" style="visibility: hidden;">
            <li class="crumb-head">
                <svg>
                    <use xlink:href="#icon-breadcrumbs"></use>
                </svg>
                <span>You are here:</span>
            </li>
            <li class="activeactive"><a href="/go/">Home</a></li>

        </ol>
    </div>
    <div class="container container-bg-2">
        <div class="row text-center">
            <div class="col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2" id="messaging">
                &nbsp;
            </div>
            <div class="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2">
                <h1>Activate a new resource</h1>
                <p>Enter the 16 character code found in the front of your textbook, sealed pocket or email.</p>
            </div>
        </div>
    </div>
    <br>
    <div class="container-fluid">
        <div class="row">
            <span 
                class="glyphicon glyphicon-refresh" style="font-size:36px">
            </span>
            <div class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-12">
                <form>
                    <div class="row text-center">
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 text-center">
                            <input placeholder="* * * *" id="accesscode_box1" name="accesscode_box[1]" maxlength="4" type="text" class="accesscodetext form-control go-input text-center">
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 text-center">
                            <input placeholder="* * * *" id="accesscode_box2" name="accesscode_box[2]" maxlength="4" type="text" class="accesscodetext form-control go-input text-center">
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 text-center">
                            <input placeholder="* * * *" id="accesscode_box3" name="accesscode_box[3]" maxlength="4" type="text" class="accesscodetext form-control go-input text-center">
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 text-center">
                            <input placeholder="* * * *" id="accesscode_box4" name="accesscode_box[4]" maxlength="4" type="text" class="accesscodetext form-control go-input text-center">
                        </div>
                    </div>
                    <br>
                    <br>
                    <div class="row text-center">
                        <div class="col-lg-6 col-lg-offset-3 col-xs-8 col-xs-offset-2">
                            <input id="activate_checkbox" type="checkbox">&nbsp;&nbsp;I accept the
                            <a target="_blank" href="/go/terms/">terms of use</a>.
                        </div>
                    </div>
                    <br>
                    <br>
                    <div class="row text-center">
                        <div class="col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-6 col-xs-offset-3">
                            <button class="btn btn-success btn-block btn-lg go-btn" id="activate">
                                <span class=""></span>ACTIVATE
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <input type="hidden" value="/go/activate/processCode/" id="activate_code_url">
    <input type="hidden" value="/go/myresources/" id="myresources_url">
</div>

</template>

<script>
    export default {
        name: 'Activation'
    }
</script>