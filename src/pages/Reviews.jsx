import { Link } from 'react-router-dom';
import { Star, MessageCircle, ArrowRight } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ReviewCard } from '../components/ui/ReviewCard';
import { Reveal } from '../components/ui/Reveal';
import { reviews } from '../data/reviews';
import { createWhatsAppLink, whatsappMessages } from '../lib/whatsapp';

export function Reviews() {
  return (
    <div>
      <PageHero
        eyebrow="Traveler Feedback"
        title="Guest Reviews & Testimonials"
        subtitle="Read real experiences from couples, solo explorers, and families from around the world who traveled Sri Lanka with Lankova."
        image="/hero/kandy-dalada-maligawa.jpg"
      />

      <section className="py-16 sm:py-24 bg-ivory-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Trust Rating Summary Banner */}
          <div className="mb-14 rounded-3xl bg-white p-8 sm:p-10 border border-forest-800/10 shadow-sm max-w-3xl mx-auto text-center">
            <div className="flex justify-center items-center gap-1.5 text-gold-500 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <h2 className="font-serif text-3xl font-bold text-forest-950">
              5.0 Star Guest Satisfaction
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-forest-950/70 max-w-md mx-auto">
              Every private chauffeur and itinerary is held to the highest standard of safety, punctuality, and warm Sri Lankan hospitality.
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {reviews.map((rev, i) => (
              <Reveal key={rev.id || i} delay={i * 70}>
                <ReviewCard review={rev} />
              </Reveal>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 rounded-3xl bg-forest-950 p-8 sm:p-12 text-center text-white shadow-xl">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
              Ready to Experience Sri Lanka with Us?
            </h3>
            <p className="mx-auto max-w-xl text-xs sm:text-sm text-ivory-100/80 leading-relaxed mb-6">
              Connect with our team to start planning your personalized private holiday today.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/customize-tour"
                className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-forest-950 hover:bg-gold-400 transition-all shadow-md"
              >
                <span>Plan Your Custom Tour</span>
                <ArrowRight size={14} />
              </Link>
              <a
                href={createWhatsAppLink(whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-xs font-semibold text-white hover:bg-white/20 transition-all"
              >
                <MessageCircle size={16} className="text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Reviews;