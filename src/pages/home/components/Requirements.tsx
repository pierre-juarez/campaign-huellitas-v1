import Reveal from '@/components/feature/Reveal';
import { requirements } from '@/pages/home/campaignData';

export default function Requirements() {
  return (
    <section id="requisitos" className="scroll-mt-24 py-16 md:py-24">
      <div className="w-full px-4 md:px-8 max-w-6xl mx-auto">
        <Reveal className="max-w-3xl">
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
            Antes de la cita
          </span>
          <h2 className="mt-3 font-heading font-extrabold text-2xl md:text-4xl text-foreground-950">
            Antes de llevar a tu mascota, asegúrate de cumplir estos requisitos
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {requirements.map((req, index) => (
            <Reveal key={req.text} delay={index * 50}>
              <div className="h-full flex items-start gap-4 bg-background-50 border border-background-200 rounded-2xl p-5">
                <span className="w-10 h-10 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0">
                  <i className={`${req.icon} text-lg`} />
                </span>
                <p className="text-sm md:text-base text-foreground-800 leading-relaxed">{req.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-6 flex items-start gap-3 bg-accent-100/70 border border-accent-200 rounded-2xl p-5">
            <span className="w-9 h-9 rounded-full bg-accent-500 text-accent-950 flex items-center justify-center flex-shrink-0">
              <i className="ri-information-line text-lg" />
            </span>
            <p className="text-sm text-accent-900">
              Si tu mascota no cumple algún requisito, escríbenos por WhatsApp y te ayudamos a
              revisar tu caso antes de la campaña.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}