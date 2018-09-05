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
                                        <span id="textArrange">Arrange</span>
                                        <img src="@/assets/svgs/arrow_down.png"
                                             class="pull-right" id="arrow"/>
                                    </a>
                                    <ul id="arrange-info">
                                        <li @click="sortAZ">A - Z</li>
                                        <li @click="sortZA">Z - A</li>
                                        <li @click="sortOldNew">Oldest - newest</li>
                                        <li @click="sortNewOld">Newest - oldest</li>
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
    import dataJson from '../assets/myresources.json'
    export default {
        name: 'Sort',
        methods: {
            showArrange() {
                document.getElementById("arrange-info").classList.toggle("show-options");
                var arrowDown = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAIVBMVEUAAAB0dHR3d3d4eHh3d3d3d3d2dnZ3d3d3d3d3d3f///8pOBamAAAACXRSTlMACytgn6Wm1fRZyZqwAAAAAWJLR0QKaND0VgAAAD5JREFUKM9jYBhuIHMmEExFEhAHCRQiCTB1zpw5QwFZj+XMmZNRDGGZOdMBRYCxcroAqj0aTWgWMxswDD8AAFwpDjZXZoSWAAAAAElFTkSuQmCC";
                var arrowUp =  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAIVBMVEUAAAB0dHR3d3d4eHh3d3d4eHh3d3d3d3d3d3d3d3f///9uTQU6AAAACXRSTlMACytZWmCf1fQxYGtVAAAAAWJLR0QKaND0VgAAADxJREFUKM9jYBh+gMUAymCC0ipBqAKMgaICKAKsCkwBKALBDAymyAJMQCOZFZAEQAYwBiIJgK1QHXZhCQCdAgNy3U/4xwAAAABJRU5ErkJggg==";
                var changeImg = document.getElementById("arrow");

                changeImg.src = (changeImg.src==arrowDown)? arrowUp : arrowDown;
            },
            sortAZ(){
                document.getElementById('textArrange').innerHTML='A - Z';
            },
            sortZA(){
                document.getElementById('textArrange').innerHTML='Z - A';
            },
            sortOldNew(){
                document.getElementById('textArrange').innerHTML='Oldest - newest';
            },
            sortNewOld(){
                document.getElementById('textArrange').innerHTML='Newest - oldest';
            }
        }
    }
</script>