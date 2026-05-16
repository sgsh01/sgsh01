import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';
import { translations } from '../constants/translations';
import { airlines, fleetData } from '../constants/data';

const Fleet = () => {
  const { language } = useContext(AppContext);
  const [selectedAirline, setSelectedAirline] = useState('greenzy');
  const t = translations[language];

  const currentFleet = fleetData[selectedAirline];
  const currentAirline = airlines.find(a => a.id === selectedAirline);

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="fleet" className="min-h-screen bg-dark py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">{t.fleet.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto"></div>
        </motion.div>

        {/* Airline Selector */}
        <div className="flex justify-center gap-4 mb-12">
          {airlines.map((airline) => (
            <button
              key={airline.id}
              onClick={() => setSelectedAirline(airline.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition duration-300 ${
                selectedAirline === airline.id
                  ? 'bg-gradient-to-r from-primary to-primary-light text-dark'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {airline.name}
            </button>
          ))}
        </div>

        {/* Fleet Info */}
        <div className="text-center mb-12">
          <p className="text-2xl text-gray-300">
            <span className="text-primary font-bold">{currentAirline.fleet}</span> {t.fleet.aircraft}
          </p>
        </div>

        {/* Aircraft List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {currentFleet.map((aircraft, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-dark p-6 rounded-xl hover:scale-102 transition duration-300 group cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: `${currentAirline.color}30` }}
                  >
                    ✈
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{aircraft.type}</h3>
                    <p className="text-gray-400">Capacity: {aircraft.capacity} passengers</p>
                  </div>
                </div>
                <div className="text-right">
                  <span
                    className="px-4 py-2 rounded-lg font-semibold text-white"
                    style={{ backgroundColor: `${currentAirline.color}40` }}
                  >
                    {aircraft.code}
                  </span>
                  <p className="text-gray-400 mt-2">{aircraft.count} Aircraft</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Fleet;