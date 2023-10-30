<template>
  <div class="row">
    <h1 class="offset-bottom-15">Учебный проект для изучения основ Vue.js.</h1>

    <p class="offset-bottom-15">Эта страница существует ради изучения Router.<br>
      Чтобы посмотреть основной изученный функционал, загляните на страницу
      <a @click="$router.push('/posts')">Посты</a>.
    </p>
    <p>На ней вы увидите:</p>

    <ul>
      <li>работу с API (JSON Placeholder)</li>
      <li>работу с полученными данными: поиск, сортировка, добавление, удаление</li>
      <li>создание собственной директивы для реализации бесконечной прокрутки</li>
    </ul>

    <p class="offset-bottom-15">В ходе курса дополнительно были изучены: Vuex и Composition API.</p>
    <p>Функционал страницы "Посты" практически тот же, но реализован с помощью:<br>
      <a @click="$router.push('/store')">Vuex store</a><br>
      <a @click="$router.push('/composition')">Composition API</a>
    </p>

  </div>
</template>

<script>
export default {
  name: "Main"
}
</script>

<style scoped>

</style>