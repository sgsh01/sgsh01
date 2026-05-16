import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';
import { translations } from '../constants/translations';
import { destinations } from '../constants/data';

const Destinations = () => {
  const { language } = useContext(AppContext);
  const t = translations[language];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="destinations" className="min-h-screen bg-dark py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">{t.destinations.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto"></div>
        </motion.div>

        {/* Destination Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {destinations.map((destination, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-dark p-6 rounded-xl hover:scale-110 transition duration-300 group cursor-pointer text-center"
            >
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="text-xl font-bold text-white mb-1">{destination.city}</h3>
              <p className="text-sm text-gray-400 mb-3">{destination.country}</p>
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                {destination.code}
              </span>
              <button className="w-full mt-4 py-2 bg-primary/20 hover:bg-primary/40 text-primary rounded-lg font-semibold transition duration-300">
                {t.destinations.explore}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Destinations;