import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Phone, Mail, Calendar, ChevronRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { navLinks, site } from '../../data/site';
import { createWhatsAppLink, whatsappMessages } from '../../lib/whatsapp';

export function MobileMenu({ open, onClose, onOpenPlanModal }) {
  const location = useLocation();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-forest-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-forest-950 px-6 py-6 shadow-2xl flex flex-col justify-between border-l border-gold-400/20 text-white">
        {/* Top Header */}
        <div>
          <div className="flex items-center justify-between pb-5 border-b border-forest-800/40">
            <Link to="/" onClick={onClose} className="flex items-center">
              <img
                src="/images/lankova-logo.png"
                alt="Lankova Travel & Tours - Sri Lanka Tourism Agency"
                className="h-13 sm:h-14 w-auto object-contain"
              />
            </Link>
            <button
              onClick={onClose}
              className="rounded-full p-2 text-ivory-100 hover:bg-forest-900 transition-colors"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="mt-6 flex flex-col gap-1">
            {navLinks.map((link) => {
              const active =
                link.to === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.to);

              return (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={onClose}
                  className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-medium tracking-wide transition-all ${
                    active
                      ? 'bg-gold-400/15 text-gold-300 font-semibold'
                      : 'text-ivory-100/80 hover:bg-forest-900 hover:text-gold-300'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight size={15} className="text-forest-700" />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="pt-6 border-t border-forest-800/40 space-y-3">
          <button
            onClick={() => {
              onClose();
              if (onOpenPlanModal) onOpenPlanModal();
            }}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-gold-500 to-gold-400 py-3 text-xs font-bold uppercase tracking-wider text-forest-950 shadow-md hover:from-gold-400 hover:to-gold-300 transition-all"
          >
            <Calendar size={15} strokeWidth={2.4} />
            <span>Plan My Trip</span>
          </button>

          <a
            href={createWhatsAppLink(whatsappMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-950/40 py-2.5 text-xs font-semibold text-emerald-300 hover:bg-emerald-900/60 transition-all"
          >
            <FaWhatsapp size={16} className="text-[#25D366]" />
            <span>WhatsApp Support</span>
          </a>

          <div className="pt-2 text-center text-xs text-ivory-100/60 space-y-1">
            <p className="flex items-center justify-center gap-1.5">
              <Phone size={12} className="text-gold-400" />
              <span>{site.phone}</span>
            </p>
            <p className="flex items-center justify-center gap-1.5">
              <Mail size={12} className="text-gold-400" />
              <span>{site.email}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
