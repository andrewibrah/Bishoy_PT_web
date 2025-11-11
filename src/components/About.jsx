import { bioStats } from '../data/content.js';

function About() {
  return (
    <section id="about" className="bg-slate-950 px-4 py-24">
      <div className="mx-auto max-w-5xl space-y-10 rounded-3xl border border-white/5 bg-white/5 p-8 text-white">
        <div className="space-y-2 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300/70">About</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Meet Your Performance Partner</h2>
        </div>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
          <div className="flex flex-1 flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl font-bold">DB</div>
              <div>
                <h3 className="text-2xl font-semibold">Dr. Bishoy Maximous, DPT</h3>
                <p className="text-sm uppercase tracking-wide text-white/60">Sports Medicine Specialist</p>
              </div>
            </div>
            <p className="text-white/80">
              Dr. Bishoy isn't your typical physical therapist. With a relentless focus on athletic performance and evidence-based
              recovery protocols, he's helped hundreds of athletes return to competition faster and stronger than ever.
            </p>
            <p className="text-white/80">
              His approach combines cutting-edge sports medicine with real-world training application. By treating athletes in their
              actual training environment, rehab translates directly to performance gains.
            </p>
            <p className="text-white/80">
              Whether you're a competitive athlete recovering from surgery or a weekend warrior dealing with chronic pain, Dr. Bishoy
              provides the expertise and individualized attention you need to maximize your potential.
            </p>
          </div>
          <div className="grid flex-1 gap-6 rounded-2xl border border-white/5 bg-slate-950/40 p-8 sm:grid-cols-3">
            {bioStats.map(({ label, value }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-black text-cyan-200">{value}</div>
                <p className="mt-2 text-sm uppercase tracking-wide text-white/60">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
