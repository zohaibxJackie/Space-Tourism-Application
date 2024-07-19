import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import './style.css';
import './utils.css';

import Header from './components/header';
import Home from './components/Home';
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology';

import homeBg from './assets/home/background-home-desktop.jpg';
import destinationBg from './assets/destination/background-destination-desktop.jpg';
import crewBg from './assets/crew/background-crew-desktop.jpg';
import technologyBg from './assets/technology/background-technology-desktop.jpg';
import homeBgTablet from './assets/home/background-home-tablet.jpg';
import destinationBgTablet from './assets/destination/background-destination-tablet.jpg';
import crewBgTablet from './assets/crew/background-crew-tablet.jpg';
import technologyBgTablet from './assets/technology/background-technology-tablet.jpg';
import homeBgMobile from './assets/home/background-home-mobile.jpg';
import destinationBgMobile from './assets/destination/background-destination-mobile.jpg';
import crewBgMobile from './assets/crew/background-crew-mobile.jpg';
import technologyBgMobile from './assets/technology/background-technology-mobile.jpg';

const bgMap = {
  "/Space-Tourism-Application/": { desktop: homeBg, tablet: homeBgTablet, mobile: homeBgMobile },
  "/Space-Tourism-Application/destination": { desktop: destinationBg, tablet: destinationBgTablet, mobile: destinationBgMobile },
  "/Space-Tourism-Application/crew": { desktop: crewBg, tablet: crewBgTablet, mobile: crewBgMobile },
  "/Space-Tourism-Application/technology": { desktop: technologyBg, tablet: technologyBgTablet, mobile: technologyBgMobile },
};

function App() {
  const location = useLocation();
  const [backgroundImg, setBackground] = useState(bgMap["/Space-Tourism-Application/"].desktop);
  const [choose, setChoose] = useState({ num: "", txt: "" });

  const chooseSomething = () => {
    const path = location.pathname;
    if (path === `${process.env.PUBLIC_URL}/` || path === '/Space-Tourism-Application/') {
      setChoose({ num: "", txt: "" });
    } else if (path === `${process.env.PUBLIC_URL}/destination` || path === '/Space-Tourism-Application/destination') {
      setChoose({ num: "01", txt: "pick your destination" });
    } else if (path === `${process.env.PUBLIC_URL}/crew` || path === '/Space-Tourism-Application/crew') {
      setChoose({ num: "02", txt: "meet your crew" });
    } else if (path === `${process.env.PUBLIC_URL}/technology` || path === '/Space-Tourism-Application/technology') {
      setChoose({ num: "03", txt: "space launch 101" });
    }
  };

  useEffect(() => {
    const updateBackground = () => {
      const width = window.innerWidth;
      let device = 'desktop';
      if (width <= 768) {
        device = 'mobile';
      } else if (width <= 1024) {
        device = 'tablet';
      }
      const path = location.pathname.replace(process.env.PUBLIC_URL, '');
      setBackground(bgMap[path]?.[device] || bgMap["/Space-Tourism-Application/"].desktop);
    };
    updateBackground();
    chooseSomething();
    window.addEventListener('resize', updateBackground);

    return () => {
      window.removeEventListener('resize', updateBackground);
    };
  }, [location.pathname]);

  return (
    <div className='main' style={{ backgroundImage: `url(${backgroundImg})` }}>
      <Header />
      <div className="choose-destination-text">
        <p className="uppercase font-berlow-condensed fs-letter-spacing">
          <span aria-hidden="true" className="opacity-low">{choose.num}</span>{choose.txt}
        </p>
      </div>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/destination`} element={<Destination />} />
        <Route path={`/crew`} element={<Crew />} />
        <Route path={`/technology`} element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
