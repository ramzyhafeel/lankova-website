import { FaWhatsapp } from 'react-icons/fa';
import { createWhatsAppLink, whatsappMessages } from '../../lib/whatsapp';

export function WhatsAppButton() {
  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40">
      <a
        href={createWhatsAppLink(whatsappMessages.general)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Lankova on WhatsApp"
        className="group relative flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_32px_rgba(37,211,102,0.55)] active:scale-95"
      >
        {/* Radar ping ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />

        <FaWhatsapp size={32} className="relative z-10 transition-transform duration-300 group-hover:rotate-6 text-white" />

        {/* Tooltip on desktop */}
        <span className="absolute right-full mr-3 hidden sm:block whitespace-nowrap rounded-full bg-forest-950/90 px-3.5 py-1.5 text-xs font-semibold text-white shadow-md opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none border border-gold-400/20">
          Chat with Us on WhatsApp
        </span>
      </a>
    </aside>
  );
}

export default WhatsAppButton;
