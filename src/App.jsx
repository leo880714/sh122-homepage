import React from "react"
import AnimatedCursor from "react-animated-cursor";
import Header from "./components/Header"
import Nav from "./components/Nav"
import About from "./components/About"
// import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Canvas from "./components/Canvas"

function Cursor() {
  return (
    <div className="cursor__dot">
      <AnimatedCursor
        innerSize={15}
        outerSize={15}
        color="255, 255 ,255"
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={5}
      />
    </div>
  )
}

function App() {
  return (
      <>   
        {Cursor() }
        <Header />
        <Nav />
        <About />
        <Canvas /> 
        {/* <Experience /> */}
        <Contact />
        <Footer />
      </>
  );
}

export default App;
