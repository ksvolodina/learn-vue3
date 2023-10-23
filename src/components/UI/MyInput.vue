<template>
  <label>{{ textLabel }}</label>
  <input
      :value="modelValue"
      @input="updateInput"
      type="text">
</template>

<script>
export default {
  name: "MyInput",

  props: {
    textLabel: {
      type: String,
      default: '',
    },
    modelValue: [String, Number]
  },

  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
input{
  border: 1px solid gray;
  margin-bottom: 15px;
  padding: 10px 15px;
  width: 100%;
}
</style>