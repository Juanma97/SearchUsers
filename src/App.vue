<template>
<v-app>
  <Seeker/>
</v-app>
</template>

<script>
import Seeker from './components/Seeker.vue';

export default {
  name: 'App',
  components: {
    Seeker,
  },
  data() {
    return {
      //
    };
  },
};
</script>

<style>
#app {

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>
