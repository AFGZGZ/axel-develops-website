import { useState } from "react";
import MobileNavbar from "./MobileNavbar";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference">
        <div className="max-w-[800px] mx-auto px-6 md:px-8 flex justify-between items-center py-5">
          <span className="text-xs tracking-[0.2em] uppercase">
            Axel Develops
          </span>

          {/* DESKTOP */}
          <div className="hidden md:flex gap-10 text-xs">
            <a href="#about" className="hover:opacity-50 transition uppercase">
              About
            </a>
            <a
              href="#services"
              className="hover:opacity-50 transition uppercase"
            >
              Services
            </a>
            <a
              href="#projects"
              className="hover:opacity-50 transition uppercase"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:opacity-50 transition uppercase"
            >
              Contact
            </a>
          </div>

          {/* MOBILE */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-xs uppercase opacity-60"
          >
            Menu
          </button>
        </div>
      </nav>

      <MobileNavbar open={open} setOpen={setOpen} />
    </>
  );
}

export default Navbar;
