<template>
  <div class="nav-wrapper">
    <div class="row nav">
      <a @click="$router.push('/')">
        Vue 3 Course
      </a>
      <div>
        <Button @click="$router.push('/posts')">
          Посты
        </Button>
        <Button @click="$router.push('/about')">
          О нас
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
}
</script>

<style lang="scss" scoped>
.nav-wrapper{
  background-color: #eee;
  padding: 10px 15px;
}
.nav {
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: space-between;
  & > * {
    display: flex;
    gap: 15px;
  }
  a {
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>