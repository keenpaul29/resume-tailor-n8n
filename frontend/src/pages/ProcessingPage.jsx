import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const ProcessingPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [progress, setProgress] = useState(0);
    const [logs, setLogs] = useState([]);
    const [status, setStatus] = useState('initializing');

    const logMessages = [
        { type: 'info', text: '[OK] ESTABLISHING_HANDSHAKE_WITH_NODE_DELTA_4' },
        { type: 'info', text: '[OK] UPLOADING_CORE_ARTIFACT: master_resume.pdf' },
        { type: 'info', text: '[OK] PARSING_TARGET_REQUISITION: job_description.txt' },
        { type: 'secondary', text: '[...] STARTING_NEURAL_EXTRACTION_ENGINE' },
        { type: 'primary', text: '[!] DETECTED_KEYWORD_GAP: kubernetes, terraform, aws_lambda' },
        { type: 'secondary', text: '[...] OPTIMIZING_EXPERIENCE_NARRATIVE_LAYER' },
        { type: 'info', text: '[OK] INJECTING_SEMANTIC_KEYWORDS' },
        { type: 'primary', text: '[!] QUANTIFYING_TECHNICAL_IMPACT_METRICS' },
        { type: 'info', text: '[OK] GENERATING_OPTIMIZED_PDF_PROTOCOL' },
        { type: 'secondary', text: '[OK] TAILORING_COMPLETE_REDIRECTING_TO_MAINFRAME' },
    ];

    useEffect(() => {
        // Mock progress and logs sequence
        let logIndex = 0;
        const interval = setInterval(() => {
            if (logIndex < logMessages.length) {
                setLogs(prev => [...prev, logMessages[logIndex]]);
                setProgress(prev => Math.min(prev + (100 / logMessages.length), 100));
                logIndex++;
            } else {
                clearInterval(interval);
                setStatus('complete');
                setTimeout(() => navigate('/editor'), 1500);
            }
        }, 800);

        return () => clearInterval(interval);
    }, [navigate]);

    return (
        <div className="px-6 max-w-md mx-auto space-y-12 flex flex-col items-center justify-center min-h-[70vh]">
            {/* Circular Progress Engine */}
            <div className="relative w-64 h-64 flex items-center justify-center">
                {/* SVG Progress Circle */}
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle 
                        cx="128" cy="128" r="120" 
                        fill="transparent" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        className="text-surface-container-highest"
                    />
                    <motion.circle 
                        cx="128" cy="128" r="120" 
                        fill="transparent" 
                        stroke="currentColor" 
                        strokeWidth="4" 
                        strokeDasharray="753.98" 
                        initial={{ strokeDashoffset: 753.98 }}
                        animate={{ strokeDashoffset: 753.98 - (753.98 * (progress / 100)) }}
                        transition={{ duration: 0.5 }}
                        className="text-secondary shadow-[0_0_20px_rgba(191,243,101,0.5)]"
                    />
                </svg>

                {/* Inner Pulsing Core */}
                <div className="w-48 h-48 rounded-full bg-surface-container flex flex-col items-center justify-center space-y-2 border border-outline-variant/10 shadow-inner">
                    <motion.span 
                        animate={{ opacity: [0.4, 1, 0.4] }} 
                        transition={{ duration: 2, repeat: Infinity }}
                        className="material-symbols-outlined text-secondary text-5xl"
                    >
                        psychology
                    </motion.span>
                    <div className="text-center">
                        <p className="font-headline font-bold text-4xl text-on-surface">{Math.round(progress)}%</p>
                        <p className="font-mono text-[9px] text-on-surface-variant uppercase tracking-widest leading-none mt-1">Analyzing</p>
                    </div>
                </div>

                {/* Satellite Nodes */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-surface-container border border-primary/20 flex items-center justify-center animate-pulse">
                   <span className="material-symbols-outlined text-primary text-xl">sensors</span>
                </div>
            </div>

            {/* Terminal Feed */}
            <div className="w-full bg-surface-container-low border border-outline-variant/10 overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between px-4 py-2 bg-surface-container border-b border-outline-variant/10">
                    <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-error/40"></div>
                        <div className="w-2 h-2 rounded-full bg-secondary/40"></div>
                        <div className="w-2 h-2 rounded-full bg-primary/40"></div>
                    </div>
                    <span className="font-mono text-[9px] text-on-surface-variant uppercase">Workflow_Status // ACTIVE</span>
                </div>
                <div className="p-6 h-64 overflow-y-auto custom-scrollbar font-mono text-[11px] space-y-2">
                    <AnimatePresence>
                        {logs.map((log, index) => (
                            <motion.p 
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className={
                                    log.type === 'primary' ? 'text-primary' : 
                                    log.type === 'secondary' ? 'text-secondary' : 
                                    'text-on-surface-variant'
                                }
                            >
                                {log.text}
                            </motion.p>
                        ))}
                    </AnimatePresence>
                    <motion.div 
                        animate={{ opacity: [0, 1] }} 
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="w-2 h-4 bg-secondary ml-1 inline-block align-middle"
                    />
                </div>
            </div>

            {/* Strategy Header */}
            <div className="text-center space-y-2">
                <h2 className="font-headline font-bold text-2xl uppercase tracking-tighter text-on-surface">Tailoring Engine <br/> <span className="text-secondary select-none">V2.01_PRO</span></h2>
                <div className="flex justify-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className={`h-1 w-6 rounded-full ${i <= (progress / 20) ? 'bg-secondary animate-pulse' : 'bg-outline-variant/20'}`}></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProcessingPage;
