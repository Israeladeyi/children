{/*import { motion } from "framer-motion";
import heroImg from "../assets/heroImg.jpg"; // Replace with your actual image path
const Hero = () => {
    return (
        <section className="pt-24 pb-16 px-6 md:px-16 bg-gradient-to-b from-purple-100 to-white">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
               
                <motion.div
                    initial={{ x: -60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="flex-1 text-center md:text-left"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold text-purple-700 leading-tight">
                       <span className="text-purple-500">$KIDDO</span> <br />
                      isn’t just a coin.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 mt-6 max-w-lg">
                    It’s the tantrum of a generation the digitally grown, meme-fed, authority-questioning crypto
 youth who never got their turn on the swings. <br />
 The world tried to tame us with rules. <br />
 Now we mint our own. <br />
 No more nap times. <br />
 No more timeouts. <br />
 Just unfiltered play, powered by Web3.
                    </p>
                  
                </motion.div>
            
                <motion.div
                    initial={{ x: 60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="flex-1"
                >
                    <img
                        src={heroImg}
                        alt="Kiddo Hero"
                        className="w-full max-w-[500px] sm:max-w-[550px] md:max-w-[600px] lg:max-w-[700px] mx-auto drop-shadow-2xl transition-transform duration-300 hover:scale-105 rounded-2xl"
                    />
                </motion.div>
            </div>
        </section>
    );
};
export default Hero;*/}

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 text-center bg-gray-900/50 py-12 rounded-lg"
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
          Break the rules, join the revolution. KIDDO is the memecoin for the bold and the fearless.
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
              <p className="text-sm">Days</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <span className="text-3xl md:text-5xl font-bold text-purple-400">{timeLeft.hours}</span>
              <p className="text-sm">Hours</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <span className="text-3xl md:text-5xl font-bold text-purple-400">{timeLeft.minutes}</span>
              <p className="text-sm">Minutes</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <span className="text-3xl md:text-5xl font-bold text-purple-400">{timeLeft.seconds}</span>
              <p className="text-sm">Seconds</p>
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