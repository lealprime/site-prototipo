import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ExternalLink, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Fernanda Oliveira',
    location: 'Vila Mariana, SP',
    rating: 5,
    text: 'Excelente profissional! Resolveu o problema elétrico da minha casa em poucas horas.',
    date: '2 semanas atrás',
    service: 'Reparo de chuveiro',
    initial: 'F',
  },
  {
    name: 'Ricardo Mendes',
    location: 'Pinheiros, SP',
    rating: 5,
    text: 'Carlos trocou todo o quadro do escritório. Trabalho limpo e organizado.',
    date: '1 mês atrás',
    service: 'Troca de quadro',
    initial: 'R',
  },
  {
    name: 'Ana Paula Costa',
    location: 'Moema, SP',
    rating: 5,
    text: 'Instalação rápida e bem feita. Explicou tudo com clareza.',
    date: '3 semanas atrás',
    service: 'Instalação de ar-condicionado',
    initial: 'A',
  },
  {
    name: 'João Silva',
    location: 'Brooklin, SP',
    rating: 5,
    text: 'Atendimento emergencial muito rápido. Resolveu tudo na hora.',
    date: '5 dias atrás',
    service: 'Emergência 24h',
    initial: 'J',
  },
  {
    name: 'Maria Santos',
    location: 'Jardins, SP',
    rating: 5,
    text: 'Instalação elétrica completa perfeita. Muito profissional.',
    date: '2 meses atrás',
    service: 'Instalação completa',
    initial: 'M',
  },
  {
    name: 'Pedro Henrique',
    location: 'Santana, SP',
    rating: 5,
    text: 'Troca de tomadas rápida e segura.',
    date: '1 semana atrás',
    service: 'Troca de tomadas',
    initial: 'P',
  },

];

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);
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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const visibleTestimonials = showAll
    ? testimonials
    : testimonials.slice(0, 3);

  return (
    <section
      id="avaliacoes"
      ref={sectionRef}
      className="relative py-24 bg-black overflow-hidden"
    >
      {/* LINHA TOPO */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            O que nossos <span className="text-yellow">clientes</span> dizem
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {visibleTestimonials.map((item, index) => (
            <div
              key={index}
              className={`bg-dark-50 border border-dark-200 rounded-2xl p-6 transition-all duration-500 hover:border-yellow/30 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow/20 rounded-full flex items-center justify-center">
                    <span className="text-yellow font-bold">{item.initial}</span>
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold">{item.name}</h4>
                    <p className="text-gray-500 text-xs">{item.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow fill-yellow" />
                  <span className="text-white text-sm">{item.rating}</span>
                </div>
              </div>

              <p className="text-gray-400 text-sm mb-4">"{item.text}"</p>
              <p className="text-gray-600 text-xs">{item.date}</p>
            </div>
          ))}
        </div>

        {/* Botão */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="border border-yellow/30 text-yellow px-8 py-3 rounded-lg hover:bg-yellow/10 flex items-center gap-2 mx-auto"
          >
            {showAll ? 'Ver menos avaliações' : 'Ver todas as avaliações'}
            <ChevronDown className={`w-5 h-5 ${showAll ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Link */}
        <div className="text-center mt-6">
          <a href="#contato" className="text-gray-400 hover:text-yellow text-sm flex items-center justify-center gap-2">
            Ver todas as avaliações no Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* LINHA EMBAIXO */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />
    </section>
  );
}