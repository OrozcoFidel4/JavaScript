const art = Vue.createApp({
    data() {
        return {

        }
    }
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
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" href="#">Menu Principal</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Instrumentos</a>
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
    template: `<div class="container mt-3"><div class="card" style="width: 18rem;">
    <img src="https://http2.mlstatic.com/D_NQ_NP_624155-MLM43383586169_092020-O.webp" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Takamine</h5>
        <p class="card-text">Guitarra electroacustica de 12 cuerdas marca takamine.</p>
        <a href="#" class="btn btn-warning">Comprar Ahora</a>
    </div>
</div>
</div>`
})