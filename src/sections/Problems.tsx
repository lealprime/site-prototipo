import { useEffect, useRef, useState } from 'react';
import { AlertTriangle, Zap, Clock, Shield } from 'lucide-react';

const problems = [
  {
    icon: Zap,
    title: 'Quedas de energia frequentes',
    description: 'Disjuntor caindo toda hora? Isso é sinal de problema sério no seu sistema elétrico.',
  },
  {
    icon: AlertTriangle,
    title: 'Tomadas e interruptores queimados',
    description: 'Cheiro de queimado ou faíscas? Não espere um incêndio para agir.',
  },
  {
    icon: Clock,
    title: 'Espera eterna por eletricista',
    description: 'Ligou e ninguém atendeu? Com a gente você tem resposta em minutos, não em dias.',
  },
  {
    icon: Shield,
    title: 'Medo de ser enganado',
    description: 'Orçamento surpresa no final? Aqui você sabe o valor antes de começar.',
  },
  {
    icon: Zap,
    title: 'Fiação antiga ou mal feita',
    description: 'Instalações antigas podem causar curto e risco de incêndio sem aviso.',
  },
  {
    icon: AlertTriangle,
    title: 'Conta de luz muito alta',
    description: 'Pode haver desperdício ou problema oculto no sistema elétrico da sua casa.',
  },
];

export default function Problems() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="relative py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block bg-red-500/10 text-red-400 text-sm font-medium px-4 py-2 rounded-full mb-4">
            PROBLEMAS COMUNS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Você está passando por <span className="text-red-400">isso?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Muitos brasileiros enfrentam esses problemas diariamente. A boa notícia é que temos a solução.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className={`flex items-start gap-4 bg-dark-50 border border-dark-200 rounded-xl p-4 transition-all duration-500 hover:border-red-400/50 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 5 + 20}ms` }}
            >
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <problem.icon className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">{problem.title}</h3>
                <p className="text-gray-400 text-sm">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <button
            onClick={scrollToContact}
            className="bg-yellow text-dark font-bold px-5 py-3 rounded-xl text-lg transition-all duration-300 hover:shadow-glow-strong hover:-translate-y-1"
          >
            Resolver meu problema agora
          </button>
          <p className="text-gray-500 text-sm mt-3">
            Atendimento no mesmo dia • Resposta em até 15 min
          </p>
        </div>
      </div>
    </section>
  );
}
