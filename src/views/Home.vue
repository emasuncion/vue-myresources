<template>
  <div class="home">
    <Home/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header'
import Home from '@/components/Home'

export default {
  name: 'home',
  components: {
    Header,
    Home
  }
}
</script>
