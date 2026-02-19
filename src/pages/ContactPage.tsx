// import React, { useState } from 'react';
// import { useLanguage } from '../context/LanguageProvider';
// import { generateWhatsAppLink } from '../utils/whatsapp';
// import { 
//   Phone, 
//   Mail, 
//   MapPin, 
//   Clock, 
//   MessageCircle, 
//   Send,
//   Facebook,
//   Instagram,
//   Twitter
// } from 'lucide-react';

// export const ContactPage: React.FC = () => {
//   const { t } = useLanguage();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
//     window.open(generateWhatsAppLink(undefined, message), '_blank');
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 w-full">
//       <div className="max-w-[1400px] mx-auto px-4 py-6">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-2xl md:text-3xl font-bold mb-2">{t('contact.title')}</h1>
//           <p className="text-gray-600">{t('contact.subtitle')}</p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-6">
//           {/* Contact Info Cards */}
//           <div className="md:col-span-1 space-y-4">
//             {/* WhatsApp Card */}
//             <a
//               href={generateWhatsAppLink()}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block bg-green-600 text-white p-6 rounded-xl hover:bg-green-700 transition-colors"
//             >
//               <MessageCircle className="w-8 h-8 mb-3" />
//               <h3 className="font-semibold text-lg mb-1">{t('contact.whatsapp')}</h3>
//               <p className="text-green-100 text-sm mb-2">{t('contact.whatsapp.desc')}</p>
//               <p className="text-sm opacity-90">+1 (234) 567-890</p>
//             </a>

//             {/* Call Card */}
//             <a
//               href="tel:+1234567890"
//               className="block bg-blue-600 text-white p-6 rounded-xl hover:bg-blue-700 transition-colors"
//             >
//               <Phone className="w-8 h-8 mb-3" />
//               <h3 className="font-semibold text-lg mb-1">{t('contact.call')}</h3>
//               <p className="text-blue-100 text-sm mb-2">{t('contact.call.desc')}</p>
//               <p className="text-sm opacity-90">+1 (234) 567-890</p>
//             </a>

//             {/* Email Card */}
//             <a
//               href="mailto:info@phonehub.com"
//               className="block bg-gray-800 text-white p-6 rounded-xl hover:bg-gray-900 transition-colors"
//             >
//               <Mail className="w-8 h-8 mb-3" />
//               <h3 className="font-semibold text-lg mb-1">{t('contact.email')}</h3>
//               <p className="text-gray-300 text-sm mb-2">{t('contact.email.desc')}</p>
//               <p className="text-sm opacity-90">info@phonehub.com</p>
//             </a>

//             {/* Visit Card */}
//             <div className="bg-white p-6 rounded-xl shadow-sm">
//               <MapPin className="w-8 h-8 mb-3 text-blue-600" />
//               <h3 className="font-semibold text-lg mb-1">{t('contact.visit')}</h3>
//               <p className="text-gray-600 text-sm mb-2">
//                 123 Main Street<br />
//                 Downtown, City, State 12345
//               </p>
//               <div className="flex items-center gap-2 text-sm text-gray-500">
//                 <Clock className="w-4 h-4" />
//                 <span>{t('contact.hours.weekdays')}: 10am - 8pm</span>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="md:col-span-2">
//             <div className="bg-white rounded-xl shadow-sm p-6">
//               <h2 className="text-xl font-bold mb-4">{t('contact.form.title')}</h2>
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div className="grid sm:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       {t('contact.form.name')} *
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       value={formData.name}
//                       onChange={(e) => setFormData({...formData, name: e.target.value})}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       placeholder="John Doe"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       {t('contact.form.email')}
//                     </label>
//                     <input
//                       type="email"
//                       value={formData.email}
//                       onChange={(e) => setFormData({...formData, email: e.target.value})}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       placeholder="john@example.com"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     {t('contact.form.phone')} *
//                   </label>
//                   <input
//                     type="tel"
//                     required
//                     value={formData.phone}
//                     onChange={(e) => setFormData({...formData, phone: e.target.value})}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder="+1 234 567 890"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     {t('contact.form.message')} *
//                   </label>
//                   <textarea
//                     required
//                     rows={5}
//                     value={formData.message}
//                     onChange={(e) => setFormData({...formData, message: e.target.value})}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     placeholder={t('contact.form.message')}
//                   ></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
//                 >
//                   <Send className="w-5 h-5" />
//                   {t('contact.form.send')}
//                 </button>
//               </form>

//               {/* Social Links */}
//               <div className="mt-6 pt-6 border-t">
//                 <h3 className="font-semibold mb-3">{t('contact.follow')}</h3>
//                 <div className="flex gap-3">
//                   <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
//                     <Facebook className="w-5 h-5" />
//                   </a>
//                   <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
//                     <Instagram className="w-5 h-5" />
//                   </a>
//                   <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
//                     <Twitter className="w-5 h-5" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Map */}
//         <div className="mt-8 bg-white rounded-xl shadow-sm p-4">
//           <h2 className="text-xl font-bold mb-4">{t('contact.find')}</h2>
//           <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
//             <div className="text-center">
//               <MapPin className="w-8 h-8 mx-auto mb-2 text-gray-400" />
//               <p className="text-gray-500">Map will be embedded here</p>
//               <p className="text-sm text-gray-400">123 Main Street, City, State 12345</p>
//             </div>
//           </div>
//         </div>

//         {/* Business Hours */}
//         <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
//           <h2 className="text-xl font-bold mb-4">{t('contact.hours')}</h2>
//           <div className="grid sm:grid-cols-2 gap-4">
//             <div>
//               <div className="flex justify-between py-2 border-b">
//                 <span className="font-medium">{t('contact.hours.weekdays')}</span>
//                 <span className="text-gray-600">10:00 AM - 8:00 PM</span>
//               </div>
//               <div className="flex justify-between py-2 border-b">
//                 <span className="font-medium">{t('contact.hours.saturday')}</span>
//                 <span className="text-gray-600">10:00 AM - 8:00 PM</span>
//               </div>
//             </div>
//             <div>
//               <div className="flex justify-between py-2 border-b">
//                 <span className="font-medium">{t('contact.hours.sunday')}</span>
//                 <span className="text-gray-600">12:00 PM - 6:00 PM</span>
//               </div>
//               <div className="flex justify-between py-2 border-b">
//                 <span className="font-medium">{t('contact.hours.holidays')}</span>
//                 <span className="text-gray-600">{t('contact.hours.closed')}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageProvider';
import { generateWhatsAppLink, SHOP_PHONE_NUMBER } from '../utils/whatsapp';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send,
  Facebook,
  Instagram,
  Twitter
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
    window.open(generateWhatsAppLink(undefined, message), '_blank');
  };

  // Format phone number for display
  const displayPhone = `+251 ${SHOP_PHONE_NUMBER.substring(3)}`;

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <div className="max-w-[1400px] mx-auto px-4 py-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{t('contact.title')}</h1>
          <p className="text-gray-600">{t('contact.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Contact Info Cards */}
          <div className="md:col-span-1 space-y-4">
            {/* WhatsApp Card */}
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-600 text-white p-6 rounded-xl hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="w-8 h-8 mb-3" />
              <h3 className="font-semibold text-lg mb-1">{t('contact.whatsapp')}</h3>
              <p className="text-green-100 text-sm mb-2">{t('contact.whatsapp.desc')}</p>
              <p className="text-sm opacity-90">{displayPhone}</p>
            </a>

            {/* Call Card */}
            <a
              href={`tel:+${SHOP_PHONE_NUMBER}`}
              className="block bg-blue-600 text-white p-6 rounded-xl hover:bg-blue-700 transition-colors"
            >
              <Phone className="w-8 h-8 mb-3" />
              <h3 className="font-semibold text-lg mb-1">{t('contact.call')}</h3>
              <p className="text-blue-100 text-sm mb-2">{t('contact.call.desc')}</p>
              <p className="text-sm opacity-90">{displayPhone}</p>
            </a>

            {/* Email Card */}
            <a
              href="mailto:info@phonehub.com"
              className="block bg-gray-800 text-white p-6 rounded-xl hover:bg-gray-900 transition-colors"
            >
              <Mail className="w-8 h-8 mb-3" />
              <h3 className="font-semibold text-lg mb-1">{t('contact.email')}</h3>
              <p className="text-gray-300 text-sm mb-2">{t('contact.email.desc')}</p>
              <p className="text-sm opacity-90">info@zakwanmob.com</p>
            </a>

            {/* Visit Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <MapPin className="w-8 h-8 mb-3 text-blue-600" />
              <h3 className="font-semibold text-lg mb-1">{t('contact.visit')}</h3>
              <p className="text-gray-600 text-sm mb-2">
                Bole<br />
                Addis Ababa, Ethiopia
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>{t('contact.hours.weekdays')}: 10am - 8pm</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">{t('contact.form.title')}</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contact.form.name')} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.form.phone')} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+251 977 787 879"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t('contact.form.message')}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <Send className="w-5 h-5" />
                  {t('contact.form.send')}
                </button>
              </form>

              {/* Social Links */}
              <div className="mt-6 pt-6 border-t">
                <h3 className="font-semibold mb-3">{t('contact.follow')}</h3>
                <div className="flex gap-3">
                  <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-4">
          <h2 className="text-xl font-bold mb-4">{t('contact.find')}</h2>
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-2 text-gray-400" />
              <p className="text-gray-500">Map will be embedded here</p>
              <p className="text-sm text-gray-400">Bole, Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold mb-4">{t('contact.hours')}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between py-2 border-b">
                <span className="font-medium">{t('contact.hours.weekdays')}</span>
                <span className="text-gray-600">10:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="font-medium">{t('contact.hours.saturday')}</span>
                <span className="text-gray-600">10:00 AM - 8:00 PM</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between py-2 border-b">
                <span className="font-medium">{t('contact.hours.sunday')}</span>
                <span className="text-gray-600">12:00 PM - 6:00 PM</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="font-medium">{t('contact.hours.holidays')}</span>
                <span className="text-gray-600">{t('contact.hours.closed')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};