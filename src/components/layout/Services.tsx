import { useState, useRef } from "react";
import ServiceItem from "./ServiceItem";

function Services() {
  const services = [
    {
      title: "iOS/Android App Development",
      desc: "End-to-end mobile app development, from concept to launch.",
      details:
        "Cross-platform apps with React Native, App Store deployment ...",
    },
    {
      title: "Web Development",
      desc: "Modern, performant web applications built with scalability in mind.",
      details: "Fullstack ...",
    },
    {
      title: "VR/AR/XR Development",
      desc: "Building immersive experiences using motion, 3D, and experimental interfaces. ",
      details: " ... ",
    },
    {
      title: "Technical Strategy & Validation",
      desc: "Ensure your product is technically viable before investing in development.",
      details:
        "Architecture planning, MVP validation, tech stack selection, and rapid prototyping...",
    },
  ];

  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState<number>(0);
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
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
            filter: "blur(60px)",
          }}
        />
      </div>
      <div className="relative z-10 max-w-[800px] mx-auto px-6 md:px-8">
        <div className="text-xs tracking-[0.2em] uppercase opacity-40 mb-12">
          Services
        </div>

        <div className="space-y-20">
          {services.map((s, i) => (
            <ServiceItem
              key={i}
              i={i}
              active={active}
              open={open}
              setActive={setActive}
              setOpen={setOpen}
              refCallback={(el) => (refs.current[i] = el)}
              title={s.title}
              desc={s.desc}
              details={s.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
