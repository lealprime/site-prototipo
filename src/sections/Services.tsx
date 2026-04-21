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
  {
    icon: Zap,
    title: 'Aumento de Carga',
    description:
      'Adequação da rede elétrica para suportar novos equipamentos.',
  },
  {
    icon: Wrench,
    title: 'Troca de Fiação',
    description:
      'Substituição de fios antigos garantindo mais segurança.',
  },
];

export default function Services() {
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
      className="relative py-24 bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ease-out transform ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Nossos <span className="text-yellow">Serviços</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Oferecemos soluções completas em elétrica para residências e empresas.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              onClick={scrollToSection}
              className={`group relative rounded-xl p-3 md:p-4 cursor-pointer 
              bg-dark-50 border border-gray-800 
              transition-all duration-500 ease-out transform
              hover:-translate-y-1 hover:border-yellow/30
              active:scale-[0.98]
              ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-yellow/10 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-yellow/20">
                <service.icon className="w-6 h-6 text-yellow transition-transform duration-500 ease-out group-hover:scale-110" />
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold text-base mb-2 transition-colors duration-300 group-hover:text-yellow">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Saiba mais */}
              <div className="mt-4 pt-4 border-t border-gray-800/50 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                <div className="text-yellow text-sm font-medium flex items-center gap-2 group/btn">
                  <span>Saiba mais</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-4">Não encontrou seu problema?</p>
          <button
            onClick={scrollToSection}
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-xl text-sm flex items-center justify-center mx-auto gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-[0.98] group"
          >
            Fale comigo agora
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
}