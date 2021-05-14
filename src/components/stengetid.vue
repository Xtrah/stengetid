<template>
  <div class="hello">
    <h1>Stengetid</h1>
    <h2>{{ closingTime }}</h2>
    <p>{{ timeLeft }}</p>
    <p></p>
  </div>
</template>

<script>
export default {
  name: "stengetid",
  data() {
    return {
      timeLeft: null,
      closingTime: null
    };
  },
  async created() {
    const now = new Date()
    const dayOfTheWeek = now.getDay()-1
    const headers = {"Ocp-Apim-Subscription-Key": process.env.VUE_APP_apikey};
    const response = await fetch("https://apis.vinmonopolet.no/stores/v0/details?storeID=160", { headers })
    const data = await response.json();
    
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    this.closingTime = data[0].openingHours.regularHours[dayOfTheWeek].closingTime
    
    var dayjs = require('dayjs')
    require('dayjs/locale/nb')
    // import dayjs from 'dayjs' // ES 2015
    dayjs().format()
    dayjs.locale('nb') // use locale globally
    var customParseFormat = require('dayjs/plugin/customParseFormat')
    dayjs.extend(customParseFormat)
    var relativeTime = require('dayjs/plugin/relativeTime')
    // import relativeTime from 'dayjs/plugin/relativeTime' // ES 2015
    dayjs.extend(relativeTime)

    let closingTime = dayjs(this.closingTime, "HH:mm")

    this.timeLeft = dayjs().to(closingTime)
    
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
