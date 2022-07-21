function Story(props) {
  return (
    <section class="stories2">
      <img src={props.imagem} alt="" />
      <p>{props.nome}</p>
    </section>
  )
}

const stories = [
  { source: 'assets/stories_background.jpg', profile: '9gagsda' },
  { source: 'assets/stories_background.jpg', profile: '9gagewew' },
  { source: 'assets/stories_background.jpg', profile: '9gagrerer' },
  { source: 'assets/stories_background.jpg', profile: '9gagada' },
  { source: 'assets/stories_background.jpg', profile: '9gagtrtrt' },
  { source: 'assets/stories_background.jpg', profile: '9gagadsad' },
  { source: 'assets/stories_background.jpg', profile: '9gagadsad' }
]

export default function Stories() {
  return (
    <section class="stories">
      {stories.map(story => (
        <Story imagem={story.source} nome={story.profile} />
      ))}
      <div class="imagem-cortada">
        <img
          class="imagem-cortada-1"
          src="assets/stories_background.jpg"
          alt=""
        />
        <img
          class="imagem-cortada-2"
          src="assets/memeriagourmet 1 (1).png"
          alt=""
        />

        <p>9gagaaa</p>
        <ion-icon
          class="icone-imagem-cortada"
          name="chevron-forward-circle-outline"
        ></ion-icon>
      </div>
    </section>
  )
}
