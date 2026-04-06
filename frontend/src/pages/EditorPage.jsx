import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EditorPage = () => {
  return (
    <div className="px-6 max-w-md mx-auto space-y-12 pb-32">
      {/* Header Strategy */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
            <span className="h-[2px] w-8 bg-primary"></span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-primary">Comparison Protocol 04-A</span>
        </div>
        <h1 className="font-headline text-5xl font-bold tracking-tight uppercase leading-[0.85]">
            Optimization <br/><span className="text-secondary select-none italic text-6xl">Engine</span>
        </h1>
      </section>

      {/* Stats Overview */}
      <section className="grid grid-cols-5 gap-0.5 bg-outline-variant/10">
        <div className="col-span-3 bg-surface-container p-6">
            <p className="font-mono text-[10px] text-on-surface-variant uppercase mb-2">ATS Compatibility</p>
            <div className="flex items-baseline gap-3">
                <span className="font-headline text-4xl font-bold text-secondary">94%</span>
                <span className="font-mono text-xs text-secondary/60 animate-pulse">+28.4%</span>
            </div>
        </div>
        <div className="col-span-2 bg-surface-container-high p-6">
            <p className="font-mono text-[10px] text-on-surface-variant uppercase mb-2">Keywords</p>
            <div className="flex items-baseline gap-3">
                <span className="font-headline text-4xl font-bold text-primary">18</span>
                <span className="font-mono text-[9px] bg-primary text-on-primary px-1.5 py-0.5 font-bold">NEW</span>
            </div>
        </div>
      </section>

      {/* Comparison Stack */}
      <div className="space-y-10">
        {/* Original */}
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
        >
            <div className="flex justify-between items-end border-b border-outline-variant/20 pb-2">
                <h2 className="font-headline font-bold uppercase tracking-tight text-on-surface/40 text-lg">Original</h2>
                <span className="font-mono text-[10px] text-on-surface-variant italic">V1.04_UNREFINED</span>
            </div>
            <div className="bg-surface-container-low p-6 space-y-6">
                <div className="space-y-2">
                    <p className="font-mono text-[9px] text-on-surface-variant uppercase tracking-widest">Experience_Summary</p>
                    <p className="text-sm text-on-surface/60 font-body leading-relaxed italic border-l-2 border-outline-variant/20 pl-4 py-1">
                        "Responsible for managing a team and handling various software development projects using Java and some cloud stuff. Improved workflow efficiency."
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-6 bg-background/30 p-4 border border-outline-variant/10">
                    <div className="space-y-1">
                        <p className="font-mono text-[8px] text-on-surface-variant uppercase tracking-widest">Impact</p>
                        <p className="font-headline font-bold text-xs uppercase">Low-Medium</p>
                    </div>
                    <div className="space-y-1">
                        <p className="font-mono text-[8px] text-on-surface-variant uppercase tracking-widest">Focus</p>
                        <p className="font-headline font-bold text-xs uppercase text-on-surface/40">Operational</p>
                    </div>
                </div>
            </div>
        </motion.div>

        {/* Transition Visual */}
        <div className="flex justify-center -my-6">
            <div className="h-12 w-[1px] bg-gradient-to-b from-outline-variant/50 to-secondary animate-pulse scale-y-150"></div>
        </div>

        {/* Optimized */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
        >
            <div className="flex justify-between items-end border-b border-secondary/20 pb-2">
                <h2 className="font-headline font-bold uppercase tracking-tight text-secondary text-lg">Optimized</h2>
                <span className="font-mono text-[10px] text-secondary font-bold">V2.01_ENGINEERED</span>
            </div>
            <div className="bg-surface-container p-6 space-y-8 relative overflow-hidden glitch-border border-l-4 border-secondary">
                <div className="absolute top-0 right-0 p-4">
                    <span className="material-symbols-outlined text-secondary/30 text-6xl rotate-12 scale-150">psychology</span>
                </div>
                
                <div className="relative z-10 space-y-3">
                    <p className="font-mono text-[9px] text-secondary uppercase tracking-widest font-bold">Enhanced_Narrative</p>
                    <p className="text-sm text-on-surface leading-relaxed font-body">
                        "Orchestrated cross-functional squads of 12 engineers to deliver <span className="bg-primary/20 text-primary px-1 font-bold">Enterprise SaaS</span> solutions. Leveraged <span className="text-secondary font-bold">AWS Microservices</span> to optimize deployment cycles, resulting in a <span className="bg-secondary text-on-secondary px-1.5 font-mono font-bold">40% reduction</span> in time-to-market."
                    </p>
                </div>

                <div className="relative z-10 space-y-4">
                    <p className="font-mono text-[9px] text-secondary uppercase tracking-widest font-bold">Injected_Keywords</p>
                    <div className="flex flex-wrap gap-2">
                        {['Scalability', 'Kubernetes', 'CI/CD Pipeline', 'Agile Lead'].map(tag => (
                            <span key={tag} className="bg-surface-bright px-3 py-1.5 text-[9px] font-mono text-secondary border border-secondary/20 uppercase font-bold tracking-tighter">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="pt-6 border-t border-outline-variant/10 relative z-10">
                    <div className="flex items-center justify-between">
                        <span className="font-mono text-[8px] text-on-surface-variant uppercase tracking-widest">Precision_Rating</span>
                        <div className="flex gap-1.5">
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} className={`h-1 w-6 ${i <= 4 ? 'bg-secondary' : 'bg-outline-variant/30'}`}></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>

      {/* Delta Report */}
      <section className="bg-surface-container-low border border-primary/20 p-8 space-y-6 relative overflow-hidden group">
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/5 -rotate-45 translate-x-12 translate-y-12"></div>
        <h3 className="font-headline font-bold text-xl uppercase tracking-tighter text-primary border-b border-primary/10 pb-4">AI_Delta_Report</h3>
        <ul className="space-y-4">
            <li className="flex items-start gap-4">
                 <span className="material-symbols-outlined text-secondary text-xl mt-0.5">check_circle</span>
                 <p className="text-xs text-on-surface-variant font-body leading-relaxed">Converted passive voice verbs to high-impact action-oriented syntax for senior stakeholder review.</p>
            </li>
            <li className="flex items-start gap-4">
                 <span className="material-symbols-outlined text-secondary text-xl mt-0.5">check_circle</span>
                 <p className="text-xs text-on-surface-variant font-body leading-relaxed">Quantified technical impact with verifiable data-points for senior review across entire professional career.</p>
            </li>
        </ul>
      </section>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-4">
          <Link to="/upload" className="bg-surface-container py-5 px-6 font-headline font-bold uppercase text-[10px] tracking-widest text-center border border-outline-variant/20 hover:bg-surface-container-high transition-all">
             New Optimization
          </Link>
          <button className="bg-outline-variant py-5 px-6 font-headline font-bold uppercase text-[10px] tracking-widest text-center hover:bg-[#141f38] transition-all">
             System Log
          </button>
      </div>

      {/* FAB: Download PDF */}
      <button className="fixed bottom-24 right-6 bg-secondary text-on-secondary px-8 py-5 flex items-center gap-4 shadow-[0_15px_60px_-15px_rgba(191,243,101,0.6)] active:scale-95 transition-all duration-300 z-50 hover:bg-secondary-dim group">
        <span className="material-symbols-outlined font-bold group-hover:rotate-12 transition-transform" style={{fontVariationSettings: "'FILL' 1"}}>picture_as_pdf</span>
        <span className="font-headline font-bold text-xs uppercase tracking-widest">Download PDF</span>
      </button>
    </div>
  );
};

export default EditorPage;
