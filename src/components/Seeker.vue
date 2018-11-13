<template>
    <div id="container">
        <v-toolbar app="true" fixed color="primary">
          <v-toolbar-side-icon class="white--text"></v-toolbar-side-icon>
          <v-toolbar-title class="white--text">USearch</v-toolbar-title>
        </v-toolbar>
        <SeekerHeader v-once @seeker-header:change="listenSeekerHeader"></SeekerHeader>
        <v-progress-circular size="64" indeterminate="true" class="loading-text"
         v-if="data"></v-progress-circular>
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
      data: true,
    };
  },
  methods: {
    listenSeekerHeader(query) {
      this.usersSeekerFilter = this.usersSeeker
        .filter(e => e.name.first.includes(query));
    },
    listenSeekerResults(array) {
      this.usersSeeker = array;
    },
  },
  async mounted() {
    await Vue.axios.get('https://randomuser.me/api/?results=2000')
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

.container{
  display: flex;
  justify-content: center;
}

.loading-text {
  margin-top: 20%;
}

img{
  width: 200px;
  height: 70px;
  padding: 16px;
}

v-speed-dial{
  
}
</style>
