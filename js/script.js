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
                this.albums = res.data;
                console.log(this.albums);
            })
        },
        computed: {
           
        }
    }
);