import { useEffect, useRef, useState } from 'react';
import { Shield, Clock, DollarSign, Headphones } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Profissionais Qualificados',
    description:
      'Equipe experiente e certificada, pronta para resolver seu problema com eficiência e segurança.',
  },
  {
    icon: Clock,
    title: 'Atendimento Rápido',
    description:
      'Resposta ágil e suporte imediato para sua necessidade elétrica.',
  },
  {
    icon: DollarSign,
    title: 'Preço Justo',
    description:
      'Transparência total nos valores, sem surpresas no orçamento.',
  },
  {
    icon: Headphones,
    title: 'Suporte Completo',
    description:
      'Acompanhamento do início ao fim, com garantia de satisfação.',
  },
];

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-dark overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Por que escolher{' '}
            <span className="text-yellow">nossos serviços?</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight Effect */}
          <div
            className="absolute pointer-events-none transition-opacity duration-300"
            style={{
              left: mousePosition.x - 150,
              top: mousePosition.y - 150,
              width: 300,
              height: 300,
              background:
                'radial-gradient(circle, rgba(245, 197, 24, 0.1) 0%, transparent 70%)',
              opacity: isVisible ? 1 : 0,
            }}
          />

          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative bg-dark-50 border border-dark-200 rounded-2xl p-6 transition-all duration-700 hover:border-yellow/50 hover:-translate-y-2 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-yellow/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-yellow/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-yellow transition-transform duration-500 group-hover:rotate-12" />
              </div>

              {/* Content */}
              <h3 className="text-white text-lg font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
