import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    movies: [
      { id: 1, title: 'The Hangover', genre: 'Comedy', image: 'https://images-na.ssl-images-amazon.com/images/I/91bhPto4BZL._RI_.jpg'},
      { id: 2, title: 'I Love You Man', genre: 'Comedy', image: 'https://images-na.ssl-images-amazon.com/images/I/91083DqJBgL._SY445_.jpg'},
      { id: 3, title: 'Cars', genre: 'Family', image: 'https://i.pinimg.com/236x/f7/97/42/f797426f043d2cd954891f7d17686887--cars--disney-pixar-cars.jpg'},
      { id: 4, title: 'Toy Story', genre: 'Family', image: 'https://i.blogs.es/a34e58/cartel-toy-story-4/450_1000.jpg'},
      { id: 5, title: 'The Lion King', genre: 'Family', image: 'https://miro.medium.com/max/643/1*rZkhpNBMpZxDA3VyGQoHHg.jpeg'},
      { id: 6, title: 'Dumb aund Dumber', genre: 'Comedy', image: 'https://files.merca20.com/uploads/2014/06/Captura-de-pantalla-2014-06-11-a-las-10.55.28.png'},
    ]
  },
  getters: {
    comedyMovies() {
      return store.state.movies.filter(movie => movie.genre == 'Comedy')
    },
    familyMovies() {
      return store.state.movies.filter(movie => movie.genre == 'Family')
    },
  }
})


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
