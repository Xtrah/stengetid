<template>
  <div class="closingTime mt-14 text-center">
    <p class="text-2xl" v-if="closingTime">Vinmonopolet stenger:</p>
    <h2 class="text-green mt-4 text-7xl font-semibold font-serif">

      <!-- This span will only be shown if timeLeft is null -->
      <span class="text-5xl" v-if="!closingTime">
        <Spinner size="small" inline />
      </span>
      {{ closingTime }}
    </h2>
    <p class="text-2xl">

      <!-- This span will only be shown if timeLeft is null -->
      <span class="block mb-32" v-if="!timeLeft">Sjekker Vinmonopolets åpningstider, Vent litt...</span>
      {{ timeLeft}}
    </p>
  </div>
</template>

<script>
import Spinner from "@/components/spinner";

export default {
  name: "stengetid",
  components: {Spinner},
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
</style>
