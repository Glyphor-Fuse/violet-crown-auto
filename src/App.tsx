import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Zap, 
  Droplets, 
  Cpu, 
  Maximize2, 
  ChevronRight, 
  Menu, 
  X, 
  Instagram, 
  Twitter, 
  Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Philosophy', href: '#philosophy' },
    { name: 'Services', href: '#services' },
    { name: 'The Studio', href: '#studio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#E0E0E0] font-sans selection:bg-[#9D4EDD] selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#050505]/90 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-br from-[#9D4EDD] to-[#5A189A] flex items-center justify-center rounded-sm rotate-45 group-hover:rotate-90 transition-transform duration-500">
              <div className="w-4 h-4 border border-white/50 -rotate-45"></div>
            </div>
            <span className="text-xl font-bold tracking-[0.2em] uppercase text-white ml-2">Violet Crown</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-12">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xs uppercase tracking-[0.3em] hover:text-[#9D4EDD] transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(157,78,221,0.15),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-black/40"></div>
          {/* Mock image container with ultraviolet leak */}
          <div className="absolute top-0 right-0 w-2/3 h-full bg-[#111] opacity-50 skew-x-12 translate-x-32 border-l border-[#9D4EDD]/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#9D4EDD] text-sm font-bold tracking-[0.5em] uppercase mb-4">Austin, Texas</h2>
            <h1 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter mb-8 text-white">
              Kinetic <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#A0A0A0]">Sculpture.</span>
            </h1>
            <p className="max-w-md text-lg text-gray-400 mb-10 leading-relaxed">
              Where high-tech innovation merges with the relentless pursuit of tactile perfection. We treat the automobile as an art form.
            </p>
            <div className="flex gap-6">
              <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-[#9D4EDD] hover:text-white transition-all duration-300">
                Book Consultation
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:border-[#9D4EDD] transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="aspect-[4/5] bg-[#111] border border-white/5 relative overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1000" 
                alt="Automotive macro detail" 
                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              {/* Ultraviolet Leak */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#9D4EDD] to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-[#9D4EDD] pointer-events-none"></div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <span className="text-[10px] tracking-[0.4em] uppercase text-gray-500">Scroll Down</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#9D4EDD] to-transparent"></div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section id="philosophy" className="py-32 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h3 className="text-3xl font-bold tracking-tight text-white mb-6">The Unseen Detail</h3>
              <div className="w-12 h-1 bg-[#9D4EDD]"></div>
            </div>
            <div className="md:col-span-8">
              <p className="text-2xl md:text-3xl font-light text-gray-300 leading-snug">
                Our philosophy is rooted in the precision of the micro-scale. Every reflection tells a story of <span className="text-white font-medium italic">technical mastery</span>. We don't just clean; we recalibrate the visual frequency of your machine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-xs font-bold tracking-[0.6em] uppercase text-[#9D4EDD] mb-4">Precision Services</h2>
            <h3 className="text-4xl font-bold text-white tracking-tighter uppercase">Technological Restoration</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {[
              {
                title: 'Surface Optimization',
                desc: 'Multi-stage paint correction using proprietary ultraviolet inspection protocols.',
                icon: <Zap size={24} className="text-[#9D4EDD]" />,
                features: ['Level 3 Decontamination', 'Micro-Abrasive Leveling', 'Spectrophotometer Analysis']
              },
              {
                title: 'Molecular Shielding',
                desc: 'Nanotechnology-grade ceramic and self-healing film integration.',
                icon: <Shield size={24} className="text-[#9D4EDD]" />,
                features: ['Graphene Infusion', 'Edge-Wrap Precision', 'Infrared Curing']
              },
              {
                title: 'Interior Re-Sensing',
                desc: 'Restoration of tactile surfaces to factory-new bio-mechanical specifications.',
                icon: <Droplets size={24} className="text-[#9D4EDD]" />,
                features: ['Aniline Leather Feed', 'Alcantara Recovery', 'Static Extraction']
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-[#050505] p-12 group hover:bg-[#0A0A0A] transition-colors duration-500">
                <div className="mb-8">{service.icon}</div>
                <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">{service.title}</h4>
                <p className="text-gray-400 mb-8 leading-relaxed text-sm">
                  {service.desc}
                </p>
                <ul className="space-y-3 mb-12">
                  {service.features.map((f, i) => (
                    <li key={i} className="text-[10px] uppercase tracking-[0.2em] text-gray-500 flex items-center gap-2">
                      <div className="w-1 h-1 bg-[#9D4EDD]"></div> {f}
                    </li>
                  ))}
                </ul>
                <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] group-hover:text-[#9D4EDD] transition-colors">
                  Explore Tech <ChevronRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Macro Visualization */}
      <section className="h-[60vh] relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=2000" 
          alt="Technical metal surface" 
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-[#050505]/60 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-7xl md:text-9xl font-black text-white/5 tracking-tighter uppercase select-none">Obsidian</h2>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
              <h3 className="text-3xl font-bold text-white uppercase tracking-[0.4em]">The New Standard</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details Section */}
      <section id="studio" className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-xs font-bold tracking-[0.6em] uppercase text-gray-400 mb-4">The Studio</h2>
              <h3 className="text-5xl font-black tracking-tighter uppercase mb-8">Atmospheric <br />Control.</h3>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Our facility is a clean-room environment where temperature, humidity, and air filtration are monitored to ensure perfect bonding of aerospace-grade coatings.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold mb-1">0.5</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-400">Micron Air Filtration</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">21°C</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-400">Constant Temperature</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-black p-1">
                <div className="w-full h-full border border-white/20 flex items-center justify-center">
                  <Cpu size={120} className="text-white/10" />
                </div>
              </div>
              <div className="absolute -top-10 -right-10 bg-[#9D4EDD] p-8 text-white hidden md:block">
                <Maximize2 size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#050505] border-t border-white/5 pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-6 h-6 bg-[#9D4EDD] rotate-45 flex items-center justify-center">
                   <div className="w-2 h-2 border border-white/50"></div>
                </div>
                <span className="text-xl font-bold tracking-[0.2em] uppercase text-white">Violet Crown</span>
              </div>
              <p className="text-gray-500 max-w-sm mb-8">
                Redefining the relationship between the machine and its observer. Austin's premier luxury aesthetics studio.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-[#9D4EDD] transition-colors cursor-pointer">
                  <Instagram size={18} />
                </div>
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-[#9D4EDD] transition-colors cursor-pointer">
                  <Twitter size={18} />
                </div>
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-[#9D4EDD] transition-colors cursor-pointer">
                  <Layers size={18} />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white mb-8">The Studio</h4>
              <address className="not-italic text-sm text-gray-500 space-y-2">
                <p>1200 Industrial Blvd</p>
                <p>Austin, TX 78704</p>
                <p className="pt-4 text-white">studio@violetcrown.auto</p>
                <p>+1 (512) 555-0192</p>
              </address>
            </div>

            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white mb-8">Journal</h4>
              <p className="text-sm text-gray-500 mb-6">Receive insights into our technical process and material science.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="bg-transparent border-b border-white/20 py-2 text-xs focus:outline-none focus:border-[#9D4EDD] flex-grow"
                />
                <button className="px-4 border-b border-white/20 hover:text-[#9D4EDD]">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 text-[10px] tracking-[0.3em] text-gray-600 uppercase">
            <p>&copy; 2024 Violet Crown Auto. All Rights Reserved.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-black uppercase tracking-tighter mb-8 hover:text-[#9D4EDD]"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
