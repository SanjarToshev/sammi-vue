<template>
  <p class="text-center display-2">Create Article</p>
  <div class="w-50 mx-auto">
    <form @submit.prevent>
      <Input type="text" label="Title"  v-model="title"/>
      <TextArea type="text" label="Description"  v-model="description"></TextArea>
      <TextArea type="text" label="Body" v-model="body"></TextArea>
      <Button @click="createArticleHandler">Create article</Button>
    </form>
  </div>


</template>

<script>
import Input from "@/ui-components/Input.vue";
import TextArea from "@/ui-components/TextArea.vue";
import Button from "@/ui-components/Button.vue";

export default {
  components: {Button, TextArea, Input},
  data() {
    return {
      title: '',
      description: '',
      body: '',
    }
  },

  methods: {
    createArticleHandler() {
      const article = {
        title: this.title,
        description: this.description,
        body: this.body,
        tagList: [],
      }
      console.log(article)
    }
  }


}
</script>

<style></style>