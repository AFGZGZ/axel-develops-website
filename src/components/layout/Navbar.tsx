function Navbar() {
  return (
    // <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference">
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference bg-transparent">
      <div className="max-w-[800px] mx-auto px-8 flex justify-between items-center py-6">
        <span className="text-xs tracking-[0.2em] uppercase">
          Axel Develops
        </span>

        <div className="hidden md:flex gap-10 text-xs">
          <a href="#projects" className="hover:opacity-50 transition uppercase">
            Projects
          </a>
          <a href="#contact" className="hover:opacity-50 transition uppercase">
            Services
          </a>
          <a href="#contact" className="hover:opacity-50 transition uppercase">
            About
          </a>
          <a href="#contact" className="hover:opacity-50 transition uppercase">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
