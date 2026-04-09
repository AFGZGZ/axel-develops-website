import { motion, AnimatePresence } from "framer-motion";

function MobileNavbar({ open, setOpen }) {
  const links = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className=" fixed inset-0 z-[100] backdrop-blur-2xl bg-black/[0.6] "
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-xs uppercase opacity-60"
          >
            Close
          </button>

          {/* LINKS */}
          <div className="h-full flex flex-col justify-center px-8">
            <div className="space-y-6">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  //   whileTap={{ scale: 0.96 }}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.08,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="
                    block
                    text-[clamp(2.5rem,10vw,5rem)]
                    leading-[1]
                    tracking-tight
                    font-medium
                  "
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileNavbar;
