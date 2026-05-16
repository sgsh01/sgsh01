import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('dark');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [selectedAirline, setSelectedAirline] = useState('greenzy');

  // Load preferences from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setLanguage(savedLanguage);
    setTheme(savedTheme);
  }, []);

  // Save preferences to localStorage
  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'id' : 'en';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <AppContext.Provider
      value={{
        language,
        toggleLanguage,
        theme,
        toggleTheme,
        isBookingModalOpen,
        setIsBookingModalOpen,
        bookingStep,
        setBookingStep,
        selectedAirline,
        setSelectedAirline,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};