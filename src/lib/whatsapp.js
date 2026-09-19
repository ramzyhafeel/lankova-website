import { site } from '../data/site';

/**
 * Creates a valid WhatsApp click-to-chat URL with international format
 * and URL-encoded message.
 */
export function createWhatsAppLink(message = '', phone = site.whatsappNumber) {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}${encoded ? `?text=${encoded}` : ''}`;
}

export const whatsappMessages = {
  general: 'Hello LANKOVA, I would like to inquire about your Sri Lanka private tours and travel services.',
  airport: 'Hello LANKOVA, I would like to arrange a private airport pickup/transfer at Bandaranaike International Airport.',
  customTour: 'Hello LANKOVA, I would like to create a customized private itinerary for my upcoming holiday in Sri Lanka.',
  driverHire: 'Hello LANKOVA, I would like to inquire about hiring a private vehicle and English-speaking chauffeur driver.',
  packageInquiry: (packageName, days) =>
    `Hello LANKOVA, I am interested in the ${days ? `${days} ` : ''}${packageName} tour package. Please share details and availability.`,
};

export default createWhatsAppLink;
