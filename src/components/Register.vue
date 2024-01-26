<template>
  <main class="form-signin w-25 m-auto mt-5">
    <form>
      <h1 class="h3 mb-3 fw-normal mt-3">Register</h1>

      <ValidationError v-if="validationErrors" :validationErrors = "validationErrors"/>

      <Input :label="'Name'" :type="'text'" v-model="username"></Input>
      <Input :label="'Email address'" :type="'text'" v-model="email"></Input>
      <Input :label="'Password'" :type="'password'" v-model="password"></Input>

      <Button type="submit" :disabled="isLoading" @click="submitHandler">Register</Button>
    </form>
  </main>
</template>

<script>
import Button from "@/ui-components/Button.vue";
import Input from "@/ui-components/Input.vue";
import ValidationError from "@/components/ValidationError.vue";
import {mapState} from "vuex";

export default {
  data() {
    return {
      username: '',
      email:  '',
      password: ''
    }
  },

  components: {Input, Button, ValidationError},

  computed: {
    ...mapState({
      isLoading: state => state.auth.isLoading,
      validationErrors: state => state.auth.errors,
    }),
  },

  methods: {
    submitHandler(e) {
      e.preventDefault()
      const data = {
        username: this.username,
        email: this.email,
        password: this.password,
      }
      this.$store.dispatch('register', data)
          .then(user => {
            console.log('User', user)
            this.$router.push({name: 'home'})
          })
          .catch(err => console.log('Error', err))
    }
  }

}




</script>

<style>

</style>