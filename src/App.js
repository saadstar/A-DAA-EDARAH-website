import React ,{useState,useEffect} from 'react';
import './assets/css/bootstrap.min.css';
import './assets/css/animate.css';
import './assets/css/backToTop.css';
import './assets/css/style.css';
import {BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import BackToTopStart from "./component/BackToTopStart";
import ValuationRequest from './pages/ValuationRequest';
import Splash from './component/Splach';



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for splash screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Splash />;
  }
  return (
    <>
        {/*<Preloader />*/}
        <BackToTopStart />
        <Router>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/services" element={<Services />}></Route>
                <Route path="/Faq" element={<Faq />}></Route>
                <Route path="/Contact" element={<Contact />}></Route>
                <Route path="/request" element={<ValuationRequest />}></Route>
            </Routes>
        </Router>
    </>
        
  );
}
export default App;