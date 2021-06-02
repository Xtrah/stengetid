<template>
  <div class="closingTime">
    <p>Vinmonopolet stenger:</p>
    <h2>{{ closingTime }}</h2>
    <p>{{ timeLeft }}</p>
  </div>
</template>

<script>
export default {
  name: "stengetid",
  data() {
    return {
      closingTime: null,
      timeLeft: null
    };
  },
  async created() {
    const { text } = await (await fetch("/api/closingTime")).json();
    this.closingTime = text[0];
    this.timeLeft = text[1]

  }
};
</script>

<style scoped>
.closingTime {
  font-weight: 600;
  margin-top:10em;
}


.closingTime h2 {
  color:rgba(106, 235, 157, 1);
  font-size:6.4em;
  margin:0;
  padding:0;
}

.closingTime p {
  font-size:2.6em;
  margin-top:0;
  margin-bottom:1rem;
  line-height: 30px;
  letter-spacing: 0em;
}



/** Not used! */

/*
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
*/

</style>
