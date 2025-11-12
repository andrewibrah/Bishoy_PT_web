import { Link } from 'react-router-dom';
import Services from '../components/Services.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { useDocumentMeta } from '../hooks/useDocumentMeta.js';

function ServicesPage() {
  useDocumentMeta({
    title: 'Programs & Services | Maximized PT',
    description: 'Sports injury rehab, performance optimization, and movement assessments tailored to NYC athletes.',
  });

  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Programs & Services' },
  ];

  return (
    <>
      <section className="bg-slate-950 px-4 py-16">
        <div className="mx-auto max-w-5xl space-y-6">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300/80">Programs</p>
          <h1 className="text-4xl font-black text-white">Performance-Focused Treatment</h1>
          <p className="text-lg text-white/70">
            Every plan is built around your competition calendar. Click through the cards to see how we treat, load, and
            reintroduce athletes to training without losing progress.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-white/60">
            <span className="rounded-full border border-white/20 px-4 py-2">1-on-1 | 60 min</span>
            <span className="rounded-full border border-white/20 px-4 py-2">Gym-based</span>
            <span className="rounded-full border border-white/20 px-4 py-2">Evidence-backed</span>
          </div>
        </div>
      </section>
      <Services />
      <section className="bg-slate-950 px-4 pb-16">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-8">
          <div>
            <h2 className="text-2xl font-semibold text-white">See it in action</h2>
            <p className="mt-2 text-white/70">
              Want to understand how in-training corrections feel? Preview the in-gym advantage next so you know what to
              expect on day one.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/advantage" className="btn-secondary">
              Explore In-Gym Advantage
            </Link>
            <a href="https://maximizedphysicaltherapysportsrehab.square.site/" target="_blank" rel="noreferrer" className="btn-gradient">
              Book Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
