import React, { useContext } from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { AppContext } from '../context/AppContext';
import { translations } from '../constants/translations';

const Footer = () => {
  const { language } = useContext(AppContext);
  const t = translations[language];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
  ];

  return (
    <footer className="bg-dark/50 border-t border-primary/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">✈</span>
              </div>
              <span className="text-white font-bold text-xl">Greenzy</span>
            </div>
            <p className="text-gray-400">Premium airline connecting the world with eco-inspired service.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#" className="text-gray-400 hover:text-primary transition">Home</a><br />
              <a href="#" className="text-gray-400 hover:text-primary transition">Airlines</a><br />
              <a href="#" className="text-gray-400 hover:text-primary transition">Fleet</a><br />
              <a href="#" className="text-gray-400 hover:text-primary transition">Destinations</a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    className="w-10 h-10 bg-primary/20 hover:bg-primary/40 rounded-lg flex items-center justify-center text-primary transition"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;