import React from 'react'

function Post(props) {
  const [curtida, setCurtida] = React.useState(props.curtida)
  function curtirPost(event) {
    setCurtida(!curtida)
  }
  return (
    <div class="box-1">
      <div class="box-top">
        <div class="box-top-icon-1">
          <img src={props.imagemUsuario} alt="" />
          <h2>{props.nomeUsuario}</h2>
        </div>
        <div class="box-top-icon-2">
          <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        </div>
      </div>
      <div class="conteudo">
        <img src={props.conteudoUsuario} onClick={() => setCurtida(!curtida)} />
      </div>
      <div class="box-bottom">
        <div class="box-bottom-icon-1">
          {curtida ? (
            <ion-icon name="heart" class="curtida"></ion-icon>
          ) : (
            <ion-icon name="heart-outline" onClick={curtirPost}></ion-icon>
          )}
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div class="box-bottom-icon-2">
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>
      <div class="box-bottom-2">
        <img src={props.imagemCurtidaPrincipal} alt="" />
        <p>
          Curtido por <strong>{props.curtidaPrincipal}</strong> e
          <strong> outras {props.qtdCurtidas}</strong>
        </p>
      </div>
    </div>
  )
}

const posts = [
  {
    imagemUsuario: 'assets/stories_background.jpg',
    nomeUsuario: 'meowed',
    conteudoUsuario: 'assets/gato-telefone1.png',
    imagemCurtidaPrincipal: 'assets/respondeai 2.png',
    curtidaPrincipal: 'respondeai',
    qtdCurtidas: '101.523',
    curtida: false
  },
  {
    imagemUsuario: 'assets/stories_background.jpg',
    nomeUsuario: 'barked',
    conteudoUsuario: 'assets/dog 1.png',
    imagemCurtidaPrincipal: 'assets/razoesparaacreditar 1.png',
    curtidaPrincipal: 'qualquerum',
    qtdCurtidas: '99.523',
    curtida: false
  },
  {
    imagemUsuario: 'assets/stories_background.jpg',
    nomeUsuario: 'qualquerum',
    conteudoUsuario: 'assets/dog 1.png',
    imagemCurtidaPrincipal: 'assets/smallcutecats 1.png',
    curtidaPrincipal: 'qualquerum2',
    qtdCurtidas: '79.523',
    curtida: false
  }
]

export default function Feed() {
  return (
    <section class="feed">
      {posts.map(feed => (
        <Post
          imagemUsuario={feed.imagemUsuario}
          nomeUsuario={feed.nomeUsuario}
          conteudoUsuario={feed.conteudoUsuario}
          imagemCurtidaPrincipal={feed.imagemCurtidaPrincipal}
          curtidaPrincipal={feed.curtidaPrincipal}
          qtdCurtidas={feed.qtdCurtidas}
          curtida={feed.curtida}
        />
      ))}
    </section>
  )
}
