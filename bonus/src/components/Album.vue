<template>
    <div class="album-container">
        <div class="album-inner">
            <div class="img-container">
                <img :src="urlImg" :alt="`${title} di ${artist}`">
            </div>
            <h3 class="title-album">{{ upperTitle }}</h3>
            <div class="info-album">
                <div class="artist">{{ artist }}</div>
                <div class="yaer">{{ year }}</div>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: 'Album',
    props: {
        urlImg: String,
        title: String,
        artist: String,
        year: String,
    },
    computed: {
        upperTitle: function() {
            return this.title.toUpperCase();
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../style/_colors.scss';

    .album-container {
        flex-basis: calc((100% / 5) - 24px);
        max-width: calc((100% / 5) - 24px);
        margin-bottom: 24px;
        margin-left: 12px;
        margin-right: 12px;

        .album-inner {
            background-color: $primary-color;
            width: 100%;
            height: 100%;
            padding: 24px;
            text-align: center;
            
            .img-container {
                width: 100%;
    
                img {
                    width: 100%;
                }
            }

            .title-album {
                //width: 150px;
                color: $title-color;
                padding: 24px 3px;
                font-weight: bold;
                font-size: 20px;
            }

            .info-album {
                color: $text-color;
                font-size: 18px;
            }
        }
    }

</style>