import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background gradient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(59,130,246,0.25),rgba(15,23,42,0)_70%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 items-center gap-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-blue-200 backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            Now featuring Adaptive Audio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-5xl sm:text-6xl font-semibold tracking-tight text-white"
          >
            AirPods Pro
            <span className="block bg-gradient-to-r from-blue-300 via-white to-blue-300 bg-clip-text text-transparent">
              Noise canceled. Sound unleashed.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-blue-200/90 text-lg leading-relaxed max-w-xl"
          >
            Immerse yourself in rich, detailed audio with industry‑leading Active Noise Cancellation and a fit that feels like nothing at all.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href="#buy"
              className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-medium shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.18)] transition"
            >
              Buy now
            </a>
            <a
              href="#learn"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 backdrop-blur px-5 py-3 text-white hover:bg-white/10 transition"
            >
              Learn more
            </a>
          </motion.div>
        </div>

        {/* 3D Spline scene */}
        <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] rounded-3xl overflow-hidden border border-white/10 bg-slate-900/40">
          <Spline scene="https://prod.spline.design/4JFCLsE5jz72cZzw/scene.splinecode" style={{ width: '100%', height: '100%' }} />

          {/* Subtle top gradient so UI stays legible */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-900/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
