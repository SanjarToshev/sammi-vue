<template>
  <main class="form-signin w-25 m-auto mt-5">
    <form>
      <h1 class="h3 mb-3 fw-normal mt-3">Login</h1>

      <Input :label="'Email address'" :type="'email'"></Input>
      <Input :label="'Password'" :type="'password'" ></Input>
      <Button type="submit">Login</Button>
    </form>
  </main>
</template>

<script>

import Button from "@/ui-components/Button.vue";
import Input from "@/ui-components/Input.vue";

export default {
  components: {Input, Button}
}
</script>

<style>

</style>