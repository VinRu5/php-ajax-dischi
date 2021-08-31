Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
            albums: [],
            selectGenre: '',
            genres: [
                {
                    id: 0,
                    text: 'All',
                    value: 'all'
                },
                {
                    id: 1,
                    text: 'Rock',
                    value: 'rock'
                },
                {
                    id: 2,
                    text: 'Pop',
                    value: 'pop'
                },
                {
                    id: 3,
                    text: 'Jazz',
                    value: 'jazz'
                },
                {
                    id: 4,
                    text: 'Metal',
                    value: 'metal'
                }
            ]
        },
        created() {
            this.apiHome();
        },
        computed: {
           
        },
        methods: {
            apiGenre() {
                axios.get(`http://localhost:8888/php-ajax-dischi/backend/filterGenre.php?genre=${this.selectGenre}`)
                .then((res) => {
                    this.albums = res.data;

                })
            },

            apiHome() {
                axios.get('http://localhost:8888/php-ajax-dischi/backend/api.php')
                    .then((res) => {
                        this.albums = res.data;
                        console.log('ciao');
                    })
            },

            choiceGenre() {
                if (this.selectGenre === '' || this.selectGenre === 'all') {
                    this.apiHome();
                    console.log(this.selectGenre);
                } else {
                    this.apiGenre();
                    console.log(this.selectGenre);
                }
            }
        }
    }
);