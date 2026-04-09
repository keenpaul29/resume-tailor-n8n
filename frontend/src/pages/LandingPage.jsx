import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const NeuralTerminal = () => {
  const [logs, setLogs] = useState([
    { id: 1, text: "INITIATING_NEURAL_HANDSHAKE...", type: "system" },
    { id: 2, text: "CONNECTING_N8N_WORKFLOW_v3.2", type: "success" },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      const messages = [
        "PARSING_PDF_BITSTREAM",
        "EXTRACTING_SEMANTIC_NODES",
        "OPTIMIZING_KEYWORD_DENSITY",
        "GENERATING_AI_DELTA_REPORT",
        "SYNCING_RESUME_INTEL_VAULT",
        "HANDSHAKE_READY // AWAITING_INPUT"
      ];
      const randomMsg = messages[Math.floor(Math.random() * messages.length)];
      setLogs(prev => [...prev.slice(-4), { id: Date.now(), text: randomMsg, type: "process" }]);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full bg-surface-container relative overflow-hidden group">
      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#060e20_70%)] opacity-40 z-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(167,165,255,0.05)_1px,_transparent_1px),_linear-gradient(90deg,rgba(167,165,255,0.05)_1px,_transparent_1px)] bg-[size:40px_40px] z-0"></div>

      <div className="relative z-20 p-8 h-full flex flex-col">
        {/* Terminal Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-outline-variant/20">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary animate-pulse">terminal</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-on-surface-variant">extraction.intelligence.node</span>
          </div>
          <div className="flex gap-1.5">
            {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 bg-outline-variant/30"></div>)}
          </div>
        </div>

        {/* Live Stream */}
        <div className="flex-1 font-mono text-[11px] space-y-3">
          <AnimatePresence mode="popLayout">
            {logs.map((log) => (
              <motion.div
                key={log.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex gap-3"
              >
                <span className="text-secondary/40">[{new Date().toLocaleTimeString([], {hour12: false, hour: '2-digit', minute:'2-digit', second:'2-digit'})}]</span>
                <span className={
                  log.type === 'success' ? 'text-secondary' : 
                  log.type === 'system' ? 'text-primary' : 'text-on-surface-variant'
                }>{log.text}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Neural Visualizer */}
        <div className="mt-8 h-24 relative overflow-hidden bg-surface-container-low">
          <div className="absolute inset-0 flex items-end justify-around px-4">
            {[...Array(24)].map((_, i) => {
              // Extract logic out to be deterministic based on index or stable across renders
              const targetHeight = (Math.sin(i) + 1) * 40 + 10;
              return (
                <motion.div
                  key={i}
                  animate={{ height: [20, targetHeight, 20] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.05 }}
                  className="w-1 bg-primary/20"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const LandingPage = () => {
  return (
    <div className="px-6 max-w-7xl mx-auto space-y-24 pb-20 overflow-x-hidden">
      {/* Hero Section: The Precision Architect Layout */}
      <section className="relative pt-12 md:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.85fr] gap-16 lg:gap-24 items-start">
          
          {/* Hero Content (35%) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-4 bg-primary/10 px-4 py-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary">System: Intel.Active</span>
              </div>
              <h1 className="font-headline text-7xl md:text-9xl font-bold tracking-[-0.04em] uppercase leading-[0.82]">
                Architect <br/>
                <span className="text-secondary select-none">Your</span> <br/>
                Future
              </h1>
            </div>
            
            <p className="max-w-md font-body text-on-surface-variant leading-relaxed text-xl border-l border-primary/30 pl-8">
              We reject generic resumes. Our neural engine deconstructs job descriptions to rebuild your profile with <span className="text-secondary font-bold italic underline underline-offset-4">clinical precision</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-0 pt-4">
              <Link to="/upload" className="bg-[linear-gradient(135deg,#a7a5ff_0%,#645efb_100%)] text-on-primary px-10 py-6 font-headline font-bold uppercase tracking-widest text-sm flex items-center justify-between group shadow-[0_15px_60px_-15px_rgba(167,165,255,0.4)] hover:scale-[1.02] active:scale-95 transition-all">
                <span>Initiate Handshake</span>
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">bolt</span>
              </Link>
              <button className="border-t lg:border-t-0 lg:border-l border-outline-variant/30 px-10 py-6 font-headline font-bold uppercase tracking-widest text-sm text-on-surface hover:bg-surface-container transition-all">
                Architecture_v2
              </button>
            </div>
          </motion.div>

          {/* Hero Visual: Neural Extraction Terminal (65%) */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative aspect-[16/9] lg:aspect-auto lg:h-[700px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"
          >
            <div className="absolute -inset-4 bg-primary/20 blur-[100px] rounded-full z-0 opacity-30"></div>
            <NeuralTerminal />
            
            {/* Floating Metric Overlays */}
            <div className="absolute top-12 -left-12 p-6 bg-surface-container-highest border-l-4 border-secondary z-30 hidden md:block">
              <p className="font-mono text-[9px] text-secondary mb-1 uppercase tracking-widest">Efficiency_Score</p>
              <p className="font-headline font-bold text-3xl tabular-nums tracking-tighter">99.8%</p>
            </div>
            
            <div className="absolute bottom-24 -right-8 p-6 bg-surface-container-highest border-r-4 border-primary z-30 hidden md:block">
              <p className="font-mono text-[9px] text-primary mb-1 uppercase tracking-widest">Processing_Load</p>
              <p className="font-headline font-bold text-3xl tabular-nums tracking-tighter">1.2ms</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logic Blocks Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-outline-variant/20 border border-outline-variant/20">
        {[
          { title: 'Neural Extraction', description: 'Parse complex PDF structures into structured JSON logic with 99.8% accuracy.', icon: 'data_exploration' },
          { title: 'Keyword Injection', description: 'Algorithmically match job requirements with your experience through semantic layering.', icon: 'center_focus_strong' },
          { title: 'Vault Storage', description: 'Encrypted storage for all historically tailored iterations on our secure cloud nodes.', icon: 'encrypted' }
        ].map((item, i) => (
          <div key={i} className="bg-surface-container p-12 space-y-8 hover:bg-surface-container-high transition-colors group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-0 bg-secondary group-hover:h-full transition-all duration-500"></div>
            <span className="material-symbols-outlined text-primary text-5xl group-hover:scale-110 group-hover:text-secondary transition-all">{item.icon}</span>
            <div className="space-y-4">
              <h3 className="font-headline font-bold text-2xl uppercase tracking-tighter">{item.title}</h3>
              <p className="font-body text-base text-on-surface-variant leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Final Call to Action */}
      <section className="py-32 text-center space-y-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full -z-10"></div>
        <h2 className="font-headline text-6xl md:text-8xl font-bold uppercase tracking-tight max-w-5xl mx-auto leading-[0.9]">
          The Profession <br/><span className="text-secondary italic">Requires</span> Evolution.
        </h2>
        <div className="flex justify-center flex-col sm:flex-row gap-0 max-w-xl mx-auto">
           <Link to="/upload" className="bg-primary text-on-primary px-16 py-8 font-headline font-bold uppercase tracking-widest text-sm shadow-[0_20px_50px_-10px_rgba(167,165,255,0.5)] hover:-translate-y-2 transition-all active:scale-95">
             Evolve Now
           </Link>
           <Link to="/upload" className="border border-primary/20 text-on-surface px-16 py-8 font-headline font-bold uppercase tracking-widest text-sm hover:bg-surface-container transition-all">
             Documentation
           </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
