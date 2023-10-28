<template>
  <div class="row">
    <h1>Пост {{ $route.params.id }}. </h1>

    <div v-if="isPostLoaded">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
    <p v-else>Загружаюсь...</p>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Post",

  data() {
    return {
      post: {},
      isPostLoaded: false,
    }
  },

  methods: {
    async getPost() {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
        this.post = response.data
        this.isPostLoaded = true
      } catch(e) {
        alert('Ошибка')
      }
    }

  },

  mounted() {
    this.getPost()
  }
}
</script>

<style scoped>

</style>