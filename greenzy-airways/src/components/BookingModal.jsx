import React, { useContext, useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppContext } from '../context/AppContext';
import { translations } from '../constants/translations';
import { airlines, destinations, cabinClasses, pricing } from '../constants/data';

const BookingModal = () => {
  const { language, isBookingModalOpen, setIsBookingModalOpen, bookingStep, setBookingStep, selectedAirline, setSelectedAirline } = useContext(AppContext);
  const t = translations[language];

  const [formData, setFormData] = useState({
    fullName: '',
    departure: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    passengers: 1,
    cabinClass: 'Economy',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    setBookingStep(prev => prev + 1);
  };

  const handleBack = () => {
    setBookingStep(prev => prev - 1);
  };

  const generateResults = () => {
    const base = pricing[selectedAirline][formData.cabinClass].base;
    const flightNum = Math.floor(Math.random() * 9000) + 1000;
    return [
      {
        id: 1,
        airline: airlines.find(a => a.id === selectedAirline).name,
        code: airlines.find(a => a.id === selectedAirline).code,
        aircraft: 'Airbus A350-1000',
        departure: '08:00',
        arrival: '15:30',
        duration: '7h 30m',
        price: base * formData.passengers,
        flightNum,
      },
    ];
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <AnimatePresence>
      {isBookingModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsBookingModalOpen(false)}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-dark border border-primary/20 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto glass-dark"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 flex justify-between items-center p-6 border-b border-primary/20 bg-dark">
              <h2 className="text-2xl font-bold text-white">{t.booking.title}</h2>
              <button
                onClick={() => setIsBookingModalOpen(false)}
                className="text-gray-400 hover:text-white transition"
              >
                <X size={28} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Step Indicators */}
              <div className="flex justify-between mb-8">
                {[1, 2, 3, 4].map((step) => (
                  <div
                    key={step}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      step <= bookingStep
                        ? 'bg-primary text-dark'
                        : 'bg-gray-700 text-gray-400'
                    }`}
                  >
                    {step}
                  </div>
                ))}
              </div>

              {/* Step 1: Airline Selection */}
              {bookingStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-xl font-bold text-white mb-6">{t.booking.selectAirline}</h3>
                  <div className="space-y-4">
                    {airlines.map((airline) => (
                      <button
                        key={airline.id}
                        onClick={() => setSelectedAirline(airline.id)}
                        className={`w-full p-4 rounded-lg border-2 transition duration-300 text-left ${
                          selectedAirline === airline.id
                            ? `border-${airline.id === 'greenzy' ? 'primary' : 'secondary'} bg-${airline.id === 'greenzy' ? 'primary' : 'secondary'}/10`
                            : 'border-gray-700 hover:border-gray-600'
                        }`}
                        style={{
                          borderColor: selectedAirline === airline.id ? airline.color : '#374151',
                          backgroundColor: selectedAirline === airline.id ? `${airline.color}15` : 'transparent',
                        }}
                      >
                        <p className="font-bold text-white">{airline.name}</p>
                        <p className="text-sm text-gray-400">{airline.description}</p>
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={handleNext}
                    className="w-full mt-8 bg-primary hover:bg-primary-light text-dark font-bold py-3 rounded-lg transition duration-300"
                  >
                    {t.booking.next}
                  </button>
                </motion.div>
              )}

              {/* Step 2: Flight Details */}
              {bookingStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-xl font-bold text-white mb-6">{t.booking.step2}</h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="fullName"
                      placeholder={t.booking.fullName}
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-primary outline-none transition"
                    />
                    <select
                      name="departure"
                      value={formData.departure}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-primary outline-none transition"
                    >
                      <option value="">{t.booking.departure}</option>
                      {destinations.map((dest) => (
                        <option key={dest.code} value={dest.code}>
                          {dest.city} ({dest.code})
                        </option>
                      ))}
                    </select>
                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-primary outline-none transition"
                    >
                      <option value="">{t.booking.destination}</option>
                      {destinations.map((dest) => (
                        <option key={dest.code} value={dest.code}>
                          {dest.city} ({dest.code})
                        </option>
                      ))}
                    </select>
                    <input
                      type="date"
                      name="departureDate"
                      value={formData.departureDate}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-primary outline-none transition"
                    />
                    <input
                      type="date"
                      name="returnDate"
                      value={formData.returnDate}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-primary outline-none transition"
                    />
                    <input
                      type="number"
                      name="passengers"
                      min="1"
                      max="9"
                      value={formData.passengers}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-primary outline-none transition"
                      placeholder={t.booking.passengers}
                    />
                    <select
                      name="cabinClass"
                      value={formData.cabinClass}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-primary outline-none transition"
                    >
                      {cabinClasses.map((cls) => (
                        <option key={cls} value={cls}>
                          {cls}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex gap-4 mt-8">
                    <button
                      onClick={handleBack}
                      className="flex-1 border-2 border-primary text-primary font-bold py-3 rounded-lg hover:bg-primary/10 transition duration-300"
                    >
                      {t.booking.back}
                    </button>
                    <button
                      onClick={handleNext}
                      className="flex-1 bg-primary hover:bg-primary-light text-dark font-bold py-3 rounded-lg transition duration-300"
                    >
                      {t.booking.findFlights}
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Flight Results */}
              {bookingStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-xl font-bold text-white mb-6">Available Flights</h3>
                  <div className="space-y-4">
                    {generateResults().map((flight, idx) => (
                      <div key={idx} className="glass-dark p-6 rounded-xl border border-primary/20 cursor-pointer hover:border-primary/40 transition">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <p className="text-primary font-bold">{flight.code} {flight.flightNum}</p>
                            <p className="text-white font-bold text-lg">{flight.airline}</p>
                          </div>
                          <p className="text-2xl font-bold text-primary">${flight.price}</p>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div>
                            <p className="text-gray-400 text-sm">Departure</p>
                            <p className="text-white font-bold">{flight.departure}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-gray-400 text-sm">Duration</p>
                            <p className="text-white font-bold">{flight.duration}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-gray-400 text-sm">Arrival</p>
                            <p className="text-white font-bold">{flight.arrival}</p>
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm">Aircraft: {flight.aircraft}</p>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={handleBack}
                    className="w-full mt-8 border-2 border-primary text-primary font-bold py-3 rounded-lg hover:bg-primary/10 transition duration-300"
                  >
                    {t.booking.back}
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;