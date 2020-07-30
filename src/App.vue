
<template>
  <div id="app" class="container">
    <MovieList title="Películas de Comedia" genre="Comedy" />
    <MovieList title="Películas Familares" genre="Family" />
    <MovieList title="Películas de Terror" genre="Horror" />
    <MovieList title="Documentales de conspiraciones" genre="Conspiracy" />
  </div>
</template>

<script>
//import { mapGetters } from 'vuex';
import MovieList from './components/MovieList.vue'

export default {
  name: 'App',
  components: {
    MovieList
  },
  /*
  computed: {
    // forma abreviada de traerme los getters
    comedyMovies() {
      return this.$store.getters.comedyMovies
    },
    familyMovies() {
      return this.$store.getters.familyMovies
    }
    //...mapGetters(["comedyMovies", "familyMovies"])
  },
  mounted() {
    console.log(this.$store.getters.comedyMovies)
  }*/
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
.card-image img {
  height: 240px;
}
</style>
