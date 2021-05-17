<template>
  <div class="hello">
    <h1>{{ closingTime }}</h1>
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
