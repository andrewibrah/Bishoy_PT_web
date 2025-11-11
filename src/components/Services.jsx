import { useState } from 'react';
import { services } from '../data/content.js';

function ServiceCard({ icon, title, benefit, description }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flip-card rounded-2xl border border-white/5 bg-white/5 p-6 transition hover:border-cyan-400/60 ${
        flipped ? 'flipped' : ''
      }`}
      onClick={() => setFlipped((prev) => !prev)}
      onKeyDown={(event) => event.key === 'Enter' && setFlipped((prev) => !prev)}
      role="button"
      tabIndex={0}
      aria-label={`${title} details`}
    >
      <div className="flip-card-inner min-h-[280px]">
        <div className="flip-card-front">
          <div className="text-4xl">{icon}</div>
          <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
          <p className="mt-3 text-lg text-cyan-200/80">{benefit}</p>
          <p className="mt-4 text-sm text-white/60">Click to learn more →</p>
        </div>
        <div className="flip-card-back">
          <h3 className="mb-3 text-2xl font-semibold text-cyan-200">{title}</h3>
          <p className="text-white/80">{description}</p>
          <p className="mt-4 text-sm text-white/60">← Click to flip back</p>
        </div>
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="bg-slate-950 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">Performance-Focused Treatment</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
