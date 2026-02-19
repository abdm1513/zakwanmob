// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useLanguage } from '../../context/LanguageProvider';
// import { ProductCard } from '../ui/ProductCard';
// import { products } from '../../data/products';
// import { ArrowRight } from 'lucide-react';

// export const FeaturedProducts: React.FC = () => {
//   const { t } = useLanguage();
//   const featuredProducts = products.filter(p => p.featured).slice(0, 8);

//   return (
//     <section className="py-12 bg-gray-50 w-full">
//       <div className="max-w-[1400px] mx-auto px-4">
//         <div className="flex items-center justify-between mb-6">
//           <div>
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('featured.title')}</h2>
//             <p className="text-gray-600 mt-1">{t('featured.subtitle')}</p>
//           </div>
//           <Link 
//             to="/products" 
//             className="flex items-center gap-1 text-blue-600 font-semibold hover:text-blue-700"
//           >
//             {t('featured.viewAll')}
//             <ArrowRight className="w-4 h-4" />
//           </Link>
//         </div>

//         <div className="relative">
        
//           <div className="flex gap-2 sm:gap-4 pb-4" style={{ minWidth: 'min-content' }}>
//           {featuredProducts.map((product) => (
//             <div key={product.id} className="w-40 sm:w-56 md:w-64 flex-shrink-0">
//               <ProductCard product={product} />
//             </div>
//           ))}
//         </div>
          
//            </div>

//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
//           <Link
//             to="/products?category=phones&condition=new"
//             className="bg-white p-4 rounded-xl text-center hover:shadow-md transition-shadow border border-gray-200"
//           >
//             <span className="font-medium text-gray-800">{t('featured.categories.new')}</span>
//           </Link>
//           <Link
//             to="/products?category=phones&condition=used"
//             className="bg-white p-4 rounded-xl text-center hover:shadow-md transition-shadow border border-gray-200"
//           >
//             <span className="font-medium text-gray-800">{t('featured.categories.used')}</span>
//           </Link>
//           <Link
//             to="/products?category=phones&condition=refurbished"
//             className="bg-white p-4 rounded-xl text-center hover:shadow-md transition-shadow border border-gray-200"
//           >
//             <span className="font-medium text-gray-800">{t('featured.categories.refurbished')}</span>
//           </Link>
//           <Link
//             to="/products?category=accessories"
//             className="bg-white p-4 rounded-xl text-center hover:shadow-md transition-shadow border border-gray-200"
//           >
//             <span className="font-medium text-gray-800">{t('featured.categories.accessories')}</span>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageProvider';
import { ProductCard } from '../ui/ProductCard';
import { products } from '../../data/products';
import { ArrowRight } from 'lucide-react';

export const FeaturedProducts: React.FC = () => {
  const { t } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const featuredProducts = products.filter(p => p.featured).slice(0, 8);

  // Handle wheel events for horizontal scrolling
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        // Vertical scroll - check if we're at the edge
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
        const isAtLeftEdge = scrollLeft === 0;
        const isAtRightEdge = scrollLeft + clientWidth >= scrollWidth - 1; // -1 for floating point tolerance

        // If we're not at the edges, prevent vertical scroll and scroll horizontally
        if (!isAtLeftEdge || !isAtRightEdge) {
          e.preventDefault();
          scrollContainer.scrollLeft += e.deltaY;
        }
        // If we're at an edge, let the page scroll normally
      }
    };

    scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
    return () => scrollContainer.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <section className="py-12 bg-gray-50 w-full">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t('featured.title')}</h2>
            <p className="text-gray-600 mt-1">{t('featured.subtitle')}</p>
          </div>
          <Link 
            to="/products" 
            className="flex items-center gap-1 text-blue-600 font-semibold hover:text-blue-700 whitespace-nowrap"
          >
            {t('featured.viewAll')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Horizontal Scrollable Grid */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide"
            style={{ 
              WebkitOverflowScrolling: 'touch',
              scrollBehavior: 'smooth'
            }}
          >
            <div className="flex gap-2 sm:gap-4 pb-4" style={{ minWidth: 'min-content' }}>
              {featuredProducts.map((product) => (
                <div key={product.id} className="w-40 sm:w-56 md:w-64 flex-shrink-0">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
          
            </div>

        {/* Scroll hint for mobile */}
        <div className="flex justify-center mt-2 sm:hidden">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-blue-300 animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse delay-150"></div>
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse delay-300"></div>
          </div>
          {/* <span className="text-xs text-gray-500 ml-2">Swipe to see more</span> */}
        </div>
      </div>
    </section>
  );
};