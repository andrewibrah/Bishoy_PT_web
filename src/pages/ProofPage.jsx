import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials.jsx';
import FAQ from '../components/FAQ.jsx';
import ContactActions from '../components/ContactActions.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { testimonials, faqs } from '../data/content.js';
import { useDocumentMeta } from '../hooks/useDocumentMeta.js';

function ProofPage() {
  const structuredData = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'CollectionPage',
          name: 'Athlete Proof',
          description: 'Testimonials from Maximized PT athletes in NYC.',
          review: testimonials.map((testimonial) => ({
            '@type': 'Review',
            author: testimonial.author,
            reviewBody: testimonial.result,
            about: testimonial.issue,
          })),
        },
        {
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        },
      ],
    }),
    [],
  );

  useDocumentMeta({
    title: 'Proof & FAQ | Maximized PT',
    description: 'See athlete testimonials and detailed FAQs before you book your first session.',
    structuredData,
  });

  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Proof & FAQ' },
  ];

  return (
    <>
      <section className="bg-slate-950 px-4 py-16">
        <div className="mx-auto max-w-5xl space-y-6">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300/80">Proof</p>
          <h1 className="text-4xl font-black text-white">Results That Speak + FAQs</h1>
          <p className="text-lg text-white/70">
            Learn from other NYC athletes who had the same injuries and see exactly how we’ll guide your first four
            weeks.
          </p>
        </div>
      </section>
      <Testimonials />
      <FAQ />
      <section className="bg-slate-950 px-4 pb-16">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-8">
          <div>
            <h2 className="text-2xl font-semibold text-white">Ready to make a move?</h2>
            <p className="mt-2 text-white/70">
              Book your evaluation or text us questions. You can also loop back to Programs if you need a refresher.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/services" className="btn-secondary">
              Back to Programs
            </Link>
            <Link to="/book" className="btn-gradient">
              Book / Contact
            </Link>
          </div>
        </div>
        <ContactActions className="mt-12" layout="column" />
      </section>
    </>
  );
}

export default ProofPage;
