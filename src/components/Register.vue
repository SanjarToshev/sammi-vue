<template>
  <main class="form-signin w-25 m-auto mt-5">
    <form>
      <h1 class="h3 mb-3 fw-normal mt-3">Register</h1>
      <Input :label="'Name'" :type="'text'"></Input>
      <Input :label="'Email address'" :type="'text'" ></Input>
      <Input :label="'Password'" :type="'password'" ></Input>

      <Button type="submit" :disabled="isLoading" @click="submitHandler">Register</Button>
    </form>
  </main>
</template>

<script>

import Button from "@/ui-components/Button.vue";
import Input from "@/ui-components/Input.vue";

export default {
  components: {Input, Button},

  computed: {
    isLoading() {
      return this.$store.state.auth.isLoading
    }
  },

  methods: {
    submitHandler(e) {
      e.preventDefault()
      this.$store.dispatch('register')
    }
  }

}




</script>

<style>

</style>