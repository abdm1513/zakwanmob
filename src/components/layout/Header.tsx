// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, Smartphone, Search, Phone } from 'lucide-react';
// import { LanguageSwitcher } from '../ui/LanguageSwitcher';
// import { useLanguage } from '../../context/LanguageProvider';

// export const Header: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();
//   const { t } = useLanguage();

//   const navItems = [
//     { path: '/', label: t('nav.home') },
//     { path: '/products', label: t('nav.products') },
//     { path: '/contact', label: t('nav.contact') },
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <header className="sticky top-0 z-50 bg-white shadow-md w-full">
//       <div className="max-w-[1400px] mx-auto px-4 py-3">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-2">
//             <Smartphone className="w-8 h-8 text-blue-600" />
//             <span className="font-bold text-xl text-gray-800">Zakwan Mobile</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center gap-6">
//             {navItems.map((item) => (
//               <Link
//                 key={item.path}
//                 to={item.path}
//                 className={`font-medium transition-colors ${
//                   isActive(item.path)
//                     ? 'text-blue-600 border-b-2 border-blue-600'
//                     : 'text-gray-600 hover:text-blue-600'
//                 }`}
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </nav>

//           {/* Right Icons */}
//           <div className="flex items-center gap-2">
//             <Link to="/products" className="p-2 hover:bg-gray-100 rounded-full">
//               <Search className="w-5 h-5 text-gray-600" />
//             </Link>
            
//             <LanguageSwitcher />
            
//             <a
//               href={`https://wa.me/1234567890`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hidden sm:flex items-center gap-1 bg-green-600 text-white px-3 py-1.5 rounded-full text-sm font-semibold hover:bg-green-700 transition-colors"
//             >
//               <Phone className="w-4 h-4" />
//               <span>{t('nav.whatsapp')}</span>
//             </a>
            
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="md:hidden p-2 hover:bg-gray-100 rounded-full"
//               aria-label="Toggle menu"
//             >
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {isMenuOpen && (
//           <div className="md:hidden mt-4 pb-2 border-t pt-2">
//             {navItems.map((item) => (
//               <Link
//                 key={item.path}
//                 to={item.path}
//                 onClick={() => setIsMenuOpen(false)}
//                 className={`block py-3 px-4 rounded-lg mb-1 ${
//                   isActive(item.path)
//                     ? 'bg-blue-50 text-blue-600 font-semibold'
//                     : 'text-gray-600 hover:bg-gray-50'
//                 }`}
//               >
//                 {item.label}
//               </Link>
//             ))}
            
//             <a
//               href={`https://wa.me/1234567890`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 py-3 px-4 text-green-600 font-semibold hover:bg-green-50 rounded-lg mt-2"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               <Phone className="w-5 h-5" />
//               <span>{t('nav.whatsapp')}</span>
//             </a>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Smartphone, Search, Phone } from 'lucide-react';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { useLanguage } from '../../context/LanguageProvider';
import { SHOP_PHONE_NUMBER } from '../../utils/whatsapp';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/products', label: t('nav.products') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md w-full">
      <div className="max-w-[1400px] mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
            <span className="font-bold text-xl text-gray-800">Zakwan Mobile</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-2">
            <Link to="/products" className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-5 h-5 text-gray-600" />
            </Link>
            
            {/* Language Switcher */}
            <LanguageSwitcher />
            
            <a
              href={`https://wa.me/${SHOP_PHONE_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 bg-green-600 text-white px-3 py-1.5 rounded-full text-sm font-semibold hover:bg-green-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{t('nav.whatsapp')}</span>
            </a>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-2 border-t pt-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 px-4 rounded-lg mb-1 ${
                  isActive(item.path)
                    ? 'bg-blue-50 text-blue-600 font-semibold'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile WhatsApp Button */}
            <a
              href={`https://wa.me/${SHOP_PHONE_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-3 px-4 text-green-600 font-semibold hover:bg-green-50 rounded-lg mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="w-5 h-5" />
              <span>{t('nav.whatsapp')}</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
};