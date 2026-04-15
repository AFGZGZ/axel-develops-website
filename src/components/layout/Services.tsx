import { useState } from "react";
import ServiceItem from "./ServiceItem";

function Services() {
  const services = [
    {
      title: "iOS/Android App Development",
      desc: "End-to-end mobile app development, from concept to launch.",
      details:
        "Cross-platform apps built with React Native, including UI/UX implementation, API integrations, monetization, App Store and Play Store deployment, and ongoing support.",
    },
    {
      title: "Web Development",
      desc: "Modern, performant web applications built with scalability in mind.",
      details:
        " Full-stack development with React and custom or serverless backends. Focused on performance, clean architecture, and long-term maintainability.",
    },
    {
      title: "Augmented/mixed/extended reality Development",
      desc: "Building immersive experiences that blend digital content with the real world. ",
      details:
        "Development of AR,MR,XR applications. Includes 3D asset integration, spatial anchoring, real-world tracking, and interaction systems optimized for mobile devices.",
    },
    {
      title: "Technical Strategy & Validation",
      desc: "Ensure your product is technically viable before investing in development.",
      details:
        "I will act as a temporary CTO validating your ideas from a technical perspective and helping you identify risks early. Let's plan a scalable architecture, choose the optimal tools and prototype critical features before commiting for a full-scale development.",
    },
  ];

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
