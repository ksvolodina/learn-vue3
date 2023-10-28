<template>
  <div class="post" @click="$router.push(`/posts/${post.id}`)">
    <div>
      <div>{{ post.id }}</div>
      <div><b>Название:</b> {{ post.title }}</div>
      <div><b>Описание:</b> {{ post.body }}</div>
    </div>
    <Button @click.stop="$emit('onDelete', post.id)">Удалить</Button>
  </div>
</template>

<script>
export default {
  name: "PostItem",

  props: {
    post: {
      type: Object,
      required: true,
    }
  },
}
</script>


<style lang="scss" scoped>
.post {
  border: 1px solid gray;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 15px;
  &:hover {
    transition: all 300ms ease;
    background-color: #eee;
  }
}
</style>