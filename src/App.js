import RoadMap from './components/roadmap/RoadMap'
import Team from './components/team/Team'
import FAQ from './components/faq/FAQ'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div className="App">
      <div className="text-white bgp bg-fixed px-5 sm:px-10 md:px-16 lg:px-24 xl:px-36">
        <RoadMap />
        <Team />
        <FAQ />
        <Footer />
      </div>
    </div>
  )
}
export default App
