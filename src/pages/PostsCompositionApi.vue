<template>
  <div class="row">

    <h1>Посты. Composition API</h1>

    <Input
        v-focus
        input-class="offset-bottom-15"
        placeholder="Поиск по названию"
        v-model="searchQuery"
    />

    <div class="space-between offset-bottom-15">

      <Select v-model="selectedSort" :options="sortOptions"/>
    </div>

    <PostList
        :posts="sortedAndSearchedPosts"
        v-if="!isPostLoading"
    />

    <div class="offset-top-15" v-else>Идет загрузка...</div>

  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import PostItem from "@/components/PostItem";
import {ref} from "vue";
import {usePosts} from "@/hooks/usePosts";
import {useSortedPosts} from "@/hooks/useSortedPosts";
import {useSortedAndSearchedPosts} from "@/hooks/useSortedAndSearchedPosts";

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
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По описанию'},
      ],
    }
  },

  setup(props) {
    const {posts, isPostLoading, totalPages} = usePosts(10)
    const {selectedSort, sortedPosts} = useSortedPosts(posts)
    const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)

    return {
      isPostLoading, totalPages, posts,
      selectedSort, sortedPosts,
      searchQuery, sortedAndSearchedPosts
    }

  },
}
</script>

<style lang="scss">
</style>