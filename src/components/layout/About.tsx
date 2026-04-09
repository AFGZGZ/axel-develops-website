import { motion } from "framer-motion";
import me from "../../assets/head.webp";

function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden">
      {/* 🌫 BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-black/20 to-black/80" />
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto px-6 md:px-8">
        {/* LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.4, y: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-xs tracking-[0.2em] uppercase mb-12"
        >
          About
        </motion.div>

        {/* LAYOUT */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          {/* 🖼 PHOTO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-40 h-40 md:w-50 md:h-50 rounded-full overflow-hidden">
              <img
                src={me}
                alt="Profile"
                className="w-full h-full object-cover"
              />

              {/* ✨ subtle inner glow */}
              {/* <div className="absolute inset-0 rounded-full bg-white/10 opacity-20" /> */}
            </div>

            {/* 🌫 soft ambient glow */}
            {/* <div className="absolute inset-0 rounded-full blur-2xl bg-white/10 opacity-20 -z-10" /> */}
          </motion.div>

          {/* ✍️ TEXT */}
          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.2] tracking-tight"
            >
              I make cool digital things with an artisanal approach. Based in
              Gyeonggi/Seoul, South Korea.
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
              Throughout the past 5 years, I have worked creating 3D web
              solutions for the AEC sector, education projects, iterating quick
              app ideas...
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
