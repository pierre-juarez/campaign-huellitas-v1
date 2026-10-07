import Reveal from '@/components/feature/Reveal';
import { included } from '@/pages/home/campaignData';

export default function WhatsIncluded() {
  return (
    <section id="incluye" className="scroll-mt-24 py-16 md:py-24 bg-primary-950">
      <div className="w-full px-4 md:px-8 max-w-6xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-accent-400 uppercase tracking-wider">
            Qué incluye
          </span>
          <h2 className="mt-3 font-heading font-extrabold text-2xl md:text-4xl text-background-50">
            Tu mascota estará acompañada durante el proceso
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {included.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <div className="h-full bg-background-50/5 border border-background-50/15 rounded-2xl p-6">
                <span className="w-12 h-12 rounded-full bg-accent-500 text-accent-950 flex items-center justify-center">
                  <i className={`${item.icon} text-2xl`} />
                </span>
                <h3 className="mt-5 font-heading font-semibold text-lg text-background-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-background-50/70">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}