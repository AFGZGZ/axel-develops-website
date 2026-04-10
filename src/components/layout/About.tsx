import { motion } from "framer-motion";
import me from "../../assets/head.webp";

function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-black/20 to-black/80" />
      </div>

      <div className="relative z-30 max-w-[900px] mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.4, y: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-xs tracking-[0.2em] uppercase mb-12"
        >
          About
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            viewport={{ once: true }}
            className="relative z-30"
          >
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden">
              <img
                src={me}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.2] tracking-tight"
            >
              I make cool digital things with an artisanal approach. Based in
              Gyeonggi-do / Seoul.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.76, 0, 0.24, 1],
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="mt-8 text-lg md:text-xl leading-relaxed max-w-[500px] text-white/80"
            >
              Throughout the past 5 years, I have worked creating 3D web
              solutions for the AEC sector, education projects, iterating quick
              app ideas...
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 0.6, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.76, 0, 0.24, 1],
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="mt-8 text-lg md:text-xl leading-relaxed max-w-[500px]"
            >
              You can check what I'm currently working on on my{" "}
              <a
                href="https://www.youtube.com/@AxelDevelops"
                target="_blank"
                rel="noopener noreferrer"
                className="
                font-semibold
                underline
                underline-offset-4
                decoration-2
                decoration-white
                hover:opacity-70
                transition
              "
              >
                YouTube
              </a>{" "}
              or{" "}
              <a
                href="https://github.com/AFGZGZ"
                target="_blank"
                rel="noopener noreferrer"
                className="
                font-semibold
                underline
                underline-offset-4
                decoration-2
                decoration-white
                hover:opacity-70
                transition
              "
              >
                GitHub
              </a>
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
