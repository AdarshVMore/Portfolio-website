import { gsap, Power3 } from "gsap";
import "./App.css";
import Nav from "./components/nav/Nav";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/testimonials/Testimonial";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import ParticleBackground from "./components/particles/ParticleBackground";
import MouseTrials from "./components/mousetrial/MouseTrials";

import { useState, CSSProperties, useEffect } from "react";
import "./index.css";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4200);
  }, []);
  let tl = new gsap.timeline();
  let ease = Power3.easeOut;

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  return (
    <div className="App">
      {/* {loading ? (
        <div className="loader">
          <PropagateLoader
            className="loader"
            color="#00fdff"
            cssOverride={{ override }}
            size={18}
            speedMultiplier={1}
          />
        </div>
      ) : ( */}
      <>
        {/* {window.innerWidth >= 1024 ? <MouseTrials /> : ""} */}

        <ParticleBackground id="tsparticle" />
        <Header timeline={tl} ease={ease} />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Testimonial />
        <Contact />
        <Footer />
      </>
      {/* )} */}
    </div>
  );
}

export default App;
