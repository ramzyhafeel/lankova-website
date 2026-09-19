import { useState } from 'react';
import { Phone, Calendar } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { site } from '../../data/site';
import { createWhatsAppLink, whatsappMessages } from '../../lib/whatsapp';
import { PlanMyTripModal } from './PlanMyTripModal';

export function MobileConversionBar() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between border-t border-forest-800/20 bg-forest-950/95 px-3 py-2 text-white backdrop-blur-md xl:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
        {/* Call Button */}
        <a
          href={`tel:${site.phone.replace(/\s+/g, '')}`}
          aria-label="Call LANKOVA"
          className="flex flex-1 flex-col items-center justify-center py-1 text-ivory-100/90 transition-colors hover:text-gold-300"
        >
          <Phone size={17} className="text-gold-400" />
          <span className="text-[10px] font-semibold mt-0.5 tracking-wider uppercase">Call</span>
        </a>

        <span className="h-6 w-px bg-forest-800/60" />

        {/* WhatsApp Button with Real WhatsApp Icon */}
        <a
          href={createWhatsAppLink(whatsappMessages.general)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex flex-1 flex-col items-center justify-center py-1 text-ivory-100/90 transition-colors hover:text-[#25D366]"
        >
          <FaWhatsapp size={19} className="text-[#25D366]" />
          <span className="text-[10px] font-semibold mt-0.5 tracking-wider uppercase">WhatsApp</span>
        </a>

        <span className="h-6 w-px bg-forest-800/60" />

        {/* Plan Trip CTA */}
        <div className="flex-[1.5] pl-2">
          <button
            onClick={() => setModalOpen(true)}
            className="w-full inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 py-2 text-xs font-bold text-forest-950 shadow-sm active:scale-95 transition-all"
          >
            <Calendar size={14} strokeWidth={2.4} />
            <span>Plan Trip</span>
          </button>
        </div>
      </div>

      <PlanMyTripModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

export default MobileConversionBar;
