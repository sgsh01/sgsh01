# 🎫 Greenzy Airways - Premium Airline Website

A modern, premium airline website for **Greenzy Airways** and its subsidiary **Ozy Airways** built with React, Tailwind CSS, and Framer Motion.

## ✨ Features

- ✈️ **Dual Airlines**: Greenzy Airways (Main) + Ozy Airways (Subsidiary)
- 🌍 **14+ Global Destinations**
- 🎨 **Dark Mode by Default** with Light Mode Toggle
- 🌐 **Multi-Language Support** (English & Bahasa Indonesia)
- 📱 **Fully Responsive** (Mobile, Tablet, Desktop)
- ✨ **Smooth Animations** & Glassmorphism Effects
- 🛫 **Interactive Flight Booking System** (4-Step Modal)
- 🚀 **Modern Premium Design** Inspired by Emirates, Singapore Airlines, Qatar Airways

## 📋 Sections

### 1. **Navigation Bar**
- Sticky header with responsive mobile menu
- Quick navigation to all sections
- Settings panel for language & theme

### 2. **Hero Section**
- Full-screen landing with animated elements
- Floating background effects
- Call-to-action buttons
- Airline preview cards

### 3. **Our Airlines**
- Greenzy Airways (Green Theme - Indonesia Based)
- Ozy Airways (Blue Theme - Australia Based)
- Detailed information cards with CTA

### 4. **Fleet Management**
- Toggle between Greenzy & Ozy fleets
- Aircraft listings with specifications
- Beautiful grid layout with hover effects

### 5. **Global Destinations**
- 14 Major destinations worldwide
- Interactive destination cards
- Regional filtering capability

### 6. **Flight Booking System**
- **Step 1**: Airline Selection
- **Step 2**: Flight Details Form
- **Step 3**: (Ready for expansion)
- **Step 4**: Simulated Flight Results

### 7. **Contact Section**
- Contact information
- Contact form with validation
- Social media integration

### 8. **Footer**
- Quick links
- Social media icons
- Company information

## 🛠️ Tech Stack

- **React 18** - UI Framework
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide Icons** - Icon Library
- **Context API** - State Management

## 🎨 Color Palette

### Greenzy Airways
- Primary: `#7BC043` (Green)
- Light: `#A5D66F` (Light Green)

### Ozy Airways
- Primary: `#003E9F` (Blue)
- Light: `#1E5BD7` (Bright Blue)

### Background
- Dark: `#081B33` (Dark Navy)
- Light: `#F5F7FA` (Light Gray)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 641px - 1024px
- **Desktop**: > 1024px

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 📂 Project Structure

```
greenzy-airways/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Airlines.jsx
│   │   ├── Fleet.jsx
│   │   ├── Destinations.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── BookingModal.jsx
│   │   └── SettingsPanel.jsx
│   ├── context/
│   │   └── AppContext.jsx
│   ├── constants/
│   │   ├── data.js
│   │   └── translations.js
│   ├── App.jsx
│   ├── index.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🌐 Language Support

- **English** (EN)
- **Bahasa Indonesia** (ID)

Languages are toggled via the settings panel and persist in localStorage.

## 🎯 Airlines Information

### Greenzy Airways
- **Code**: GZ
- **Hub**: Bali, Indonesia
- **Country**: Indonesia
- **Fleet**: 166 Aircraft
- **Status**: Full-Service International Airline

### Ozy Airways
- **Code**: OZ
- **Hub**: Sydney, Australia
- **Country**: Australia
- **Fleet**: 32 Aircraft
- **Status**: Regional Airline (Subsidiary)

## ✈️ Aircraft Fleet

### Greenzy Airways Fleet (166 Total)
- Airbus A330-900 (50)
- Airbus A350-1000 (40)
- Airbus A330-800 (26)
- Airbus A321neo (18)
- Airbus A350-1000ULR (10)
- Airbus A350-900 (10)
- Airbus A220-300 (6)

### Ozy Airways Fleet (32 Total)
- Airbus A321neo (12)
- Airbus A320neo (10)
- ATR 72-600 (10)

## 🌍 Destinations

Bali, Sydney, Melbourne, Brisbane, Perth, Singapore, Jakarta, Tokyo, Seoul, Dubai, London, Paris, Los Angeles, New York

## 🔧 Customization

All data is centralized in `src/constants/data.js` for easy modification:
- Airlines information
- Fleet data
- Destinations
- Pricing and flight durations

All text content is in `src/constants/translations.js` for easy multilingual support.

## 📝 Notes

- The booking system is for **demonstration only** - no real payment processing
- Flight results are **simulated** based on random generation
- All data is mock data for prototype purposes
- Ready for backend integration

## 🎓 Learning Resources

This project demonstrates:
- React Hooks & Context API
- Framer Motion animations
- Tailwind CSS styling
- Responsive design patterns
- Component composition
- State management
- Multi-language support
- LocalStorage persistence

## 📄 License

Created for demonstration purposes.

---

**Built with ❤️ for the aviation industry**
