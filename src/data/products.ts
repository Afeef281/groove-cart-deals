import { Product } from '@/components/ProductCard';

// Import product images
import milkImage from '@/assets/products/milk.jpg';
import biscuitsImage from '@/assets/products/biscuits.jpg';
import chipsImage from '@/assets/products/chips.jpg';
import oliveOilImage from '@/assets/products/olive-oil.jpg';
import breadImage from '@/assets/products/bread.jpg';
import applesImage from '@/assets/products/apples.jpg';
import pastaImage from '@/assets/products/pasta.jpg';
import orangeJuiceImage from '@/assets/products/orange-juice.jpg';
import riceImage from '@/assets/products/rice.jpg';

import tshirtImage from '@/assets/products/tshirt.jpg';
import jeansImage from '@/assets/products/jeans.jpg';
import sneakersImage from '@/assets/products/sneakers.jpg';
import dressShirtImage from '@/assets/products/dress-shirt.jpg';
import handbagImage from '@/assets/products/handbag.jpg';
import jacketImage from '@/assets/products/jacket.jpg';
import runningShoesImage from '@/assets/products/running-shoes.jpg';

import sedanCarImage from '@/assets/products/sedan-car.jpg';
import suvCarImage from '@/assets/products/suv-car.jpg';
import motorcycleImage from '@/assets/products/motorcycle.jpg';
import scooterImage from '@/assets/products/scooter.jpg';

export const products: Product[] = [
  // Grocery Items
  {
    id: '1',
    name: 'Fresh Whole Milk',
    price: 3.49,
    image: milkImage,
    category: 'grocery',
    rating: 4.5,
    description: 'Premium quality whole milk, rich in calcium and vitamins. Perfect for your daily nutrition needs.',
    discount: 10
  },
  {
    id: '2',
    name: 'Premium Butter Biscuits',
    price: 4.99,
    image: biscuitsImage,
    category: 'grocery',
    rating: 4.7,
    description: 'Crispy and delicious butter biscuits made with finest ingredients. Perfect for tea time.',
  },
  {
    id: '3',
    name: 'Crispy Potato Chips',
    price: 2.99,
    image: chipsImage,
    category: 'grocery',
    rating: 4.3,
    description: 'Golden crispy potato chips with the perfect amount of salt. Great for snacking anytime.',
    discount: 15
  },
  
  // Clothing Items
  {
    id: '4',
    name: 'Cotton Casual T-Shirt',
    price: 19.99,
    image: tshirtImage,
    category: 'clothing',
    rating: 4.4,
    description: 'Comfortable 100% cotton t-shirt with a relaxed fit. Available in multiple colors and sizes.',
    discount: 20
  },
  {
    id: '5',
    name: 'Classic Blue Jeans',
    price: 49.99,
    image: jeansImage,
    category: 'clothing',
    rating: 4.6,
    description: 'Premium denim jeans with classic cut and superior comfort. Durable and stylish for everyday wear.',
  },
  {
    id: '6',
    name: 'Athletic Sneakers',
    price: 79.99,
    image: sneakersImage,
    category: 'clothing',
    rating: 4.8,
    description: 'High-performance athletic sneakers with advanced cushioning and breathable design.',
    discount: 25
  },

  // Additional Grocery Items
  {
    id: '7',
    name: 'Extra Virgin Olive Oil',
    price: 12.99,
    image: oliveOilImage,
    category: 'grocery',
    rating: 4.6,
    description: 'Premium extra virgin olive oil, cold-pressed for the finest flavor and quality.',
    discount: 5
  },
  {
    id: '8',
    name: 'Fresh Bread Loaf',
    price: 2.49,
    image: breadImage,
    category: 'grocery',
    rating: 4.4,
    description: 'Freshly baked whole wheat bread, perfect for sandwiches and toast.'
  },
  {
    id: '9',
    name: 'Organic Apples',
    price: 4.99,
    image: applesImage,
    category: 'grocery',
    rating: 4.7,
    description: 'Fresh organic apples, crisp and sweet, packed with vitamins and fiber.',
    discount: 12
  },
  {
    id: '10',
    name: 'Italian Pasta',
    price: 3.99,
    image: pastaImage,
    category: 'grocery',
    rating: 4.5,
    description: 'Premium Italian pasta made from durum wheat, perfect for any sauce.'
  },
  {
    id: '11',
    name: 'Fresh Orange Juice',
    price: 5.99,
    image: orangeJuiceImage,
    category: 'grocery',
    rating: 4.3,
    description: 'Freshly squeezed orange juice, rich in vitamin C and natural flavor.',
    discount: 8
  },
  {
    id: '12',
    name: 'Basmati Rice',
    price: 8.99,
    image: riceImage,
    category: 'grocery',
    rating: 4.8,
    description: 'Premium basmati rice with long grains and aromatic fragrance.'
  },

  // Additional Clothing Items
  {
    id: '13',
    name: 'Formal Dress Shirt',
    price: 39.99,
    image: dressShirtImage,
    category: 'clothing',
    rating: 4.5,
    description: 'Professional dress shirt with wrinkle-free fabric, perfect for office wear.',
    discount: 15
  },
  {
    id: '14',
    name: 'Designer Handbag',
    price: 89.99,
    image: handbagImage,
    category: 'clothing',
    rating: 4.7,
    description: 'Elegant designer handbag with multiple compartments and premium materials.'
  },
  {
    id: '15',
    name: 'Winter Jacket',
    price: 129.99,
    image: jacketImage,
    category: 'clothing',
    rating: 4.6,
    description: 'Warm winter jacket with waterproof exterior and thermal insulation.',
    discount: 30
  },
  {
    id: '16',
    name: 'Running Shoes',
    price: 69.99,
    image: runningShoesImage,
    category: 'clothing',
    rating: 4.4,
    description: 'Lightweight running shoes with superior comfort and shock absorption.',
    discount: 20
  },

  // Automobiles
  {
    id: '17',
    name: 'Luxury Sedan',
    price: 28999.99,
    image: sedanCarImage,
    category: 'automobile',
    rating: 4.9,
    description: 'Premium luxury sedan with advanced features, leather seats, and hybrid engine.'
  },
  {
    id: '18',
    name: 'Family SUV',
    price: 35999.99,
    image: suvCarImage,
    category: 'automobile',
    rating: 4.8,
    description: 'Spacious family SUV with 7-seat capacity, all-wheel drive, and safety features.',
    discount: 5
  },
  {
    id: '19',
    name: 'Sport Motorcycle',
    price: 12999.99,
    image: motorcycleImage,
    category: 'automobile',
    rating: 4.7,
    description: 'High-performance sport motorcycle with advanced braking and suspension systems.',
    discount: 10
  },
  {
    id: '20',
    name: 'Electric Scooter',
    price: 1299.99,
    image: scooterImage,
    category: 'automobile',
    rating: 4.5,
    description: 'Eco-friendly electric scooter with long battery life and smart connectivity.',
    discount: 15
  }
];

export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'grocery', name: 'Groceries', count: products.filter(p => p.category === 'grocery').length },
  { id: 'clothing', name: 'Clothing', count: products.filter(p => p.category === 'clothing').length },
  { id: 'automobile', name: 'Automobiles', count: products.filter(p => p.category === 'automobile').length }
];