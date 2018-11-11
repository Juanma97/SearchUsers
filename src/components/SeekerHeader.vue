<template>
  <div class="seeker">
    <img alt="Vue logo" src="../assets/logo.png">
    <input type="search" v-model='query'>
    <button type="button" @click="emitirEventoPadre">Search user</button>
    <button type="button" @click="clearSearch">Clear search</button>
    <p>Searching for: {{ query }}</p>
  </div>
</template>

<script>


export default {
  name: 'SeekerHeader',
  props: {
    msg: String,
    query: String,
  },
  methods: {
    emitirEventoPadre() {
      this.$emit('seeker-header:change', this.query);
    },
    clearSearch() {
      this.$emit('clear-search:change');
    },
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.seeker{
  display: flex;
}

.seeker button{
  width: 150px;
  height: 40px;
  padding: 10px;
  background: white;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: 16px;
}

.seeker input[type="search"]{
  width: 500px;
  height: 40px;
  padding: 14px;
  border: none;
  border-bottom: 1px solid black;
  margin: 16px;
  font-size: 16px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  outline: none;
}

.seeker p{
  display: flex;
  align-items: center;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.results{
  display: flex;
  flex-direction: column;
}
</style>
