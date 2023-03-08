import { BrowserRouter } from "react-router-dom";
// import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
// import Experience from "./components/Experience";
// import Works from "./components/Works";
// import Feedbacks from "./components/Feedbacks";
// import Contact from "./components/Contact";
import {
  About,
  Hero,
  Navbar,
  // Experience,
  // Works,
  // Feedbacks,
  // Contact,
  // StarsCanvas,
} from "./components";
// import { StarsCanvas } from "./components/canvas";

// import { About } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Experience />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
