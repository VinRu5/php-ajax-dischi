Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
            albums: [],
            text: 'ciao'
        },
        created() {
            axios.get('http://localhost:8888/php-ajax-dischi/backend/api.php')
            .then((res) => {
                albums = res.data;
                console.log(albums);
            })
        },
        computed: {
            upperTitle: function () {
                return this.title.toUpperCase();
            }
        }
    }
);