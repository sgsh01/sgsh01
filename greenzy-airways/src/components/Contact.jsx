import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { AppContext } from '../context/AppContext';
import { translations } from '../constants/translations';

const Contact = () => {
  const { language } = useContext(AppContext);
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="min-h-screen bg-dark py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">{t.contact.title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Email */}
            <div className="glass-dark p-6 rounded-xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Mail className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Email</h3>
              </div>
              <p className="text-gray-400">{t.contact.email}</p>
            </div>

            {/* Phone */}
            <div className="glass-dark p-6 rounded-xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Phone className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Phone</h3>
              </div>
              <p className="text-gray-400">{t.contact.phone}</p>
            </div>

            {/* Address */}
            <div className="glass-dark p-6 rounded-xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <MapPin className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Address</h3>
              </div>
              <p className="text-gray-400">{t.contact.headquarters}</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-dark p-8 rounded-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-primary outline-none transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-primary outline-none transition"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-primary outline-none transition"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-primary outline-none transition resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-light text-dark font-bold py-3 rounded-lg transition duration-300"
              >
                {t.contact.sendMessage}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;