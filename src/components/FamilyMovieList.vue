<template>
  <div class="row">
    <h3>Películas Familiares</h3>
    <div class="col s4 m4" v-for="movie in Movies" :key="movie.id">
      <div class="card">
        <div class="card-image">
          <img :src="movie.image">
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
          <p>{{ movie.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FamilyMovieList',
  computed: {
    Movies() {
      return this.$store.state.movies.filter(movie => movie.genre == 'Family')
    }
  }
}
</script>