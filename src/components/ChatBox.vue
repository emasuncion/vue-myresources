<template>
    <div id="rebotifyChatbox">
        <div id="chatboxPanel" class="panel ui-draggable" style="display: none;"></div>
        <div><img :src="chatbox" alt="Rebotify WebChat" id="rebotifyChatboxIconCustom" @click="displayChatBox()"></div>
    </div>
</template>

<script>
    require('@/assets/css/chatbox.css')
    import chatbox from '../assets/svgs/LeaveMessageIconred10.png'

    export default {
        name: 'ChatBox',
        data() {
            return {
                chatbox
            }
        },
        methods: {
            displayChatBox() {
                return
            }
        }
    }
</script>
