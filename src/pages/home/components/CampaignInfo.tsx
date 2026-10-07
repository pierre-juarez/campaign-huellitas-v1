import Reveal from '@/components/feature/Reveal';
import { infoCards } from '@/pages/home/campaignData';

export default function CampaignInfo() {
  return (
    <section id="campana" className="scroll-mt-24 py-16 md:py-24">
      <div className="w-full px-4 md:px-8 max-w-6xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
            Información de la campaña
          </span>
          <h2 className="mt-3 font-heading font-extrabold text-2xl md:text-4xl text-foreground-950">
            Todo lo que necesitas saber
          </h2>
          <p className="mt-4 text-foreground-700">
            Revisa la fecha, el lugar y las tarifas antes de inscribir a tu mascota.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {infoCards.map((card, index) => (
            <Reveal key={card.label} delay={index * 80}>
              <div className="h-full bg-background-50 border border-background-200 rounded-2xl p-6 flex flex-col">
                <span className="w-12 h-12 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center">
                  <i className={`${card.icon} text-2xl`} />
                </span>
                <span className="mt-5 text-xs font-semibold uppercase tracking-wider text-foreground-500">
                  {card.label}
                </span>
                <span
                  className={`mt-1 font-heading font-bold leading-snug ${
                    card.highlight ? 'text-3xl text-primary-700' : 'text-lg text-foreground-950'
                  }`}
                >
                  {card.value}
                </span>
                {card.note && (
                  <span className="mt-2 text-sm text-foreground-600">{card.note}</span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}