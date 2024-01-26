<template>
  <ul class="list-group">
    <li v-for="errorMassage in errorMassages"
        :key="errorMassage"
        class="list-group-item list-group-item-danger mt-2"
    >
      {{errorMassage}}
    </li>
  </ul>
</template>

<script>
export default {
props : {
  validationErrors: {
    type: Object,
    required: true
  }
},
  computed: {
  errorMassages() {
    return Object.keys(this.validationErrors).map(name => {
      const msg = this.validationErrors[name].join(', ')
      return `${name} ${msg}`
    })
  }
  }
}
</script>

<style></style>