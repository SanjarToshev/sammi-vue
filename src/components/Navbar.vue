<template>
  <div class="d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom">
    <a class="d-flex align-items-center link-body-emphasis text-decoration-none">
<!--      <img :src="logo" alt="logo" class="w-25">-->

      <h3 @click="toHomeHandler" style="cursor: pointer">Sammi logo</h3>
    </a>

    <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
      <RouterLink :to="{name: 'login'}" class="me-3 py-2 link-body-emphasis text-decoration-none">Login</RouterLink>
      <RouterLink :to="{name: 'register'}" class="me-3 py-2 link-body-emphasis text-decoration-none">Register</RouterLink>
    </nav>
  </div>
</template>

<script>
import {logo} from "@/constants/index.js";

export default {
data(){
  return{
    logo,
  }
},
  methods: {
  toHomeHandler() {
    return this.$router.push('/')
  },

  },
}
</script>

<style></style>