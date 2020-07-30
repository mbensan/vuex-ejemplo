import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    movies: [
      { id: 1, score: 6, title: 'The Hangover', genre: 'Comedy', image: 'https://images-na.ssl-images-amazon.com/images/I/91bhPto4BZL._RI_.jpg'},
      { id: 2, score: 0, title: 'I Love You Man', genre: 'Comedy', image: 'https://images-na.ssl-images-amazon.com/images/I/91083DqJBgL._SY445_.jpg'},
      { id: 3, score: 0, title: 'Cars', genre: 'Family', image: 'https://i.pinimg.com/236x/f7/97/42/f797426f043d2cd954891f7d17686887--cars--disney-pixar-cars.jpg'},
      { id: 4, score: 0, title: 'Toy Story', genre: 'Family', image: 'https://i.blogs.es/a34e58/cartel-toy-story-4/450_1000.jpg'},
      { id: 5, score: 0, title: 'The Lion King', genre: 'Family', image: 'https://miro.medium.com/max/643/1*rZkhpNBMpZxDA3VyGQoHHg.jpeg'},
      { id: 6, score: 0, title: 'Dumb aund Dumber', genre: 'Comedy', image: 'https://files.merca20.com/uploads/2014/06/Captura-de-pantalla-2014-06-11-a-las-10.55.28.png'},
      { id: 7, score: 0, title: 'The Exorcist', genre: 'Horror', image: 'https://www.mautorland.com/wp-content/uploads/2018/07/119123AC-A2E5-4E53-B8B7-EE42190F4B7A-1024x768.jpeg'}
    ]
  },
  // si queremos procesar los datos antes de usarlos, vamos a crear "getters"
  getters: {
    comedyMovies() {
      return store.state.movies.filter(movie => movie.genre == 'Comedy')
    },
    familyMovies() {
      return store.state.movies.filter(movie => movie.genre == 'Family')
    },
    // si queremos un getter que reciba parámetros, vamos a usar una doble función currificada
    // (una función que retorna otra función)
    getMoviesByGenre() {
      return function(genre) {
        return store.state.movies.filter(movie => movie.genre == genre)
      }
    }
  },
  // para modificar el estado de nuestro almacén
  mutations: {
    addMovieScore(state, idMovie) {
      // 1. Nos traemos la película
      const movieEncontrada = state.movies.find(movie => movie.id == idMovie);

      // 2.Modificar la pelicula encontrada (forma mutada)
      movieEncontrada.score = movieEncontrada.score + 1;
      /*
      3. Forma Inmutada
      const movieActualizada = {
        ...movieEncontrada,
        score: movieEncontrada.score + 1
      }

      state.movies = [
        ...state.movies.filter(movie => movie.id != idMovie),
        movieActualizada
      ]*/
    },
    substractMovieScore(state, idMovie) {
      // 1. Nos traemos la película
      const movieEncontrada = state.movies.find(movie => movie.id == idMovie);

      // 2.Modificar la pelicula encontrada (forma mutada)
      movieEncontrada.score = movieEncontrada.score - 1;
    }
  }
})


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
