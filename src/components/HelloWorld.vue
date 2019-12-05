<template>
  <div class="container movies flex mb-4 w-5/6 mx-auto py-auto">
    <div class="left w-1/2 m-4">
      <h1 class="text-center text-2xl font-bold text-pink-700 py-8">
        {{ title }}
      </h1>

      <form @submit.prevent="addMovie">
        <input
          class="movie-input bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-4 px-4 block w-full appearance-none leading-normal mb-4"
          type="text"
          placeholder="Ajouter un film"
          v-model="newMovie"
        />
      </form>

      <ul>
        <li
          v-for="(movie, index) in movies"
          v-bind:key="index"
          class="bg-pink-300 p-4 mb-3 flex justify-between items-center bg-white shadow rounded-lg cursor-move overflow-hidden"
        >
          {{ movie }}

          <button @click="removeMovies(index)" class="rm">Supprimer</button>
        </li>
      </ul>
    </div>
    <div class="right w-1/2">
      <Counter />
    </div>
  </div>
</template>

<script>
import Counter from "@/components/Counter.vue";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "HelloWorld",
  data() {
    return {
      newMovie: ""
    };
  },
  components: {
    Counter
  },
  computed: {
    ...mapState(["title", "movies"])
  },
  methods: {
    ...mapMutations(["ADD_MOVIE"]),
    ...mapActions(["removeMovie"]),

    addMovie: function() {
      this.ADD_MOVIE(this.newMovie);
      this.newMovie = "";
    },
    removeMovies: function(movie) {
      this.removeMovie(movie);
    }
  }
};
</script>
