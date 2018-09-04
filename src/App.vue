<template>
  <div>
  	<Header />
  	<Resources />
  	<Footer />
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Resources from '@/components/Resources'
  import Footer from '@/components/Footer'

  export default {
    name: 'app',
    components: {
      Header,
      Resources,
      Footer
    }
  }
</script>
