<template>
  <div class="Counter justify-center bg-blue-300 m-4">
    <h1 class="text-center text-2xl font-bold text-pink-700 mt-24 py-8">
      Movie counter
    </h1>
    <p class="text-center">Links for {{ countMovies }} movie posters</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Counter",

  computed: {
    ...mapGetters(["countMovies"])
  }
};
</script>

<style scoped lang="scss"></style>
