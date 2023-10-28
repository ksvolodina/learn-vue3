<template>
  <div class="row">

    <h1>Посты</h1>

    <Input
        input-class="offset-bottom-15"
        placeholder="Поиск по названию"
        v-model="searchQuery"
    />

    <div class="space-between offset-bottom-15">
      <Button @click="modalVisibility=true">
        Создать пост
      </Button>

      <Select v-model="selectedSort" :options="sortOptions"/>
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

    <div ref="observer"></div>

    <!--      <Pagination-->
    <!--          :total-pages="totalPages"-->
    <!--          :page="page"-->
    <!--          @changePage="changePage"-->
    <!--      />-->

  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import PostItem from "@/components/PostItem";
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
      posts: [],
      modalVisibility: false,
      isPostLoading: false,
      selectedSort: '',
      searchQuery: '',
      page: 1,
      totalPages: 0,
      limit: 10,
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По описанию'},
      ],
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

    // changePage(pageNumber) {
    //   this.page = pageNumber
    // },

    async fetchPosts() {
      try {
        this.isPostLoading = true
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/posts',
            {params: {
                _page: this.page,
                _limit: this.limit,
              }}
        )
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
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
    },

    async loadMorePosts() {
      try {
        this.page += 1
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/posts',
            {params: {
                _page: this.page,
                _limit: this.limit,
              }}
        )
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts, ...response.data]
      } catch (e) {
        alert('Ошибка')
      }
    }
  },

  mounted() {
    this.fetchPosts()

    let options = {
      rootMargin: "0px",
      threshold: 1.0,
    };

    let callback = (entries, observer) => {
      if (entries[0].isIntersecting && this.page < this.totalPages) {
        this.loadMorePosts()
      }
    }

    let observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer)
  },

  computed: {
    sortedPosts() {
      return [...this.posts].sort( (post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      })
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter( post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },

  watch: {
    // page() {
    //   this.fetchPosts()
    // }
  }
}
</script>

<style lang="scss">
</style>