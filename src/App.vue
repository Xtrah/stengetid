<template>
  <!--<img alt="polrose" style="width:200px" src="./assets/logo.jpg">-->
  <h1>Stenge<span class="thin">Tid</span></h1>
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
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Source+Serif+Pro:ital,wght@0,300;0,400;0,600;1,300&display=swap');

html {
  background-color:#1C1C1E;
  background:#1C1C1E;
  color:#E8EAED;
  font-family: 'Source Serif Pro', serif;
  
  /* Font size set to 10px for easier use of em for sizing
     Its also useful for scaling the UI
    (ex. 2em = 10px*2) */
  font-size:10px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*color: #2c3e50;*/
  margin-top: 60px;
}

h1 {
  font-weight:600;
}
h1 span.thin{font-weight:300}

</style>
