<template>
  <form @submit.prevent>
    <h2>Создание поста</h2>

    <Input
      input-class="offset-bottom-15"
      placeholder="Название"
      v-model="post.title"
      v-focus
    />

    <Input
      input-class="offset-bottom-15"
      placeholder="Описание"
      v-model="post.body"
    />

    <Button @click="createPost">Создать</Button>
  </form>
</template>

<script>
export default {
  name: "PostForm",

  data() {
    return {
      post: {
        title: '',
        body: '',
      }
    }
  },

  methods: {
    createPost() {
      this.post.id = Date.now()
      this.$emit('create', this.post)

      this.post = {
        title: '',
        body: ''
      }
    }
  },

}
</script>

<style lang="scss" scoped>
form{
  display: flex;
  flex-direction: column;
  .btn{
    align-self: flex-start;
  }
  * {
    color: #333;
  }
}

label{
  margin-bottom: 5px;
  width: 100%;
}
</style>