<template>
  <Nav></Nav>
  <div class="app">
    <RouterView></RouterView>
  </div>
</template>

<script>
import Nav from "@/components/UI/Nav";
export default {
  name: "App",

  components: {
    Nav
  },

  data() {
    return {
    }
  },

  methods: {
  },

  computed: {
  },

  watch: {
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  font-family: Arial, sans-serif;
  font-size: 16px;
  margin: 0;
  padding: 0;
}

.app {
  min-width: 320px;
  padding: 15px;
}

.row {
  margin: 0 auto;
  max-width: 1024px;
  width: 100%;
}

.offset-top-15 {
  margin-top: 15px;
}

.offset-bottom-15 {
  margin-bottom: 15px;
}

.space-between {
  display: flex;
  justify-content: space-between;
}

h1, h2 {
  text-transform: uppercase;
}

h1 {
  font-size: 26px;
  margin-bottom: 30px;
}
h2 {
  font-size: 20px;
  margin-bottom: 15px;
}

a {
  color: #333;
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
}
</style>