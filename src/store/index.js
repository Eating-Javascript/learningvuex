import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "My Custom Title",
    movies: [
      "https://bit.ly/2YkgFlI",
      "https://bit.ly/2YkAxVC",
      "https://bit.ly/381hVyu"
    ]
  },

  getters: {
    countMovies: state => {
      return state.movies.length;
    }
  },

  mutations: {
    ADD_MOVIE: (state, movie) => {
      state.movies.push(movie);
    },
    REMOVE_MOVIE: (state, movie) => {
      state.movies.slice(movie, 1);
    }
  },
  actions: {
    removeMovie: (context, movie) => {
      context.commit("REMOVE_MOVIE", movie);
    }
  }
});
