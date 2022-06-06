const emailApp = new Vue ({
    el : "#container",
    data : {
        emails : []
    },
    methods : {
        pushRandomEmail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((result) => {
            const risultato = result.data.response;
            this.emails.push(risultato);
        })

        },
        tenRandom() {
            for (let i = 0; i < 10; i++) {
                this.pushRandomEmail();
                
            }
        }
    },
    mounted() {
        this.tenRandom();
    }  
})