<template>
  <div v-if="article">
  <h1>{{ article.title }}</h1>
  </div>
</template>

<script>
import {mapState} from "vuex";
import Loader from "@/ui-components/Loading.vue";

export default  {
  components: {Loader},
  computed: {
    ...mapState({
      article: state => state.articles.articleDetail
    })
  }

}
</script>

<style></style>

