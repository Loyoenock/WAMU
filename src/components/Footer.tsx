import React from 'react';

export function Footer() {
  return (
    <footer className="bg-brand-logo-bg px-10 py-6 border-t border-brand-grove/30 flex flex-col md:flex-row justify-between items-center text-[10px] text-brand-light-1 uppercase tracking-[0.15em] gap-4">
      <div>&copy; {new Date().getFullYear()} WAMU Infrastructure. All rights reserved.</div>
      <div className="flex gap-6 flex-wrap justify-center">
        <a id="footer-privacy-link" href="#" className="hover:text-brand-highlight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-highlight rounded-sm px-1 -mx-1">Privacy Protocol</a>
        <span className="text-brand-light-1 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-highlight rounded-full animate-pulse" aria-hidden="true"></span> Network Status: Operational</span>
        <span>Kampala &bull; Nairobi</span>
      </div>
    </footer>
  );
}
