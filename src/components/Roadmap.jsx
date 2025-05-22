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
          Tokenomics
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-6"
        >
          {[
            {
              title: 'Token Name',
              text: 'KIDDO',
            },
            {
              title: 'Ticker',
              text: '$KIDDO',
            },
            {
              title: 'Taxes',
              text: '0% Buy/Sell',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="flex-1 p-6 bg-gray-800 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bebas text-purple-400 text-center">{item.title}</h3>
              <p className="text-gray-300 text-center">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Roadmap;
