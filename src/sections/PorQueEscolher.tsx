import { useEffect, useRef } from 'react';
import {
  Award,
  Clock,
  BadgeCheck,
  Shield,
  Phone,
  ThumbsUp,
  Wallet,
  Headphones
} from 'lucide-react';

const diferenciais = [
  {
    icon: Award,
    titulo: 'Profissional Qualificado',
    descricao: 'Técnico certificado pelo SENAI com certificação NR-10 em segurança elétrica.',
  },
  {
    icon: Clock,
    titulo: 'Atendimento Rápido',
    descricao: 'Resposta em até 30 minutos para emergências e agendamento flexível.',
  },
  {
    icon: Wallet,
    titulo: 'Preço Justo',
    descricao: 'Orçamento transparente sem surpresas. Parcelamento disponível.',
  },
  {
    icon: Shield,
    titulo: 'Garantia Total',
    descricao: 'Todos os serviços com garantia de até 1 ano e nota fiscal.',
  },
  {
    icon: Phone,
    titulo: 'Disponível 24h',
    descricao: 'Atendimento de emergência todos os dias, inclusive feriados.',
  },
  {
    icon: BadgeCheck,
    titulo: 'Material de Qualidade',
    descricao: 'Utilizamos apenas materiais certificados e de marcas reconhecidas.',
  },
];

const stats = [
  { valor: '10+', label: 'Anos de experiência' },
  { valor: '2.500+', label: 'Serviços realizados' },
  { valor: '100%', label: 'Clientes satisfeitos' },
  { valor: '24h', label: 'Disponibilidade' },
];

export default function PorQueEscolher() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-200', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="por-que-escolher"
      className="relative py-12 lg:py-14 bg-dark"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Por que me <span className="text-yellow-400">escolher?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Diferenciais que garantem seu segurança e satisfação em cada serviço
          </p>
        </div>

        {/* Stats Row */}
        <div className="reveal opacity-0 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-dark-50 border border-gray-800 rounded-xl p-6 text-center hover:border-yellow-500/30 transition-all duration-300"
              >
                <p className="text-3xl lg:text-3xl font-bold text-yellow-400 mb-3">
                  {stat.valor}
                </p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Differentials Grid */}
        <div className="reveal opacity-0 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {diferenciais.map((diferencial, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 p-4 bg-dark-50 border border-gray-800 rounded-xl hover:border-yellow-500/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                <diferencial.icon className="w-6 h-6 text-yellow-400" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-white font-semibold mb-0">
                  {diferencial.titulo}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {diferencial.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="reveal opacity-0 mt-12 flex flex-wrap justify-center gap-3">
          <div className="flex items-center gap-2 bg-dark-50 border border-gray-800 rounded-full px-4 py-2">
            <ThumbsUp className="w-3 h-3 text-yellow-400" />
            <span className="text-gray-400 text-sm">Recomendado por clientes</span>
          </div>
          <div className="flex items-center gap-2 bg-dark-50 border border-gray-800 rounded-full px-4 py-2">
            <Headphones className="w-3 h-3 text-yellow-400" />
            <span className="text-gray-400 text-sm">Suporte pós-serviço</span>
          </div>
          <div className="flex items-center gap-2 bg-dark-50 border border-gray-800 rounded-full px-4 py-2">
            <Shield className="w-3 h-3 text-yellow-400" />
            <span className="text-gray-400 text-sm">Segurança garantida</span>
          </div>
        </div>
      </div>
    </section>
  );
}
