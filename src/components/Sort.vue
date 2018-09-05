<template>
    <div>
        <div class="container-fluid container-bg-1 resources-container">
            <br/>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-9 col-md-9 col-sm-8 col-xs-12">
                                <p>Welcome</p>
                                <h1>Vue Group</h1>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12 text-right">
                                <div class="go-dropdown" @click="showArrange">
                                    <!-- <input type="hidden" name="sort" value="<?php echo $arrange; ?>"> -->
                                    <a href="#" class="btn btn-default">
                                        <img src="@/assets/svgs/arrange.png"/>
                                        <span>Arrange</span>
                                        <img src="@/assets/svgs/arrow_down.png"
                                             class="pull-right" id="arrow"/>
                                    </a>
                                    <ul id="arrange-info" style="display: none;">
                                        <li>A - Z</li>
                                        <li>Z - A</li>
                                        <li>Oldest - newest</li>
                                        <li>Newest - oldest</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Sort',
        methods: {
            showArrange() {
                document.getElementById('arrange-info').style.display = 'block'
                var arrangeElement = document.getElementById("arrange-info");
                arrangeElement.classList.add("show-options");
            }
        }
    }
</script>