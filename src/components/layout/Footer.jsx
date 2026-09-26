import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { site, navLinks } from '../../data/site';
import { createWhatsAppLink, whatsappMessages } from '../../lib/whatsapp';

export function Footer() {
  return (
    <footer className="bg-[#071a12] text-ivory-100 border-t border-forest-800/40">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Top Contact Tier */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 pb-10 border-b border-forest-800/40">
          {/* Official Logo Brand */}
          <div className="shrink-0">
            <Link to="/" className="inline-block" aria-label="LANKOVA Travel & Tours Homepage">
              {/* Full Brand Logo for standard mobile, tablet and desktop */}
              <img
                src="/images/lankova-logo.png"
                alt="Lankova Travel & Tours - Sri Lanka Tourism Agency"
                className="h-10 sm:h-11 md:h-12 w-auto object-contain hidden min-[360px]:block"
              />
              {/* Compact Icon only for ultra-narrow screens (< 360px) */}
              <img
                src="/images/lankova-icon.png"
                alt="Lankova Travel & Tours"
                className="h-10 w-10 object-contain block min-[360px]:hidden rounded-md"
              />
            </Link>
            <p className="mt-2 text-xs text-gold-300 font-medium tracking-wide">
              {site.tagline}
            </p>
          </div>

          {/* Contact Details Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-10 text-xs text-ivory-100/90">
            {/* Phone / WhatsApp */}
            <a
              href={createWhatsAppLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group transition-colors hover:text-gold-300"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest-900 border border-forest-700/60 text-gold-400 group-hover:bg-forest-800">
                <Phone size={16} />
              </div>
              <div>
                <p className="font-semibold text-ivory-100 text-sm tracking-wide">{site.phone}</p>
                <p className="text-[11px] text-ivory-100/60">Call / WhatsApp 24/7</p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-3 group transition-colors hover:text-gold-300"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest-900 border border-forest-700/60 text-gold-400 group-hover:bg-forest-800">
                <Mail size={16} />
              </div>
              <div>
                <p className="font-semibold text-ivory-100 text-sm tracking-wide">{site.email}</p>
                <p className="text-[11px] text-ivory-100/60">Email Inquiries</p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest-900 border border-forest-700/60 text-gold-400">
                <MapPin size={16} />
              </div>
              <div>
                <p className="font-semibold text-ivory-100 text-sm tracking-wide">{site.location}</p>
                <p className="text-[11px] text-ivory-100/60">{site.coverage}</p>
              </div>
            </div>
          </div>

          {/* Contact Us CTA Button */}
          <div className="shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-forest-950 shadow-sm transition-all duration-300 hover:from-gold-400 hover:to-gold-300 hover:shadow-md active:scale-95"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Middle Tier: Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-b border-forest-800/40 text-xs text-ivory-100/70">
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-gold-400 mb-3">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 5).map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="hover:text-gold-300 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-gold-400 mb-3">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-gold-300 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-gold-300 transition-colors">Guest Reviews</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-gold-300 transition-colors">Photo Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold-300 transition-colors">Get in Touch</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-gold-400 mb-3">
              Popular Tours
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/packages/3-day-sri-lanka" className="hover:text-gold-300 transition-colors">3-Day Cultural Tour</Link>
              </li>
              <li>
                <Link to="/packages/5-day-sri-lanka" className="hover:text-gold-300 transition-colors">5-Day Wildlife Safari</Link>
              </li>
              <li>
                <Link to="/packages/7-day-sri-lanka" className="hover:text-gold-300 transition-colors">7-Day Classic Ceylon</Link>
              </li>
              <li>
                <Link to="/packages/14-day-sri-lanka" className="hover:text-gold-300 transition-colors">14-Day Grand Expedition</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-gold-400 mb-3">
              Private Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/transportation" className="hover:text-gold-300 transition-colors">Airport Transfers (CMB)</Link>
              </li>
              <li>
                <Link to="/transportation" className="hover:text-gold-300 transition-colors">Private Chauffeur Drivers</Link>
              </li>
              <li>
                <Link to="/customize-tour" className="hover:text-gold-300 transition-colors">Customized Itineraries</Link>
              </li>
              <li>
                <Link to="/hotels" className="hover:text-gold-300 transition-colors">Boutique Hotel Stays</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Socials */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[11px] text-ivory-100/50">
          <p>
            &copy; {site.year} {site.brand} &bull; {site.legalName}. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-2.5">
            <a
              href={site.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-forest-700/60 bg-forest-900 text-ivory-100/70 transition-colors hover:border-gold-400 hover:text-gold-300"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>

            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-forest-700/60 bg-forest-900 text-ivory-100/70 transition-colors hover:border-gold-400 hover:text-gold-300"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            <a
              href={site.tripAdvisorUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TripAdvisor"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-forest-700/60 bg-forest-900 text-ivory-100/70 transition-colors hover:border-gold-400 hover:text-gold-300"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-4.5 13c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zm9 0c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zm-4.5-4c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;