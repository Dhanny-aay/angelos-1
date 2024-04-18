import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Landing from "./pages/landing";
import Services from "./pages/service";
import Story from "./pages/story";
import Contact from "./pages/contact";
import logo from './logo.webp';

function App() {

  const [loadingScreen, setLoadingScreen] = useState(true);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Set loading screen to false after 6 seconds
    const timer = setTimeout(() => {
      setLoadingScreen(false);
    }, 6000);

    // Clear the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, [location.pathname]);


  return (
    <>

    { loadingScreen && <div className=" fixed top-0 left-0 z-[999] w-full h-[100vh] bg-white flex items-center justify-center">
      <img src={ logo } className=" w-[40%]" alt="" />
    </div>}

    <Routes>
      <Route path="/" element={ <Landing/> }/>
      <Route path="/Services" element={ <Services/> }/>
      <Route path="/Our-story" element={ <Story/> }/>
      <Route path="/contact" element={ <Contact/> }/>
    </Routes>
    </>
  );
}

export default App;
