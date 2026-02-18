// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useLanguage } from '../../context/LanguageProvider';
// import { ArrowRight, Shield, Zap } from 'lucide-react';

// export const Hero: React.FC = () => {
//   const { t } = useLanguage();

//   return (
//     <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white w-full overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
//       </div>

//       <div className="max-w-[1400px] mx-auto px-4 py-12 md:py-20">
//         <div className="grid md:grid-cols-2 gap-8 items-center">
//           {/* Left Content */}
//           <div className="text-center md:text-left">
//             {/* Badge */}
//             <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 mb-6">
//               <Zap className="w-4 h-4 mr-2" />
//               <span className="text-sm font-medium">{t('hero.badge')}</span>
//             </div>

//             {/* Main Heading */}
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
//               {t('hero.title.line1')}
//               <span className="block text-yellow-300">{t('hero.title.line2')}</span>
//             </h1>

//             {/* Description */}
//             <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg mx-auto md:mx-0">
//               {t('hero.description')}
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//               <Link 
//                 to="/products" 
//                 className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 w-full sm:w-auto transition-all duration-200"
//               >
//                 {t('hero.shopNow')}
//                 <ArrowRight className="w-5 h-5" />
//               </Link>
              
//               <a
//                 href="https://wa.me/1234567890"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="border-2 border-white text-white hover:bg-white/20 px-6 py-3 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 w-full sm:w-auto transition-all duration-200"
//               >
//                 {t('hero.chatNow')}
//               </a>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-4 mt-12 max-w-md mx-auto md:mx-0">
//               <div>
//                 <div className="text-xl font-bold">500+</div>
//                 <div className="text-sm text-blue-200">{t('hero.stats.products')}</div>
//               </div>
//               <div>
//                 <div className="text-xl font-bold">30-Day</div>
//                 <div className="text-sm text-blue-200">{t('hero.stats.warranty')}</div>
//               </div>
//               <div>
//                 <div className="text-xl font-bold"></div>
//                 <div className="text-sm text-blue-200">{t('hero.stats.delivery')}</div>
//               </div>
//             </div>
//           </div>

//           {/* Right Image */}
//           <div className="relative hidden md:block">
//             <div className="relative z-10">
//               <img
//                 src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600"
//                 alt="Smartphone"
//                 className="rounded-2xl shadow-2xl"
//               />
//             </div>
//             {/* Floating Card */}
//             <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-xl z-20">
//               <div className="flex items-center gap-3">
//                 <div className="bg-green-100 p-2 rounded-full">
//                   <Shield className="w-6 h-6 text-green-600" />
//                 </div>
//                 <div>
//                   <p className="text-gray-800 font-semibold">{t('why.feature1.title')}</p>
//                   <p className="text-gray-500 text-sm">{t('why.feature1.desc').substring(0, 30)}...</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageProvider';
import { ArrowRight, Shield, Zap } from 'lucide-react';
import { SHOP_PHONE_NUMBER } from '../../utils/whatsapp';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white w-full overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 mb-6">
              <Zap className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">{t('hero.badge')}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {t('hero.title.line1')}
              <span className="block text-yellow-300">{t('hero.title.line2')}</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg mx-auto md:mx-0">
              {t('hero.description')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                to="/products" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 w-full sm:w-auto transition-all duration-200"
              >
                {t('hero.shopNow')}
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <a
                href={`https://wa.me/${SHOP_PHONE_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white/20 px-6 py-3 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 w-full sm:w-auto transition-all duration-200"
              >
                {t('hero.chatNow')}
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 max-w-md mx-auto md:mx-0">
              <div>
                <div className="text-xl font-bold">500+</div>
                <div className="text-sm text-blue-200">{t('hero.stats.products')}</div>
              </div>
              <div>
                <div className="text-xl font-bold">30-Day{t('hero.stats.warranty')}</div>
                <div className="text-sm text-blue-200">{t('hero.stats.warranty')}</div>
              </div>
              <div>
                <div className="text-xl font-bold">{t('hero.stats.delivery')}</div>
                {/* <div className="text-sm text-blue-200">{t('hero.stats.delivery')}</div> */}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden md:block">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600"
                alt="Smartphone"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-xl z-20">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-800 font-semibold">{t('why.feature1.title')}</p>
                  <p className="text-gray-500 text-sm">{t('why.feature1.desc').substring(0, 30)}...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};