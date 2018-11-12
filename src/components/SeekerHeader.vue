<template>
  <div class="seeker">
    <div class="container-seeker">
    <img alt="Vue logo" src="../assets/usearch.png">
      <input type="search" v-model='query' @input="emitirEventoPadre">
      <p>Searching for: {{ query }}</p>
    </div>
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
  justify-content: center;

}
.container-seeker{
  display: flex;
  flex-direction: column;
}

.container-buttons {
  display: flex;
  justify-content: center;
}

.seeker button{
  width: 150px;
  height: 40px;
  padding: 10px;
  background: white;
  border-left: 1px solid black;
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
  margin: 16px;
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
