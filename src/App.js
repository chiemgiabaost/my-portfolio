import React from "react";
import "./style.css"
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import About from "./components/about/About"
import Experience from "./components/expericene/Experience"
import Portfolio from "./components/Portfolio/Portfolio"

import Contact from "./components/contact/contact"
import Footer from "./components/Footer/Footer"

function App(){
    return (
      <><Header/>
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      
      <Contact />
      <Footer />
      </>
      
    )
    
}

export default App;

