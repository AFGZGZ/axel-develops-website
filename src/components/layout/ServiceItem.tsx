import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

function ServiceItem({ i, active, setActive, title, desc }) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    margin: "-40% 0px -40% 0px", // activates when centered
  });

  // ✅ SAFE state update (no render loop)
  useEffect(() => {
    if (inView) setActive(i);
  }, [inView, i, setActive]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="border-b border-white/10 pb-8">
        <div className="flex justify-between items-end">
          <h3
            className={`
              text-[clamp(1.8rem,4vw,3rem)] tracking-tight font-medium
              transition-all duration-500
              ${active === i ? "opacity-100" : "opacity-40"}
            `}
          >
            {title}
          </h3>

          <span
            className={`
              text-sm transition-all duration-500
              ${active === i ? "opacity-60 translate-x-1" : "opacity-20"}
            `}
          >
            →
          </span>
        </div>

        <p
          className={`
            mt-4 text-lg max-w-md leading-relaxed
            transition-all duration-500
            ${active === i ? "opacity-70" : "opacity-30"}
          `}
        >
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

export default ServiceItem;
