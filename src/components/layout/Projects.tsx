import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Minimal, immersive personal portfolio.",
    },
    {
      title: "TOPIK App",
      desc: "Language learning platform for Korean.",
    },
  ];

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-[800px] mx-auto px-6 md:px-8">
        <div className="text-xs tracking-[0.2em] uppercase opacity-40 mb-16">
          Projects
        </div>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: i * 0.1,
                ease: [0.76, 0, 0.24, 1],
              }}
              whileHover={{ y: -4 }}
              className="group relative"
            >
              {/* BACKGROUND */}
              <div
                className="
                absolute inset-0 rounded-2xl
                bg-white/[0.03]
                backdrop-blur-xl
                border border-white/10
                transition-all duration-500
                group-hover:bg-white/[0.05]
                group-hover:border-white/20
              "
              />

              {/*INNER GLOW */}
              <div
                className="
                pointer-events-none absolute inset-0 rounded-2xl
                opacity-0 group-hover:opacity-100
                transition duration-700
                bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.12),transparent_70%)]
              "
              />

              <div
                className="
                relative
                p-6 md:p-8
                flex flex-col md:flex-row
                md:items-center
                md:justify-between
                gap-6
              "
              >
                <div className="max-w-[500px]">
                  <h3
                    className="
                    text-[clamp(1.8rem,3vw,2.5rem)]
                    font-medium tracking-tight mb-2
                    transition duration-500
                    group-hover:opacity-90
                  "
                  >
                    {p.title}
                  </h3>

                  <p className="text-base opacity-50 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div
                  className="
                  flex items-center justify-between
                  md:justify-end gap-6
                  w-full md:w-auto
                "
                >
                  <span className="text-xs opacity-30">View Project</span>

                  <span
                    className="
                    text-sm opacity-20
                    transition duration-500
                    group-hover:translate-x-1
                  "
                  >
                    →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
