<template>
  <svg :class="[inline ? 'inline' : '', spinnerSize, 'animate-spin mb-2 mr-2']"
       aria-hidden="true"
       focusable="false"
       data-prefix="fad"
       data-icon="circle-notch"
       role="img"
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 512 512">
        <g class="fa-group">
          <path class="fa-secondary"
                fill="currentColor"
                d="M504 257.28v.23C503.42 394 392.44 504.24 256 504v-64a184.09 184.09 0 0 0 177.16-134.42c27.44-97.84-29.63-199.41-127.47-226.85A24 24 0 0 1 288 55.66V39a24 24 0 0 1 30-23.22c107.4 27.65 186.61 125.38 186 241.5z"
                opacity="0.4">

          </path>
          <path class="fa-primary"
                fill="currentColor"
                d="M256 439.93v64C119.56 504.24 8.58 394 8 257.51v-.23C7.39 141.16 86.6 43.43 194 15.78A24 24 0 0 1 224 39v16.66a24 24 0 0 1-17.69 23.07c-97.84 27.44-154.91 129-127.47 226.85A184.07 184.07 0 0 0 256 439.93z">
          </path>
        </g>
  </svg>
</template>

<script>
export default {
  name: "spinner",
  props: {
    size: {
      type: String,
      required: false,
      default: 'small',
    },
    inline: {
      type: Boolean,
      required: false,
      default: false,
    }
  },

  computed: {
    spinnerSize: function () {
      switch (this.size) {
        case "small":
          return 'h-8 w-8';
        case "medium":
          return 'h-16 w-16';
        case "large":
          return'h-32 w-32';
        default:
          return 'h-8 w-8';
      }
    }
  }

}
</script>

<style scoped>

</style>