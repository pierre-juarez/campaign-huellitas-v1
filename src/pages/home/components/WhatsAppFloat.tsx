import { WHATSAPP_URL } from '@/pages/home/campaignData';

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Inscribirme por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-background-50 pl-4 pr-5 py-3.5 rounded-full transition-colors animate-pulse-ring cursor-pointer"
    >
      <i className="ri-whatsapp-line text-2xl" />
      <span className="hidden sm:inline font-semibold text-sm whitespace-nowrap">Inscribirme</span>
    </a>
  );
}