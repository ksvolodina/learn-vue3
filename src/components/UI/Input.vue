<template>
  <input
      :class="inputClass"
      :placeholder="placeholder"
      :value="modelValue"
      type="text"
      @input="updateInput">
</template>

<script>
export default {
  name: "Input",

  props: {
    inputClass: {
      type: String,
      default: '',
    },
    placeholder: {
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
  -webkit-appearance: none;
  border: 1px solid #333;
  padding: 10px 15px;
  width: 100%;
}
</style>