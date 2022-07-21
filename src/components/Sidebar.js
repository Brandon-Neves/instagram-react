function Recomendacao(props) {
  return (
    <div class="lado-esquerdo-box-3">
      <div class="lado-esquerdo-box3-container-1">
        <div>
          <img src={props.imagem} alt="" />
        </div>
        <div>
          <h3>
            <strong>{props.name}</strong>
          </h3>
          <p>{props.seguido}</p>
        </div>
      </div>
      <div>
        <h4>
          <span>{props.seguir}</span>
        </h4>
      </div>
    </div>
  )
}

const recomendacoes = [
  {
    media: 'assets/razoesparaacreditar 1.png',
    profile: 'razoesparaacreditar',
    seguido: 'Segue você',
    seguir: 'Seguir'
  },
  {
    media: 'assets/badvibesmemes 1.png',
    profile: 'bad.vibes.memes',
    seguido: 'Segue você',
    seguir: 'Seguir'
  },
  {
    media: 'assets/chibirdart 1.png',
    profile: 'chibirdart',
    seguido: 'Segue você',
    seguir: 'Seguir'
  },
  {
    media: 'assets/adorableanimals 1.png',
    profile: 'adorable_animals',
    seguido: 'Segue você',
    seguir: 'Seguir'
  },
  {
    media: 'assets/smallcutecats 1.png',
    profile: 'smallcutecats',
    seguido: 'Segue você',
    seguir: 'Seguir'
  }
]

export default function Sidebar() {
  return (
    <section class="sidebar">
      <div class="lado-esquerdo-box-1">
        <div>
          <img src="assets/catanacomics 1.png" alt="" />
        </div>
        <div>
          <h3>catanacomics</h3>
          <p>Catana</p>
        </div>
      </div>
      <div class="lado-esquerdo-box-2">
        <div>
          <h4>Sugestões para você</h4>
        </div>
        <div>
          <h4>
            <strong>Ver tudo</strong>
          </h4>
        </div>
      </div>
      {recomendacoes.map(recomendacao => (
        <Recomendacao
          imagem={recomendacao.media}
          name={recomendacao.profile}
          seguido={recomendacao.seguido}
          seguir={recomendacao.seguir}
        />
      ))}
      <div class="lado-esquerdo-box-4">
        <div>
          <p>
            Sobre * Ajuda * Imprensa * API * Carreiras * Privacidade * Termos *
            Localizações * Contas mais relevantes * Hashtags * Idioma
          </p>
        </div>
        <div>
          <h4>2021 INSTAGRAM DO FACEBOOK</h4>
        </div>
      </div>
    </section>
  )
}
