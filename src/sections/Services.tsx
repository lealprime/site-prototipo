import { useEffect, useRef, useState } from 'react';
import {
  Zap,
  Wrench,
  LayoutGrid,
  Wind,
  Lightbulb,
  FileCheck,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';

const services = [
  // ===== ORIGINAIS =====
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

  // ===== +6 NOVOS =====
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
  {
    icon: LayoutGrid,
    title: 'Instalação de DPS',
    description:
      'Proteção contra surtos elétricos e descargas atmosféricas.',
  },
  {
    icon: Wind,
    title: 'Emergência 24h',
    description:
      'Atendimento rápido para problemas elétricos urgentes.',
  },
  {
    icon: Lightbulb,
    title: 'Projeto de Iluminação',
    description:
      'Soluções modernas para valorizar seu ambiente.',
  },
  {
    icon: FileCheck,
    title: 'Automação Residencial',
    description:
      'Controle inteligente da sua casa pelo celular.',
  },
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);
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

  // ===== NOVA FUNÇÃO (TOGGLE CORRETO) =====
  const handleToggle = () => {
    if (visibleCount > 4) {
      setVisibleCount(4);

      setTimeout(() => {
        sectionRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    } else {
      setVisibleCount(12);
    }
  };

  return (
    <section
      id="servicos"
      ref={sectionRef}
      className="relative py-24 bg-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {services.slice(0, visibleCount).map((service, index) => (
            <div
              key={service.title}
              className={`group relative rounded-xl p-4 transition-all duration-300 cursor-pointer hover:-translate-y-1 bg-dark-50 border border-gray-800 hover:border-yellow/30 hover:shadow-glow ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}
              style={{ transitionDelay: `${index * 80}ms` }}
              onClick={scrollToSection}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-yellow/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow/20 transition-colors">
                <service.icon className="w-6 h-6 text-yellow group-hover:scale-110 transition-transform duration-500" />
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold text-base mb-2 group-hover:text-yellow transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Saiba mais (APENAS ESSE) */}
              <div className="mt-4 pt-4 border-t border-gray-800/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="text-yellow text-sm font-medium flex items-center gap-2 group/btn">
                  <span>Saiba mais</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTÃO AJUSTADO */}
        {services.length > 6 && (
          <div className="text-center mt-8">
            <button
              onClick={handleToggle}
              className="border border-yellow/30 text-yellow px-8 py-3 rounded-lg hover:bg-yellow/10 transition-all flex items-center gap-2 mx-auto"
            >
              {visibleCount > 6 ? 'Ver menos serviços' : 'Ver os nossos serviços'}
              <ChevronDown
                className={`w-5 h-5 transition-transform ${visibleCount > 6 ? 'rotate-180' : ''
                  }`}
              />
            </button>
          </div>
        )}

        {/* CTA (mantido) */}
        <div
          className={`mt-10 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div className="bg-dark-50 border border-dark-200 rounded-xl p-6 max-w-10xl mx-auto text-center">
            <h3 className="text-lg lg:text-xl font-semibold text-white mb-2">
              Não encontrou seu problema?
            </h3>

            <p className="text-gray-400 text-sm mb-4">
              Fale agora comigo e descubra como posso te ajudar.
            </p>

            <button
              onClick={scrollToSection}
              className="bg-yellow text-dark font-semibold px-6 py-3 rounded-lg text-sm flex items-center justify-center mx-auto gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Fale agora comigo
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}