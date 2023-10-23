<template>
  <div>
    <h3>{{ header }}</h3>
    <PostItem
        v-for="post in posts"
        :post="post"
        @onDelete="$emit('onDelete', $event)"
    />
  </div>
</template>

<script>
import PostItem from "@/components/PostItem";

export default {
  name: "PostList",

  components: {PostItem},

  props: {
    header: {
      type: String,
      default: ''
    },
    posts: {
      type: Array,
      required: true,
    }
  },
}

</script>
