<template>
  <div class="row">

    <h1>Посты. Store</h1>

    <Input
        v-focus
        input-class="offset-bottom-15"
        placeholder="Поиск по названию"
        :model-value="searchQuery"
        @update:model-value="setSearchQuery"
    />

    <div class="space-between offset-bottom-15">
      <Button @click="modalVisibility=true">
        Создать пост
      </Button>

      <Select
          :model-value="selectedSort"
          @update:model-value="setSelectedSort"
          :options="sortOptions"
      />
    </div>

    <Modal v-model:show="modalVisibility">
      <PostForm @create="createPost"/>
    </Modal>

    <PostList
        :posts="sortedAndSearchedPosts"
        @onDelete="deletePost"
        v-if="!isPostLoading"
    />

    <div class="offset-top-15" v-else>Идет загрузка...</div>

    <div v-intersection="loadMorePosts"></div>

  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import PostItem from "@/components/PostItem";
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
import axios from 'axios'

export default {
  name: "Posts",

  components: {
    PostItem,
    PostForm,
    PostList
  },

  data() {
    return {
      modalVisibility: false,
    }
  },

  methods: {
    ...mapMutations({
      setPage: "post/setPage",
      setSearchQuery: "post/setSearchQuery",
      setSelectedSort: "post/setSelectedSort",
    }),

    ...mapActions({
      fetchPosts: "post/fetchPosts",
      loadMorePosts: "post/loadMorePosts",
    }),


    createPost(post) {
      this.posts.push(post)
      this.modalVisibility = false
    },

    deletePost(postId){
      this.posts = this.posts.filter(post => post.id !== postId)
    },
  },

  mounted() {
    this.fetchPosts()
  },

  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostLoading: state => state.post.isPostLoading,
      selectedSort: state => state.post.selectedSort,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      totalPages: state => state.post.totalPages,
      limit: state => state.post.limit,
      sortOptions: state => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: "post/sortedPosts",
      sortedAndSearchedPosts: "post/sortedAndSearchedPosts",
    }),
  },

  watch: {
  }
}
</script>

<style lang="scss">
</style>