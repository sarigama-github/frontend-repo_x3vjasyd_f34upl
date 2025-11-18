import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="buy" className="relative py-16">
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-10 backdrop-blur"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-white">Upgrade your everyday</h3>
          <p className="mt-3 text-blue-200/90">Free engraving. Free delivery. 14‑day returns.</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <button className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-medium shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.18)] transition">
              Add to Bag — $249
            </button>
            <button className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 backdrop-blur px-5 py-3 text-white hover:bg-white/10 transition">
              Compare models
            </button>
          </div>
        </motion.div>
      </div>

      {/* soft bottom gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  );
}
