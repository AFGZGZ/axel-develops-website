import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="bg-[#0a0a0a] text-white font-[Inter]">
      <Navbar />
      <Main />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-6 z-50 mix-blend-difference">
      <span className="text-xs tracking-[0.2em] uppercase">YourName</span>
      <div className="flex gap-10 text-xs">
        <span>Work</span>
        <span>Contact</span>
      </div>
    </nav>
  );
}

function Main() {
  return (
    <main className="px-8">
      <Hero />
      <Work />
      <Contact />
    </main>
  );
}

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end pb-24">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-[clamp(3rem,10vw,11rem)] leading-[0.85] tracking-tight font-medium max-w-[900px]"
      >
        Creative
        <br />
        Developer
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-16 text-lg opacity-40 max-w-sm"
      >
        I build refined digital experiences through thoughtful design and
        precise development.
      </motion.p>
    </section>
  );
}

function Work() {
  const projects = [
    { title: "Portfolio Website", desc: "Minimal experience" },
    { title: "TOPIK App", desc: "Language learning platform" },
    { title: "Design System", desc: "UI/UX foundation" },
  ];

  return (
    <section className="mt-40">
      <div className="space-y-32">
        {projects.map((p, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="flex justify-between items-end border-b border-white/10 pb-10">
              <h2 className="text-[clamp(2.5rem,6vw,6rem)] leading-tight tracking-tight font-medium transition-all duration-500 group-hover:translate-x-3 group-hover:opacity-50">
                {p.title}
              </h2>
              <span className="text-sm opacity-20 group-hover:translate-x-3 transition duration-500">
                →
              </span>
            </div>

            <p className="mt-6 text-lg opacity-30 max-w-md">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="mt-48 pb-32">
      <h2 className="text-4xl mb-10">Let’s work together</h2>
      <a
        href="mailto:you@email.com"
        className="text-xl opacity-40 hover:opacity-100 transition"
      >
        you@email.com
      </a>
    </section>
  );
}
