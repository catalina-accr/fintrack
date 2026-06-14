import "./Home.css"

import HomeContent from "./HomeContent/HomeContent"
import HomePreview from "./HomePreview/HomePreview"

function Home() {
  return (
    <section className="home">
      <div className="home-content-container">
        <HomeContent />
      </div>
      <div className="home-preview-container">
        <HomePreview />
      </div>
    </section>
  )
}

export default Home