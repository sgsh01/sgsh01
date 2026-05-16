import React, { useState, useContext } from 'react';
import { Menu, X } from 'lucide-react';
import { AppContext } from '../context/AppContext';
import { translations } from '../constants/translations';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setIsBookingModalOpen } = useContext(AppContext);
  const t = translations[language];

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.airlines, href: '#airlines' },
    { label: t.nav.fleet, href: '#fleet' },
    { label: t.nav.destinations, href: '#destinations' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-dark/80 backdrop-blur-md z-50 border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">✈</span>
            </div>
            <span className="text-white font-bold text-xl hidden sm:inline">Greenzy</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-gray-300 hover:text-primary px-4 py-2 rounded-lg transition duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-primary hover:bg-primary-light text-dark font-semibold px-6 py-2 rounded-lg transition duration-300"
            >
              {t.nav.bookFlight}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="block text-gray-300 hover:text-primary px-4 py-2 rounded-lg transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setIsBookingModalOpen(true);
                setIsOpen(false);
              }}
              className="w-full bg-primary hover:bg-primary-light text-dark font-semibold px-4 py-2 rounded-lg transition duration-300"
            >
              {t.nav.bookFlight}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;