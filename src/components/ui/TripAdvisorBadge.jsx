import { useEffect } from 'react';

const TRIPADVISOR_URL =
  'https://www.tripadvisor.com/Attraction_Review-g297897-d34760321-Reviews-Lankova_Travel_Tours-Negombo_Western_Province.html';

export function TripAdvisorBadge({ uniq = '148', className = '' }) {
  const containerId = `TA_selfserveprop${uniq}`;
  const listId = `qVtSG3gEw${uniq === '148' ? '' : `_${uniq}`}`;
  const itemId = `ZCUxLiIKmRtG${uniq === '148' ? '' : `_${uniq}`}`;

  useEffect(() => {
    const triggerValidator = () => {
      if (typeof window !== 'undefined' && typeof window.taValidate === 'function') {
        try {
          window.taValidate();
        } catch {
          // ignore validator exceptions
        }
      }

      // If another container already has the rendered CDSWIDSSP widget,
      // sync it to this container if this container is still waiting.
      const currentContainer = document.getElementById(containerId);
      if (currentContainer && !currentContainer.querySelector('#CDSWIDSSP')) {
        const renderedWidget = document.querySelector('.TA_selfserveprop #CDSWIDSSP');
        if (renderedWidget) {
          currentContainer.innerHTML = renderedWidget.outerHTML;
        }
      }
    };

    const scriptSrc = `https://www.jscache.com/wejs?wtype=selfserveprop&uniq=${uniq}&locationId=34760321&lang=en_US&rating=true&nreviews=5&writereviewlink=false&popIdx=true&iswide=false&border=true&display_version=2`;
    let scriptTag = document.querySelector(`script[src*="uniq=${uniq}"][src*="selfserveprop"]`);

    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.async = true;
      scriptTag.src = scriptSrc;
      scriptTag.setAttribute('data-loadtrk', 'true');
      scriptTag.onload = () => {
        triggerValidator();
      };
      document.body.appendChild(scriptTag);
    } else {
      triggerValidator();
    }

    // TripAdvisor script loads secondary scripts asynchronously.
    // Poll to ensure taValidate runs once ready.
    const pollDelays = [200, 500, 1000, 2000, 3500];
    const timers = pollDelays.map((delay) => setTimeout(triggerValidator, delay));

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [uniq, containerId]);

  return (
    <div className={`tripadvisor-card-wrapper ${className}`}>
      <div id={containerId} className="TA_selfserveprop">
        <ul id={listId} className="TA_links WkuOdje">
          <li id={itemId} className="r6Pp7gG">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={TRIPADVISOR_URL}
              className="ta-ssp-fallback-card group"
              title="Read verified reviews of Lankova Travel & Tours on TripAdvisor"
              aria-label="Lankova Travel & Tours on TripAdvisor"
            >
              <img
                src="https://www.tripadvisor.com/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-11900-2.svg"
                alt="TripAdvisor"
                width={120}
                height={26}
                loading="lazy"
                className="h-6 w-auto transition-transform duration-200 group-hover:scale-105"
              />
              <span className="mt-2 text-xs font-serif font-bold text-forest-950 tracking-wide line-clamp-1">
                Lankova Travel &amp; Tours
              </span>
              <div className="flex items-center gap-1 mt-1 text-emerald-600">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </div>
              <span className="mt-1 text-[10px] text-forest-950/70 font-medium group-hover:text-gold-600 transition-colors">
                Read Reviews &bull; Negombo, Sri Lanka
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TripAdvisorBadge;
