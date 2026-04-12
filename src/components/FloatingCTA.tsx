import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Collapse after 3 seconds
    const timer = setTimeout(() => setIsExpanded(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="tel:+15550000000"
        className="group flex items-center gap-3 bg-yellow text-dark font-bold rounded-full shadow-glow-strong transition-all duration-500 hover:shadow-glow-xl hover:-translate-y-1 animate-pulse-glow"
        style={{ padding: isExpanded ? '14px 24px' : '14px' }}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <Phone className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:rotate-12" />
        <span
          className="overflow-hidden whitespace-nowrap transition-all duration-500"
          style={{ maxWidth: isExpanded ? '150px' : '0', opacity: isExpanded ? 1 : 0 }}
        >
          Call Now
        </span>
      </a>
    </div>
  );
}
