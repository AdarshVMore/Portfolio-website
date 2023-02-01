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
// import Services from "./components/services/Services";

function App() {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut;
  return (
    <div className="App">
      <Header timeline={tl} ease={ease} />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
