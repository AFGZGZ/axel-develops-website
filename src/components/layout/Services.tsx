import { useState, useRef } from "react";
import ServiceItem from "./ServiceItem";

function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "Modern, performant web applications built with precision and scalability in mind.",
    },
    {
      title: "UI Engineering",
      desc: "Translating design into flawless interfaces with strong attention to detail and interaction.",
    },
    {
      title: "Creative Development",
      desc: "Building immersive experiences using motion, 3D, and experimental interfaces.",
    },
  ];

  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState<number>(0);

  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      {/* DIFFUSED BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="w-full h-full transition-all duration-700"
          style={{
            background: `
        radial-gradient(
          600px circle at ${
            active === 0 ? "30% 40%" : active === 1 ? "70% 50%" : "50% 70%"
          },
          rgba(255,255,255,0.025),
          transparent 75%
        )
      `,
            filter: "blur(60px)", // softer
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[800px] mx-auto px-6 md:px-8">
        {/* LABEL */}
        <div className="text-xs tracking-[0.2em] uppercase opacity-40 mb-12">
          Services
        </div>

        {/* LIST */}
        <div className="space-y-20">
          {services.map((s, i) => (
            <ServiceItem
              key={i}
              i={i}
              active={active}
              setActive={setActive}
              refCallback={(el) => (refs.current[i] = el)}
              title={s.title}
              desc={s.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
