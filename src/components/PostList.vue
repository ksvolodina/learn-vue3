<template>
  <div>
    <h3>Посты</h3>

    <div v-if="posts.length > 0">
      <PostItem
          v-for="post in posts"
          :post="post"
          @onDelete="$emit('onDelete', $event)"
      />
    </div>

    <p v-else>Список постов пуст</p>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem";

export default {
  name: "PostList",

  components: {PostItem},

  props: {
    posts: {
      type: Array,
      required: true,
    }
  },
}

</script>
