<template>
  <div class="closingTime">
    <p>I dag stenger vinmonopolet kl:</p>
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
}

.closingTime h2 {
  color:rgba(106, 235, 157, 1);
  font-size:6.4em;
}

.closingTime p {font-size:2.4em;}



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
</style>
