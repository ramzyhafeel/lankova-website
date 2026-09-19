import { Phone, Mail, MapPin } from "lucide-react";
import { site } from "../../data/site";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactCards() {
  const whatsappNumber = String(site.whatsappNumber || "").replace(/\D/g, "");
  const waHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hello ${site.brand}! I would like to plan my Sri Lanka tour.`
  )}`;

  const phoneDisplay = site.phone;
  const phoneHref = `tel:${site.phone.replace(/\s+/g, '')}`;
  const email = site.email;

  const cards = [
    {
      icon: Phone,
      title: "Direct Phone Call",
      text: phoneDisplay,
      hint: "Tap to call us 24/7",
      href: phoneHref,
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp Chat",
      text: "Instant WhatsApp Support",
      hint: "Fastest response time",
      href: waHref,
      isWhatsapp: true
    },
    {
      icon: Mail,
      title: "Email Enquiries",
      text: email,
      hint: "Official travel inbox",
      href: `mailto:${email}`,
    },
    {
      icon: MapPin,
      title: "Operating Coverage",
      text: `${site.location} — ${site.coverage}`,
      hint: "Island-wide private transport",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {cards.map((c) => {
        const Icon = c.icon;

        const cardInner = (
          <div className="card-luxury p-6 flex flex-col justify-between space-y-4 bg-white h-full group rounded-2xl border border-forest-800/10">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-forest-900/10 border border-gold-400/30 flex items-center justify-center text-forest-950 group-hover:bg-forest-950 group-hover:text-gold-400 transition-colors shadow-sm">
                <Icon size={22} />
              </div>

              <div className="font-serif font-bold text-lg text-forest-950 group-hover:text-forest-800 transition-colors">
                {c.title}
              </div>

              <div className="text-xs text-forest-950/70 font-medium whitespace-pre-line leading-relaxed">
                {c.text}
              </div>
            </div>

            <div className="text-[11px] font-bold uppercase tracking-wider text-gold-600 pt-2 border-t border-forest-800/10">
              {c.hint}
            </div>
          </div>
        );

        if (c.href) {
          return (
            <a
              key={c.title}
              href={c.href}
              target={c.href.startsWith("tel:") ? undefined : "_blank"}
              rel={c.href.startsWith("tel:") ? undefined : "noreferrer"}
              className="block"
              aria-label={`Open ${c.title}`}
            >
              {cardInner}
            </a>
          );
        }

        return <div key={c.title}>{cardInner}</div>;
      })}
    </div>
  );
}