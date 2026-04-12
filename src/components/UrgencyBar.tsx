import { Zap } from 'lucide-react';

export default function UrgencyBar() {
  return (
    <div className="relative z-50 bg-yellow text-dark py-2 px-4 text-center text-sm font-semibold overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow/80 via-yellow to-yellow/80 animate-pulse" />
      <div className="relative flex items-center justify-center gap-2">
        <Zap className="w-4 h-4 flex-shrink-0" />
        <span>⚡ Same-Day Service Available — Call Now: (555) 000-0000</span>
        <Zap className="w-4 h-4 flex-shrink-0" />
      </div>
    </div>
  );
}
