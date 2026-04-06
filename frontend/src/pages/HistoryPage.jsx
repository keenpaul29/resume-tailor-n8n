import React from 'react';
import { motion } from 'framer-motion';

const HistoryPage = () => {
    const historyItems = [
        { id: '001', role: 'Software Engineer @ Google', time: '2023.10.12_14:32:01', rating: '94%' },
        { id: '002', role: 'Data Scientist @ Meta', time: '2023.10.10_09:15:44', rating: '88%' },
        { id: '003', role: 'Senior Architect @ Amazon', time: '2023.10.05_22:01:12', rating: '91%' },
        { id: '004', role: 'Cloud Engineer @ Vercel', time: '2023.09.28_11:44:09', rating: '76%', low: true },
    ];

    return (
        <div className="px-6 max-w-7xl mx-auto space-y-12">
            {/* Page Title */}
            <header className="border-l-4 border-secondary pl-6 space-y-2 mb-12">
                <h1 className="text-5xl font-headline font-bold uppercase tracking-tighter leading-none">Historical_Intelligence</h1>
                <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest opacity-70">SYSTEM_LOG // ARCHIVE_V2.0.4</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Historical Logs */}
                <section className="lg:col-span-7 space-y-6">
                    <div className="flex items-end justify-between mb-2">
                        <h2 className="font-headline text-2xl font-bold uppercase tracking-tight text-primary">Compilation_Logs</h2>
                        <span className="font-mono text-[10px] text-secondary font-bold">32 RECORDS FOUND</span>
                    </div>
                    
                    <div className="divide-y divide-outline-variant/10 border-t border-outline-variant/10">
                        {historyItems.map((item, i) => (
                            <motion.div 
                                key={item.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className={`group p-8 flex flex-col md:flex-row md:items-center justify-between transition-all duration-300 cursor-pointer ${item.low ? 'opacity-40 grayscale hover:opacity-100 hover:grayscale-0' : ''} ${i % 2 === 0 ? 'bg-surface-container' : 'bg-surface-container-low'} hover:bg-surface-container-high`}
                            >
                                <div className="flex items-center gap-6">
                                    <span className="font-mono text-secondary text-sm font-bold tracking-tighter">{item.id}</span>
                                    <div>
                                        <h3 className="font-headline font-bold text-xl text-on-surface uppercase tracking-tight">{item.role}</h3>
                                        <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">{item.time}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-8 mt-6 md:mt-0">
                                    <div className="text-right">
                                        <p className="font-mono text-[9px] text-on-surface-variant uppercase tracking-widest">Match_Rating</p>
                                        <p className={`font-headline font-bold text-3xl ${item.low ? 'text-error' : 'text-secondary'}`}>{item.rating}</p>
                                    </div>
                                    <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform text-3xl">arrow_right_alt</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Right Column: Intelligence Dashboard */}
                <section className="lg:col-span-5 space-y-8">
                    <div className="bg-surface-container-low p-10 border border-outline-variant/10 group overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                        <h2 className="font-headline text-xl font-bold uppercase tracking-tight text-primary mb-10 border-b border-outline-variant/20 pb-4">Intelligence_Analysis</h2>
                        
                        <div className="space-y-10">
                            <div>
                                <p className="font-mono text-[10px] text-secondary uppercase mb-6 tracking-[0.2em] font-bold">Aggregated_Skill_Gaps</p>
                                <div className="space-y-6">
                                    {[
                                        { name: 'KUBERNETES', status: 'CRITICAL GAP', width: '85%', color: 'bg-error' },
                                        { name: 'AWS_CERTIFICATION', status: 'DESIRED', width: '62%', color: 'bg-primary' },
                                        { name: 'GRAPHQL_APIS', status: 'MODERATE', width: '45%', color: 'bg-primary/60' }
                                    ].map(skill => (
                                        <div key={skill.name} className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <span className="font-mono text-xs uppercase tracking-tighter">{skill.name}</span>
                                                <span className={`font-mono text-[9px] uppercase tracking-widest ${skill.color === 'bg-error' ? 'text-error animate-pulse' : 'text-on-surface-variant'}`}>{skill.status}</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-surface-container overflow-hidden">
                                                <motion.div 
                                                    initial={{ width: 0 }}
                                                    animate={{ width: skill.width }}
                                                    transition={{ duration: 1, delay: 0.5 }}
                                                    className={`h-full ${skill.color}`}
                                                ></motion.div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Trends Visualization */}
                            <div className="pt-4">
                                <p className="font-mono text-[10px] text-secondary uppercase mb-6 tracking-[0.2em] font-bold">Precision_Rating_Trends</p>
                                <div className="h-32 w-full flex items-end gap-1.5 px-2 border-b border-l border-outline-variant/20">
                                    {[30, 45, 40, 65, 80, 94].map((h, i) => (
                                        <motion.div 
                                            key={i}
                                            initial={{ height: 0 }}
                                            animate={{ height: `${h}%` }}
                                            transition={{ delay: 1 + (i * 0.1), duration: 0.5 }}
                                            className={`flex-1 ${i === 5 ? 'bg-secondary' : 'bg-primary/30'} relative group/bar`}
                                        >
                                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-[9px] opacity-0 group-hover/bar:opacity-100 transition-opacity">
                                               {h}%
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="flex justify-between mt-3 font-mono text-[9px] text-on-surface-variant uppercase tracking-widest px-2">
                                    <span>SEP_2023</span>
                                    <span>OCT_2023</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* System Node Status */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-surface-container p-6 space-y-4 border border-outline-variant/10">
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse"></div>
                                <span className="font-mono text-[10px] uppercase font-bold tracking-widest">Node_01</span>
                            </div>
                            <div>
                                <p className="font-headline font-bold text-2xl uppercase tracking-tighter leading-none">N8N.PROX</p>
                                <p className="font-mono text-[9px] text-secondary uppercase mt-1">Latency: 14ms</p>
                            </div>
                        </div>
                        <div className="bg-surface-container p-6 space-y-4 border border-outline-variant/10">
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                                <span className="font-mono text-[10px] uppercase font-bold tracking-widest">Node_02</span>
                            </div>
                            <div>
                                <p className="font-headline font-bold text-2xl uppercase tracking-tighter leading-none">INTEL.CORE</p>
                                <p className="font-mono text-[9px] text-primary uppercase mt-1">Load: 12.4%</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HistoryPage;
