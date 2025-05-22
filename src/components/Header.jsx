import React from "react";
import { motion } from "framer-motion";
const Header = () => {
  return (
   <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 w-full bg-gray-800/80 backdrop-blur-md z-50"
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bebas tracking-wider text-red-500">KIDDO</div>
        <ul className="flex space-x-6">
          <li>
            <a href="#hero" className="hover:text-purple-400 transition-colors duration-300 text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-purple-400 transition-colors duration-300 text-white">
              About
            </a>
          </li>
          <li>
            <a href="#roadmap" className="hover:text-purple-400 transition-colors duration-300 text-white">
              Roadmap
            </a>
          </li>
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
              Telegram
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};
export default Header;
