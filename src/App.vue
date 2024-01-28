<template>
  <div>
    <div class="container">
      <Navbar/>
      <RouterView/>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: {Navbar,},

  mounted() {
    this.$store.dispatch('getUser')
  }
}
</script>

<style></style>