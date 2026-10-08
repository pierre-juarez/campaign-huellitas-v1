import {
  CAMPAIGN_DATE,
  PRICE_CATS,
  PRICE_DOGS,
  WHATSAPP_URL,
} from "@/pages/home/campaignData";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-24 md:pt-28 pb-12 md:pb-20 bg-background-50 overflow-hidden"
    >
      <div className="absolute -top-24 -right-24 w-72 h-72 md:w-96 md:h-96 rounded-full bg-primary-100/60 blur-3xl" />
      <div className="absolute bottom-0 -left-24 w-64 h-64 md:w-80 md:h-80 rounded-full bg-accent-100/60 blur-3xl" />

      <div className="relative w-full px-4 md:px-8 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="w-full">
          <span className="inline-flex items-center gap-2 bg-accent-100 text-accent-900 text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full">
            <i className="ri-hand-heart-line" />
            Campaña social de esterilización
          </span>

          <h1 className="mt-5 font-heading font-extrabold text-3xl md:text-5xl leading-tight text-foreground-950">
            Campaña de Esterilización para Perros y Gatos
          </h1>

          <p className="mt-4 text-base md:text-lg text-foreground-700 max-w-xl">
            Una oportunidad para cuidar la salud de tu mascota y contribuir al
            bienestar animal.
          </p>

          <div className="mt-6 space-y-3">
            <div className="inline-flex items-center gap-3 bg-primary-500 text-background-50 px-5 py-2.5 rounded-lg">
              <i className="ri-calendar-2-line text-2xl" />
              <span className="font-heading font-bold text-lg md:text-xl">
                {CAMPAIGN_DATE}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 bg-background-100 border border-background-200 px-4 py-3 rounded-lg">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-100 text-primary-700 text-lg">
                  🐶
                </span>
                <span className="text-sm font-semibold text-foreground-800">
                  Perros: <span className="text-primary-700">{PRICE_DOGS}</span>
                </span>
              </div>
              <div className="flex items-center gap-2 bg-background-100 border border-background-200 px-4 py-3 rounded-lg">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-accent-100 text-accent-800 text-lg">
                  🐱
                </span>
                <span className="text-sm font-semibold text-foreground-800">
                  Gatos: <span className="text-accent-800">{PRICE_CATS}</span>
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-background-50 font-semibold px-6 py-3.5 rounded-full transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-whatsapp-line text-xl" />
              Inscribirme por WhatsApp
            </a>
            <a
              href="#requisitos"
              className="flex items-center justify-center gap-2 bg-background-100 hover:bg-background-200 border border-background-300 text-foreground-900 font-semibold px-6 py-3.5 rounded-full transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-list-check-2 text-lg" />
              Ver requisitos
            </a>
          </div>
        </div>

        <div className="relative w-full">
          <div className="w-full h-[300px] sm:h-[380px] lg:h-[520px] rounded-2xl overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=Warm%20heartfelt%20portrait%20of%20a%20happy%20golden%20mixed%20breed%20dog%20and%20a%20calm%20grey%20tabby%20cat%20sitting%20side%20by%20side%20outdoors%20on%20soft%20green%20grass%2C%20gentle%20golden%20natural%20light%2C%20blurred%20lush%20green%20park%20background%2C%20professional%20pet%20photography%2C%20hopeful%20caring%20mood%2C%20clean%20bright%20composition&width=1000&height=1200&seq=huellitas-hero-01&orientation=portrait"
              alt="Perro y gato juntos en un parque con luz cálida"
              title="Campaña de esterilización de perros y gatos"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-5 left-4 md:left-6 bg-background-50 border border-background-200 rounded-xl px-4 py-3 flex items-center gap-3 animate-soft-float">
            <span className="w-10 h-10 rounded-full bg-accent-500 text-accent-950 flex items-center justify-center">
              <i className="ri-heart-3-line text-xl" />
            </span>
            <span className="leading-tight">
              <span className="block text-xs text-foreground-600">Cupos</span>
              <span className="block font-heading font-bold text-foreground-950 text-sm">
                Limitados
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
