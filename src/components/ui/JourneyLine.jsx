export function JourneyLine({ className = '' }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-gold-400"></span>
      <span className="h-[1.5px] w-12 bg-gradient-to-r from-gold-400 to-transparent"></span>
    </div>
  );
}

export default JourneyLine;
