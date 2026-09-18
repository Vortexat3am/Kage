import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Characters from "./components/Characters";
import Story from "./components/Story";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TrailerModal from "./components/TrailerModal";

const App = () => {
  const lenisRef = useRef();
  const [trailerOpen, setTrailerOpen] = useState(false);

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  const openTrailer = () => setTrailerOpen(true);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <main className="relative min-h-screen w-screen overflow-x-hidden bg-ink">
        <Navbar />
        <Hero onWatchTrailer={openTrailer} />
        <About />
        <Features />
        <Characters />
        <Story />
        <Gallery onWatchTrailer={openTrailer} />
        <Contact />
        <Footer />
        <TrailerModal open={trailerOpen} onClose={() => setTrailerOpen(false)} />
      </main>
    </ReactLenis>
  );
};

export default App;
