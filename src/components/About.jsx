import { motion } from 'framer-motion';
import img1 from "../assets/chartr.png"
import img2 from "../assets/filters.png"
function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="about" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bebas text-center text-purple-400 mb-8"
        >
          About KIDDO
        </motion.h2>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-12">
          {/* Why KIDDO Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col md:flex-row items-center bg-gray-700 rounded-lg shadow-lg p-6"
          >
            <div className="md:w-1/2 mb-4 md:mb-0 md:pr-6">
              <img
                src={img1}
                alt="Rebellious graffiti"
                className="w-80 h-80 object-cover rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bebas text-red-500 mb-4">Why KIDDO?</h3>
              <p className="text-gray-300">
                We’re the kids who never got our turn on the swings.
                Told to sit still, follow rules — but we were never built for cages.
                KIDDO is our rebellion.
                Fueled by memes, chaos, and crypto, we mint our own path — loud, wild, and decentralized
              </p>
            </div>
          </motion.div>
          {/* Our Vision Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col md:flex-row-reverse items-center bg-gray-700 rounded-lg shadow-lg p-6"
          >
            <div className="md:w-1/2 mb-4 md:mb-0 md:pr-6">
              <img
                src={img2}
                alt="Punk rebellion"
                className="w-80 h-80 object-cover rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bebas text-red-500 mb-4">Our Vision</h3>
              <p className="text-gray-300">
                No more nap times. No more timeouts.
                We’re building a playground on the blockchain — ruled by us, powered by Web3.
                A memecoin, yes — but also a movement.
                Unfiltered. Unstoppable. Undeniably KIDDO </p>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;