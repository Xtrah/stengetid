<template>
  <div class="hello">
    <h1>{{ closingTime }}</h1>
    <h2>{{ timeLeft }}</h2>
    <p></p>
  </div>
</template>

<script>
export default {
  name: "polet",
  data() {
    return {
      timeLeft: null,
      closingTime: null
    };
  },
  async created() {
    const now = new Date()
    const dayOfTheWeek = now.getDay()-1
    const headers = {"Ocp-Apim-Subscription-Key": "345862965e484fe7b82145cb399655f3"};
    const response = await fetch("https://apis.vinmonopolet.no/stores/v0/details?storeID=160", { headers })
    const data = await response.json();
    
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    
    this.closingTime = data[0].openingHours.regularHours[dayOfTheWeek].closingTime
    
    
  },
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
