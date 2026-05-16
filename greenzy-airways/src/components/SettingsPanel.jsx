import React, { useContext } from 'react';
import { Settings, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppContext } from '../context/AppContext';

const SettingsPanel = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { language, toggleLanguage, theme, toggleTheme } = useContext(AppContext);

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-dark shadow-lg hover:shadow-xl transition z-40"
      >
        <Settings size={24} />
      </motion.button>

      {/* Settings Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-8 w-72 glass-dark rounded-xl shadow-xl z-40 p-6"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-white">Settings</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition"
              >
                <X size={20} />
              </button>
            </div>

            {/* Divider */}
            <div className="border-b border-gray-700 mb-6"></div>

            {/* Language */}
            <div className="mb-6">
              <p className="text-white font-semibold mb-3">Language</p>
              <button
                onClick={toggleLanguage}
                className="w-full py-2 px-4 bg-primary/20 hover:bg-primary/40 text-primary rounded-lg font-semibold transition duration-300"
              >
                {language === 'en' ? 'English' : 'Bahasa Indonesia'}
              </button>
            </div>

            {/* Theme */}
            <div>
              <p className="text-white font-semibold mb-3">Theme</p>
              <button
                onClick={toggleTheme}
                className="w-full py-2 px-4 bg-primary/20 hover:bg-primary/40 text-primary rounded-lg font-semibold transition duration-300"
              >
                {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-30"
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SettingsPanel;