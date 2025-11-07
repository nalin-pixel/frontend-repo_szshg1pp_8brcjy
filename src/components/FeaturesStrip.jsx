import React from 'react';
import { HeartPulse, ShieldCheck, Cpu } from 'lucide-react';

const features = [
  {
    icon: HeartPulse,
    title: 'Klinis Real-time',
    desc: 'Integrasi rekam medis terkini untuk keputusan cepat dan akurat.'
  },
  {
    icon: ShieldCheck,
    title: 'Keamanan Kelas Enterprise',
    desc: 'Enkripsi end-to-end, audit trail, dan kontrol akses berbasis peran.'
  },
  {
    icon: Cpu,
    title: 'AI Assisted',
    desc: 'Insight prediktif dan rekomendasi berbasis data kesehatan.'
  }
];

const FeaturesStrip = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((f, i) => (
          <div
            key={i}
            className="group rounded-2xl border border-slate-800/60 bg-slate-900/60 p-6 backdrop-blur-xl transition hover:border-sky-600/40 hover:bg-slate-900/80"
          >
            <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 p-3 text-white shadow">
              <f.icon size={20} />
            </div>
            <h4 className="mb-1 text-lg font-semibold text-white">{f.title}</h4>
            <p className="text-slate-400 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesStrip;
