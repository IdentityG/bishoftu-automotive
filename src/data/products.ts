// src/data/products.ts
export const products = [
  {
    id: 1,
    title: 'Heavy Duty Truck Series X1',
    category: 'vehicles',
    image: 'https://placehold.co/800x600/3B82F6/ffffff?text=Truck+X1',
    badge: 'Best Seller',
    badgeColor: 'bg-accent-orange',
    specs: {
      power: '450 HP',
      capacity: '25 Tons',
      fuelType: 'Diesel/Electric',
    },
    price: 'Contact for Quote',
    featured: true,
    description: 'Advanced heavy-duty truck with cutting-edge technology and superior performance.',
    highlights: [
      'Euro 6 Emission Standards',
      'Advanced Safety Systems',
      '24/7 Support',
      '5-Year Warranty'
    ]
  },
  {
    id: 2,
    title: 'Electric Locomotive E-500',
    category: 'locomotives',
    image: 'https://placehold.co/800x600/10B981/ffffff?text=Locomotive+E500',
    badge: 'New',
    badgeColor: 'bg-accent-green',
    specs: {
      power: '5000 kW',
      speed: '160 km/h',
      voltage: '25 kV AC',
    },
    price: 'Contact for Quote',
    featured: true,
    description: 'Next-generation electric locomotive for modern rail networks.',
    highlights: [
      'Energy Efficient',
      'Low Maintenance',
      'Smart Diagnostics',
      'Modular Design'
    ]
  },
  {
    id: 3,
    title: 'Industrial Cargo Trailer',
    category: 'vehicles',
    image: 'https://placehold.co/800x600/F97316/ffffff?text=Trailer',
    badge: 'Popular',
    badgeColor: 'bg-primary-500',
    specs: {
      capacity: '40 Tons',
      length: '13.6m',
      axles: 'Tri-axle',
    },
    price: 'Contact for Quote',
    featured: true,
    description: 'Heavy-duty cargo trailer built for maximum durability and efficiency.',
    highlights: [
      'Reinforced Chassis',
      'Air Suspension',
      'GPS Tracking',
      'Extended Warranty'
    ]
  },
  {
        id: 4,
    title: 'Diesel Engine Series D400',
    category: 'parts',
    image: 'https://placehold.co/800x600/64748B/ffffff?text=Engine+D400',
    badge: 'Certified',
    badgeColor: 'bg-secondary-600',
    specs: {
      power: '400 HP',
      torque: '1800 Nm',
      displacement: '12.8L',
    },
    price: 'Contact for Quote',
    featured: true,
    description: 'High-performance diesel engine for industrial applications.',
    highlights: [
      'Fuel Efficient',
      'Low Emissions',
      'Easy Maintenance',
      '2-Year Warranty'
    ]
  },
  {
    id: 5,
    title: 'Hydraulic Lift System',
    category: 'equipment',
    image: 'https://placehold.co/800x600/2563EB/ffffff?text=Hydraulic+Lift',
    badge: 'Premium',
    badgeColor: 'bg-primary-600',
    specs: {
      capacity: '50 Tons',
      liftHeight: '5m',
      power: 'Hydraulic',
    },
    price: 'Contact for Quote',
    featured: false,
    description: 'Professional-grade hydraulic lift system for heavy machinery.',
    highlights: [
      'Safety Certified',
      'Remote Control',
      'Auto-lock System',
      'Service Included'
    ]
  },
  {
    id: 6,
    title: 'Railway Brake System Pro',
    category: 'parts',
    image: 'https://placehold.co/800x600/10B981/ffffff?text=Brake+System',
    badge: 'Advanced',
    badgeColor: 'bg-accent-green',
    specs: {
      type: 'Pneumatic',
      pressure: '8 bar',
      response: '< 0.5s',
    },
    price: 'Contact for Quote',
    featured: false,
    description: 'State-of-the-art braking system for railway applications.',
    highlights: [
      'Quick Response',
      'Weather Resistant',
      'Easy Installation',
      'Certified Safe'
    ]
  },
]