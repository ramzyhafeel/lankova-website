import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQAccordion({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={faq.question || i}
            className="rounded-2xl border border-forest-800/10 bg-white overflow-hidden transition-colors"
          >
            <button
              onClick={() => toggle(i)}
              className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-ivory-50"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-base sm:text-lg font-bold text-forest-950 pr-4">
                {faq.question}
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ivory-200 text-forest-900 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 bg-gold-400 text-forest-950' : ''
                }`}
              >
                <ChevronDown size={18} strokeWidth={2.2} />
              </span>
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed text-forest-950/75 border-t border-forest-800/5">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default FAQAccordion;
