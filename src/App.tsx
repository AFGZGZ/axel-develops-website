import Background from "./components/background/Background";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import About from "./components/layout/About";
import Services from "./components/layout/Services";
import Projects from "./components/layout/Projects";
import Contact from "./components/layout/Contact";

export default function App() {
  return (
    <div className="bg-transparent text-white font-[Archivo]">
      <Navbar />
      <Main />
      <Background />
      {/* GLOBAL GRADIENT */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {/* <div className="h-[200vh] w-full bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.2)_30%,rgba(0,0,0,0.6)_60%,rgba(0,0,0,0.95)_100%)]" /> */}
        <div className="h-[300vh] md:h-[200vh] w-full bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.2)_30%,rgba(0,0,0,0.6)_60%,rgba(0,0,0,0.95)_100%)]" />
      </div>
    </div>
  );
}

function Main() {
  return (
    <main className=" max-w-none md:max-w-[800px] mx-auto">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}
