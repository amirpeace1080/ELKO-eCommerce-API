<template>
  <div class="about">
    <Navbar />
    <h3> About Page... </h3>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'AboutView',
  components: {
    Navbar
  },
  created() {
    this.$store.dispatch('account').then((res) => {
      console.log('hello', res);
    })
  }
}
</script>
