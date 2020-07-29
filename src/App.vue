
<template>
  <div id="app" class="container">
    <img alt="Vue logo" src="./assets/logo.png">
    <MovieList title="Películas de Comedia" :movies="comedyMovies" />
    <MovieList title="Películas Familares" :movies="familyMovies" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import MovieList from './components/MovieList.vue'

export default {
  name: 'App',
  components: {
    MovieList
  },
  computed: {
    // forma abreviada de traerme los getters
    ...mapGetters(["comedyMovies", "familyMovies"])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
