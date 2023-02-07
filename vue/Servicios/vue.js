const app = Vue.createApp({
    data() {
        return {
            amiibos: [] /* Se crea arreglo para meter los datos */
        }
    }, methods:{
        async obtener(){
            const data = await fetch('https://amiiboapi.com/api/amiibo/',{
                method: 'GET'
            });

            const amiibos = await data.json(); /* await siempre pa  */
            this.amiibos = amiibos.amiibo;
            console.log(this.amiibos);

        }
    },
})

app.component(`my-card`, { /* NombreVar.component  */
    props: ['h5', 'p', 'image'], /* props: [variables a utilizar] */
    template: `<div class="container mt-3"><div class="card" style="width: 18rem;">
    <img :src="image" class="card-img-top" alt="..."> 
    <div class="card-body">
        <h5 class="card-title">{{h5}}</h5>
        <p class="card-text">{{p}}.</p>
        <a href="#" class="btn btn-success">Comprar Ahora</a>
    </div>
</div>
</div>`
})