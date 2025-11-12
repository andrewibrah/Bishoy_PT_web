import { heroFlipWords } from '../data/content.js';
import ContactActions from './ContactActions.jsx';

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 pt-28 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(31,184,205,0.15),_transparent_60%)]" aria-hidden />
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300/70">NYC Sports Rehab</p>
        </div>
        <div className="mb-6 space-y-2">
          <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            MAXIMIZE YOUR
          </h1>
          <div className="flip-container">
            <div className="flip-words">
              {heroFlipWords.map((word) => (
                <div key={word} className="flip-word">
                  {word}
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="mb-8 max-w-2xl text-lg text-white/70">
          Elite 1-on-1 Physical Therapy for serious athletes in NYC. Evidence-based protocols blended with real-world
          performance coaching.
        </p>
        <ContactActions showText={false} className="mt-0" />
        <p className="mt-6 text-sm font-semibold text-white/70">⚡ Most athletes see results within 2 weeks</p>
      </div>
    </section>
  );
}

export default Hero;
