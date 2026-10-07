import Reveal from '@/components/feature/Reveal';
import { benefits } from '@/pages/home/campaignData';

export default function WhySterilize() {
  return (
    <section id="beneficios" className="scroll-mt-24 py-16 md:py-24 bg-background-100">
      <div className="w-full px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <Reveal className="lg:col-span-5">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
              Educación y cuidado
            </span>
            <h2 className="mt-3 font-heading font-extrabold text-2xl md:text-4xl text-foreground-950">
              ¿Por qué esterilizar?
            </h2>
            <p className="mt-4 text-foreground-700">
              La esterilización es un acto de cuidado y responsabilidad que beneficia a tu mascota
              y a toda la comunidad.
            </p>

            <div className="mt-8 w-full h-[260px] md:h-[320px] rounded-2xl overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=Caring%20veterinarian%20in%20light%20green%20scrubs%20gently%20cuddling%20a%20small%20dog%20and%20a%20cat%20inside%20a%20bright%20modern%20clinic%2C%20soft%20natural%20window%20light%2C%20warm%20and%20reassuring%20atmosphere%2C%20subtle%20green%20interior%20accents%2C%20professional%20editorial%20pet%20healthcare%20photography%2C%20shallow%20depth%20of%20field&width=900&height=800&seq=huellitas-why-01&orientation=landscape"
                alt="Veterinario cuidando a un perro y un gato"
                title="Beneficios de la esterilización de mascotas"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <Reveal
                key={benefit.title}
                delay={index * 70}
                className={index === benefits.length - 1 ? 'sm:col-span-2' : ''}
              >
                <div className="h-full bg-background-50 border border-background-200 rounded-2xl p-5 flex gap-4">
                  <span className="w-11 h-11 rounded-lg bg-accent-100 text-accent-800 flex items-center justify-center flex-shrink-0">
                    <i className={`${benefit.icon} text-xl`} />
                  </span>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground-950">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-sm text-foreground-600">{benefit.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}