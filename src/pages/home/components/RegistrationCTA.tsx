import Reveal from '@/components/feature/Reveal';
import { WHATSAPP_NUMBER_DISPLAY, WHATSAPP_URL } from '@/pages/home/campaignData';

export default function RegistrationCTA() {
  return (
    <section id="inscripcion" className="scroll-mt-24 py-16 md:py-24 bg-background-100">
      <div className="w-full px-4 md:px-8 max-w-5xl mx-auto">
        <Reveal>
          <div className="relative overflow-hidden bg-primary-600 rounded-3xl px-6 py-12 md:px-14 md:py-16 text-center">
            <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-accent-500/25 blur-2xl" />
            <div className="absolute -left-16 -bottom-16 w-56 h-56 rounded-full bg-accent-400/20 blur-2xl" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 bg-accent-500 text-accent-950 text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full">
                <i className="ri-hand-heart-line" />
                Inscripción abierta
              </span>

              <h2 className="mt-5 font-heading font-extrabold text-2xl md:text-4xl text-background-50">
                ¿Listo para cuidar a tu mascota?
              </h2>
              <p className="mt-4 text-background-50/90 max-w-xl mx-auto">
                Registra a tu mascota y solicita información sobre la campaña.
              </p>

              <div className="mt-8 inline-flex flex-col sm:flex-row items-center gap-3 bg-background-50 rounded-2xl px-6 py-4">
                <span className="w-12 h-12 rounded-full bg-primary-500 text-background-50 flex items-center justify-center">
                  <i className="ri-whatsapp-line text-2xl" />
                </span>
                <span className="text-left leading-tight">
                  <span className="block text-xs text-foreground-600">WhatsApp</span>
                  <span className="block font-heading font-bold text-xl text-foreground-950">
                    {WHATSAPP_NUMBER_DISPLAY}
                  </span>
                </span>
              </div>

              <div className="mt-8 flex justify-center">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-accent-950 font-bold px-8 py-4 rounded-full transition-colors whitespace-nowrap text-base md:text-lg cursor-pointer"
                >
                  <i className="ri-whatsapp-line text-2xl" />
                  Quiero inscribir a mi mascota
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}