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
.btn {
  -webkit-appearance: none;
  border: 1px solid #333;
  border-radius: 10px;
  cursor: pointer;
  padding: 10px 15px;

  &:hover {
    transition: all 300ms ease;
    background: #999;
    border-color: #999;
    color: #fff;
  }

  &-active {
    background: #333;
    color: #fff;
  }

  &-small {
    padding: 5px 10px;
  }
}
</style>