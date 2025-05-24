import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import heroImg from "../assets/$KIDDO $KIDDO.png";

function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
    launched: false,
  });

  useEffect(() => {
    const launchDate = new Date('May 27, 2025 00:00:00').getTime();
    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance < 0) {
        clearInterval(countdown);
        setTimeLeft({ ...timeLeft, launched: true });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        .toString()
        .padStart(2, '0');
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        .toString()
        .padStart(2, '0');
      const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');

      setTimeLeft({ days, hours, minutes, seconds, launched: false });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center bg-no-repeat bg-center bg-contain"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 text-center bg-gray-900/50 py-12 rounded-lg relative z-10"
      >
        <motion.h1
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-5xl md:text-7xl font-bebas text-red-500"
        >
          KIDDO: The Rebel Memecoin
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Tantrum on the blockchain. No rules, just Pure-Chain Chaos. Minted by Misfits, Fueled by Memes 🎯
        </motion.p>

        {timeLeft.launched ? (
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-2xl font-bebas text-red-500"
          >
            We Have Launched!
          </motion.h3>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            id="countdown"
            className="mt-8 flex justify-center space-x-4 text-center"
          >
            <div className="bg-gray-800 p-4 rounded-lg">
              <span className="text-3xl md:text-5xl font-bold text-purple-400">{timeLeft.days}</span>
              <p className="text-sm text-white">Days</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <span className="text-3xl md:text-5xl font-bold text-purple-400">{timeLeft.hours}</span>
              <p className="text-sm text-white">Hours</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <span className="text-3xl md:text-5xl font-bold text-purple-400">{timeLeft.minutes}</span>
              <p className="text-sm text-white">Minutes</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <span className="text-3xl md:text-5xl font-bold text-purple-400">{timeLeft.seconds}</span>
              <p className="text-sm text-white">Seconds</p>
            </div>
          </motion.div>
        )}

        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          className="mt-8 inline-block bg-red-500 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition-colors duration-300"
        >
          Join the Rebellion
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Hero;
