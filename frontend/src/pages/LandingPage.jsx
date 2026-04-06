import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="px-6 max-w-7xl mx-auto space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative pt-12 md:pt-20">
        <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-8 bg-primary"></span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary animate-pulse">SYSTEM_ACTIVE // V2.04</span>
              </div>
              <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85]">
                Tailor <br/>
                <span className="text-secondary select-none">Resumes</span> <br/>
                With AI
              </h1>
            </div>
            
            <p className="max-w-md font-body text-on-surface-variant leading-relaxed text-lg">
              Automate the optimization of your professional profile. Our neural network processes resumes against job descriptions to maximize ATS compatibility.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/upload" className="bg-secondary text-on-secondary px-8 py-5 font-headline font-bold uppercase tracking-widest text-sm flex items-center justify-between group shadow-[0_10px_40px_-10px_rgba(191,243,101,0.3)] hover:scale-105 active:scale-95 transition-all">
                <span>Access Terminal</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <button className="border-2 border-outline-variant px-8 py-5 font-headline font-bold uppercase tracking-widest text-sm text-on-surface hover:bg-surface-container transition-all">
                View Architecture
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 w-full max-w-xl aspect-square relative"
          >
            {/* Visual Asset 01: The Gear/Circuit */}
            <div className="absolute inset-0 border border-primary/20 rounded-full animate-spin-[20s] linear flex items-center justify-center">
              <div className="w-4/5 h-4/5 border border-secondary/10 rounded-full animate-spin-[15s] linear reverse"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-2">
                 <span className="material-symbols-outlined text-secondary text-7xl animate-pulse">psychology</span>
                 <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-[0.3em]">Core_Processing</p>
              </div>
            </div>
            
            {/* Floating Data Nodes */}
            <div className="absolute top-10 right-10 p-4 bg-surface-container border border-primary/20 backdrop-blur-md">
              <p className="font-mono text-[9px] text-primary mb-1 uppercase">Scan_Rate</p>
              <p className="font-headline font-bold text-xl uppercase">1.2ms</p>
            </div>
            <div className="absolute bottom-1/4 -left-4 p-4 bg-surface-container-high border border-secondary/20 shadow-2xl">
              <p className="font-mono text-[9px] text-secondary mb-1 uppercase">ATS_Match</p>
              <p className="font-headline font-bold text-xl uppercase">98.4%</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logic Blocks Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-outline-variant/10">
        {[
          { title: 'Neural Extraction', description: 'Parse complex PDF structures into structured JSON logic with 99.8% accuracy.', icon: 'data_exploration' },
          { title: 'Keyword Injection', description: 'Algorithmically match job requirements with your experience through semantic layering.', icon: 'center_focus_strong' },
          { title: 'Vault Storage', description: 'Encrypted storage for all historically tailored iterations on our secure cloud nodes.', icon: 'encrypted' }
        ].map((item, i) => (
          <div key={i} className="bg-surface-container p-10 space-y-6 hover:bg-surface-container-high transition-colors group">
            <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform">{item.icon}</span>
            <div className="space-y-2">
              <h3 className="font-headline font-bold text-xl uppercase tracking-tight">{item.title}</h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Terminal Preview Section */}
      <section className="bg-surface-container-low border border-primary/10 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-primary/10 bg-surface-container">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-error/20"></div>
            <div className="w-3 h-3 rounded-full bg-secondary/20"></div>
            <div className="w-3 h-3 rounded-full bg-primary/20"></div>
          </div>
          <span className="font-mono text-[10px] text-on-surface-variant uppercase">SYSTEM_MANIFEST // OUTPUT_STREAM</span>
        </div>
        <div className="p-8 font-mono text-xs space-y-2 max-h-[300px] overflow-hide custom-scrollbar">
          <p className="text-secondary opacity-80">[OK] INITIATING_VIRTUAL_MACHINE...</p>
          <p className="text-on-surface/40">[...] BOOTING_CORE_MODULES_0-4</p>
          <p className="text-on-surface/40">[...] CONNECTING_AWS_S3_VAULT</p>
          <p className="text-secondary">[OK] N8N_WORKFLOW_ESTABLISHED</p>
          <p className="text-primary mt-4 animate-pulse">_ AWAITING_USER_INPUT</p>
          <div className="pt-8 flex justify-center">
             <Link to="/upload" className="font-headline font-bold uppercase text-on-surface hover:text-secondary transition-colors underline underline-offset-4 decoration-primary/30">
               Click to Initiate Handshake
             </Link>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 text-center space-y-12 border-t border-outline-variant/10">
        <h2 className="font-headline text-5xl md:text-7xl font-bold uppercase tracking-tight max-w-4xl mx-auto leading-none">
          Ready to <span className="text-secondary">Evolve</span> Your Profession?
        </h2>
        <div className="flex justify-center gap-6">
           <Link to="/upload" className="bg-primary text-on-primary px-12 py-6 font-headline font-bold uppercase tracking-wider text-sm shadow-[0_10px_40px_-5px_rgba(167,165,255,0.4)] hover:-translate-y-1 transition-all active:scale-95">
             Get Started Now
           </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
