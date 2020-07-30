<template>
  <div class="row">
    <h3>{{ title }}</h3>
    <MovieItem v-for="movie in Movies" :key="movie.id" :movie=movie />
  </div>
</template>

<script>
import MovieItem from '@/components/MovieItem.vue'

export default {
  name: 'MovieList',
  components: {
    MovieItem
  },
  props: {
    title: String,
    genre: String
  },
  computed: {
    Movies() {
      /*
      if (this.genre == 'Comedy') {
        return this.$store.getters.comedyMovies
      } else if (this.genre == 'Family') {
        return this.$store.getters.familyMovies
      } else {
        return []
      }
      */
     return this.$store.getters.getMoviesByGenre(this.genre);
    }
  }
}
</script>
