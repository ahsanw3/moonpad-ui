
import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';
import Intro from './components/Intro';
import Moonriver from './components/Moonriver';

function App() {
  return (
    <div className='bgp2 bg-fixed text-white'>
    <Header/>
    <Intro/>
    <Moonriver/>
    <div className="flex justify-center">
    <div className="grid grid-cols-12 ">
    <div className="lg:col-span-4 md:col-span-6 col-span-10 "><Cards/></div>
    <div className="lg:col-span-4 md:col-span-6 col-span-10"><Cards/></div>
    <div className="lg:col-span-4 md:col-span-6 col-span-10"><Cards/></div>
    </div>
    </div>
    </div>
  );

}

export default App;
