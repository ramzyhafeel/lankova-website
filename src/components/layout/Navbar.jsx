import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Compass } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { navLinks } from '../../data/site';
import { createWhatsAppLink, whatsappMessages } from '../../lib/whatsapp';
import { MobileMenu } from './MobileMenu';
import { PlanMyTripModal } from '../ui/PlanMyTripModal';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [planModalOpen, setPlanModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 navbar-glass-transition py-2 sm:py-2.5 ${
          scrolled ? 'navbar-glass-scrolled' : 'navbar-glass-top'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8">
          {/* Official Brand Logo */}
          <Link
            to="/"
            aria-label="LANKOVA Travel & Tours Homepage"
            className="shrink-0 transition-transform duration-300 hover:scale-[1.02] flex items-center"
          >
            {/* Full Brand Logo for standard mobile, tablet and desktop */}
            <img
              src="/images/lankova-logo.png"
              alt="Lankova Travel & Tours - Sri Lanka Tourism Agency"
              className="h-10 min-[380px]:h-11 sm:h-12 md:h-13 lg:h-14 xl:h-[62px] w-auto object-contain hidden min-[360px]:block"
            />
            {/* Compact Icon only for ultra-narrow screens (< 360px) to prevent button collision */}
            <img
              src="/images/lankova-icon.png"
              alt="Lankova Travel & Tours"
              className="h-10 w-10 object-contain block min-[360px]:hidden rounded-md"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center flex-nowrap gap-2.5 xl:gap-4 2xl:gap-6 px-1 xl:px-2">
            {navLinks.map((link) => {
              const active =
                link.to === '/'
                  ? location.pathname === '/'
                  : location.pathname === link.to || location.pathname.startsWith(`${link.to}/`);

              return (
                <li key={link.label} className="relative flex items-center">
                  <Link
                    to={link.to}
                    className={`relative py-1 text-[12px] xl:text-[13px] 2xl:text-[14px] font-medium tracking-wide whitespace-nowrap transition-colors ${
                      active
                        ? 'text-gold-400 font-semibold'
                        : 'text-ivory-100/85 hover:text-gold-300'
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-gold-400" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right Action Group */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Real WhatsApp Button */}
            <a
              href={createWhatsAppLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Lankova on WhatsApp"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold text-white shadow-sm transition-all duration-300 hover:bg-[#20ba5a] active:scale-95 shrink-0 whitespace-nowrap"
            >
              <FaWhatsapp size={15} className="text-white shrink-0" />
              <span>WhatsApp</span>
            </a>

            {/* Plan My Trip Modal Trigger */}
            <button
              onClick={() => setPlanModalOpen(true)}
              className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-gold-400/50 bg-forest-900/70 px-3.5 py-1.5 sm:py-2 text-xs font-bold uppercase tracking-wider text-gold-300 shadow-sm transition-all duration-300 hover:bg-gold-400 hover:text-forest-950 active:scale-95 shrink-0 cursor-pointer whitespace-nowrap"
            >
              <Compass size={14} strokeWidth={2.2} />
              <span>Plan My Trip</span>
            </button>

            {/* Mobile Hamburger Menu Trigger */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="flex lg:hidden items-center justify-center p-2 text-white hover:text-gold-400 transition-colors shrink-0 cursor-pointer"
            >
              <Menu size={24} strokeWidth={2.2} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onOpenPlanModal={() => {
          setMenuOpen(false);
          setPlanModalOpen(true);
        }}
      />

      {/* Plan My Trip Modal */}
      <PlanMyTripModal
        isOpen={planModalOpen}
        onClose={() => setPlanModalOpen(false)}
      />
    </>
  );
}

export default Navbar;