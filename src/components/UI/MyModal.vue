<template>
  <div
      class="modal"
      v-if="show === true"
      @click="$emit('update:show', false)"
  >
    <div class="modal-content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyModal",

  props: {
    show: {
      type: Boolean,
      default: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.modal{
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: transparentize(#000, .5);
  display: flex;
  position: fixed;
}

.modal-content{
  background: #fff;
  border-radius: 12px;
  margin: auto;
  padding: 20px;
}

</style>