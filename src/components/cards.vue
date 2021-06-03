<template>
    <section class="rounded-xl bg-gray shadow-lg">
        <figure class="rounded-t-xl">
            <img :src="resolve_img_url(img_src)" alt="Map" class="rounded-t-xl w-full">
        </figure>
        <div class="text-container px-6 py-5">
            <h3 class="text-2xl font-serif font-bold">{{ cardTitle }}</h3>
            <p>{{ cardContent }}</p>
            <button class="text-xl bg-gray-light hover:bg-black py-3 px-4 mt-6 rounded-xl text-green">{{ cardButton }}</button>
        </div>
    </section>

</template>


<script>
export default {
    name: "indexCard",

    props: {
        img_src: {
            type: String,
            required: false,
            default: './assets/testMap.jpg',
            },
        cardTitle: {
            type: String,
            default: 'Lorem Ipsum',
        },
        cardContent: {
            type: String,
            default: 'Lorem ipsum sit dolaro',
        },
        cardButton: {
            type: String,
            default: 'Lorem'
        },
    },

    // Fix for build-time images not loading while using props (might work later on, but should probably get a full url rather than a relative one.)
    methods: {
        resolve_img_url: function (path) {
            let images = require.context('../assets/', false, /\.png$|\.jpg$/)
            return images("./"+path)
        }
    }

};
</script>


<style scoped>

</style>
