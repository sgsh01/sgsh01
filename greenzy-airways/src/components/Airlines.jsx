import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';
import { translations } from '../constants/translations';
import { airlines } from '../constants/data';

const Airlines = () => {
  const { language } = useContext(AppContext);
  const t = translations[language];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="airlines" className="min-h-screen bg-dark py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">{t.airlines.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {airlines.map((airline, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-dark p-8 rounded-2xl hover:scale-105 transition duration-500 group cursor-pointer"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 rounded-xl" style={{ backgroundColor: airline.color, opacity: 0.2 }}>
                  <div className="w-full h-full flex items-center justify-center text-2xl font-bold" style={{ color: airline.color }}>
                    {airline.code.charAt(0)}
                  </div>
                </div>
                <span className="text-sm font-semibold px-3 py-1 bg-primary/20 text-primary rounded-full">
                  {airline.code}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold text-white mb-2">{airline.name}</h3>
              <p className="text-gray-400 mb-6">{airline.description}</p>

              {/* Info */}
              <div className="space-y-3 mb-8">
                <div className="flex justify-between text-gray-300">
                  <span>Hub:</span>
                  <span className="text-white font-semibold">{airline.hub}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Fleet Size:</span>
                  <span className="text-white font-semibold">{airline.fleet} Aircraft</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Region:</span>
                  <span className="text-white font-semibold">{airline.country}</span>
                </div>
              </div>

              {/* Button */}
              <button
                className="w-full py-3 rounded-lg font-semibold transition duration-300"
                style={{
                  backgroundColor: airline.color,
                  color: '#000',
                }}
              >
                {t.airlines.learnMore}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Airlines;