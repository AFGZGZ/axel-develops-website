import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

type ServiceItemProps = {
  i: number;
  active: number;
  open: number | null;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  setOpen: React.Dispatch<React.SetStateAction<number | null>>;
  title: string;
  desc: string;
  details: string;
};

function ServiceItem({
  i,
  active,
  open,
  setActive,
  setOpen,
  title,
  desc,
  details,
}: ServiceItemProps) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    margin: "-40% 0px -40% 0px",
  });

  useEffect(() => {
    if (inView) setActive(i);
  }, [inView, i, setActive]);

  const isActive = active === i;
  const isOpen = open === i;

  const handleToggle = () => {
    setOpen(isOpen ? null : i);
  };

  return (
    <div ref={ref} className="relative">
      <div
        onClick={handleToggle}
        className="border-b border-white/10 pb-8 cursor-pointer select-none"
      >
        <div className="flex justify-between items-end">
          <h3
            className={`
              text-[clamp(1.8rem,4vw,3rem)] tracking-tight font-medium
              transition-all duration-500
              ${isActive ? "opacity-100" : "opacity-40"}
            `}
          >
            {title}
          </h3>
          <span
            className={`
              text-sm transition-all duration-500
              ${isOpen ? "opacity-60 rotate-90" : "opacity-20"}
            `}
          >
            →
          </span>
        </div>
        <p
          className={`
            mt-4 text-lg max-w-md leading-relaxed
            transition-all duration-500
            ${isActive ? "opacity-70" : "opacity-30"}
          `}
        >
          {desc}
        </p>
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{
            duration: 0.5,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="overflow-hidden"
        >
          <div className="pt-4 text-base leading-relaxed opacity-60 max-w-md">
            {details}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ServiceItem;
