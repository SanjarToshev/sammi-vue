<template>
<h1>Article Detile</h1>
</template>

<script>
export default {
mounted() {
  this.$store.dispatch('articleDetail', this.$route.params.slug)
}
}
</script>

<style></style>