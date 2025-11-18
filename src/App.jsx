import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* subtle pattern */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(120%_80%_at_50%_-20%,rgba(59,130,246,0.15),transparent_60%)]" />

      <Navbar />

      <main className="relative">
        <Hero />
        <Features />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 text-center text-sm text-blue-200/70">
          Built for fans of great sound. This is a demo experience.
        </div>
      </footer>
    </div>
  )
}

export default App
