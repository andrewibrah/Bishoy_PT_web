import { advantages } from '../data/content.js';

function Advantage() {
  return (
    <section id="advantage" className="bg-gradient-to-b from-slate-950 to-slate-900 px-4 py-24">
      <div className="mx-auto max-w-5xl space-y-8 text-center text-white">
        <h2 className="text-3xl font-bold sm:text-4xl">Train Where You Rehab. Rehab Where You Train.</h2>
        <p className="text-lg text-white/70">
          Treatment at Rare Breed Compound gym means your rehab happens in your training environment. No more wasting time
          traveling between PT clinics and the gym.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {advantages.map(({ icon, text }) => (
            <div key={text} className="rounded-2xl border border-white/5 bg-white/5 p-6">
              <div className="text-3xl">{icon}</div>
              <p className="mt-4 text-lg font-semibold">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Advantage;
