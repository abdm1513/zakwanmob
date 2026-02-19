// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useLanguage } from '../../context/LanguageProvider';
// import { type Product } from '../../types/product.types';
// import { MessageCircle, Eye } from 'lucide-react';
// import { generateWhatsAppLink } from '../../utils/whatsapp';

// interface ProductCardProps {
//   product: Product;
// }

// export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
//   const { t } = useLanguage();

//   const conditionColors = {
//     new: 'bg-green-100 text-green-800',
//     used: 'bg-yellow-100 text-yellow-800',
//     refurbished: 'bg-purple-100 text-purple-800',
//   };

//   const conditionText = {
//     new: t('featured.categories.new'),
//     used: t('featured.categories.used'),
//     refurbished: t('featured.categories.refurbished'),
//   };

//   const discount = product.originalPrice 
//     ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
//     : 0;

//   return (
//     <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//       {/* Image Container */}
//       <div className="relative aspect-square overflow-hidden bg-gray-100">
//         <img
//           src={product.imageUrl}
//           alt={product.name}
//           className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//         />
//         {/* Condition Badge */}
//         <span className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-semibold ${conditionColors[product.condition]}`}>
//           {conditionText[product.condition]}
//         </span>
//         {/* Discount Badge */}
//         {discount > 0 && (
//           <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
//             -{discount}%
//           </span>
//         )}
//       </div>

//       {/* Content */}
//       <div className="p-4">
//         <div className="mb-2">
//           <span className="text-sm text-gray-500">{product.brand}</span>
//           <h3 className="font-semibold text-gray-800 line-clamp-2">{product.name}</h3>
//         </div>

//         {/* Price */}
//         <div className="mb-3">
//           <span className="text-xl font-bold text-blue-600">${product.price}</span>
//           {product.originalPrice && (
//             <span className="ml-2 text-sm text-gray-400 line-through">
//               ${product.originalPrice}
//             </span>
//           )}
//         </div>

//         {/* Quick Specs */}
//         <div className="flex flex-wrap gap-1 mb-3">
//           {product.specs.slice(0, 2).map((spec, index) => (
//             <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
//               {spec}
//             </span>
//           ))}
//         </div>

//         {/* Actions */}
//         <div className="flex gap-2">
//           <Link 
//             to={`/product/${product.id}`} 
//             className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200"
//           >
//             <Eye className="w-4 h-4" />
//             {t('product.details')}
//           </Link>
//           <a
//             href={generateWhatsAppLink(product)}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex-1 bg-green-600 text-white hover:bg-green-700 px-3 py-2 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200"
//           >
//             <MessageCircle className="w-4 h-4" />
//             {t('product.buyNow')}
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageProvider';
import { type Product } from '../../types/product.types';
import { MessageCircle, Eye } from 'lucide-react';
import { generateWhatsAppLink } from '../../utils/whatsapp';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { t } = useLanguage();

  const conditionColors = {
    new: 'bg-green-100 text-green-800',
    used: 'bg-yellow-100 text-yellow-800',
    refurbished: 'bg-purple-100 text-purple-800',
  };

  const conditionText = {
    new: t('featured.categories.new'),
    used: t('featured.categories.used'),
    refurbished: t('featured.categories.refurbished'),
  };

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      {/* Image Container - Smaller on mobile */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {/* Condition Badge - Smaller text on mobile */}
        <span className={`absolute top-1 left-1 px-1.5 py-0.5 rounded-full text-[10px] font-semibold ${conditionColors[product.condition]}`}>
          {conditionText[product.condition]}
        </span>
        {/* Discount Badge */}
        {discount > 0 && (
          <span className="absolute top-1 right-1 bg-red-500 text-white px-1.5 py-0.5 rounded-full text-[10px] font-bold">
            -{discount}%
          </span>
        )}
      </div>

      {/* Content - Compact on mobile */}
      <div className="p-2 sm:p-3">
        {/* Brand and Name */}
        <div className="mb-1">
          <span className="text-[10px] sm:text-xs text-gray-500">{product.brand}</span>
          <h3 className="font-semibold text-gray-800 text-xs sm:text-sm line-clamp-2 leading-tight">
            {product.name}
          </h3>
        </div>

        {/* Price - Compact */}
        <div className="mb-2">
          <span className="text-sm sm:text-base font-bold text-blue-600">${product.price}</span>
          {product.originalPrice && (
            <span className="ml-1 text-[10px] sm:text-xs text-gray-400 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Quick Specs - Hide on very small screens, show one spec on mobile */}
        <div className="hidden sm:flex flex-wrap gap-1 mb-2">
          {product.specs.slice(0, 2).map((spec, index) => (
            <span key={index} className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded-full">
              {spec}
            </span>
          ))}
        </div>
        <div className="sm:hidden mb-2">
          <span className="text-[9px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded-full">
            {product.specs[0]}
          </span>
        </div>

        {/* Actions - Smaller buttons */}
        <div className="flex gap-1.5">
          <Link 
            to={`/product/${product.id}`} 
            className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 px-1.5 py-1.5 sm:px-2 sm:py-1.5 rounded-lg font-semibold text-[10px] sm:text-xs flex items-center justify-center gap-1 transition-all duration-200"
          >
            <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span className="hidden xs:inline">{t('product.details')}</span>
          </Link>
          <a
            href={generateWhatsAppLink(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-600 text-white hover:bg-green-700 px-1.5 py-1.5 sm:px-2 sm:py-1.5 rounded-lg font-semibold text-[10px] sm:text-xs flex items-center justify-center gap-1 transition-all duration-200"
          >
            <MessageCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span className="hidden xs:inline">{t('product.buyNow')}</span>
          </a>
        </div>
      </div>
    </div>
  );
};