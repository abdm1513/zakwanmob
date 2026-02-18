import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageProvider';
import { products } from '../data/products';
import { ProductCard } from '../components/ui/ProductCard';
import { generateWhatsAppLink } from '../utils/whatsapp';
import { 
  MessageCircle, 
  Phone, 
  ArrowLeft, 
  Check,
  Truck,
  Shield,
  Star
} from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { t } = useLanguage();
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find(p => p.id === id);
  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">{t('product.notFound')}</h2>
          <Link to="/products">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              {t('product.back')}
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const conditionColors = {
    new: 'bg-green-100 text-green-800',
    used: 'bg-yellow-100 text-yellow-800',
    refurbished: 'bg-purple-100 text-purple-800',
  };

  const images = product.images || [product.imageUrl];

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <div className="max-w-[1400px] mx-auto px-4 py-6">
        {/* Back Button */}
        <Link 
          to="/products" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('product.back')}
        </Link>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-4 md:p-6">
            {/* Image Gallery */}
            <div>
              <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 mb-4">
                <img
                  src={images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === index ? 'border-blue-600' : 'border-transparent'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              {/* Condition Badge */}
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${conditionColors[product.condition]}`}>
                {product.condition === 'new' ? t('featured.categories.new') :
                 product.condition === 'used' ? t('featured.categories.used') :
                 t('featured.categories.refurbished')}
              </span>

              <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-gray-600 mb-4">{product.brand}</p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-3xl font-bold text-blue-600">${product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="ml-2 text-lg text-gray-400 line-through">
                      ${product.originalPrice}
                    </span>
                    <span className="ml-2 text-green-600 font-semibold">
                      {t('product.save')} ${product.originalPrice - product.price}
                    </span>
                  </>
                )}
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-2 mb-6">
                {product.inStock ? (
                  <>
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-green-600">{t('product.inStock')}</span>
                  </>
                ) : (
                  <span className="text-red-600">{t('product.outOfStock')}</span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a
                  href={generateWhatsAppLink(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 text-white hover:bg-green-700 px-6 py-3 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-200"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t('product.buyWhatsApp')}
                </a>
                <a 
                  href="tel:+1234567890" 
                  className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-200"
                >
                  <Phone className="w-5 h-5" />
                  {t('product.callToOrder')}
                </a>
              </div>

              {/* Key Features */}
              <div className="border-t border-b py-4 mb-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <Truck className="w-5 h-5 mx-auto mb-1 text-blue-600" />
                    <span className="text-xs">{t('why.feature2.title')}</span>
                  </div>
                  <div className="text-center">
                    <Shield className="w-5 h-5 mx-auto mb-1 text-blue-600" />
                    <span className="text-xs">{t('why.feature1.title')}</span>
                  </div>
                  <div className="text-center">
                    <Star className="w-5 h-5 mx-auto mb-1 text-blue-600" />
                    <span className="text-xs">{t('why.feature5.title')}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">{t('product.description')}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>

              {/* Specifications */}
              <div>
                <h3 className="font-semibold mb-2">{t('product.specs')}</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {product.specs.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">{t('product.related')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};