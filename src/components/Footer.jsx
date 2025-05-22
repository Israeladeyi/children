import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="footer"
      className="py-8 bg-gray-800 text-center"
    >
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bebas text-red-500 mb-4">
          Join the KIDDO Rebellion
        </h3>
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
          >
            X
          </a>
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faTelegram} className="mr-1" />
            Telegram
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
          >
            Discord
          </a>
        </div>
        <p className="text-gray-400">
          © 2025 KIDDO Memecoin. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;
