<template>
  <div>
    <Loader v-if="isLoading" class="offset-md-3"/>
  </div>
  <ArticleDetail/>
</template>

<script>

import ArticleDetail from "@/components/ArticleDetail.vue";
import Loader from "@/ui-components/Loading.vue";
import {mapState} from "vuex";

export default {
  components: {
    Loader,
    ArticleDetail
  },
  computed: {
    ...mapState({
      isLoading: state => state.articles.isLoading
    })
  },

  mounted() {
    this.$store.dispatch('articleDetail', this.$route.params.slug)
  }
}
</script>

<style></style>