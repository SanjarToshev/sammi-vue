<template>
  <div v-if="article">
    <div class="row">
      <div class="col-12">
        <p class="fs-2">{{ article.title }}</p>
      </div>
      <div class="col-md-12 col-ld-8  mt-3">
        <p class="opacity-75">Description:</p>
        <p class="font-monospase">{{ article.description }}</p>
      </div>
      <div class="col-6 col-ld-2  mt-3">
        <p class="opacity-75">Created at:</p>
        <p class="font-monospase">{{ new Date(article.createdAt).toLocaleDateString('us') }}</p>
      </div>
      <div class="col-6 col-ld-2 mt-3">
        <p class="opacity-75">Updated at:</p>
        <p class="font-monospase">{{ new Date(article.updatedAt).toLocaleDateString('us') }}</p>
      </div>
      <div class="col-lg-4 mt-3">
        <div class="d-flex align-items-center gap-3">
          <div class="d-flex justify-content-center align-items-center bg-primary"
               style=" width: 50px; height: 50px; border-radius: 100%">
            <span class="text-light text-uppercase fw-bold">{{ article.author.username[0] }}</span>
          </div>
          <div class="fw-bold">
            {{ article.author.username }}
          </div>
        </div>
        <div class="mt-2">
          {{article.author.bio}}</div>
      </div>
      <div class="col-lg-8  mt-3">
        <p class="opacity-75">Body:</p>
        <p class="font-monospase"> {{ article.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import Loader from "@/ui-components/Loading.vue";

export default {
  components: {Loader},
  computed: {
    ...mapState({
      article: state => state.articles.articleDetail
    })
  }

}
</script>

<style></style>

