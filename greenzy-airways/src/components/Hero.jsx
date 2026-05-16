import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';
import { translations } from '../constants/translations';

const Hero = () => {
  const { language, setIsBookingModalOpen } = useContext(AppContext);
  const t = translations[language];

  return (
    <section id="home" className="relative w-full h-screen bg-dark overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-2xl"
      ></motion.div>

      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-32 right-20 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"
      ></motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 mb-12"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="bg-primary hover:bg-primary-light text-dark font-bold px-8 py-4 rounded-lg transition duration-300 transform hover:scale-105"
          >
            {t.hero.bookNow}
          </button>
          <a
            href="#fleet"
            className="border-2 border-primary text-primary hover:bg-primary/10 font-bold px-8 py-4 rounded-lg transition duration-300"
          >
            {t.hero.exploreFleet}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;