export const airlines = [
  {
    id: 'greenzy',
    name: 'Greenzy Airways',
    code: 'GZ',
    color: '#7BC043',
    lightColor: '#A5D66F',
    country: 'Indonesia',
    hub: 'Bali, Indonesia',
    hubs: ['Bali', 'Sydney', 'Singapore'],
    fleet: 166,
    description: 'Full-service international airline',
  },
  {
    id: 'ozy',
    name: 'Ozy Airways',
    code: 'OZ',
    color: '#003E9F',
    lightColor: '#1E5BD7',
    country: 'Australia',
    hub: 'Sydney, Australia',
    hubs: ['Sydney'],
    fleet: 32,
    description: 'Regional airline serving Australia, Oceania, and Asia',
  },
];

export const fleetData = {
  greenzy: [
    { type: 'Airbus A330-900', count: 50, code: 'A339', capacity: 406 },
    { type: 'Airbus A350-1000', count: 40, code: 'A35K', capacity: 440 },
    { type: 'Airbus A330-800', count: 26, code: 'A338', capacity: 297 },
    { type: 'Airbus A321neo', count: 18, code: 'A21N', capacity: 244 },
    { type: 'Airbus A350-1000ULR', count: 10, code: 'A35K', capacity: 440 },
    { type: 'Airbus A350-900', count: 10, code: 'A359', capacity: 325 },
    { type: 'Airbus A220-300', count: 6, code: 'A223', capacity: 160 },
  ],
  ozy: [
    { type: 'Airbus A321neo', count: 12, code: 'A21N', capacity: 244 },
    { type: 'Airbus A320neo', count: 10, code: 'A20N', capacity: 194 },
    { type: 'ATR 72-600', count: 10, code: 'AT76', capacity: 78 },
  ],
};

export const destinations = [
  { code: 'DPS', city: 'Bali', country: 'Indonesia', region: 'Asia' },
  { code: 'SYD', city: 'Sydney', country: 'Australia', region: 'Oceania' },
  { code: 'MEL', city: 'Melbourne', country: 'Australia', region: 'Oceania' },
  { code: 'BNE', city: 'Brisbane', country: 'Australia', region: 'Oceania' },
  { code: 'PER', city: 'Perth', country: 'Australia', region: 'Oceania' },
  { code: 'SIN', city: 'Singapore', country: 'Singapore', region: 'Asia' },
  { code: 'CGK', city: 'Jakarta', country: 'Indonesia', region: 'Asia' },
  { code: 'NRT', city: 'Tokyo', country: 'Japan', region: 'Asia' },
  { code: 'ICN', city: 'Seoul', country: 'South Korea', region: 'Asia' },
  { code: 'DXB', city: 'Dubai', country: 'UAE', region: 'Middle East' },
  { code: 'LHR', city: 'London', country: 'UK', region: 'Europe' },
  { code: 'CDG', city: 'Paris', country: 'France', region: 'Europe' },
  { code: 'LAX', city: 'Los Angeles', country: 'USA', region: 'North America' },
  { code: 'JFK', city: 'New York', country: 'USA', region: 'North America' },
];

export const cabinClasses = ['Economy', 'Premium Economy', 'Business', 'First Class'];

export const pricing = {
  greenzy: {
    Economy: { base: 150, multiplier: 1 },
    'Premium Economy': { base: 300, multiplier: 1.8 },
    Business: { base: 800, multiplier: 3.5 },
    'First Class': { base: 1500, multiplier: 5 },
  },
  ozy: {
    Economy: { base: 100, multiplier: 1 },
    'Premium Economy': { base: 200, multiplier: 1.8 },
    Business: { base: 600, multiplier: 3.5 },
    'First Class': { base: 1000, multiplier: 5 },
  },
};