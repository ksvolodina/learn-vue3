<template>
  <div class="app">

    <Button @click="modalVisibility=true">
      Создать пост
    </Button>

    <Modal v-model:show="modalVisibility">
      <PostForm @create="createPost"/>
    </Modal>

    <PostList
        :posts="posts"
        @onDelete="deletePost"
        v-if="!isPostLoading"
    />

    <div class="offset-top-15" v-else>Идет загрузка...</div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import PostItem from "@/components/PostItem";
import axios from 'axios'

export default {
  name: "App",

  components: {
    PostItem,
    PostForm,
    PostList
  },

  data() {
    return {
      posts: [],
      modalVisibility: false,
      isPostLoading: false,
    }
  },

  methods: {
    createPost(post) {
      this.posts.push(post)
      this.modalVisibility = false
    },

    deletePost(postId){
      this.posts = this.posts.filter(post => post.id !== postId)
    },

    async fetchPosts() {
      try {
        this.isPostLoading = true
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        this.posts = response.data
        // имитация долгого ответа сервера
        // setTimeout( async () => {
        //   const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
        //   this.posts = response.data
        //   this.isPostLoading = false
        // }, 1000)
      } catch (e) {
        alert('Ошибка')
      } finally {
        this.isPostLoading = false
      }
    }
  },

  mounted() {
    this.fetchPosts()
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

h3{
  margin-top: 15px;
  margin-bottom: 15px;
}

.app{
  padding: 15px;
}

.offset-top-15{
  margin-top: 15px;
}
</style>