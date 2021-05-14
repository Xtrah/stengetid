<template>
  <img alt="Vue logo" style="width:200px" src="https://www.vinmonopolet.no/medias/sys_master/cms-images/cms-images/h95/h26/9530561232926/polrose.jpg">
  <polet/>
</template>

<script>
import polet from './components/polet.vue'

export default {
  name: 'App',
  components: {
    polet
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
