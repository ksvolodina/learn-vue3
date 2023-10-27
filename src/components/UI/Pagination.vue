<template>
  <div class="page-wrapper">

    <Button
      class="btn-small"
      :class="{
        'btn-active': page === pageNumber
      }"
      v-for="pageNumber in totalPages"
      :key="pageNumber"
      @click="$emit('changePage', pageNumber)"
    >
      {{ pageNumber }}
    </Button>

  </div>
</template>

<script>
export default {
  name: "Pagination",

  props: {
    page: {
      type: Number,
      default: 1
    },
    totalPages: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.page-wrapper{
  display: flex;
  gap: 10px;
}
</style>