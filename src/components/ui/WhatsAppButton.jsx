import { useState, useEffect, useRef } from 'react';
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { X, MessageCircle, ExternalLink } from 'lucide-react';
import { site } from '../../data/site';
import { createWhatsAppLink, whatsappMessages } from '../../lib/whatsapp';

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    if (open) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  const platforms = [
    {
      name: 'WhatsApp',
      subtitle: 'Instant Chat 24/7',
      url: createWhatsAppLink(whatsappMessages.general),
      icon: <FaWhatsapp size={20} />,
      bgClass: 'bg-[#25D366] hover:bg-[#20ba5a]',
      iconBg: 'bg-black/15',
    },
    {
      name: 'Facebook',
      subtitle: 'Follow our official page',
      url: site.facebookUrl,
      icon: <FaFacebookF size={18} />,
      bgClass: 'bg-[#1877F2] hover:bg-[#166fe5]',
      iconBg: 'bg-black/15',
    },
    {
      name: 'Instagram',
      subtitle: '@lankova.lk',
      url: site.instagramUrl,
      icon: <FaInstagram size={20} />,
      bgClass: 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-95',
      iconBg: 'bg-black/15',
    },
  ];

  return (
    <aside
      ref={containerRef}
      aria-label="Social connect options"
      className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 print:hidden"
    >
      {/* Floating Popup Menu */}
      {open && (
        <div
          role="dialog"
          aria-label="Connect on WhatsApp, Facebook, or Instagram"
          className="absolute bottom-16 sm:bottom-18 right-0 w-64 sm:w-72 rounded-2xl bg-forest-950/95 backdrop-blur-md border border-gold-400/30 p-3 shadow-2xl text-white transition-all duration-200 transform origin-bottom-right"
        >
          {/* Header */}
          <div className="px-2 pt-1 pb-2.5 border-b border-white/10 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400">
              Connect with Lankova
            </span>
            <span className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-400">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Online
            </span>
          </div>

          {/* Social Platform Links */}
          <div className="mt-2.5 flex flex-col gap-2">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className={`group flex items-center justify-between rounded-xl px-3.5 py-2.5 text-white shadow-sm transition-all hover:scale-[1.02] active:scale-95 ${platform.bgClass}`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${platform.iconBg}`}
                  >
                    {platform.icon}
                  </div>
                  <div className="text-left min-w-0">
                    <span className="text-xs font-bold block leading-tight">
                      {platform.name}
                    </span>
                    <span className="text-[10px] text-white/85 font-medium leading-tight truncate block">
                      {platform.subtitle}
                    </span>
                  </div>
                </div>
                <ExternalLink
                  size={14}
                  className="shrink-0 opacity-75 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
                />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label={open ? 'Close social menu' : 'Open WhatsApp, Facebook and Instagram options'}
        className={`group relative flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer ${
          open
            ? 'bg-forest-950 border-2 border-gold-400 text-gold-400 shadow-[0_8px_25px_rgba(212,171,72,0.35)]'
            : 'bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.55)]'
        }`}
      >
        {/* Radar ping ring when closed */}
        {!open && (
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />
        )}

        {open ? (
          <X size={24} className="relative z-10 transition-transform duration-200 rotate-0" />
        ) : (
          <FaWhatsapp
            size={30}
            className="relative z-10 transition-transform duration-300 group-hover:rotate-6 text-white"
          />
        )}

        {/* Tooltip on desktop when closed */}
        {!open && (
          <span className="absolute right-full mr-3 hidden sm:block whitespace-nowrap rounded-full bg-forest-950/90 px-3.5 py-1.5 text-xs font-semibold text-white shadow-md opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none border border-gold-400/20">
            Chat &amp; Social Connect
          </span>
        )}
      </button>
    </aside>
  );
}

export default WhatsAppButton;
