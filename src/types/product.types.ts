export type ProductCondition = 'new' | 'used' | 'refurbished';
export type ProductCategory = 'phones' | 'accessories';
export type ProductBrand = 'Apple' | 'Samsung' | 'Google' | 'Xiaomi' | 'OnePlus' | 'Other';

export interface Product {
  id: string;
  name: string;
  brand: ProductBrand;
  category: ProductCategory;
  condition: ProductCondition;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  images?: string[]; // For gallery
  description: string;
  specs: string[];
  inStock: boolean;
  featured?: boolean;
}