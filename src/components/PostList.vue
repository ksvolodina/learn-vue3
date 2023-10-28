<template>
  <div>
    <transition-group v-if="posts.length > 0" name="list">
      <PostItem
          v-for="post in posts"
          :post="post"
          :key="post.id"
          @onDelete="$emit('onDelete', $event)"
      />
    </transition-group>

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

<style lang="scss" scoped>
.list-enter-active, .list-leave-active {
  transition: all 400ms ease;
}

.list-enter-from, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateX(130px);
}

.list-move {
  transition: transform 400ms;
}
</style>
