import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Accordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {items.map((it, idx) => {
        const open = idx === openIndex;
        return (
          <div
            key={it.q}
            className={`card-luxury overflow-hidden transition-all ${
              open ? "border-[#D9A441]/50 shadow-md" : "border-[#12372A]/10"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : idx)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-serif-heading text-base md:text-lg font-bold text-[#12372A] hover:text-[#1F5C45] transition-colors"
              aria-expanded={open}
            >
              <span>{it.q}</span>
              <span
                className={`w-9 h-9 rounded-full border border-[#12372A]/15 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  open ? "bg-[#12372A] text-amber-300 rotate-180" : "bg-[#FAF8F3] text-[#12372A]"
                }`}
                aria-hidden="true"
              >
                <ChevronDown size={18} />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 pt-1 text-sm text-muted leading-relaxed font-sans-body border-t border-[#12372A]/5">
                    {it.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}