import Stories from './Stories'
import Feed from './Feed'
import Sidebar from './Sidebar'
import Footer from './Footer'

export default function Main() {
  return (
    <main>
      <div class="container-lados">
        <div class="lado-direito">
          <Stories />
          <Feed />
        </div>
        <div class="lado-esquerdo">
          <Sidebar />
        </div>
      </div>
      <Footer />
    </main>
  )
}
