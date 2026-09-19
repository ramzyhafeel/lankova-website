import { Link } from 'react-router-dom';
import { Compass, Home, ArrowLeft } from 'lucide-react';

export function NotFound() {
  return (
    <div className="flex min-h-[75vh] flex-col items-center justify-center bg-ivory-100 px-4 py-24 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-forest-950 text-gold-400 mb-6 shadow-md">
        <Compass size={32} strokeWidth={2} />
      </div>

      <span className="text-xs font-bold uppercase tracking-widest text-gold-600 mb-2">
        Page Not Found &bull; 404
      </span>

      <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-forest-950 mb-3">
        You’ve Wandered Off the Beaten Track
      </h1>

      <p className="max-w-md text-xs sm:text-sm text-forest-950/70 leading-relaxed mb-8">
        The destination you are looking for may have been moved, renamed, or is temporarily unavailable. Let us guide you back.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-forest-950 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-gold-500 hover:text-forest-950 transition-all shadow-md active:scale-95"
        >
          <Home size={15} />
          <span>Return to Homepage</span>
        </Link>

        <Link
          to="/packages"
          className="inline-flex items-center gap-2 rounded-full border border-forest-800/20 bg-white px-6 py-3 text-xs font-semibold text-forest-950 hover:bg-ivory-50 transition-colors"
        >
          <span>Browse Tour Packages</span>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
