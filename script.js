const emailApp = new Vue ({
    el : "#container",
    data : {
        email : 0,
    },
    mounted(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((result) => {
            const risultato = result.data.response;
            console.log(risultato);
            this.email = risultato;
        }
        )
    }
    
})