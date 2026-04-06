import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const UploadHub = () => {
    const [file, setFile] = useState(null);
    const [jobDescription, setJobDescription] = useState('');
    const [isDragging, setIsDragging] = useState(false);
    const navigate = useNavigate();

    const onDrop = useCallback((e) => {
        e.preventDefault();
        setIsDragging(false);
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile && droppedFile.type === 'application/pdf') {
            setFile(droppedFile);
            toast.success(`${droppedFile.name} uploaded successfully.`);
        } else {
            toast.error('Please upload a PDF file.');
        }
    }, []);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.type === 'application/pdf') {
            setFile(selectedFile);
        } else {
            toast.error('Please select a PDF file.');
        }
    };

    const handleStartAnalysis = () => {
        if (!file || !jobDescription.trim()) {
            toast.error('Both Resume and Job Description are required.');
            return;
        }
        // Navigate to analysis page with the data (in a real app we'd use context or state)
        navigate('/analysis', { state: { file, jobDescription } });
    };

    return (
        <div className="px-6 max-w-7xl mx-auto space-y-12">
            {/* Page Header */}
            <header className="space-y-4">
                <div className="flex items-center gap-2">
                    <span className="h-[2px] w-8 bg-secondary"></span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-secondary animate-pulse">INGESTION_PROTOCOL_ACTIVE</span>
                </div>
                <h1 className="font-headline text-5xl font-bold tracking-tight uppercase leading-none">
                    Data <span className="text-primary italic select-none">Ingestion</span> Hub
                </h1>
                <p className="max-w-xl font-body text-on-surface-variant text-sm">
                    Upload your master resume and paste the target job description. Our AI will identify the delta between your profile and the requirements.
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 items-start bg-outline-variant/10">
                {/* Left: Resume Upload */}
                <div className="lg:col-span-12 xl:col-span-6 bg-surface-container p-8 space-y-8 h-full">
                    <div className="space-y-2">
                        <h2 className="font-headline font-bold text-xl uppercase tracking-tight text-primary">01_Master_Resume</h2>
                        <p className="font-mono text-[10px] text-on-surface-variant uppercase">FORMAT: PDF ONLY // SOURCE_FILE</p>
                    </div>

                    <div 
                        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                        onDragLeave={() => setIsDragging(false)}
                        onDrop={onDrop}
                        className={`relative border-2 border-dashed transition-all duration-300 min-h-[400px] flex flex-col items-center justify-center p-10 cursor-pointer ${isDragging ? 'border-secondary bg-secondary/5' : 'border-outline-variant/30 hover:border-primary/50 bg-surface-container-low'}`}
                        onClick={() => document.getElementById('file-input').click()}
                    >
                        <input 
                            id="file-input"
                            type="file" 
                            className="hidden" 
                            accept=".pdf"
                            onChange={handleFileChange}
                        />
                        
                        <AnimatePresence mode="wait">
                            {file ? (
                                <motion.div 
                                    key="file-exists"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center space-y-4"
                                >
                                    <span className="material-symbols-outlined text-secondary text-7xl select-none">task</span>
                                    <div>
                                        <p className="font-headline font-bold text-lg uppercase">{file.name}</p>
                                        <p className="font-mono text-[10px] text-on-surface-variant uppercase">{(file.size / 1024).toFixed(2)} KB // STAGED</p>
                                    </div>
                                    <button className="text-primary font-mono text-[10px] uppercase underline underline-offset-4 hover:text-secondary transition-colors font-bold tracking-widest">
                                        Swap Core File
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.div 
                                    key="no-file"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-center space-y-6"
                                >
                                    <div className="relative">
                                        <span className="material-symbols-outlined text-primary text-6xl opacity-30">upload_file</span>
                                        {isDragging && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-16 h-16 border-2 border-secondary rounded-full animate-ping"></div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        <p className="font-headline font-bold text-lg uppercase">Drop Core Artifact</p>
                                        <p className="font-mono text-[10px] text-on-surface-variant uppercase">Drag and drop file or click to browse</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Asymmetric corner accents */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/30"></div>
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-secondary/30"></div>
                    </div>
                </div>

                {/* Right: Job Description */}
                <div className="lg:col-span-12 xl:col-span-6 bg-surface-container-high p-8 space-y-8 h-full">
                    <div className="space-y-2">
                        <h2 className="font-headline font-bold text-xl uppercase tracking-tight text-secondary">02_Target_Description</h2>
                        <p className="font-mono text-[10px] text-on-surface-variant uppercase">FORMAT: TEXT // TARGET_DATA</p>
                    </div>

                    <div className="space-y-4">
                        <textarea 
                            value={jobDescription}
                            onChange={(e) => setJobDescription(e.target.value)}
                            placeholder="PASTE_TARGET_REQUISITION_HERE..."
                            className="w-full h-[320px] bg-surface-container px-6 py-8 font-mono text-xs text-on-background border border-outline-variant/10 focus:border-primary focus:ring-0 resize-none custom-scrollbar uppercase placeholder:opacity-30 leading-relaxed shadow-inner"
                        />
                        
                        <div className="flex items-center justify-between text-[10px] font-mono text-on-surface-variant uppercase">
                            <span>Character_Count: {jobDescription.length}</span>
                            <span className={jobDescription.length > 500 ? 'text-secondary' : 'text-error'}>
                                {jobDescription.length > 500 ? 'DATA_DENSITY: OPTIMAL' : 'DATA_DENSITY: LOW'}
                            </span>
                        </div>
                    </div>

                    <div className="bg-surface-container p-6 border-l-4 border-primary">
                        <p className="font-mono text-[10px] text-primary uppercase mb-2 font-bold tracking-widest">Logic_Checkpoint</p>
                        <p className="text-xs text-on-surface-variant leading-relaxed italic">
                            "Ensure the job description includes specific requirements, tech stack, and key metrics for maximum AI alignment."
                        </p>
                    </div>
                </div>
            </div>

            {/* Execute Action */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-outline-variant/10">
                <div className="flex items-center gap-6">
                    <div className="h-12 w-[1px] bg-outline-variant hidden md:block"></div>
                    <div className="space-y-1">
                        <p className="font-headline font-bold text-sm uppercase">Verification Status</p>
                        <div className="flex gap-2">
                           <div className={`h-1.5 w-6 ${file ? 'bg-secondary animate-pulse' : 'bg-outline-variant/20'}`}></div>
                           <div className={`h-1.5 w-6 ${jobDescription.length > 100 ? 'bg-secondary animate-pulse' : 'bg-outline-variant/20'}`}></div>
                           <div className={`h-1.5 w-6 ${file && jobDescription.length > 100 ? 'bg-secondary animate-pulse' : 'bg-outline-variant/20'}`}></div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-6 w-full md:w-auto">
                    <button className="flex-1 md:flex-none border border-outline-variant py-4 px-10 font-headline font-bold text-xs uppercase tracking-widest hover:bg-surface-container transition-all">
                        Reset Cache
                    </button>
                    <button 
                        onClick={handleStartAnalysis}
                        disabled={!file || !jobDescription.trim()}
                        className={`flex-1 md:flex-none py-5 px-16 font-headline font-bold text-sm uppercase tracking-widest group relative overflow-hidden transition-all duration-300 ${!file || !jobDescription.trim() ? 'bg-outline-variant/30 text-on-surface/30 cursor-not-allowed' : 'bg-primary text-on-primary shadow-[0_10px_40px_-5px_rgba(167,165,255,0.4)] hover:scale-105 active:scale-95'}`}
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            Initiate Analysis
                            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">bolt</span>
                        </span>
                        {file && jobDescription.trim() && (
                            <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer"></div>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UploadHub;
