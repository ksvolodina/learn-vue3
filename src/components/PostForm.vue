<template>
  <form @submit.prevent>
    <MyInput
      textLabel="Название"
      v-model="post.title"
    />

    <MyInput
        textLabel="Описание"
        v-model="post.body"
    />

    <MyButton
        textBtn="Создать"
        @click="createPost"
    />
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
      document.querySelector('input').focus()
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
}

label{
  margin-bottom: 5px;
  width: 100%;
}
</style>