import { useEffect, useRef, useState } from 'react';

interface StatItemProps {
  value: string;
  label: string;
  suffix?: string;
  delay: number;
}

function StatItem({ value, label, suffix = '', delay }: StatItemProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const numericValue = parseInt(value.replace(/\D/g, ''));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = numericValue / steps;
      let current = 0;

      const interval = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setCount(numericValue);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, numericValue, delay]);

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow mb-2">
        {value.includes('NR') ? value : `${count}${suffix}`}
      </div>
      <div className="text-gray-400 text-sm sm:text-base uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export default function Stats() {
  const stats = [
    { value: '10+', label: 'Anos de Experiência', suffix: '+' },
    { value: '80+', label: 'Serviços Realizados', suffix: '+' },
    { value: '100%', label: 'Clientes Satisfeitos', suffix: '%' },
    { value: 'NR-10', label: 'Profissional Certificado', suffix: '' },
  ];

  return (
    <section className="relative py-16 bg-dark border-y border-dark-200">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #f5c518 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
