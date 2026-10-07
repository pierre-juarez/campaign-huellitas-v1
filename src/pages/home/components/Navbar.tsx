import { useEffect, useState } from 'react';
import { LOGO_URL, ORG_NAME, navLinks, WHATSAPP_URL } from '@/pages/home/campaignData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background-50/95 backdrop-blur border-b border-background-200' : 'bg-transparent'
      }`}
    >
      <nav className="w-full px-4 md:px-8 h-16 md:h-20 flex items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center gap-2 md:gap-3 cursor-pointer">
          <img
            src={LOGO_URL}
            alt="Logo de Huellitas de Esperanza, protección y defensa animal"
            title="Huellitas de Esperanza"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
          />
          <span className="leading-tight">
            <span className="block font-heading font-bold text-foreground-950 text-sm md:text-base">
              {ORG_NAME}
            </span>
            <span className="hidden sm:block text-[11px] md:text-xs text-foreground-600 tracking-wide">
              Protección y Defensa Animal
            </span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground-700 hover:text-primary-600 transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-background-50 text-sm font-semibold px-5 py-2.5 rounded-full transition-colors whitespace-nowrap cursor-pointer"
          >
            <i className="ri-whatsapp-line text-lg" />
            Inscribirme
          </a>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Abrir menú"
            className="lg:hidden w-10 h-10 flex items-center justify-center text-foreground-950 cursor-pointer"
          >
            <i className={open ? 'ri-close-line text-2xl' : 'ri-menu-line text-2xl'} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-background-50 border-t border-background-200 px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-foreground-700 py-2 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-primary-500 text-background-50 text-sm font-semibold px-5 py-3 rounded-full whitespace-nowrap cursor-pointer"
          >
            <i className="ri-whatsapp-line text-lg" />
            Inscribirme por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}