import { testimonials } from '../data/content.js';

function Testimonials() {
  return (
    <section id="testimonials" className="bg-gradient-to-b from-slate-950 to-slate-900 px-4 py-24">
      <div className="mx-auto max-w-6xl text-white">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300/70">Results</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Results That Speak</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {testimonials.map(({ author, issue, result }) => (
            <div key={author} className="rounded-3xl border border-white/5 bg-white/5 p-8">
              <p className="text-sm uppercase tracking-wide text-white/60">{author}</p>
              <p className="mt-2 text-lg font-semibold text-white">Issue: {issue}</p>
              <p className="mt-4 text-white/90">“{result}”</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href="https://www.instagram.com/maximized_pt_sportsrehab/"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            See More Results on Instagram →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
