export interface Product {
  id: number;
  name: string;
  brand: string;
  category: 'new phones' | 'used phones' | 'refurbished phones' | 'accessories';
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  description: string;
  specs?: {
    screen?: string;
    processor?: string;
    ram?: string;
    storage?: string;
    battery?: string;
    camera?: string;
  };
}

export const products: Product[] = [
  // New Phones
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    category: "new phones",
    price: 1199,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400",
    rating: 4.8,
    reviews: 128,
    inStock: true,
    description: "The latest iPhone with A17 Pro chip and titanium design.",
    specs: {
      screen: "6.7-inch Super Retina XDR",
      processor: "A17 Pro",
      ram: "8GB",
      storage: "256GB",
      battery: "Up to 29 hours video playback",
      camera: "48MP Main + 12MP Ultra Wide + 12MP Telephoto"
    }
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    category: "new phones",
    price: 1299,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400",
    rating: 4.7,
    reviews: 95,
    inStock: true,
    description: "Experience the power of Galaxy AI with the S24 Ultra.",
    specs: {
      screen: "6.8-inch Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Gen 3",
      ram: "12GB",
      storage: "512GB",
      battery: "5000mAh",
      camera: "200MP Main + 50MP Periscope + 12MP Ultra Wide"
    }
  },
  {
    id: 3,
    name: "Google Pixel 8 Pro",
    brand: "Google",
    category: "new phones",
    price: 999,
    image: "https://images.unsplash.com/photo-1635875919186-6d84eaa54d56?w=400",
    rating: 4.6,
    reviews: 82,
    inStock: true,
    description: "Google's best AI-powered camera and Tensor G3 chip.",
    specs: {
      screen: "6.7-inch LTPO OLED",
      processor: "Google Tensor G3",
      ram: "12GB",
      storage: "256GB",
      battery: "5050mAh",
      camera: "50MP Main + 48MP Telephoto + 48MP Ultra Wide"
    }
  },
  {
    id: 4,
    name: "OnePlus 12",
    brand: "OnePlus",
    category: "new phones",
    price: 799,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400",
    rating: 4.5,
    reviews: 67,
    inStock: true,
    description: "Fast and smooth with Hasselblad camera.",
    specs: {
      screen: "6.82-inch LTPO AMOLED",
      processor: "Snapdragon 8 Gen 3",
      ram: "16GB",
      storage: "512GB",
      battery: "5400mAh",
      camera: "50MP Main + 64MP Periscope + 48MP Ultra Wide"
    }
  },

  // Used Phones
  {
    id: 5,
    name: "iPhone 13 Pro (Used)",
    brand: "Apple",
    category: "used phones",
    price: 699,
    originalPrice: 999,
    image: "https://images.unsplash.com/photo-1632661674596-df8be4a1ab7b?w=400",
    rating: 4.4,
    reviews: 156,
    inStock: true,
    description: "Excellent condition iPhone 13 Pro, fully tested.",
    specs: {
      screen: "6.1-inch Super Retina XDR",
      processor: "A15 Bionic",
      ram: "6GB",
      storage: "128GB",
      battery: "85% health",
      camera: "12MP Triple Camera System"
    }
  },
  {
    id: 6,
    name: "Samsung Galaxy S22 Ultra (Used)",
    brand: "Samsung",
    category: "used phones",
    price: 599,
    originalPrice: 1099,
    image: "https://images.unsplash.com/photo-1645882852705-6d3b4eaec7a4?w=400",
    rating: 4.3,
    reviews: 89,
    inStock: true,
    description: "Like new condition, includes S Pen.",
    specs: {
      screen: "6.8-inch Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Gen 1",
      ram: "12GB",
      storage: "256GB",
      battery: "90% health",
      camera: "108MP Main + 40MP Front"
    }
  },

  // Refurbished Phones
  {
    id: 7,
    name: "iPhone 12 (Refurbished)",
    brand: "Apple",
    category: "refurbished phones",
    price: 449,
    originalPrice: 699,
    image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=400",
    rating: 4.2,
    reviews: 203,
    inStock: true,
    description: "Certified refurbished with 1-year warranty.",
    specs: {
      screen: "6.1-inch Super Retina XDR",
      processor: "A14 Bionic",
      ram: "4GB",
      storage: "64GB",
      battery: "100% health (new)",
      camera: "12MP Dual Camera System"
    }
  },
  {
    id: 8,
    name: "Google Pixel 6 (Refurbished)",
    brand: "Google",
    category: "refurbished phones",
    price: 299,
    originalPrice: 599,
    image: "https://images.unsplash.com/photo-1635875919186-6d84eaa54d56?w=400",
    rating: 4.1,
    reviews: 112,
    inStock: true,
    description: "Professionally refurbished, like new.",
    specs: {
      screen: "6.4-inch AMOLED",
      processor: "Google Tensor",
      ram: "8GB",
      storage: "128GB",
      battery: "100% health (new)",
      camera: "50MP Main + 12MP Ultra Wide"
    }
  },

  // Accessories
  {
    id: 9,
    name: "MagSafe Charger",
    brand: "Apple",
    category: "accessories",
    price: 39,
    image: "https://images.unsplash.com/photo-1621330396504-50223b0a761e?w=400",
    rating: 4.5,
    reviews: 345,
    inStock: true,
    description: "Fast wireless charging for iPhone.",
  },
  {
    id: 10,
    name: "Samsung 25W Charger",
    brand: "Samsung",
    category: "accessories",
    price: 29,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400",
    rating: 4.4,
    reviews: 234,
    inStock: true,
    description: "Super fast charging for Galaxy devices.",
  },
  {
    id: 11,
    name: "Spigen Ultra Hybrid Case",
    brand: "Spigen",
    category: "accessories",
    price: 19,
    image: "https://images.unsplash.com/photo-1541873676-a18131494184?w=400",
    rating: 4.6,
    reviews: 567,
    inStock: true,
    description: "Clear protection for your phone.",
  },
  {
    id: 12,
    name: "Anker Power Bank 20000mAh",
    brand: "Anker",
    category: "accessories",
    price: 49,
    image: "https://images.unsplash.com/photo-1609592425007-66cd1ef350c2?w=400",
    rating: 4.7,
    reviews: 789,
    inStock: true,
    description: "High-capacity portable charger.",
  },
  {
    id: 13,
    name: "Belkin USB-C Cable 2m",
    brand: "Belkin",
    category: "accessories",
    price: 15,
    image: "https://images.unsplash.com/photo-1621330396504-50223b0a761e?w=400",
    rating: 4.3,
    reviews: 432,
    inStock: true,
    description: "Durable braided charging cable.",
  },
  {
    id: 14,
    name: "PopSocket Grip",
    brand: "PopSocket",
    category: "accessories",
    price: 12,
    image: "https://images.unsplash.com/photo-1541873676-a18131494184?w=400",
    rating: 4.4,
    reviews: 654,
    inStock: true,
    description: "Expandable grip and stand.",
  }
];

export const brands = [...new Set(products.map(p => p.brand))].sort();
export const categories = [...new Set(products.map(p => p.category))];