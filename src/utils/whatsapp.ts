import { type Product } from '../types/product.types';

export const SHOP_PHONE_NUMBER = '1234567890';

export const generateWhatsAppLink = (
  product?: Product,
  customMessage?: string
): string => {
  let message = "Hi! I'm interested in ";
  
  if (product) {
    const conditionText = product.condition !== 'new' ? ` (${product.condition})` : '';
    message += `the *${product.name}${conditionText}* for *$${product.price}*. `;
    message += `Could you confirm if it's in stock? (Ref: ${product.id})`;
  } else if (customMessage) {
    message = customMessage;
  } else {
    message = "Hi! I'm interested in your products. Can you help me?";
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${SHOP_PHONE_NUMBER}?text=${encodedMessage}`;
};