const art = Vue.createApp({
    data() {
        return {

        }
    }
})

art.component(`my-div`, {
    template: `<div class="container mt-3"><nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Menu Principal</a></li>
      <li class="breadcrumb-item active" aria-current="page">Instrumentos</li>
    </ol>
  </nav></div>`
})

art.component(`my-alert`, {
    template: `<div class="alert alert-danger" role="alert">
    Necesitas iniciar sesion para comprar!
  </div>`
})

art.component(`my-car`, {
    template: `<div class="container mt-3"><button type="button" class="btn btn-warning">
    Mi Carrito <span class="badge text-bg-secondary">2</span>
</button>
</div>`
})

art.component(`my-navbar`, {
    template: `<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img src="descarga.png" alt="Avatar Logo" style="width:40px;" class="rounded-pill"> 
          </a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Menu Principal</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Instrumentos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Accesorios</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Proximamente...</a>
        </li>
      </ul>
    </div>
  </nav>`
})

art.component(`my-card`, { /* NombreVar.component  */
    props: ['h5', 'p', 'image'], /* props: [variables a utilizar] */
    template: `<div class="container mt-3"><div class="card" style="width: 18rem;">
    <img :src="image" class="card-img-top" alt="..."> 
    <div class="card-body">
        <h5 class="card-title">{{h5}}</h5>
        <p class="card-text">{{p}}.</p>
        <a href="#" class="btn btn-warning">Comprar Ahora</a>
    </div>
</div>
</div>`
})