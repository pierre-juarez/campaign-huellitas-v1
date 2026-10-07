import Reveal from '@/components/feature/Reveal';
import {
  MAPS_DIRECTIONS_URL,
  MAPS_EMBED_URL,
  VENUE_ACCESS,
  VENUE_NAME,
} from '@/pages/home/campaignData';

export default function LocationSection() {
  return (
    <section id="ubicacion" className="scroll-mt-24 py-16 md:py-24">
      <div className="w-full px-4 md:px-8 max-w-6xl mx-auto">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
            Ubicación
          </span>
          <h2 className="mt-3 font-heading font-extrabold text-2xl md:text-4xl text-foreground-950">
            ¿Dónde será la campaña?
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <Reveal className="lg:col-span-5">
            <div className="h-full bg-background-50 border border-background-200 rounded-2xl p-6 md:p-8 flex flex-col">
              <span className="w-12 h-12 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center">
                <i className="ri-map-pin-2-line text-2xl" />
              </span>
              <h3 className="mt-5 font-heading font-bold text-xl text-foreground-950">{VENUE_NAME}</h3>
              <p className="mt-2 text-foreground-700 flex items-start gap-2">
                <i className="ri-door-open-line text-primary-600 mt-0.5" />
                {VENUE_ACCESS}
              </p>
              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto pt-6 inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-background-50 font-semibold px-6 py-3.5 rounded-full transition-colors whitespace-nowrap cursor-pointer"
              >
                <i className="ri-navigation-line text-lg" />
                Cómo llegar
              </a>
            </div>
          </Reveal>

          <Reveal delay={90} className="lg:col-span-7">
            <div className="w-full h-[280px] md:h-full min-h-[280px] rounded-2xl overflow-hidden border border-background-200">
              <iframe
                title={`Mapa de ${VENUE_NAME}`}
                src={MAPS_EMBED_URL}
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}