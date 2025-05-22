{/*import { motion } from "framer-motion";
const cardData = [
    { title: "Decentralized", desc: "No central authority. Power to the community." },
    { title: "Cute Utility", desc: "From memes to dreams, Kiddo brings fun to function." },
    { title: "Fast Transactions", desc: "Blazing-fast on-chain performance." },
    
];
const About = () => {
    return (
      
        <section className="py-16 px-6 md:px-16 bg-gradient-to-b from-white to-purple-100">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-purple-700">Why Choose $KIDDO?</h2>
                <p className="text-lg text-gray-700 mt-4">Reclaiming the chain with crayons & chaos</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {cardData.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
                    >
                        <h3 className="text-xl font-semibold text-purple-600">{card.title}</h3>
                        <p className="text-gray-600 mt-2">{card.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
 };
export default About;*/}


import { motion } from 'framer-motion';

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
                src="https://images.unsplash.com/photo-1573486145931-83bf450c976b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Rebellious graffiti"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bebas text-red-500 mb-4">Why KIDDO?</h3>
              <p className="text-gray-300">
               We are the youth who never got our turn on the swings. The world tried to tame us with rules, but we were never meant to be contained.
              </p>
            </div>
          </motion.div>
          {/* Our Vision Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col md:flex-row-reverse items-center bg-gray-700 rounded-lg shadow-lg p-6"
          >
            <div className="md:w-1/2 mb-4 md:mb-0 md:pl-6">
              <img
                src="https://images.unsplash.com/photo-1516321318423-4c160a7f84ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Punk rebellion"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bebas text-red-500 mb-4">Our Vision</h3>
              <p className="text-gray-300">
Now, we mint our own rules. No more nap times. No more timeouts. Just unfiltered, unstoppable play — powered by Web3. </p>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;