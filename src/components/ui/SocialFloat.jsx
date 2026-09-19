import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Instagram, Facebook, X, Phone, Mail } from "lucide-react";
import { site } from "../../data/site";
import { FaWhatsapp, FaTripadvisor } from "react-icons/fa";

function useOutsideClick(ref, onOutside) {
  useEffect(() => {
    function handle(e) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) onOutside();
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [ref, onOutside]);
}

export default function SocialFloat({
  whatsappMessage = `Hello ${site.brand}, I'm interested in planning a Sri Lanka tour. Could you please help me?`,
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useOutsideClick(wrapRef, () => setOpen(false));

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const waHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const socialLinks = [
    {
      name: "WhatsApp Us",
      url: waHref,
      icon: <FaWhatsapp size={20} />,
      style: {
        background: "#25D366",
        color: "white",
      },
    },
    {
      name: "Call Directly",
      url: `tel:+${site.whatsappNumber}`,
      icon: <Phone size={18} />,
      style: {
        background: "#071a12",
        color: "white",
      },
    },
    {
      name: "Email Us",
      url: `mailto:${site.email}`,
      icon: <Mail size={18} />,
      style: {
        background: "#d4ab48",
        color: "#071a12",
      },
    },
    {
      name: "TripAdvisor",
      url: site.tripAdvisorUrl,
      icon: <FaTripadvisor size={18} />,
      style: {
        background: "#34E0A1",
        color: "#000000",
      },
    },
    {
      name: "Instagram",
      url: site.instagramUrl,
      icon: <Instagram size={18} />,
      style: {
        background:
          "linear-gradient(135deg, #833AB4 0%, #FD1D1D 45%, #F77737 100%)",
        color: "white",
      },
    },
    {
      name: "Facebook",
      url: site.facebookUrl,
      icon: <Facebook size={18} />,
      style: {
        background: "#1877F2",
        color: "white",
      },
    },
  ];

  return (
    <div
      ref={wrapRef}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end print:hidden"
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-2.5 mb-3 p-3 bg-forest-950/95 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl min-w-[200px]"
          >
            <div className="px-2 py-1 text-[11px] font-bold text-gold-400 tracking-wider uppercase border-b border-white/10 pb-2">
              Instant Travel Assistance
            </div>
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={link.name}
                title={link.name}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.04 }}
                className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold shadow-sm transition-all hover:scale-105"
                style={link.style}
              >
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        {!open && (
          <motion.div
            className="absolute inset-0 rounded-full bg-emerald-500/40"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          />
        )}

        <motion.button
          type="button"
          onClick={() => setOpen((v) => !v)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative z-10 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
          aria-label={open ? "Close travel chat options" : "Open travel chat options"}
          aria-expanded={open}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="inline-flex"
              >
                <X size={24} />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="inline-flex"
              >
                <FaWhatsapp size={26} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}