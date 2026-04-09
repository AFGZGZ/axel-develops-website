import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function ServiceItem({ i, active, setActive, title, desc, refCallback }) {
  const ref = useRef(null);

  // const inView = useInView(ref, {
  //   margin: "-40% 0px -40% 0px",
  // });

  const inView = useInView(ref, {
    margin: "-20% 0px -20% 0px",
  });

  if (inView && active !== i) {
    setActive(i);
  }

  return (
    <motion.div
      ref={(el) => {
        ref.current = el;
        refCallback(el);
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="border-b border-white/10 pb-8 transition-all duration-700">
        <div className="flex justify-between items-end">
          <h3
            className={`
              text-[clamp(1.8rem,4vw,3rem)] tracking-tight font-medium
              transition-all duration-700
              ${active === i ? "translate-x-2 opacity-100" : "opacity-50"}
            `}
          >
            {title}
          </h3>

          <span
            className={`
              text-sm transition-all duration-700
              ${active === i ? "opacity-60 translate-x-2" : "opacity-20"}
            `}
          >
            →
          </span>
        </div>

        <motion.p
          animate={{
            opacity: active === i ? 0.7 : 0.3,
            height: active === i ? "auto" : "1.2em",
          }}
          transition={{ duration: 0.5 }}
          className="mt-4 text-lg max-w-md leading-relaxed overflow-hidden"
        >
          {desc}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default ServiceItem;
