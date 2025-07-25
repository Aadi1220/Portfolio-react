import React, { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close menu when clicking on nav items
  const handleNavClick = () => {
    setMenuOpen(false);
  };

  const navItems = [
    { name: "About", href: "#About" },
    { name: "Skills", href: "#Skills" },
    { name: "Projects", href: "#Projects" },
    { name: "Contact", href: "#Footer" },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 text-white bg-black/30 backdrop-blur-lg shadow-xl px-4 py-3 md:px-16 md:py-4 transition-all duration-300"
        data-aos="fade-down"
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Code2 size={28} className="text-cyan-400" />
            <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent tracking-wider drop-shadow-sm">
              Portfolio
            </span>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-10 font-medium text-lg">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="relative group transition-all duration-300"
                >
                  <span className="text-white hover:text-cyan-400">
                    {item.name}
                  </span>
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={`md:hidden absolute left-0 right-0 top-full w-full transition-all duration-300 ease-in-out ${
            menuOpen 
              ? "opacity-100 translate-y-0 pointer-events-auto" 
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="mx-4 mt-2 rounded-xl bg-gradient-to-br from-black/95 via-gray-900/95 to-gray-800/95 backdrop-blur-lg border border-gray-700/50 shadow-2xl">
            <ul className="flex flex-col gap-1 p-4 text-base font-medium">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block py-3 px-4 rounded-lg hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-200 border-b border-gray-700/30 last:border-b-0"
                    onClick={handleNavClick}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Spacer div to prevent content from being hidden behind fixed navbar */}
      <div className="h-16 md:h-20"></div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={handleNavClick}
        />
      )}
    </>
  );
};

export default Navbar;
