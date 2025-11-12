import { Link } from 'react-router-dom';
import Advantage from '../components/Advantage.jsx';
import ContactActions from '../components/ContactActions.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { useDocumentMeta } from '../hooks/useDocumentMeta.js';

function AdvantagePage() {
  useDocumentMeta({
    title: 'In-Gym Advantage | Maximized PT',
    description: 'Rehab where you train. Sessions run inside Rare Breed Compound for real-time movement corrections.',
  });

  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Programs & Services', to: '/services' },
    { label: 'In-Gym Advantage' },
  ];

  return (
    <>
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 px-4 py-16">
        <div className="mx-auto max-w-5xl space-y-6">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300/80">Environment</p>
          <h1 className="text-4xl font-black text-white">Rehab Where You Train</h1>
          <p className="text-lg text-white/70">
            We meet you on the training floor so mechanical corrections, loading strategies, and cueing happen under the
            same barbell you’ll compete with.
          </p>
        </div>
      </section>
      <Advantage />
      <section className="bg-slate-950 px-4 pb-16">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-8">
          <div>
            <h2 className="text-2xl font-semibold text-white">Next step</h2>
            <p className="mt-2 text-white/70">
              Learn who is guiding you through every rep. Meet Dr. Bishoy, his stats, and why athletes stay with the
              program long after the pain fades.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/about" className="btn-secondary">
              Meet Dr. Bishoy
            </Link>
            <Link to="/book" className="btn-gradient">
              Book Your Session
            </Link>
          </div>
        </div>
        <ContactActions className="mt-12" />
      </section>
    </>
  );
}

export default AdvantagePage;
