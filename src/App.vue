<template>
  <div class="container max-w-screen-lg mx-auto md:mt-20">
    <h1 class="text-center font-serif font-semibold text-8xl">Stenge<span class="font-light">tid</span></h1>
    <stengetid/>

    <!-- Props can be added or changed easily, remove the v-for if not needed-->
    <div class="max-w-screen-md mx-auto px-5 md:px-10 md:flex justify-evenly gap-10 mt-20">
      <card
          v-for="n in 2" v-bind:key="n"

          img_src="testMap.jpg"
          cardTitle="Rekker jeg det?"
          cardContent="Vil du vite om du rekker å dra til Vinmonopolet før det stenger?"
          cardButton="Button"></card>
    </div>
  </div>
</template>

<script>
import card from './components/cards.vue'
import stengetid from './components/stengetid.vue'

export default {
  name: 'App',
  components: {
    stengetid,
    card
  }
}
</script>


<style>
/* HTML style in index.css */
#app {}
</style>
