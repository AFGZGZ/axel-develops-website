import { motion } from "framer-motion";
import tokki from "../../assets/tokki.webp";

function Projects() {
  const projects = [
    {
      title: "Tokki Korean",
      desc: "An all -in-one Language learning app for Korean. Currently available for Android devices.",
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
                gap-6
              "
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-5">
                  <div className="w-20 h-20 md:w-22 md:h-22 rounded-2xl overflow-hidden flex-shrink-0 self-start md:self-auto isolate">
                    <img
                      src={tokki}
                      alt={p.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="max-w-[500px]">
                    <h3
                      className="
                      text-[clamp(1.8rem,3vw,2.5rem)]
                      font-medium tracking-tight mb-1
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
