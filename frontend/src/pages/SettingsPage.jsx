import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SettingsPage = () => {
    const [activeModel, setActiveModel] = useState('claude');

    const models = [
        { id: 'gpt', name: 'GPT-5.4', provider: 'OPENAI_PRO', desc: 'Optimized for high-reasoning tasks and long-context resume parsing.', latency: '420ms', tokens: '128k', primary: 'primary' },
        { id: 'claude', name: 'Claude Sonnet 4.6', provider: 'ANTHROPIC_CORE', desc: 'Superior performance in keyword density analysis and matching accuracy.', latency: '310ms', tokens: '200k', primary: 'secondary' }
    ];

    return (
        <div className="flex flex-col lg:flex-row min-h-screen">
            {/* Sidebar Navigation */}
            <aside className="hidden lg:flex flex-col w-64 border-r border-outline-variant/10 bg-surface-container-low p-8 space-y-12">
                <div className="space-y-2">
                    <h2 className="font-mono text-[10px] text-secondary font-bold uppercase tracking-[0.2em]">System_Architecture</h2>
                    <nav className="flex flex-col gap-1">
                        {['Engine', 'Security', 'Storage', 'Logs'].map((item, i) => (
                            <div key={item} className={`flex items-center gap-3 px-4 py-3 font-mono text-[10px] uppercase tracking-widest cursor-pointer transition-all ${i === 2 ? 'bg-[#0f1930] text-secondary border-l-2 border-secondary font-bold' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'}`}>
                                <span className="material-symbols-outlined text-lg">{['memory', 'vpn_key', 'database', 'developer_board'][i]}</span>
                                {item}
                            </div>
                        ))}
                    </nav>
                </div>

                <div className="mt-auto space-y-4">
                    <div className="p-4 bg-surface-container space-y-2 border border-outline-variant/10">
                         <p className="font-mono text-[9px] text-on-surface-variant uppercase tracking-widest">Node_Status</p>
                         <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-secondary animate-pulse rounded-full"></div>
                            <span className="font-mono text-[10px] text-secondary uppercase font-bold">Operational</span>
                         </div>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 p-8 lg:p-12 space-y-16 max-w-5xl mx-auto w-full">
                <header className="space-y-2">
                    <p className="font-mono text-secondary text-[11px] uppercase tracking-widest font-bold">// SYSTEM_PREFERENCES_v8.4</p>
                    <h1 className="font-headline text-5xl font-bold uppercase tracking-tighter text-on-background leading-none">Settings & Integration</h1>
                </header>

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
                    {/* Left Column: Config */}
                    <div className="xl:col-span-8 space-y-16">
                        {/* Model Architecture */}
                        <section className="space-y-8">
                            <div className="flex items-center justify-between border-b border-outline-variant/10 pb-4">
                                <h3 className="font-headline text-xl font-bold uppercase tracking-tight flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">psychology</span>
                                    Model_Architecture
                                </h3>
                                <span className="font-mono text-[9px] text-on-surface-variant uppercase bg-surface-container px-3 py-1 font-bold">ACTIVE: {activeModel.toUpperCase()}_4.6</span>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {models.map(model => (
                                    <div 
                                        key={model.id}
                                        onClick={() => setActiveModel(model.id)}
                                        className={`p-6 border-l-4 transition-all duration-300 cursor-pointer ${activeModel === model.id ? `bg-surface-container-high border-${model.primary}` : 'bg-surface-container-low border-transparent hover:border-outline-variant/50'}`}
                                    >
                                        <div className="flex justify-between items-start mb-4">
                                            <p className={`font-headline font-bold text-lg uppercase ${activeModel === model.id ? `text-${model.primary}` : 'text-on-surface'}`}>{model.name}</p>
                                            <span className={`font-mono text-[9px] font-bold ${activeModel === model.id ? `text-${model.primary}` : 'text-on-surface-variant opacity-50'}`}>{model.provider}</span>
                                        </div>
                                        <p className="text-xs text-on-surface-variant font-body leading-relaxed mb-6">{model.desc}</p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className={`bg-background/40 px-2 py-1 text-[8px] font-mono font-bold uppercase tracking-tighter ${activeModel === model.id ? `text-${model.primary}` : 'text-on-surface-variant'}`}>LATENCY: {model.latency}</span>
                                            <span className={`bg-background/40 px-2 py-1 text-[8px] font-mono font-bold uppercase tracking-tighter ${activeModel === model.id ? `text-${model.primary}` : 'text-on-surface-variant'}`}>TOKEN_LIMIT: {model.tokens}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Credentials */}
                        <section className="space-y-8">
                             <h3 className="font-headline text-xl font-bold uppercase tracking-tight flex items-center gap-3 border-b border-outline-variant/10 pb-4">
                                <span className="material-symbols-outlined text-primary">key</span>
                                API_Credentials
                            </h3>
                            <div className="space-y-8">
                                <div className="space-y-3">
                                    <label className="block font-mono text-[9px] text-on-surface-variant uppercase font-bold tracking-[0.2em]">OpenAI_API_Key</label>
                                    <div className="flex gap-1">
                                        <input 
                                            type="password" 
                                            value="sk-proj-************************************" 
                                            readOnly 
                                            className="flex-1 bg-surface-container p-4 font-mono text-xs text-primary border-none focus:ring-0"
                                        />
                                        <button className="bg-primary text-on-primary px-6 font-headline font-bold uppercase text-[10px] tracking-widest hover:bg-primary-dim transition-all">Rotate</button>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="block font-mono text-[9px] text-on-surface-variant uppercase font-bold tracking-[0.2em]">Anthropic_API_Key</label>
                                    <div className="flex gap-1">
                                        <input 
                                            type="password" 
                                            value="ant-api-************************************" 
                                            readOnly 
                                            className="flex-1 bg-surface-container p-4 font-mono text-xs text-secondary border-none focus:ring-0"
                                        />
                                        <button className="border border-secondary text-secondary px-6 font-headline font-bold uppercase text-[10px] tracking-widest hover:bg-secondary/10 transition-all">Connect</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Health & Metrics */}
                    <div className="xl:col-span-4 space-y-8">
                        <div className="bg-surface-container p-10 border-t-4 border-primary space-y-8">
                            <h4 className="font-headline font-bold text-xl uppercase tracking-tighter text-on-surface">Network_Metadata</h4>
                            <div className="space-y-4 font-mono text-[10px] uppercase font-bold tracking-widest">
                                <div className="flex justify-between border-b border-outline-variant/20 pb-2">
                                    <span className="text-on-surface-variant">Webhook Path</span>
                                    <span className="text-primary truncate ml-4">/v1/ingest/8xf-29</span>
                                </div>
                                <div className="flex justify-between border-b border-outline-variant/20 pb-2">
                                    <span className="text-on-surface-variant">Worker Node</span>
                                    <span className="text-secondary">NODE_DELTA_4</span>
                                </div>
                                <div className="flex justify-between border-b border-outline-variant/20 pb-2">
                                    <span className="text-on-surface-variant">SSL Cert</span>
                                    <span className="text-secondary">VALID (32d)</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-on-surface-variant">Last Sync</span>
                                    <span className="text-on-surface">14m 22s ago</span>
                                </div>
                            </div>
                            <div className="h-24 w-full bg-background/50 relative overflow-hidden flex items-end gap-1 px-1">
                                {[20, 50, 30, 70, 90, 40, 60, 80].map((h, i) => (
                                    <div key={i} className={`flex-1 ${i === 4 ? 'bg-secondary' : 'bg-primary/20'}`} style={{height: `${h}%`}}></div>
                                ))}
                                <div className="absolute top-2 left-2 font-mono text-[8px] text-secondary font-bold uppercase tracking-widest">API_LOAD_METRICS</div>
                            </div>
                        </div>

                        {/* Commit Card */}
                        <div className="bg-secondary p-10 space-y-6 shadow-[0_20px_50px_-20px_rgba(191,243,101,0.4)] hover:-translate-y-1 transition-all">
                             <p className="font-headline font-bold text-on-secondary text-2xl tracking-tighter uppercase leading-none">Deploy System Changes</p>
                             <p className="text-on-secondary/80 text-xs font-body leading-relaxed">Updating the architecture will trigger a global cache flush on all active worker nodes.</p>
                             <button className="w-full bg-background text-secondary py-5 font-headline font-bold uppercase tracking-widest text-[10px] hover:bg-[#0f1930] transition-colors shadow-2xl">
                                Commit to Mainframe
                             </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SettingsPage;
