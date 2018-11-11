<template>
    <div class="results">
      <div v-for="(user, index) in users" :key="index">
        <h3>{{ user.name.first }}</h3>
        <p>{{ user.gender }}</p>
      </div>
    </div>
</template>

<script>


export default {
  name: 'SeekerResults',
  props: {
    users: {
      type: [],
    },
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.results{
  width: 100%;
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  margin: 16px;
  align-content: space-between;
  justify-content: space-around;
  color: #0f7ae4;
}

h3:hover{
  transition: 300ms;
  color: black;
  cursor: pointer;
}

</style>
