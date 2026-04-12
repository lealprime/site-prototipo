import { useEffect, useRef, useState } from 'react';
import { ShieldCheck, RotateCcw, Star, Clock } from 'lucide-react';

const guarantees = [
  {
    icon: ShieldCheck,
    title: '100% Satisfaction Guaranteed',
    description:
      "If you're not completely satisfied, we come back and fix it — free of charge. No questions asked.",
  },
  {
    icon: RotateCcw,
    title: 'We Make It Right',
    description:
      'Every job is backed by our commitment to quality. We stand behind our work, period.',
  },
  {
    icon: Star,
    title: 'Licensed & Insured',
    description:
      'Fully licensed, bonded, and insured for your complete peace of mind on every project.',
  },
  {
    icon: Clock,
    title: 'On-Time Promise',
    description:
      "We show up when we say we will. Your time is valuable — we respect it.",
  },
];

export default function Guarantee() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-dark overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-yellow/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Big guarantee badge */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow/10 border-2 border-yellow/30 rounded-full mb-6">
            <ShieldCheck className="w-10 h-10 text-yellow" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our <span className="text-yellow">Guarantee</span> to You
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We don't just say we're good — we back it up. Every job, every time.
          </p>
        </div>

        {/* Guarantee Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((item, index) => (
            <div
              key={item.title}
              className={`group relative bg-dark-50 border border-dark-200 rounded-2xl p-6 transition-all duration-700 hover:border-yellow/50 hover:-translate-y-2 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="w-14 h-14 bg-yellow/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-yellow/20 transition-colors duration-300">
                <item.icon className="w-7 h-7 text-yellow transition-transform duration-500 group-hover:rotate-12" />
              </div>
              <h3 className="text-white text-lg font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
              <div className="absolute inset-0 rounded-2xl bg-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-12 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <a
            href="tel:+15550000000"
            className="group inline-flex items-center gap-3 bg-yellow text-dark font-bold px-10 py-5 rounded-xl text-lg transition-all duration-300 hover:shadow-glow-strong hover:-translate-y-1"
          >
            <ShieldCheck className="w-6 h-6" />
            Get Your Free Estimate Today
          </a>
          <p className="text-gray-500 text-sm mt-4">
            No obligation. No pressure. Just honest service.
          </p>
        </div>
      </div>
    </section>
  );
}
