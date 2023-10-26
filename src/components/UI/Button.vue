<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
}
</script>

<style lang="scss" scoped>
.btn{
  -webkit-appearance: none;
  padding: 10px 15px;
}
</style>