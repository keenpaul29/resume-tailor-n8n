import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { label: 'Upload', icon: 'upload_file', path: '/upload' },
    { label: 'Analyze', icon: 'analytics', path: '/analysis' },
    { label: 'Optimize', icon: 'psychology', path: '/editor' },
    { label: 'History', icon: 'history', path: '/history' },
    { label: 'Settings', icon: 'settings', path: '/settings' },
  ];

  return (
    <div className="min-h-screen bg-background text-on-background selection-secondary">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-[#060e20]/80 backdrop-blur-xl border-b border-[#a7a5ff]/15 flex justify-between items-center px-6 py-4">
        <Link to="/" className="flex items-center gap-3 active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-[#a7a5ff]">terminal</span>
          <span className="text-xl font-bold tracking-tighter text-[#dee5ff] font-headline uppercase">RESUME.INTEL</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 font-headline text-[12px] tracking-widest uppercase font-medium">
          {navItems.map((item) => (
             <Link 
                key={item.path} 
                to={item.path} 
                className={`${location.pathname === item.path ? 'text-[#a7a5ff]' : 'text-[#dee5ff]/60'} hover:text-[#bff365] transition-colors duration-200 cursor-pointer active:scale-95`}
             >
                {item.label}
             </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#dee5ff]/60 hover:text-[#bff365] transition-colors duration-200 cursor-pointer">sensors</span>
          <button className="bg-primary text-on-primary px-4 py-1.5 font-label text-[10px] tracking-tighter uppercase font-bold hover:bg-primary-dim transition-all active:scale-95 hidden sm:block">
            Terminal Access
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-32">
        {children}
      </main>

      {/* BottomNavBar (Mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center h-16 pb-safe bg-[#060e20] border-t border-[#a7a5ff]/15 z-50">
        {navItems.slice(0, 4).map((item) => (
          <Link 
            key={item.path} 
            to={item.path} 
            className={`flex flex-col items-center justify-center py-2 w-full transition-all duration-300 ${location.pathname === item.path ? 'text-[#bff365] bg-[#0f1930]' : 'text-[#dee5ff]/40 hover:bg-[#141f38] hover:text-[#a7a5ff]'}`}
          >
            <span className={`material-symbols-outlined ${location.pathname === item.path ? 'fill-1' : ''}`} style={{ fontVariationSettings: location.pathname === item.path ? "'FILL' 1" : "'FILL' 0" }}>
              {item.icon}
            </span>
            <span className="font-mono text-[10px] uppercase font-medium mt-1">{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Visual Accents */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
    </div>
  );
};

export default Layout;
