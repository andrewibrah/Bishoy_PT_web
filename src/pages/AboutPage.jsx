import About from '../components/About.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import ContactActions from '../components/ContactActions.jsx';
import { useDocumentMeta } from '../hooks/useDocumentMeta.js';

function AboutPage() {
  useDocumentMeta({
    title: 'Meet Dr. Bishoy | Maximized PT',
    description:
      'Dr. Bishoy Maximous blends sports medicine with performance coaching to keep NYC athletes progressing every week.',
  });

  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Meet Dr. Bishoy' },
  ];

  return (
    <>
      <section className="bg-slate-950 px-4 py-16">
        <div className="mx-auto max-w-5xl space-y-6">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300/80">Who you work with</p>
          <h1 className="text-4xl font-black text-white">Meet Your Performance Partner</h1>
          <p className="text-lg text-white/70">
            No junior handoffs. Every assessment, manual treatment, and performance progression comes directly from Dr.
            Bishoy.
          </p>
        </div>
      </section>
      <About />
      <section className="bg-slate-950 px-4 pb-16">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-8">
          <div>
            <h2 className="text-2xl font-semibold text-white">Ready for proof?</h2>
            <p className="mt-2 text-white/70">
              Head to the Proof &amp; FAQ page to see how other NYC athletes solved the exact issues you are facing now.
            </p>
          </div>
          <ContactActions explore={{ to: '/proof', label: 'Proof & FAQ' }} className="justify-start" />
        </div>
      </section>
    </>
  );
}

export default AboutPage;
