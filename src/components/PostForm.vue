<template>
  <form @submit.prevent>
    <label>Название</label>
    <input type="text" v-model="post.title">
    <label>Описание</label>
    <input type="text" v-model="post.body">
    <Button
        textBtn="Создать"
        @click="createPost"
    />
  </form>
</template>

<script>
import Button from "@/components/UI/Button";

export default {
  name: "PostForm",

  components: {Button},

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

input{
  border: 1px solid gray;
  margin-bottom: 15px;
  padding: 10px 15px;
  width: 100%;
}

</style>