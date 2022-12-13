import ArenaGameCard from "./components/arena_game_card/ArenaGameCard";
import Footer from './components/footer/Footer'
import FAQ from './components/faq/FAQ'
import Header from './components/Header'
import Intro from './components/Intro'
import Moonriver from './components/Moonriver'
import RoadMap from './components/roadmap/RoadMap'
import Team from './components/team/Team'

import './App.css'

const App = () => {
  return (
    <div className="App">
      <div className="text-white bgp bg-fixed px-5 sm:px-10 md:px-16 lg:px-24 xl:px-36 ">
        <Header />
        <Intro />
        <Moonriver />
        {/* <Cards/>
        <ArenaGameCard/> */}

        <div className="flex flex-wrap justify-center gap-10">
          <div>
          <ArenaGameCard/>
          </div>
          <div>
          <ArenaGameCard/>
          </div>
          <div>
          <ArenaGameCard/>
          </div>
          <div>
          <ArenaGameCard/>
          </div>
        </div>

        <RoadMap />
        <Team />
        <FAQ />
        <Footer />
      </div>
    </div>
  )
}
export default App
