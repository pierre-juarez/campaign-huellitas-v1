export default function LimitedSpotsBanner() {
  return (
    <section className="w-full px-4 md:px-8 max-w-6xl mx-auto">
      <div className="relative overflow-hidden bg-primary-600 rounded-2xl px-6 py-8 md:px-12 md:py-10">
        <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-accent-500/30 blur-2xl" />
        <div className="absolute -left-8 -bottom-12 w-36 h-36 rounded-full bg-accent-400/20 blur-2xl" />
        <div className="relative flex flex-col md:flex-row items-center md:items-center justify-between gap-5 text-center md:text-left">
          <div className="flex items-center gap-3">
            <span className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent-500 text-accent-950 flex items-center justify-center flex-shrink-0">
              <i className="ri-alarm-warning-line text-2xl md:text-3xl" />
            </span>
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-background-50">
              🐾 CUPOS LIMITADOS
            </h2>
          </div>
          <p className="text-background-50/90 text-sm md:text-base font-medium max-w-md">
            Reserva con anticipación para asegurar el cupo de tu mascota.
          </p>
        </div>
      </div>
    </section>
  );
}