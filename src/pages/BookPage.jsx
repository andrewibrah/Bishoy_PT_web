import Booking from '../components/Booking.jsx';
import ContactActions from '../components/ContactActions.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { useDocumentMeta } from '../hooks/useDocumentMeta.js';

function BookPage() {
  useDocumentMeta({
    title: 'Book / Contact | Maximized PT',
    description: 'Secure a 1-on-1 session with Dr. Bishoy Maximous or text 646-240-5299 to confirm next availability.',
  });

  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Book / Contact' },
  ];

  return (
    <>
      <section className="bg-slate-950 px-4 py-16">
        <div className="mx-auto max-w-4xl space-y-6">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300/80">Book</p>
          <h1 className="text-4xl font-black text-white">Ready to Maximize Your Potential?</h1>
          <p className="text-lg text-white/70">
            Book online, text the studio, or call directly. This page is the fastest path to get your session confirmed.
          </p>
        </div>
      </section>
      <Booking />
    </>
  );
}

export default BookPage;
