export default function Hero() {
  return (
    <header class="hero">
      <div class="hero2">
        <div>
          <ion-icon name="logo-instagram"></ion-icon>
          <div>
            <img src="assets/logo.png" alt="" />
          </div>
        </div>
        <div>
          <form action="">
            <input
              type="text"
              name="pesquisar"
              id="pesquisar"
              placeholder="Pesquisar"
            />
          </form>
        </div>
        <div class="icones-topo">
          <ion-icon name="paper-plane-outline"></ion-icon>
          <ion-icon name="compass-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </div>
      </div>
    </header>
  )
}
