<template>
    <div>
        <Header/>
        <Sort v-show="$route.path === '/myresources'"/>
        <Resources v-show="$route.path === '/myresources'"/>
        <Footer/>
    </div>
</template>

<script>
    import Header from '@/components/Header'
    import Home from '@/components/Home'
    import Sort from '@/components/Sort'
    import Footer from '@/components/Footer'
    import Resources from '@/components/Resources'

    export default {
        name: 'app',
        components: {
            Header,
            Home,
            Sort,
            Resources,
            Footer
        }
    }
</script>
