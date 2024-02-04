<template>
  <p class="text-center display-2">Create Article</p>
  <ArticleFormm
      :initialValue="initialValue"
      :onSubmitHandler="createArticleHandler"
      :clickText = "'Create article'"
  />
</template>

<script>
import Input from "@/ui-components/Input.vue";
import TextArea from "@/ui-components/TextArea.vue";
import Button from "@/ui-components/Button.vue";
import {mapState} from "vuex";
import ArticleFormm from "@/components/ArticleFormm.vue";

export default {
  components: {ArticleFormm, Button, TextArea, Input},
  data() {
    return {
      title: '',
      description: '',
      body: '',
    }
  },


  methods: {
    createArticleHandler(article) {
      this.$store.dispatch('createArticle', article)
      this.$router.push('/')
    }
  },

  computed: {
    ...mapState({
      isLoading: state => state.control.isLoading
    }),
    initialValue() {
      return{
        title: '',
        description: '',
        body: ''
      }
    }
  }


}
</script>

<style></style>