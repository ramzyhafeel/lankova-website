import { Star } from 'lucide-react';

export function ReviewCard({ review }) {
  return (
    <div className="card-luxury flex flex-col justify-between rounded-2xl bg-white p-6 border border-forest-800/10">
      <div>
        {/* 5 Stars */}
        <div className="flex items-center gap-1 text-gold-500 mb-3">
          {[...Array(review.rating || 5)].map((_, i) => (
            <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
          ))}
        </div>

        {/* Title if present */}
        {review.title && (
          <h4 className="font-serif text-lg font-bold text-forest-950 mb-2">
            "{review.title}"
          </h4>
        )}

        {/* Review body */}
        <p className="text-xs sm:text-sm text-forest-950/75 leading-relaxed italic">
          "{review.text}"
        </p>
      </div>

      {/* Guest metadata */}
      <div className="mt-5 pt-4 border-t border-forest-800/10 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold text-forest-950">{review.author}</p>
          <p className="text-[11px] text-forest-950/55">{review.country || review.location}</p>
        </div>
        {review.tour && (
          <span className="rounded-full bg-forest-900/5 px-2.5 py-0.5 text-[10px] font-semibold text-forest-800">
            {review.tour}
          </span>
        )}
      </div>
    </div>
  );
}

export default ReviewCard;
