
<template>
  <div id="app" class="container">
    <Pokemon />
    <a class="waves-effect waves-light btn" @click="add_movie">Agregar película</a>
    <MovieList title="Películas de Comedia" genre="Comedy" />
    <MovieList title="Películas Familares" genre="Family" />
    <MovieList title="Películas de Terror" genre="Horror" />
    <MovieList title="Documentales de conspiraciones" genre="Conspiracy" />
  </div>
</template>

<script>
import MovieList from './components/MovieList.vue'
import Pokemon from './components/Pokemon.vue'

export default {
  name: 'App',
  components: {
    MovieList,
    Pokemon
  },
  methods: {
    add_movie() {
      // acá gatillamos la acción del store
      this.$store.dispatch('add_movie')
    }
  },
  mounted() {
    // axios en forma de asyc/await (ES7)
    const datosC3PO = async () => {
      const c3po = await this.axios.get('https://swapi.dev/api/people/2/')
      console.log(c3po);
    }
    datosC3PO();
    // esto es un log
    console.log('... y estos eran los datos de Luke');
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
.card-image img {
  height: 240px;
}
</style>
