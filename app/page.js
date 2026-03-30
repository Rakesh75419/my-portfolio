import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import FloatingUI from "./components/FloatingUI";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Experience />
      <Contact />
      <Footer />

       <FloatingUI />
    </>
  );
}