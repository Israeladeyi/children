import { motion } from 'framer-motion';

function Roadmap() {
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
    <section id="roadmap" className="py-16 bg-gradient-to-br from-gray-900 to-purple-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bebas text-center text-purple-400 mb-8"
        >
          Roadmap
        </motion.h2>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="flex items-center p-6 bg-gray-800 rounded-lg shadow-lg"
          >
            <div className="text-red-500 text-2xl font-bold mr-4">Q2 2025</div>
            <div>
              <h3 className="text-xl font-bebas text-purple-400">Token Launch</h3>
              <p className="text-gray-300">Official launch of $KIDDO on major DEXs with initial liquidity pools.</p>
            </div>
          </motion.div>
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="flex items-center p-6 bg-gray-800 rounded-lg shadow-lg"
          >
            <div className="text-red-500 text-2xl font-bold mr-4">Q3 2025</div>
            <div>
              <h3 className="text-xl font-bebas text-purple-400">Community Expansion</h3>
              <p className="text-gray-300">Partnerships with NFT projects and community-driven campaigns.</p>
            </div>
          </motion.div>
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="flex items-center p-6 bg-gray-800 rounded-lg shadow-lg"
          >
            <div className="text-red-500 text-2xl font-bold mr-4">Q4 2025</div>
            <div>
              <h3 className="text-xl font-bebas text-purple-400">Ecosystem Growth</h3>
              <p className="text- gray-300">Launch of KIDDO staking and governance features.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Roadmap;