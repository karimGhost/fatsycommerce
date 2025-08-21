export type Product = {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  images: string[];
  price: number;
  category: 'Electronics' | 'Apparel' | 'Home Goods' | 'Books';
  rating: number;
  reviewCount: number;
  specifications: { key: string; value: string }[];
  stock: number;
};

export const products: Product[] = [
  {
    id: 'prod_001',
    name: 'AURA Wireless Headphones',
    description: 'Experience immersive sound with our next-gen wireless headphones.',
    longDescription: 'The AURA Wireless Headphones offer industry-leading noise cancellation, a 30-hour battery life, and crystal-clear audio quality. Designed for comfort and style, they are your perfect companion for music, calls, and everything in between. Connect seamlessly via Bluetooth 5.2.',
    images: ['https://placehold.co/600x600.png', 'https://placehold.co/600x600.png', 'https://placehold.co/600x600.png'],
    price: 349.99,
    category: 'Electronics',
    rating: 4.8,
    reviewCount: 1250,
    specifications: [
      { key: 'Connectivity', value: 'Bluetooth 5.2' },
      { key: 'Battery Life', value: '30 hours' },
      { key: 'Weight', value: '254g' },
      { key: 'Color', value: 'Midnight Black' },
    ],
    stock: 150,
  },
  {
    id: 'prod_002',
    name: 'NOVA Smartwatch',
    description: 'Stay connected and track your fitness goals with the NOVA Smartwatch.',
    longDescription: 'The NOVA Smartwatch is more than just a timepiece. It features a vibrant AMOLED display, advanced health monitoring (heart rate, SpO2), GPS, and over 100 sport modes. With a sleek design and customizable faces, it fits any occasion.',
    images: ['https://placehold.co/600x600.png', 'https://placehold.co/600x600.png'],
    price: 249.99,
    category: 'Electronics',
    rating: 4.6,
    reviewCount: 890,
    specifications: [
      { key: 'Display', value: '1.4" AMOLED' },
      { key: 'Water Resistance', value: '5 ATM' },
      { key: 'Sensors', value: 'Heart Rate, SpO2, GPS' },
      { key: 'Material', value: 'Aluminum Alloy' },
    ],
    stock: 200,
  },
  {
    id: 'prod_003',
    name: 'AERO-DRY Performance Tee',
    description: 'Lightweight, breathable, and stylish. Perfect for any workout.',
    longDescription: 'Engineered with our AERO-DRY moisture-wicking fabric, this performance tee keeps you cool and dry. Its athletic fit allows for full range of motion, while the minimalist design looks great in and out of the gym.',
    images: ['https://placehold.co/600x600.png'],
    price: 49.99,
    category: 'Apparel',
    rating: 4.9,
    reviewCount: 2300,
    specifications: [
      { key: 'Material', value: '90% Polyester, 10% Spandex' },
      { key: 'Fit', value: 'Athletic' },
      { key: 'Technology', value: 'AERO-DRY Moisture Wicking' },
      { key: 'Care', value: 'Machine Wash Cold' },
    ],
    stock: 500,
  },
  {
    id: 'prod_004',
    name: 'TERRA Insulated Mug',
    description: 'Keep your drinks hot or cold for hours with this durable mug.',
    longDescription: 'The TERRA Insulated Mug is built for adventure. With double-wall vacuum insulation, it maintains your beverage\'s temperature for up to 12 hours. The spill-resistant lid and tough stainless steel construction make it perfect for commutes or campsites.',
    images: ['https://placehold.co/600x600.png', 'https://placehold.co/600x600.png'],
    price: 29.99,
    category: 'Home Goods',
    rating: 4.7,
    reviewCount: 950,
    specifications: [
      { key: 'Capacity', value: '16 oz (473ml)' },
      { key: 'Material', value: '18/8 Stainless Steel' },
      { key: 'Insulation', value: 'Double-Wall Vacuum' },
      { key: 'Lid', value: 'BPA-Free, Spill-Resistant' },
    ],
    stock: 350,
  },
  {
    id: 'prod_005',
    name: 'The Art of Focus',
    description: 'A practical guide to mastering attention in a distracted world.',
    longDescription: 'In "The Art of Focus," acclaimed author Julian Hayes provides a compelling framework for reclaiming your attention. Through scientific research and actionable strategies, this book will teach you how to achieve deep work and find clarity in a noisy world.',
    images: ['https://placehold.co/600x600.png'],
    price: 19.99,
    category: 'Books',
    rating: 4.8,
    reviewCount: 450,
    specifications: [
      { key: 'Author', value: 'Julian Hayes' },
      { key: 'Pages', value: '288' },
      { key: 'Format', value: 'Hardcover' },
      { key: 'Publisher', value: 'Mindful Press' },
    ],
    stock: 1000,
  },
  {
    id: 'prod_006',
    name: 'ORION Mechanical Keyboard',
    description: 'A premium typing experience with customizable RGB lighting.',
    longDescription: 'The ORION keyboard features tactile mechanical switches for satisfying feedback and precision. With full per-key RGB customization, a solid aluminum frame, and programmable macros, it\'s the ultimate tool for gamers and professionals.',
    images: ['https://placehold.co/600x600.png', 'https://placehold.co/600x600.png'],
    price: 179.99,
    category: 'Electronics',
    rating: 4.9,
    reviewCount: 720,
    specifications: [
      { key: 'Switches', value: 'Tactile Brown Mechanical' },
      { key: 'Layout', value: 'Tenkeyless (87-key)' },
      { key: 'Backlight', value: 'Per-key RGB' },
      { key: 'Frame', value: 'Anodized Aluminum' },
    ],
    stock: 120,
  },
    {
    id: 'prod_007',
    name: 'URBAN Commuter Backpack',
    description: 'Sleek, weatherproof, and organized for your daily journey.',
    longDescription: 'The URBAN Commuter Backpack is designed for the modern professional. It features a dedicated padded laptop sleeve (up to 16"), multiple organization pockets, and a water-resistant shell to protect your gear. The ergonomic design ensures all-day comfort.',
    images: ['https://placehold.co/600x600.png', 'https://placehold.co/600x600.png'],
    price: 129.99,
    category: 'Apparel',
    rating: 4.7,
    reviewCount: 680,
    specifications: [
      { key: 'Capacity', value: '22L' },
      { key: 'Laptop Sleeve', value: 'Fits up to 16" MacBook Pro' },
      { key: 'Material', value: 'Cordura Ballistic Nylon' },
      { key: 'Zippers', value: 'YKK AquaGuard' },
    ],
    stock: 250,
  },
  {
    id: 'prod_008',
    name: 'SOLO Smart Coffee Maker',
    description: 'Brew the perfect cup, every time, controlled from your phone.',
    longDescription: 'The SOLO Smart Coffee Maker connects to your Wi-Fi, allowing you to schedule brews, adjust strength, and grind beans remotely via our app. Its precision brewing technology ensures optimal temperature and extraction for a superior taste.',
    images: ['https://placehold.co/600x600.png'],
    price: 199.99,
    category: 'Home Goods',
    rating: 4.5,
    reviewCount: 310,
    specifications: [
      { key: 'Capacity', value: '12 Cups' },
      { key: 'Connectivity', value: 'Wi-Fi, App-controlled' },
      { key: 'Grinder', value: 'Built-in Burr Grinder' },
      { key: 'Carafe', value: 'Thermal Stainless Steel' },
    ],
    stock: 80,
  }
];

export const categories = [
  { name: 'Electronics', icon: 'Laptop' },
  { name: 'Apparel', icon: 'Shirt' },
  { name: 'Home Goods', icon: 'Home' },
  { name: 'Books', icon: 'BookOpen' },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
}

export const getProductsByIds = (ids: string[]): Product[] => {
  return products.filter(p => ids.includes(p.id));
}
