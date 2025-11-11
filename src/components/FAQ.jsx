import { useState } from 'react';
import { faqs } from '../data/content.js';

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-white/5 bg-white/5">
      <button
        className="flex w-full items-center justify-between gap-4 p-5 text-left text-lg font-semibold text-white"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        {question}
        <span className="text-2xl text-cyan-200">{open ? '–' : '+'}</span>
      </button>
      {open && <p className="px-5 pb-6 text-white/80">{answer}</p>}
    </div>
  );
}

function FAQ() {
  return (
    <section id="faq" className="bg-slate-950 px-4 py-24">
      <div className="mx-auto max-w-4xl text-white">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300/70">FAQ</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Your Questions Answered</h2>
        </div>
        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
