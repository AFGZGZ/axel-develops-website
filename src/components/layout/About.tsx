import { motion } from "framer-motion";

function About() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="absolute inset-0 z-0">
        {/* gradient ONLY affects this layer */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/80" /> */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-black/20 to-black/80" />
      </div>

      {/* 👈 reduced spacing */}
      <div className="max-w-[800px] mx-auto px-6 md:px-8">
        {/* LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.4, y: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-xs tracking-[0.2em] uppercase mb-10"
        >
          About
        </motion.div>

        {/* MAIN TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.2] tracking-tight max-w-[700px]"
        >
          I make cool digital things with an artisanal approach. Based in
          Gyeonggi/Seoul, South Korea.
        </motion.p>

        {/* SECONDARY TEXT */}
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
          Throughout the past 5 years, I have worked creating 3D web solutions
          for the AEC sector, education projects, iterating quick app ideas...
        </motion.p>
      </div>
    </section>
  );
}

export default About;
