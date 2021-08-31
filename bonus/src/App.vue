<template>
  <div id="app">
    <Loading v-if="albums.length < 0" />
    <Header @choice="choiceGenre" @search="choiceGenre" :optionGenre="genres" />
    <Main :albums="filterAlbums" />

  </div>
</template>

<script>
import axios from 'axios';
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Loading from './components/Loading.vue'


export default {
  name: 'App',
  components: {
    Header,
    Main,
    Loading
  },
  data() {
    return {
      albums: [],
      userChoice: '',
      genres: [
        {
          id: 0,
          text:'All',
          value: 'all'
        }
      ]
    }
  },
  computed: {
    filterAlbums() {

      return this.albums.filter((album) => {
          if (this.userChoice === 'all') {
          return true;
        }

        return album.genre.toLowerCase().includes(this.userChoice.toLowerCase()) ||
          album.author.toLowerCase().includes(this.userChoice.toLowerCase()) ||
          album.title.toLowerCase().includes(this.userChoice.toLowerCase());
      })
    },
  },
  created() {
    console.log(typeof this.genres);
    axios.get('http://localhost:8888/php-ajax-dischi/backend/api.php').then((res) => {
      console.log(res);
      this.albums = res.data;
      this.genresCreate();
    });
  },
  methods: {
    choiceGenre(select) {
      this.userChoice = select;
    },
    genresCreate() {
      let genresList = [];

      let x = 1;
      this.albums.forEach((album) => {
        
        if (typeof genresList === 'undefined' ||
          !genresList.includes(album.genre)) {

          genresList.push(album.genre);
          this.genres.push(
            {
              id: x,
              text: album.genre,
              value: album.genre.toLowerCase()
            }
          );
          x++;
        }
      });
    }
  }
}
</script>

<style lang="scss">
@import './style/app.scss';
</style>
