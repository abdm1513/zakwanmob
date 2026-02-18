import React from 'react';
import { useLanguage } from '../../context/LanguageProvider';
import { Shield, Truck, CreditCard, Headset, Award, RefreshCw } from 'lucide-react';

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
    {
      icon: <CreditCard className="w-6 h-6" />,
      titleKey: 'why.feature3.title',
      descKey: 'why.feature3.desc',
    },
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

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-70">
          <img src="https://via.placeholder.com/100x40?text=Trust+Badge" alt="Trust badge" className="h-8 grayscale" />
          <img src="https://via.placeholder.com/100x40?text=Secure" alt="Secure payment" className="h-8 grayscale" />
          <img src="https://via.placeholder.com/100x40?text=Guarantee" alt="Guarantee" className="h-8 grayscale" />
        </div>
      </div>
    </section>
  );
};