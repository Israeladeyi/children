import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full bg-gray-800/80 backdrop-blur-md z-50"
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bebas tracking-wider text-red-500">KIDDO</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {["Home", "About", "Tokenomics"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-purple-400 transition-colors duration-300 text-white"
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors duration-300 text-white"
            >
              X
            </a>
          </li>
          <li>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors duration-300 text-white"
            >
              <FontAwesomeIcon icon={faTelegram} className="mr-1" /> Telegram
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
        </button>
      </nav>

      {/* Mobile Slide-down Menu with Framer Motion */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-800/95 px-4 pb-4 overflow-hidden"
          >
            <ul className="flex flex-col space-y-4 text-white py-4">
              {["Home", "About", "Roadmap"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-purple-400 transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://x.com/kiddocoin_sol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400"
                  onClick={toggleMenu}
                >
                  X
                </a>
              </li>
              <li>
                <a
                  href="https://telegram.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400"
                  onClick={toggleMenu}
                >
                  <FontAwesomeIcon icon={faTelegram} className="mr-1" />
                  Telegram
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
