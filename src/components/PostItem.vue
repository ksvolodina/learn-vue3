<template>
  <div class="post">
    <div>
      <div><b>Название:</b> {{ post.title }}</div>
      <div><b>Описание:</b> {{ post.body }}</div>
    </div>
    <Button
        textBtn="Удалить"
        @click="deletePost"
    />
  </div>
</template>

<script>
import Button from "@/components/UI/Button";

export default {
  name: "PostItem",

  components: {Button},

  props: {
    post: {
      type: Object,
      required: true,
    }
  },

  methods: {
    deletePost() {
      this.$emit('deletePost', this.post.id)
    }
  },

}
</script>


<style lang="scss" scoped>
.post {
  border: 2px solid gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  padding: 15px;
}
</style>