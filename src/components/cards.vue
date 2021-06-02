<!-- TODO -->

<template>
    <div class="container">
        <!--  Repeat this as many times as you need to -->
        <section class="card" v-for="n in 3" v-bind:key="n">
            <figure>
                <img src="../assets/testMap.jpg" alt="Map">
            </figure>
            <div class="text-container">
                <h3>{{ cardTitle }}</h3>
                <p>{{ cardContent }}</p>
                <button>{{ cardButton }}</button>
            </div>
        </section>
    </div>
</template>


<script>
export default {
  name: "cards",
  data() {
    return {
      cardImg: "./assets/testMap.jpg", // Map can be generated via entur or mapbox
      cardTitle: "Rekker jeg det?",
      cardContent: "Vil du vite om du rekker å dra til vinmonopolet før det stenger?",
      cardButton: "Button"
    };
  }
};
</script>


<style scoped>
.container {
    /* Container Design */
    max-width:920px;
    padding:10px;
    margin: 10em auto 0 auto;

    /* inner area */
    text-align: left;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap:2em;
}



section.card {
    flex-grow: 2;
    flex-shrink:0;

    border-radius: 1.6em;
    max-width: 1000px;
    width:100%;
    box-shadow:0 2.4em 6.4em rgba(0, 0, 0, 0.06);
    background-color: rgb(44,44,46);
}


/*
 * Inside the different cards 
 */

.card figure {
    background-color:bisque;
    margin:0 0 1em 0;
    padding:0;
    
    border-radius:2em 2em 0 0;
    overflow: hidden;
}
.card figure img {
    width: 100%;
}



.card .text-container {
    padding:0 2em 3em 2em;
}

.card h3 {
    margin:0;
    padding:0;
    font-size:2.4em;
}
.card p {
    margin:1em 0 1em 0;
    padding:0;
    font-family: 'Open Sans', sans-serif;
    font-size:1.6em;
}

.card button {
    border:none;
    padding: 0.8em 1.5em;
    border-radius:8px;
    font-weight:400;
    background-color:#393939;
    font-size:1.8em;
    
    color:#6AEB9D;
    box-shadow:0;
    transition:box-shadow 0.5s ease-in-out;
}

.card button:hover {
    box-shadow: 1px 1px 5px #000;
    
}
</style>
