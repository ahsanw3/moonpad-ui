import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';
import Intro from './components/Intro';
import Moonriver from './components/Moonriver';
import RoadMap from './components/roadmap/RoadMap'
import Team from './components/team/Team'
import FAQ from './components/faq/FAQ'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div className="App">
      <div className="text-white bgp bg-fixed px-5 sm:px-10 md:px-16 lg:px-24 xl:px-36 ">
        <Header/>
        <Intro/>
        <Moonriver/>
        <div className="flex justify-center">
          <div className="grid grid-cols-12 ">
            <div className="lg:col-span-4 md:col-span-6 col-span-12 "><Cards/></div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12"><Cards/></div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12"><Cards/></div>
          </div>
        </div>
        {/* <Benefits
          all_benefits={[
            'Will get the first slot of every INO on our platform', 'Get airdrop from each project on our platform', 'You can sell your Chimps on any nft marketplace ar your desired price', 'Once we reach 20 projects launched on moonpad, we shall develop our smart contract', 'And mint total supply of 10k tokens', '50% will be airdrop to our NFT holders', '10% for the team, locked for 6 months', '20% for the marketing and further development. Locked through smart contracts', 'And when neended monthly', '5% airdrop to all our platform users', '15% exchange liquidity'
          ]}
        /> */}
        <RoadMap />
        <Team />
        <FAQ />
        <Footer />
      </div>
    </div>
  )
}
export default App
