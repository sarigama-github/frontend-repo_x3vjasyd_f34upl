import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-white"></div>
          <span className="text-white/90 font-medium tracking-tight">AirPods Pro</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-blue-100/80">
          <a href="#learn" className="hover:text-white transition">Features</a>
          <a href="#buy" className="hover:text-white transition">Buy</a>
          <a href="#" className="hover:text-white transition">Support</a>
        </nav>

        <button className="md:hidden text-white/80 hover:text-white">
          <Menu />
        </button>
      </div>
    </header>
  );
}
