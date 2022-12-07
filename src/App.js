import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Moonriver from "./components/Moonriver";
import RoadMap from "./components/roadmap/RoadMap";
import Team from "./components/team/Team";
import FAQ from "./components/faq/FAQ";
import Footer from "./components/footer/Footer";
// import ArenaGameCard from "./components/arena_game_card/ArenaGameCard";

const App = () => {
  return (
    <div className="App">
      <div className="text-white bgp bg-fixed px-5 sm:px-10 md:px-16 lg:px-24 xl:px-36 ">
        <Header />
        <Intro />
        <Moonriver />
        {/* <div className="sm:grid sm:grid-cols-12">
          <div className="sm:col-span-6 lg:col-span-4">
            <ArenaGameCard />
          </div>
          <div className="sm:col-span-6 lg:col-span-4">
            <ArenaGameCard />
          </div>
          <div className="sm:col-span-6 sm:col-start-4 lg:col-span-4">
            <ArenaGameCard />
          </div>
        </div> */}


        <div className="flex justify-center">
          <div className="grid grid-cols-12 ">
            <div className="lg:col-span-3 md:col-span-6 col-span-12 ">
              <Cards />
            </div>
            <div className="lg:col-span-3 md:col-span-6 col-span-12">
              <Cards />
            </div>
            <div className="lg:col-span-3 md:col-span-6 col-span-12">
              <Cards />
            </div>
            <div className="lg:col-span-3 md:col-span-6 col-span-12">
              <Cards />
            </div>
          </div>
        </div>

        <RoadMap />
        <Team />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};
export default App;
