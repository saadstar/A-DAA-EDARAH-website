import React from 'react';
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



function App() {
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
            </Routes>
        </Router>
    </>
  );
}
export default App;