<template>
  <div class="app">

    <MyButton
        text-btn="Создать пост"
        @click="modalVisibility=true"
    />

    <MyModal v-model:show="modalVisibility">
      <PostForm @create="createPost"/>
    </MyModal>

    <PostList
        :posts="posts"
        :header="header"
        @onDelete="deletePost"
    />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import PostItem from "@/components/PostItem";

export default {
  name: "App",

  components: {
    PostItem,
    PostForm,
    PostList
  },

  data() {
    return {
      posts: [
        {id: 1, title: 'title 1', body: 'body 1'},
        {id: 2, title: 'title 2', body: 'body 2'},
        {id: 3, title: 'title 3', body: 'body 3'},
      ],
      header: 'Посты',
      modalVisibility: false,
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
</style>