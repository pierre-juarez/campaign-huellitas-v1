import {
  LOGO_URL,
  ORG_NAME,
  ORG_SUBTITLE,
  WHATSAPP_NUMBER_DISPLAY,
  WHATSAPP_URL,
} from '@/pages/home/campaignData';

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-background-50">
      <div className="w-full px-4 md:px-8 max-w-6xl mx-auto py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          <div className="text-center md:text-left max-w-sm">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <img
                src={LOGO_URL}
                alt="Logo de Huellitas de Esperanza"
                title="Huellitas de Esperanza"
                className="w-14 h-14 rounded-full object-cover"
              />
              <span className="leading-tight text-left">
                <span className="block font-heading font-bold text-background-50">{ORG_NAME}</span>
                <span className="block text-xs text-background-50/70">{ORG_SUBTITLE}</span>
              </span>
            </div>
            <p className="mt-5 text-sm text-background-50/70 leading-relaxed">
              Por una vida más responsable, saludable y llena de amor para nuestros animales. 🐾
            </p>
          </div>

          <div className="text-center md:text-right">
            <span className="text-xs uppercase tracking-wider text-background-50/60">
              Contáctanos
            </span>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center md:justify-end gap-3 bg-background-50/10 hover:bg-background-50/20 border border-background-50/15 rounded-full px-5 py-3 transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-whatsapp-line text-xl text-accent-400" />
              <span className="font-semibold">{WHATSAPP_NUMBER_DISPLAY}</span>
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-background-50/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-background-50/60">
          <span>
            © {new Date().getFullYear()} {ORG_NAME}. Todos los derechos reservados.
          </span>
          <span>Campaña social de esterilización · {ORG_SUBTITLE}</span>
        </div>
      </div>
    </footer>
  );
}