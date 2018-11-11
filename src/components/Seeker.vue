<template>
    <div id="container">
        <SeekerHeader @seeker-header:change="listenSeekerHeader"
         @clear-search:change="clearSearch"></SeekerHeader>
        <h1 class="loading-text" v-if="data">Loading...</h1>
        <SeekerResults :users="usersSeekerFilter"></SeekerResults>
    </div>
</template>

<script>
import Vue from 'vue';
import SeekerHeader from './SeekerHeader.vue';
import SeekerResults from './SeekerResults.vue';

export default {
  name: 'Seeker',
  data() {
    return {
      usersSeekerFilter: [],
      usersSeeker: [],
      querySeeker: '',
      data: true,
    };
  },
  methods: {
    listenSeekerHeader(query) {
      console.log(query);
      this.querySeeker = query;
      this.usersSeekerFilter = this.usersSeeker
        .filter(e => e.name.first.includes(this.querySeeker));
    },
    listenSeekerResults(array) {
      this.usersSeeker = array;
      console.log(this.users);
    },
    clearSearch() {
      this.usersSeekerFilter = this.usersSeeker;
    },
  },
  async created() {
    await Vue.axios.get('https://randomuser.me/api/?results=100')
      .then((response) => {
        this.usersSeeker = response.data.results;
        this.usersSeekerFilter = response.data.results;
        this.data = false;
        console.log(this.usersSeeker);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  components: {
    SeekerResults,
    SeekerHeader,
  },

};
</script>

<style scoped>
</style>
