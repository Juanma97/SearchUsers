<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <SeekerHeader/>
  </div>
</template>

<script>
import SeekerHeader from './components/SeekerHeader.vue';

export default {
  name: 'app',
  components: {
    SeekerHeader,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display:flex;
  
}

#app img{
  width: 50px;
  height: 50px;
}
</style>
