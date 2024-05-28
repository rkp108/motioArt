
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection1 from './components/HeroSection1';
import HeroSection2 from './components/HeroSection2';
import MySection from './components/MySection';
import MySection1 from './components/MySection1';
// import HeroSection from './components/HeroSection';
// import MySection from './components/MySection';
import { useRef, useEffect } from "react";
import Fluid from "webgl-fluid";

import './index.css'



function App() {
  const canvas = useRef(null);
  
  useEffect(function () {
    let c = canvas.current;
    Fluid(c);
  }, []);
  return (
    <div className="App " >
      <canvas ref={canvas} style={{ width: "100%", height: "490vh" }} className='h-auto absolute '>

      </canvas>
      <div className=' relative top-0 z-10' style={{ pointerEvents: 'none' }}>
        <Header />
        <HeroSection1 />
        <HeroSection2 />
        <MySection />
        <MySection1 />
        <Footer />
      </div>


    </div>
  );
}

export default App;
