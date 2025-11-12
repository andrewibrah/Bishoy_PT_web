import { Link } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import ContactActions from '../components/ContactActions.jsx';
import { useDocumentMeta } from '../hooks/useDocumentMeta.js';

const highlightCards = [
  {
    eyebrow: 'Programs',
    title: 'Performance PT & Rehab',
    copy: 'Explore sport-specific rehab, performance optimization, and movement assessments built for serious athletes.',
    to: '/services',
  },
  {
    eyebrow: 'Experience',
    title: 'In-Gym Advantage',
    copy: 'See how in-environment treatments at Rare Breed Compound keep you training while you recover.',
    to: '/advantage',
  },
  {
    eyebrow: 'Proof',
    title: 'Real Athlete Results',
    copy: 'Read the success stories and FAQs that set expectations for your first four weeks with Maximized PT.',
    to: '/proof',
  },
];

function Home() {
  useDocumentMeta({
    title: 'Maximized PT | Elite Sports Rehab in NYC',
    description:
      'Book 1-on-1 physical therapy with Dr. Bishoy Maximous. NYC sports rehab that keeps you training while you recover.',
  });

  return (
    <>
      <Hero />
      <section className="bg-slate-950 px-4 py-16">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="grid gap-6 md:grid-cols-3">
            {highlightCards.map((card) => (
              <article
                key={card.title}
                className="flex flex-col rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300/80">{card.eyebrow}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 flex-1 text-white/70">{card.copy}</p>
                <Link to={card.to} className="mt-6 inline-flex items-center gap-2 font-semibold text-cyan-300">
                  Explore →
                </Link>
              </article>
            ))}
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center">
            <p className="text-lg text-white/70">
              Ready when you are. Choose the path that matches your next best move and we will take it from there.
            </p>
            <ContactActions className="mt-8" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
