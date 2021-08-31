<template>
    <main>
        <div class="container">
            <div class="row-me">
                <Album v-for="(album, index) in albums" :key="index" 
                    :urlImg="album.poster"
                    :title="album.title"
                    :artist="album.author"
                    :year="album.year"
                />
            </div>
            <div v-if="albums.length === 0" class="text-searched">La ricerca non ha prodotto risultati</div>
        </div>
    </main>
</template>

<script>
import Album from './Album.vue'

export default {
    name: 'Main',
    components: {
        Album,
    },
    props: {
        albums: Array
    }
}
</script>

<style lang="scss" scoped>
@import '../style/_colors.scss';

    main {
        background-color: $back-color;
        padding-top: 80px;
        padding-bottom: 80px;

        .container {

            .row-me {
                display: flex;    
                flex-wrap: wrap;
            }

            .text-searched {
                color: $title-color;
                font-size: 32px;
                text-align: center;
                font-weight: 600;
            }
        }
    }
</style>