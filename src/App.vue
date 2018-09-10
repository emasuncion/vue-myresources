<template>
    <div>
        <Header v-if="$route.path === '/myresources'"/>
        <Header v-if="$route.path === '/'"/>
        <ModalHeader v-if="$route.path === '/go/activate/'"/>
        <ModalHeader v-if="$route.path === '/contact'"/>
        <Sort v-show="$route.path === '/myresources'"/>
        <Resources v-show="$route.path === '/myresources'"/>
        <Support v-show="$route.path === '/support'"/>
        <Footer/>
        <ChatBox/>
    </div>
</template>

<script>
    import Header from '@/components/Header'
    import Home from '@/components/Home'
    import Sort from '@/components/Sort'
    import Resources from '@/components/Resources'
    import Footer from '@/components/Footer'
    import ChatBox from '@/components/ChatBox'
    import Support from '@/components/Support'
    import ModalHeader from '@/components/ModalHeader'

    export default {
        name: 'app',
        components: {
            Header,
            Home,
            Sort,
            Resources,
            Footer,
            ChatBox,
            Support,
            ModalHeader
        },
        methods: {
            goToTop() {
                window.scrollTo(0, 0)
            }
        },
        watch: {
            '$route' () {
                this.goToTop()
            }
        }
    }
</script>
