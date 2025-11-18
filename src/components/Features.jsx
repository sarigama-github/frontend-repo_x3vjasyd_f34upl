import { Check, Battery, Waves, Mic2 } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Waves,
    title: 'Active Noise Cancellation',
    text: 'Block out the world with adaptive ANC that intelligently tunes to your environment.'
  },
  {
    icon: Mic2,
    title: 'Transparency Mode',
    text: 'Hear what matters with natural sound passthrough when you need to stay aware.'
  },
  {
    icon: Battery,
    title: 'All‑day Battery',
    text: 'Up to 30 hours of total listening time with the MagSafe Charging Case.'
  },
  {
    icon: Check,
    title: 'Personalized Fit',
    text: 'Four ear tip sizes and in‑ear detection for comfort that lasts.'
  }
];

export default function Features() {
  return (
    <section id="learn" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_20%,rgba(59,130,246,0.15),rgba(15,23,42,0)_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold text-white text-center"
        >
          Everything you hear. Nothing you don’t.
        </motion.h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition"
            >
              <Icon className="h-6 w-6 text-blue-300" />
              <h3 className="mt-4 text-white font-medium">{title}</h3>
              <p className="mt-2 text-blue-200/80 text-sm leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
