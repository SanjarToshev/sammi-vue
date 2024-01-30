<template>
  <div class="d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom">
    <a class="d-flex align-items-center link-body-emphasis text-decoration-none">

      <h3 @click="toHomeHandler" style="cursor: pointer">Sammi logo</h3>
    </a>
    <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
      <template v-if="isLoggedIn">
        <RouterLink :to="{name: 'create-article'}" class="me-3 py-2 link-body-emphasis text-decoration-none">Create article</RouterLink>
        <RouterLink :to="{name: 'home'}" class="me-3 py-2 link-body-emphasis text-decoration-none">
          {{user.username}}
        </RouterLink>
        <a href="#" class="me-3 py-2 link-body-emphasis text-decoration-none" @click="logout">Logout</a>
      </template>
      <template v-if="!isLoggedIn">
      <RouterLink :to="{name: 'login'}" class="me-3 py-2 link-body-emphasis text-decoration-none">Login</RouterLink>
        <RouterLink :to="{name: 'register'}" class="me-3 py-2 link-body-emphasis text-decoration-none">Register</RouterLink>
      </template>
    </nav>
  </div>
</template>

<script>
import {logo} from "@/constants/index.js";
import {mapState} from "vuex";

export default {
data(){
  return{
    logo,
  }
},
  computed: {
  ...mapState({
    user: state => state.auth.user,
    isLoggedIn: state => state.auth.isLoggedIn
  })
  },

  methods: {
  toHomeHandler() {
    return this.$router.push({name: 'home'})
  },
  logout() {
    return this.$store.dispatch('logout')
  }
  },
}
</script>

<style></style>