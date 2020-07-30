<template>
  <div class="col s4 m4">
    <div class="card blue-grey darken-1">
      <div class="card-image">
        <img :src="movie.image" class="imagen-peli">
        <span class="card-title">{{ movie.title }}</span>
      </div>
      <div class="card-action">
        <a class="btn" @click="disminuirPtje" href="#">-1</a>
        <span class="puntaje">{{ movie.score }}</span>
        <a class="btn" @click="aumentarPtje" href="#">+1</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieItem',
  // esto es lo que esperamos recibir del padre
  props: {
    movie: {
      title: String,
      id: Number,
      image: String
    }
  },
  // esto son los manejadores de eventos
  methods: {
    aumentarPtje(ev) {
      // truco para evitar que se recargue la página
      ev.preventDefault()
      // llamar a la mutación correspondiente
      this.$store.commit("addMovieScore", this.movie.id);
    },
    disminuirPtje(ev) {
      ev.preventDefault()
      this.$store.commit("substractMovieScore", this.movie.id);
    },
  }
}
</script>

<style>
.puntaje {
  display: inline-block;
  padding: 10px;
  background-color: blanchedalmond;
  font-weight: bold;
  margin-left: 10px;
  margin-right: 10px;
}
</style>