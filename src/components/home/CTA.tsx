// import React from 'react';
// import { useLanguage } from '../../context/LanguageProvider';
// import { MessageCircle, Phone } from 'lucide-react';

// export const CTA: React.FC = () => {
//   const { t } = useLanguage();

//   return (
//     <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white w-full">
//       <div className="max-w-[1400px] mx-auto px-4">
//         <div className="max-w-4xl mx-auto text-center">
//           {/* Main Content */}
//           <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
//             {t('cta.title')}
//           </h2>
//           <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
//             {t('cta.description')}
//           </p>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
//             <a
//               href="https://wa.me/1234567890"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 w-full sm:w-auto transition-all duration-200"
//             >
//               <MessageCircle className="w-5 h-5" />
//               {t('cta.whatsapp')}
//             </a>
//             <a
//               href="tel:+1234567890"
//               className="border-2 border-white text-white hover:bg-white/20 px-6 py-3 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 w-full sm:w-auto transition-all duration-200"
//             >
//               <Phone className="w-5 h-5" />
//               {t('cta.call')}
//             </a>
//           </div>

//           {/* Quick Contact Options */}
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
//             <div className="text-center">
//               <div className="text-2xl font-bold">📱</div>
//               <div className="text-sm text-blue-200">{t('cta.sms')}</div>
//             </div>
//             <div className="text-center">
//               <div className="text-2xl font-bold">💬</div>
//               <div className="text-sm text-blue-200">{t('cta.liveChat')}</div>
//             </div>
//             <div className="text-center">
//               <div className="text-2xl font-bold">📧</div>
//               <div className="text-sm text-blue-200">{t('cta.email')}</div>
//             </div>
//             <div className="text-center">
//               <div className="text-2xl font-bold">📍</div>
//               <div className="text-sm text-blue-200">{t('cta.visit')}</div>
//             </div>
//           </div>

//           {/* Store Hours */}
//           <div className="mt-8 pt-6 border-t border-blue-500">
//             <p className="text-sm text-blue-200">
//               {t('cta.hours')}
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import React from 'react';
import { useLanguage } from '../../context/LanguageProvider';
import { MessageCircle, Phone } from 'lucide-react';
import { SHOP_PHONE_NUMBER } from '../../utils/whatsapp';

export const CTA: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white w-full">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={`https://wa.me/${SHOP_PHONE_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 w-full sm:w-auto transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              {t('cta.whatsapp')}
            </a>
            <a
              href={`tel:+${SHOP_PHONE_NUMBER}`}
              className="border-2 border-white text-white hover:bg-white/20 px-6 py-3 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 w-full sm:w-auto transition-all duration-200"
            >
              <Phone className="w-5 h-5" />
              {t('cta.call')}
            </a>
          </div>

          {/* Quick Contact Options */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold">📱</div>
              <div className="text-sm text-blue-200">{t('cta.sms')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">💬</div>
              <div className="text-sm text-blue-200">{t('cta.liveChat')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">📧</div>
              <div className="text-sm text-blue-200">{t('cta.email')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">📍</div>
              <div className="text-sm text-blue-200">{t('cta.visit')}</div>
            </div>
          </div>

          {/* Store Hours */}
          <div className="mt-8 pt-6 border-t border-blue-500">
            <p className="text-sm text-blue-200">
              {t('cta.hours')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};