<template>
    <div class="results">
      <div v-for="(user, index) in users" :key="index">
        <img class="img-user" v-bind:src="user.picture.medium"/>
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
  grid-template-columns: 25% 25% 25% 25% 25% 25% 25%;
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

.img-user {
  width: 50px;
  height: 50px;
  border-radius: 100%;
}

</style>
