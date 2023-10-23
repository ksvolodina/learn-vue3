<template>
  <div class="post">
    <div>
      <div><b>Название:</b> {{ post.title }}</div>
      <div><b>Описание:</b> {{ post.body }}</div>
    </div>
    <MyButton
        textBtn="Удалить"
        @click="$emit('onDelete', post.id)"
    />
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
  border: 2px solid gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  padding: 15px;
}
</style>