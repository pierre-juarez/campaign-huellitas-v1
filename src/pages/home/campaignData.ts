export const LOGO_URL =
  'https://static.readdy.ai/image/47fbd2c01975ccc372350b536287a0f3/31184f4d8fd2a306176f379eaa8de622.jpeg';

export const ORG_NAME = 'Huellitas de Esperanza';
export const ORG_SUBTITLE = 'Protección y Defensa Animal';

export const WHATSAPP_NUMBER_DISPLAY = '949 530 395';
export const WHATSAPP_URL =
  'https://wa.me/51949530395?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20la%20campa%C3%B1a%20de%20esterilizaci%C3%B3n%20del%201%20de%20noviembre.%20Deseo%20inscribir%20a%20mi%20mascota.';

export const CAMPAIGN_DATE = '1 de noviembre';
export const PRICE_DOGS = 'S/ 80';
export const PRICE_CATS = 'S/ 70';
export const VENUE_NAME = 'I.E. 10058 – Medalla Milagrosa';
export const VENUE_ACCESS = 'Ingreso por la puerta de la calle Santa Rosa';

export const MAPS_EMBED_URL =
  'https://maps.google.com/maps?q=I.E.%2010058%20Medalla%20Milagrosa%20Santa%20Rosa&t=&z=15&ie=UTF8&iwloc=&output=embed';
export const MAPS_DIRECTIONS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=I.E.+10058+Medalla+Milagrosa+Santa+Rosa';

export const navLinks = [
  { label: 'La campaña', href: '#campana' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Requisitos', href: '#requisitos' },
  { label: 'Ubicación', href: '#ubicacion' },
];

export const infoCards = [
  {
    icon: 'ri-calendar-2-line',
    label: 'Fecha',
    value: CAMPAIGN_DATE,
    highlight: true,
  },
  {
    icon: 'ri-map-pin-2-line',
    label: 'Lugar',
    value: VENUE_NAME,
    note: VENUE_ACCESS,
    highlight: false,
  },
  {
    icon: 'ri-heart-pulse-line',
    label: 'Perros',
    value: PRICE_DOGS,
    note: 'Tarifa por mascota',
    highlight: true,
  },
  {
    icon: 'ri-heart-3-line',
    label: 'Gatos',
    value: PRICE_CATS,
    note: 'Tarifa por mascota',
    highlight: true,
  },
];

export const benefits = [
  {
    icon: 'ri-group-line',
    title: 'Menos sobrepoblación',
    text: 'Ayuda a controlar la sobrepoblación animal en nuestra comunidad de forma responsable.',
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Sin camadas no deseadas',
    text: 'Reduce el riesgo de camadas no deseadas y de nacimientos sin un hogar que los reciba.',
  },
  {
    icon: 'ri-heart-pulse-line',
    title: 'Más salud y bienestar',
    text: 'Contribuye al bienestar y la salud de tu mascota, con una mejor calidad de vida.',
  },
  {
    icon: 'ri-emotion-happy-line',
    title: 'Mejor comportamiento',
    text: 'Puede disminuir ciertos comportamientos relacionados con la reproducción.',
  },
  {
    icon: 'ri-home-heart-line',
    title: 'Menos abandono',
    text: 'Ayuda a prevenir el abandono de animales y a construir una comunidad más consciente.',
  },
];

export const requirements = [
  { icon: 'ri-calendar-line', text: 'Edad: mayor de 6 meses y menor de 7 años.' },
  { icon: 'ri-scales-3-line', text: 'Peso máximo: 20 kg.' },
  { icon: 'ri-time-line', text: 'La mascota debe acudir con 8 horas de ayuno.' },
  { icon: 'ri-forbid-2-line', text: 'No debe estar en celo ni haber parido recientemente.' },
  { icon: 'ri-links-line', text: 'Los perros deben acudir con correa y bozal.' },
  { icon: 'ri-archive-2-line', text: 'Los gatos deben acudir en transportador.' },
  { icon: 'ri-id-card-line', text: 'Llevar copia del DNI del dueño.' },
  { icon: 'ri-temp-cold-line', text: 'Llevar una manta para la mascota.' },
  { icon: 'ri-file-text-line', text: 'Firmar el compromiso de esterilización.' },
];

export const included = [
  {
    icon: 'ri-first-aid-kit-line',
    title: 'Procedimiento de esterilización',
    text: 'La cirugía realizada por el equipo durante la campaña.',
  },
  {
    icon: 'ri-user-heart-line',
    title: 'Atención durante la campaña',
    text: 'Acompañamiento a tu mascota a lo largo de todo el proceso.',
  },
  {
    icon: 'ri-medicine-bottle-line',
    title: 'Medicamentos de postoperatorio',
    text: 'Incluye los medicamentos necesarios para la recuperación.',
  },
];