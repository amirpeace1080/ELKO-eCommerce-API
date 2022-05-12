<template>
  <div class="about">
    <Navbar />
    <h3> {{ this.$store.state.token }} </h3>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'AboutView',
  components: {
    Navbar
  }
}
</script>
