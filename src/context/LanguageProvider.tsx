import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'am' | 'om';

// Define the type for translation keys
export type TranslationKey = 
  | 'nav.home' | 'nav.products' | 'nav.contact' | 'nav.whatsapp'
  | 'hero.badge' | 'hero.title.line1' | 'hero.title.line2' | 'hero.description' 
  | 'hero.shopNow' | 'hero.chatNow' | 'hero.stats.products' | 'hero.stats.warranty' 
  | 'hero.stats.delivery'
  | 'featured.title' | 'featured.subtitle' | 'featured.viewAll'
  | 'featured.categories.new' | 'featured.categories.used' | 'featured.categories.refurbished' 
  | 'featured.categories.accessories'
  | 'why.title' | 'why.subtitle'
  | 'why.feature1.title' | 'why.feature1.desc'
  | 'why.feature2.title' | 'why.feature2.desc'
  | 'why.feature3.title' | 'why.feature3.desc'
  | 'why.feature4.title' | 'why.feature4.desc'
  | 'why.feature5.title' | 'why.feature5.desc'
  | 'why.feature6.title' | 'why.feature6.desc'
  | 'cta.title' | 'cta.description' | 'cta.whatsapp' | 'cta.call'
  | 'cta.sms' | 'cta.liveChat' | 'cta.email' | 'cta.visit' | 'cta.hours'
  | 'products.title' | 'products.found' | 'products.found.singular'
  | 'products.sort.newest' | 'products.sort.priceLow' | 'products.sort.priceHigh'
  | 'products.filters' | 'products.clearFilters' | 'products.noResults'
  | 'filter.search' | 'filter.category' | 'filter.condition' | 'filter.brand'
  | 'filter.price' | 'filter.price.upTo'
  | 'product.details' | 'product.buyNow' | 'product.inStock' | 'product.outOfStock' | 'product.save'
  | 'product.back' | 'product.description' | 'product.specs' | 'product.related'
  | 'product.buyWhatsApp' | 'product.callToOrder' | 'product.notFound'
  | 'contact.title' | 'contact.subtitle' | 'contact.whatsapp' | 'contact.whatsapp.desc'
  | 'contact.call' | 'contact.call.desc' | 'contact.email' | 'contact.email.desc'
  | 'contact.visit' | 'contact.form.title' | 'contact.form.name' | 'contact.form.email'
  | 'contact.form.phone' | 'contact.form.message' | 'contact.form.send'
  | 'contact.follow' | 'contact.find' | 'contact.hours'
  | 'contact.hours.weekdays' | 'contact.hours.saturday' | 'contact.hours.sunday'
  | 'contact.hours.holidays' | 'contact.hours.closed'
  | 'footer.description' | 'footer.quickLinks' | 'footer.categories' | 'footer.contact'
  | 'footer.rights';

// Define the type for translations object
type Translations = {
  [key in Language]: {
    [K in TranslationKey]: string;
  };
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.contact': 'Contact',
    'nav.whatsapp': 'whatsapp',
    
    // Hero Section
    'hero.badge': 'Trusted by 10,000+ customers',
    'hero.title.line1': 'Your Next',
    'hero.title.line2': 'Smartphone Awaits',
    'hero.description': 'Best deals on new, used & refurbished phones. Quality guaranteed with 30-day warranty and free delivery.',
    'hero.shopNow': 'Shop Now',
    'hero.chatNow': 'Chat on WhatsApp',
    'hero.stats.products': 'Products',
    'hero.stats.warranty': 'Warranty',
    'hero.stats.delivery': 'Free Delivery',
    
    // Featured Products
    'featured.title': 'Featured Products',
    'featured.subtitle': 'Hand-picked just for you',
    'featured.viewAll': 'View All',
    'featured.categories.new': 'New Phones',
    'featured.categories.used': 'Used Phones',
    'featured.categories.refurbished': 'Refurbished',
    'featured.categories.accessories': 'Accessories',
    
    // Why Choose Us
    'why.title': 'Why Choose PhoneHub?',
    'why.subtitle': "We're committed to providing the best quality and service to our customers",
    'why.feature1.title': '30-Day Warranty',
    'why.feature1.desc': 'All our phones come with a 30-day warranty for your peace of mind.',
    'why.feature2.title': 'Free Express Delivery',
    'why.feature2.desc': 'Get your order delivered within 24-48 hours absolutely free.',
    'why.feature3.title': 'Flexible Payments',
    'why.feature3.desc': 'Pay in installments with 0% interest. Credit cards accepted.',
    'why.feature4.title': '24/7 Support',
    'why.feature4.desc': "We're always here to help via WhatsApp, phone, or email.",
    'why.feature5.title': 'Quality Checked',
    'why.feature5.desc': 'Every phone undergoes 50-point quality inspection.',
    'why.feature6.title': 'Easy Returns',
    'why.feature6.desc': "7-day easy returns if you're not completely satisfied.",
    
    // CTA Section
    'cta.title': "Can't Find What You're Looking For?",
    'cta.description': 'Contact us directly! We can source specific models and accessories for you. Get a personalized quote within minutes.',
    'cta.whatsapp': 'Chat on WhatsApp',
    'cta.call': 'Call Us Now',
    'cta.sms': 'SMS',
    'cta.liveChat': 'Live Chat',
    'cta.email': 'Email',
    'cta.visit': 'Visit Store',
    'cta.hours': 'Visit our store: Bole, Addis Ababa | Mon-Sat: 10am - 8pm, Sun: 12pm - 6pm',
    
    // Products Page
    'products.title': 'Products',
    'products.found': 'products found',
    'products.found.singular': 'product found',
    'products.sort.newest': 'Newest',
    'products.sort.priceLow': 'Price: Low to High',
    'products.sort.priceHigh': 'Price: High to Low',
    'products.filters': 'Filters',
    'products.clearFilters': 'Clear All Filters',
    'products.noResults': 'No products match your filters.',
    
    // Filter Sections
    'filter.search': 'Search products...',
    'filter.category': 'Category',
    'filter.condition': 'Condition',
    'filter.brand': 'Brands',
    'filter.price': 'Max Price',
    'filter.price.upTo': 'Up to',
    
    // Product Card
    'product.details': 'Details',
    'product.buyNow': 'Buy Now',
    'product.inStock': 'In Stock',
    'product.outOfStock': 'Out of Stock',
    'product.save': 'Save',
    
    // Product Detail
    'product.back': 'Back to Products',
    'product.description': 'Description',
    'product.specs': 'Specifications',
    'product.related': 'You Might Also Like',
    'product.buyWhatsApp': 'Buy on WhatsApp',
    'product.callToOrder': 'Call to Order',
    'product.notFound': 'Product Not Found',
    
    // Contact Page
    'contact.title': 'Contact Us',
    'contact.subtitle': "We're here to help! Reach out to us anytime.",
    'contact.whatsapp': 'WhatsApp',
    'contact.whatsapp.desc': 'Quickest response time',
    'contact.call': 'Call Us',
    'contact.call.desc': 'Mon-Sat, 10am-8pm',
    'contact.email': 'Email',
    'contact.email.desc': '24/7 support',
    'contact.visit': 'Visit Our Store',
    'contact.form.title': 'Send us a Message',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Your Email',
    'contact.form.phone': 'Phone Number',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message via WhatsApp',
    'contact.follow': 'Follow Us',
    'contact.find': 'Find Us',
    'contact.hours': 'Business Hours',
    'contact.hours.weekdays': 'Monday - Friday',
    'contact.hours.saturday': 'Saturday',
    'contact.hours.sunday': 'Sunday',
    'contact.hours.holidays': 'Holidays',
    'contact.hours.closed': 'Closed',
    
    // Footer
    'footer.description': 'Your trusted source for new, used, and refurbished phones. Quality guaranteed with 30-day warranty.',
    'footer.quickLinks': 'Quick Links',
    'footer.categories': 'Categories',
    'footer.contact': 'Contact Us',
    'footer.rights': 'All rights reserved.',
  },
  
  am: {
    // Navigation
    'nav.home': 'መነሻ',
    'nav.products': 'ምርቶች',
    'nav.contact': 'አድራሻ',
    'nav.whatsapp': 'whatsapp',
    
    // Hero Section
    'hero.badge': 'ከ10,000 በላይ ደንበኞች ያምኑናል',
    'hero.title.line1': 'ቀጣይ',
    'hero.title.line2': 'ስማርትፎንዎ እየጠበቀዎ ነው',
    'hero.description': 'አዲስ፣ ያገለገሉ እና ታድሰው የቀረቡ ስልኮች ምርጥ ዋጋዎች። በ30 ቀን ዋስትና እና ነፃ አቅርቦት የተረጋገጠ ጥራት።',
    'hero.shopNow': 'አሁን ይግዙ',
    'hero.chatNow': 'በWhatsApp ይነጋገሩ',
    'hero.stats.products': 'ምርቶች',
    'hero.stats.warranty': 'ዋስትና',
    'hero.stats.delivery': 'ነፃ አቅርቦት',
    
    // Featured Products
    'featured.title': 'ተመራጭ ምርቶች',
    'featured.subtitle': 'ለእርስዎ ብቻ የተመረጡ',
    'featured.viewAll': 'ሁሉንም ይመልከቱ',
    'featured.categories.new': 'አዲስ ስልኮች',
    'featured.categories.used': 'ያገለገሉ ስልኮች',
    'featured.categories.refurbished': 'ታድሰው የቀረቡ',
    'featured.categories.accessories': 'መለዋወጫዎች',
    
    // Why Choose Us
    'why.title': 'ለምን PhoneHubን ይመርጣሉ?',
    'why.subtitle': 'ለደንበኞቻችን ምርጥ ጥራት እና አገልግሎት ለመስጠት ቆርጠን ተነስተናል',
    'why.feature1.title': '30 ቀን ዋስትና',
    'why.feature1.desc': 'ሁሉም ስልኮቻችን ለእርስዎ እርጋታ 30 ቀን ዋስትና አላቸው።',
    'why.feature2.title': 'ነፃ ፈጣን አቅርቦት',
    'why.feature2.desc': 'ትዕዛዝዎን በ24-48 ሰዓታት ውስጥ በነፃ ይቀበሉ።',
    'why.feature3.title': 'ተለዋዋጭ ክፍያ',
    'why.feature3.desc': 'በ0% ወለድ በክፍያ ይክፈሉ። ክሬዲት ካርዶች ተቀባይነት አላቸው።',
    'why.feature4.title': '24/7 ድጋፍ',
    'why.feature4.desc': 'በWhatsApp፣ ስልክ ወይም ኢሜይል ሁልጊዜ ለመርዳት ዝግጁ ነን።',
    'why.feature5.title': 'ጥራት ተረጋግጧል',
    'why.feature5.desc': 'እያንዳንዱ ስልክ 50-ነጥብ የጥራት ምርመራ ያልፋል።',
    'why.feature6.title': 'ቀላል መመለሻ',
    'why.feature6.desc': 'ሙሉ እርካታ ካልተገኘ በ7 ቀናት ውስጥ በቀላሉ መመለስ ይችላሉ።',
    
    // CTA Section
    'cta.title': 'የሚፈልጉትን ማግኘት አልቻሉም?',
    'cta.description': 'በቀጥታ ያግኙን! የተወሰኑ ሞዴሎችን እና መለዋወጫዎችን ማግኘት እንችላለን። በደቂቃዎች ውስጥ ግላዊ ዋጋ ያግኙ።',
    'cta.whatsapp': 'በWhatsApp ይነጋገሩ',
    'cta.call': 'አሁን ይደውሉ',
    'cta.sms': 'ኤስኤምኤስ',
    'cta.liveChat': 'የቀጥታ ውይይት',
    'cta.email': 'ኢሜይል',
    'cta.visit': 'ሱቅ ይጎብኙ',
    'cta.hours': 'ሱቃችንን ይጎብኙ፡ ቦሌ፣ አዲስ አበባ | ሰኞ-ቅዳሜ፡ 10am - 8pm፣ እሁድ፡ 12pm - 6pm',
    
    // Products Page
    'products.title': 'ምርቶች',
    'products.found': 'ምርቶች ተገኝተዋል',
    'products.found.singular': 'ምርት ተገኝቷል',
    'products.sort.newest': 'አዲሱ',
    'products.sort.priceLow': 'ዋጋ፡ ከዝቅተኛ ወደ ከፍተኛ',
    'products.sort.priceHigh': 'ዋጋ፡ ከከፍተኛ ወደ ዝቅተኛ',
    'products.filters': 'ማጣሪያዎች',
    'products.clearFilters': 'ሁሉንም ማጣሪያዎች አጽዳ',
    'products.noResults': 'ምርቶች ከማጣሪያዎችዎ ጋር አይዛመዱም።',
    
    // Filter Sections
    'filter.search': 'ምርቶችን ይፈልጉ...',
    'filter.category': 'ምድብ',
    'filter.condition': 'ሁኔታ',
    'filter.brand': 'ብራንዶች',
    'filter.price': 'ከፍተኛ ዋጋ',
    'filter.price.upTo': 'እስከ',
    
    // Product Card
    'product.details': 'ዝርዝሮች',
    'product.buyNow': 'አሁን ይግዙ',
    'product.inStock': 'በክምችት ውስጥ',
    'product.outOfStock': 'ከክምችት ውጪ',
    'product.save': 'ቆጥበው',
    
    // Product Detail
    'product.back': 'ወደ ምርቶች ተመለስ',
    'product.description': 'መግለጫ',
    'product.specs': 'ዝርዝር መግለጫዎች',
    'product.related': 'እንዲሁም ሊወዱት ይችላሉ',
    'product.buyWhatsApp': 'በWhatsApp ይግዙ',
    'product.callToOrder': 'ለማዘዝ ይደውሉ',
    'product.notFound': 'ምርት አልተገኘም',
    
    // Contact Page
    'contact.title': 'አግኙን',
    'contact.subtitle': 'ለመርዳት ዝግጁ ነን! በማንኛውም ጊዜ ያግኙን።',
    'contact.whatsapp': 'WhatsApp',
    'contact.whatsapp.desc': 'ፈጣን ምላሽ',
    'contact.call': 'ይደውሉልን',
    'contact.call.desc': 'ሰኞ-ቅዳሜ፣ 10am-8pm',
    'contact.email': 'ኢሜይል',
    'contact.email.desc': '24/7 ድጋፍ',
    'contact.visit': 'ሱቃችንን ይጎብኙ',
    'contact.form.title': 'መልእክት ይላኩልን',
    'contact.form.name': 'ስምዎ',
    'contact.form.email': 'ኢሜይልዎ',
    'contact.form.phone': 'ስልክ ቁጥር',
    'contact.form.message': 'መልእክት',
    'contact.form.send': 'በWhatsApp መልእክት ይላኩ',
    'contact.follow': 'ይከተሉን',
    'contact.find': 'ያግኙን',
    'contact.hours': 'የስራ ሰዓታት',
    'contact.hours.weekdays': 'ሰኞ - ዓርብ',
    'contact.hours.saturday': 'ቅዳሜ',
    'contact.hours.sunday': 'እሁድ',
    'contact.hours.holidays': 'በዓላት',
    'contact.hours.closed': 'ዝግ',
    
    // Footer
    'footer.description': 'አዲስ፣ ያገለገሉ እና ታድሰው የቀረቡ ስልኮች አስተማማኝ ምንጭዎ። በ30 ቀን ዋስትና የተረጋገጠ ጥራት።',
    'footer.quickLinks': 'ፈጣን አገናኞች',
    'footer.categories': 'ምድቦች',
    'footer.contact': 'አግኙን',
    'footer.rights': 'መብቱ በህግ የተጠበቀ ነው።',
  },
  
  om: {
    // Navigation
    'nav.home': 'Mana',
    'nav.products': 'Oomishaalee',
    'nav.contact': 'Qunnamtii',
    'nav.whatsapp': 'whatsapp',
    
    // Hero Section
    'hero.badge': 'Maamila 10,000+ n amanamanne',
    'hero.title.line1': 'Isaan Itti Aanu',
    'hero.title.line2': 'Smartphone Kee Si Eeggata',
    'hero.description': 'Gatii gaarii bilbilaa haaraa, tajaajila irraa bahanii fi haaromsanii. Qulqullina 30-guyyaa waaraantii fi dhiyeessii tolaan mirkanaa\'e.',
    'hero.shopNow': 'Amma Bitu',
    'hero.chatNow': 'WhatsApp Irratti Haasa\'i',
    'hero.stats.products': 'Oomishaalee',
    'hero.stats.warranty': 'Waaraantii',
    'hero.stats.delivery': 'Dhiyeessii Tolaan',
    
    // Featured Products
    'featured.title': 'Oomishaalee Filatamoo',
    'featured.subtitle': 'Siif qopha\'an kan filataman',
    'featured.viewAll': 'Hunda Argii',
    'featured.categories.new': 'Bilbilaa Haaraa',
    'featured.categories.used': 'Bilbilaa Tajaajila Irraa Bahani',
    'featured.categories.refurbished': 'Haaromsanii',
    'featured.categories.accessories': 'Meeshaalee',
    
    // Why Choose Us
    'why.title': 'Maaliif PhoneHub Filatta?',
    'why.subtitle': 'Maamilaaf tajaajila fi qulqullina isa an caalu kennuuf waadaa seennee jirra',
    'why.feature1.title': 'Waaraantii 30-Guyyaa',
    'why.feature1.desc': 'Bilbilli keenya hundi nagaa qabaachuuf waaraantii 30-guyyaa qaba.',
    'why.feature2.title': 'Dhiyeessii Daddafaa Tola',
    'why.feature2.desc': 'Ajaja kee sa\'aatii 24-48 keessatti tolaan fudhadhu.',
    'why.feature3.title': 'Kaffaltii Salphaa',
    'why.feature3.desc': 'Kaffaltii kutaadhaan 0% dhalaan. Kaardii liqii fudhanna.',
    'why.feature4.title': 'Deeggarsa 24/7',
    'why.feature4.desc': 'WhatsApp, bilbilaa ykn emailiin yoomiyyuu gargaaruuf qophii dha.',
    'why.feature5.title': 'Qulqullina Mirkanaa\'e',
    'why.feature5.desc': 'Bilbilni hundi qulqullina 50-piintii qoramaa darba.',
    'why.feature6.title': 'Deebisuu Salphaa',
    'why.feature6.desc': 'Guyyaa 7 keessatti guutummaatti hin gammamin deebisuu dandeessa.',
    
    // CTA Section
    'cta.title': 'Waan barbaaddu argachuu hin dandeenye?',
    'cta.description': 'Achumaan nu qunnami! Oomishaalee fi meeshaalee addaa barbaaddan siif argachuu dandeenya. Daqiiqaalee muraasa keessatti gatii dhuunfaasaa argadhu.',
    'cta.whatsapp': 'WhatsApp Irratti Haasa\'i',
    'cta.call': 'Amma Bilbilaa',
    'cta.sms': 'SMS',
    'cta.liveChat': 'Haasa\'a Lallaafaa',
    'cta.email': 'Email',
    'cta.visit': 'Daldalaa Daawwadhu',
    'cta.hours': 'Daldalaa keenya daawwadhu: Bole, Addis Ababa | Wiixata-Sanbata: 10:00-20:00, Dilbata: 12:00-18:00',
    
    // Products Page
    'products.title': 'Oomishaalee',
    'products.found': 'oomishaalee argaman',
    'products.found.singular': 'oomishaan argame',
    'products.sort.newest': 'Haaraa',
    'products.sort.priceLow': 'Gatii: Gadi Aansee Ol',
    'products.sort.priceHigh': 'Gatii: Ol Aansee Gadi',
    'products.filters': 'Soorsoo',
    'products.clearFilters': 'Soorsoo Hunda Qulqulleessi',
    'products.noResults': 'Oomishni soorsoo kee wajji hin walsinne.',
    
    // Filter Sections
    'filter.search': 'Oomishaalee barbaadi...',
    'filter.category': 'Ramaddii',
    'filter.condition': 'Haala',
    'filter.brand': 'Brandii',
    'filter.price': 'Gatii Ol Araa',
    'filter.price.upTo': 'Hanga',
    
    // Product Card
    'product.details': 'Gadifageenya',
    'product.buyNow': 'Amma Bitu',
    'product.inStock': 'Kuusaa Jira',
    'product.outOfStock': 'Kuusaa Hinjira',
    'product.save': 'Qusadhu',
    
    // Product Detail
    'product.back': 'Gara Oomishaalee Deebi\'i',
    'product.description': 'Ibsa',
    'product.specs': 'Adda Ibsa',
    'product.related': 'Kanas Barbaaddu Ta\'a',
    'product.buyWhatsApp': 'WhatsApp Irratti Bitu',
    'product.callToOrder': 'Ajajuuf Bilbilaa',
    'product.notFound': 'Oomishaan Hin Argamne',
    
    // Contact Page
    'contact.title': 'Nu Qunnamii',
    'contact.subtitle': 'Gargaaruuf qophii dha! Yoomiyyuu nu qunnamuu dandeessa.',
    'contact.whatsapp': 'WhatsApp',
    'contact.whatsapp.desc': 'Deebii saffisaa',
    'contact.call': 'Nu Bilbilaa',
    'contact.call.desc': 'Wiixata-Sanbata, 10:00-20:00',
    'contact.email': 'Email',
    'contact.email.desc': 'Deeggarsa 24/7',
    'contact.visit': 'Daldalaa Keenya Daawwadhu',
    'contact.form.title': 'Ergaa Nuuf Ergi',
    'contact.form.name': 'Maqaa Kee',
    'contact.form.email': 'Email Kee',
    'contact.form.phone': 'Lakk Bilbilaa',
    'contact.form.message': 'Ergaa',
    'contact.form.send': 'WhatsApp Irratti Ergaa Ergi',
    'contact.follow': 'Nu Hordof',
    'contact.find': 'Nu Barbaadi',
    'contact.hours': 'Sa\'aatii Hoji',
    'contact.hours.weekdays': 'Wiixata - Jimaata',
    'contact.hours.saturday': 'Sanbata',
    'contact.hours.sunday': 'Dilbata',
    'contact.hours.holidays': 'Guyyaa Ayyaanaa',
    'contact.hours.closed': 'Cufame',
    
    // Footer
    'footer.description': 'Bilbilaa haaraa, tajaajila irraa bahanii fi haaromsanii madda amanamaan. Qulqullina waaraantii 30-guyyaan mirkanaa\'e.',
    'footer.quickLinks': 'Liinkii Daddafaa',
    'footer.categories': 'Ramaddiiwwan',
    'footer.contact': 'Nu Qunnamii',
    'footer.rights': 'Mirga hundi eegama.',
  }
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'am' || savedLang === 'om')) {
      setLanguage(savedLang);
    }
  }, []);

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
    // Set html lang attribute
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: TranslationKey): string => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};