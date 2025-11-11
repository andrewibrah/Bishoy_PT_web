function Booking() {
  return (
    <section id="booking" className="bg-gradient-to-br from-cyan-500/20 via-slate-950 to-slate-900 px-4 py-24">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/5 bg-slate-950/70 p-10 text-center text-white">
        <div className="flex justify-center">
          <div className="loader-ring" aria-hidden />
        </div>
        <h2 className="mt-8 text-3xl font-bold sm:text-4xl">Ready to Maximize Your Potential?</h2>
        <p className="mt-4 text-lg text-white/70">
          Stop settling for average results. Get the elite, individualized care you deserve.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://maximizedphysicaltherapysportsrehab.square.site/"
            target="_blank"
            rel="noreferrer"
            className="btn-gradient"
          >
            Book Online Now
          </a>
          <a href="sms:646-240-5299" className="btn-secondary">
            Text: 646-240-5299
          </a>
        </div>
        <p className="urgency-badge">⚠️ Limited availability - 1-on-1 sessions only</p>
      </div>
    </section>
  );
}

export default Booking;
