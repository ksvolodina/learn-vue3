<template>
  <button class="btn">
    {{ textBtn }}
    <!--<slot>Здесь может быть текст кнопки без передачи в виде переменной</slot>-->
  </button>
</template>

<script>
export default {
  name: "MyButton",

  props: {
    textBtn: {
      type: String,
      default: '',
    }
  },

}
</script>

<style lang="scss" scoped>
.btn{
  padding: 10px 15px;
}
</style>