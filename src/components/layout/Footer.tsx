import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageProvider';
import { Smartphone, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-gray-300 w-full">
      <div className="max-w-[1400px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Smartphone className="w-6 h-6 text-blue-400" />
              <span className="font-bold text-xl text-white">PhoneHub</span>
            </div>
            <p className="text-sm mb-4">
              {t('footer.description')}
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">{t('nav.home')}</Link></li>
              <li><Link to="/products" className="hover:text-blue-400 transition-colors">{t('nav.products')}</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.categories')}</h3>
            <ul className="space-y-2">
              <li><Link to="/products?category=phones&condition=new" className="hover:text-blue-400 transition-colors">{t('featured.categories.new')}</Link></li>
              <li><Link to="/products?category=phones&condition=used" className="hover:text-blue-400 transition-colors">{t('featured.categories.used')}</Link></li>
              <li><Link to="/products?category=phones&condition=refurbished" className="hover:text-blue-400 transition-colors">{t('featured.categories.refurbished')}</Link></li>
              <li><Link to="/products?category=accessories" className="hover:text-blue-400 transition-colors">{t('featured.categories.accessories')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>123 Main Street, City, State 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+1234567890" className="hover:text-blue-400">(123) 456-7890</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:info@phonehub.com" className="hover:text-blue-400">info@phonehub.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} PhoneHub. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};