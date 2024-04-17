import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Landing from "./pages/landing";
import Services from "./pages/service";
import Story from "./pages/story";
import Contact from "./pages/contact";

function App() {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);


  return (
    <>
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
