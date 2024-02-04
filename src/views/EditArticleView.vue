<template>
  <p class="text-center display-2">Edit article</p>
  <Loader v-if="isLoading" class="offset-md-3"/>
  <ArticleFormm
      v-else-if="!isLoading && article"
      :initialValue="initialValue"
      :onSubmitHandler="editArticleHandler"
      :clickText="'Edit article'"
  />
</template>

<script>
import {mapState} from 'vuex'
import ArticleFormm from "@/components/ArticleFormm.vue";
import Loader from "@/ui-components/Loading.vue";
export default {
  components: {Loader, ArticleFormm},
  methods: {
    editArticleHandler(article) {
      this.$store.dispatch("updateHandler", {article: article, slug: this.$route.params.slug})
          .then(() => this.$router.push('/'))
    },
  },
  computed: {
    ...mapState({
      article: state => state.articles.articleDetail,
      isLoading: state => state.articles.isLoading,
    }),
    initialValue(){
      return{
        title: this.article.title,
        description: this.article.description,
        body: this.article.body
      }
    }
  },
  mounted() {
    this.$store.dispatch('articleDetail', this.$route.params.slug)
  },
}
</script>