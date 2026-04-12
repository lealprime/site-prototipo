import { useEffect, useRef, useState } from 'react';
import {
  Zap,
  Wrench,
  LayoutGrid,
  Wind,
  Lightbulb,
  FileCheck,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Instalação Elétrica',
    description:
      'Instalações residenciais e comerciais com material de qualidade e segurança.',
  },
  {
    icon: Wrench,
    title: 'Manutenção Preventiva',
    description:
      'Prevenção de falhas e curtos-circuitos com inspeções regulares.',
  },
  {
    icon: LayoutGrid,
    title: 'Troca de Quadro de Distribuição',
    description:
      'Atualização e dimensionamento correto para sua demanda elétrica.',
  },
  {
    icon: Wind,
    title: 'Instalação de Ar-Condicionado',
    description:
      'Instalação elétrica dedicada para splits e centrais de ar.',
  },
  {
    icon: Lightbulb,
    title: 'Iluminação e Tomadas',
    description:
      'Projetos de iluminação, instalação de spots, luminárias e tomadas.',
  },
  {
    icon: FileCheck,
    title: 'Laudo Elétrico',
    description:
      'Laudos técnicos e certificações de conformidade elétrica.',
  },
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

  const scrollToSection = () => {
    const element = document.querySelector('#agendamento');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="servicos"
      ref={sectionRef}
      className="relative py-24 bg-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Nossos <span className="text-yellow">Serviços</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Oferecemos soluções completas em elétrica para residências e
            empresas em São Paulo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative bg-dark-50 border border-dark-200 rounded-2xl p-6 transition-all duration-700 cursor-pointer ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              } ${
                hoveredIndex === index
                  ? 'border-yellow/50 scale-[1.02]'
                  : 'hover:border-yellow/30'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={scrollToSection}
            >
              {/* Circuit Pattern Background */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 400 300"
                  fill="none"
                >
                  <path
                    d="M0 150 H100 L120 130 L180 130 L200 150 H400"
                    stroke="rgba(245, 197, 24, 0.1)"
                    strokeWidth="1"
                    fill="none"
                    className="animate-dash"
                  />
                  <path
                    d="M0 200 H80 L100 180 L300 180 L320 200 H400"
                    stroke="rgba(245, 197, 24, 0.1)"
                    strokeWidth="1"
                    fill="none"
                  />
                  <circle
                    cx="120"
                    cy="130"
                    r="4"
                    fill="rgba(245, 197, 24, 0.2)"
                  />
                  <circle
                    cx="320"
                    cy="200"
                    r="4"
                    fill="rgba(245, 197, 24, 0.2)"
                  />
                </svg>
              </div>

              {/* Icon */}
              <div className="relative w-12 h-12 bg-yellow/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-yellow/20 transition-all duration-300">
                <service.icon className="w-6 h-6 text-yellow transition-transform duration-500 group-hover:scale-110" />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-white text-lg font-semibold mb-3 group-hover:text-yellow transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-yellow text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span>Saiba mais</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow/0 via-yellow/10 to-yellow/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
