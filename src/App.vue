<template>
  <img alt="polrose" style="width:200px" src="./assets/logo.jpg">
  <h1>Stengetid</h1>
  <stengetid/>
</template>

<script>
import stengetid from './components/stengetid.vue'

export default {
  name: 'App',
  components: {
    stengetid
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
