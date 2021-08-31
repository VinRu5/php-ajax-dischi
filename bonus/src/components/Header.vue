<template>
    <header>
        <div class="logo-container">
            <img src="../assets/spotify-logo.png" alt="logo Spotify">
        </div>

        <div class="select-container">
            <!-- <ul>
                <li v-for="(genre, index) in optionGenre" :key="genre.id"
                    @click="$emit('selectMusic', selectYourMusic(index))"

                >{{ genre.text }}</li>
            </ul> -->
            <label for="genre">Scegli la tua musica</label>
            <select v-model="selectGenre" @change="$emit('choice', selectGenre)" id="genre">
                <option v-for="genre in optionGenre" :key="genre.id" 
                    :value="genre.value">
                    {{ genre.text }}
                </option>
            </select>

            <input v-model="inputSearch" @keyup.enter="$emit('search', inputSearch)" type="text">
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        optionGenre: Array
    },
    data() {
        return {
            selectGenre: 'all',
            musicSelected: '',
            inputSearch: ''
        }
    },
    methods: {
        selectYourMusic(index) {
            this.musicSelected = this.optionGenre[index].value;
            console.log(this.musicSelected);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../style/_colors.scss';

    header {
        background-color: $primary-color;
        padding: 12px 18px;
        display: flex;
        justify-content: space-between;
        height: 80px;

        .logo-container {
            width: 60px;

            img {
                width: 100%;
            }
        }

        .select-container {

            label {
                color: $text-color;
                margin-right: 12px;
            }

            input {
                margin-left: 12px;
            }

            ul {
                list-style: none;
                display: flex;

                li {
                    color: $text-color;
                    margin-left: 12px;
                    cursor: pointer;
                }
            }
        }
    }
</style>