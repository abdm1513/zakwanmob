import React from 'react';
import { useLanguage } from '../../context/LanguageProvider';
import { Shield, Truck, CreditCard, Headset, Award, RefreshCw, BadgeCheck, Lock, Star } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  titleKey: string;
  descKey: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, titleKey, descKey }) => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
        {icon}
      </div>
      <h3 className="font-semibold text-gray-900 mb-2">{t(titleKey as any)}</h3>
      <p className="text-gray-600 text-sm">{t(descKey as any)}</p>
    </div>
  );
};

export const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      titleKey: 'why.feature1.title',
      descKey: 'why.feature1.desc',
    },
    {
      icon: <Truck className="w-6 h-6" />,
      titleKey: 'why.feature2.title',
      descKey: 'why.feature2.desc',
    },
    // {
    //   icon: <CreditCard className="w-6 h-6" />,
    //   titleKey: 'why.feature3.title',
    //   descKey: 'why.feature3.desc',
    // },
    {
      icon: <Headset className="w-6 h-6" />,
      titleKey: 'why.feature4.title',
      descKey: 'why.feature4.desc',
    },
    {
      icon: <Award className="w-6 h-6" />,
      titleKey: 'why.feature5.title',
      descKey: 'why.feature5.desc',
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      titleKey: 'why.feature6.title',
      descKey: 'why.feature6.desc',
    }
  ];

  return (
    <section className="py-12 bg-white w-full">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            {t('why.title')}
          </h2>
          <p className="text-gray-600">
            {t('why.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>

        {/* Trust Badges - Replaced with Icons */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8">
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
              <BadgeCheck className="w-6 h-6" />
            </div>
            <span className="text-xs text-gray-500 font-medium">Trust Badge</span>
          </div>
          
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600">
              <Lock className="w-6 h-6" />
            </div>
            <span className="text-xs text-gray-500 font-medium">Secure Payment</span>
          </div>
          
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center text-yellow-600">
              <Star className="w-6 h-6" />
            </div>
            <span className="text-xs text-gray-500 font-medium">Guarantee</span>
          </div>
          
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-600">
              <Shield className="w-6 h-6" />
            </div>
            <span className="text-xs text-gray-500 font-medium">100% Authentic</span>
          </div>
        </div>
      </div>
    </section>
  );
};