<template>
  <div class="seeker">
    <input type="search" v-model='query'>
    <button type="button">Search user</button>
    <p>Searching for: {{ query }}</p>
  </div>
</template>

<script>

export default {
  name: 'SeekerHeade',
  props: {
    msg: String,
  },
  data() {
    return {
      query: 'Hola',
      users: null,
    };
  },
  async created() {
    await Vue.axios.get(api)
      .then((response) => {
        
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.seeker{
  display: flex;
}

.seeker button{
  width: 100px;
  height: 40px;
  padding: 10px;
  background: lightblue;
  border-radius: 10px;
  margin: 16px;
}

.seeker input[type="search"]{
  width: 300px;
  height: 40px;
  padding: 10px;
  border-radius: 10px;
  margin: 16px;
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
</style>
