<template>
    <section class="card">
        <figure>
            <img :src="resolve_img_url(img_src)" alt="Map">
        </figure>
        <div class="text-container">
            <h3>{{ cardTitle }}</h3>
            <p>{{ cardContent }}</p>
            <button>{{ cardButton }}</button>
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
