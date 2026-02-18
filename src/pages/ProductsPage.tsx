import React, { useState, useMemo } from 'react';
import { ProductCard } from '../components/ui/ProductCard';
import { products } from '../data/products';
import type { ProductCategory, ProductCondition, ProductBrand } from '../types/product.types';
import { useLanguage } from '../context/LanguageProvider';
import { X, Search, SlidersHorizontal } from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const { t } = useLanguage();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<ProductCategory[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<ProductCondition[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<ProductBrand[]>([]);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'newest'>('newest');

  // Get unique brands from products
  const brands = useMemo(() => {
    const uniqueBrands = new Set(products.map(p => p.brand));
    return Array.from(uniqueBrands);
  }, []);

  // Get actual max price from products
  const actualMaxPrice = useMemo(() => {
    return Math.max(...products.map(p => p.price));
  }, []);

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Search filter
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !product.brand.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // Category filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
        return false;
      }

      // Condition filter
      if (selectedConditions.length > 0 && !selectedConditions.includes(product.condition)) {
        return false;
      }

      // Brand filter
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
        return false;
      }

      // Price filter
      if (product.price > maxPrice) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0;
    });
  }, [searchQuery, selectedCategories, selectedConditions, selectedBrands, maxPrice, sortBy]);

  const toggleCategory = (category: ProductCategory) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleCondition = (condition: ProductCondition) => {
    setSelectedConditions(prev =>
      prev.includes(condition)
        ? prev.filter(c => c !== condition)
        : [...prev, condition]
    );
  };

  const toggleBrand = (brand: ProductBrand) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedConditions([]);
    setSelectedBrands([]);
    setMaxPrice(actualMaxPrice);
    setSearchQuery('');
  };

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <h3 className="font-semibold mb-3">{t('filter.search')}</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder={t('filter.search')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="font-semibold mb-3">{t('filter.category')}</h3>
        <div className="space-y-2">
          {['phones', 'accessories'].map((cat) => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat as ProductCategory)}
                onChange={() => toggleCategory(cat as ProductCategory)}
                className="rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
              />
              <span className="capitalize cursor-pointer">{cat === 'phones' ? t('featured.categories.new').split(' ')[0] : t('featured.categories.accessories')}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Condition */}
      <div>
        <h3 className="font-semibold mb-3">{t('filter.condition')}</h3>
        <div className="space-y-2">
          {['new', 'used', 'refurbished'].map((cond) => (
            <label key={cond} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedConditions.includes(cond as ProductCondition)}
                onChange={() => toggleCondition(cond as ProductCondition)}
                className="rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
              />
              <span className="capitalize cursor-pointer">
                {cond === 'new' ? t('featured.categories.new') : 
                 cond === 'used' ? t('featured.categories.used') : 
                 t('featured.categories.refurbished')}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div>
        <h3 className="font-semibold mb-3">{t('filter.brand')}</h3>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => toggleBrand(brand)}
                className="rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
              />
              <span className="cursor-pointer">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold mb-3">{t('filter.price')}: ${maxPrice}</h3>
        <div className="space-y-3">
          <input
            type="range"
            min="0"
            max={actualMaxPrice}
            step="10"
            value={maxPrice}
            onChange={(e) => setMaxPrice(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>$0</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
              {t('filter.price.upTo')} ${maxPrice}
            </span>
            <span>${actualMaxPrice}+</span>
          </div>
        </div>
      </div>

      {/* Clear Filters */}
      <button
        onClick={clearFilters}
        className="w-full px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
      >
        {t('products.clearFilters')}
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <div className="max-w-[1400px] mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-2xl font-bold">{t('products.title')}</h1>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="flex-1 sm:flex-none border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="newest">{t('products.sort.newest')}</option>
              <option value="price-asc">{t('products.sort.priceLow')}</option>
              <option value="price-desc">{t('products.sort.priceHigh')}</option>
            </select>

            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>{t('products.filters')}</span>
              {(selectedCategories.length > 0 || selectedConditions.length > 0 || selectedBrands.length > 0) && (
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              )}
            </button>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Desktop Filters */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white p-4 rounded-xl shadow-sm sticky top-20">
              <FilterContent />
            </div>
          </div>

          {/* Mobile Filter Drawer */}
          {isFilterOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              {/* Backdrop */}
              <div 
                className="absolute inset-0 bg-black bg-opacity-50"
                onClick={() => setIsFilterOpen(false)}
              ></div>
              
              {/* Drawer */}
              <div className="absolute right-0 top-0 h-full w-80 bg-white p-4 overflow-y-auto">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-lg">{t('products.filters')}</h2>
                  <button 
                    onClick={() => setIsFilterOpen(false)}
                    className="p-1 hover:bg-gray-100 rounded-full"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <FilterContent />
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {/* Results count */}
            <p className="text-gray-600 mb-4">
              {filteredProducts.length} {filteredProducts.length === 1 ? t('products.found.singular') : t('products.found')}
            </p>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              /* No Results */
              <div className="text-center py-12 bg-white rounded-xl">
                <p className="text-gray-500 mb-4">{t('products.noResults')}</p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  {t('products.clearFilters')}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};