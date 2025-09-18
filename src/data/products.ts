import { Product } from '@/components/ProductCard';

// Import product images
import milkImage from '@/assets/products/milk.jpg';
import biscuitsImage from '@/assets/products/biscuits.jpg';
import chipsImage from '@/assets/products/chips.jpg';
import tshirtImage from '@/assets/products/tshirt.jpg';
import jeansImage from '@/assets/products/jeans.jpg';
import sneakersImage from '@/assets/products/sneakers.jpg';

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
  }
];

export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'grocery', name: 'Groceries', count: products.filter(p => p.category === 'grocery').length },
  { id: 'clothing', name: 'Clothing', count: products.filter(p => p.category === 'clothing').length }
];