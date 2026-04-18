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
  {
    name: 'Luciana Ferreira',
    location: 'Lapa, SP',
    rating: 5,
    text: 'Projeto de iluminação ficou excelente. Ambiente valorizado.',
    date: '3 meses atrás',
    service: 'Iluminação',
    initial: 'L',
  },
  {
    name: 'Marcos Vinícius',
    location: 'Tatuapé, SP',
    rating: 5,
    text: 'Automação da casa perfeita. Tudo funcionando no celular.',
    date: '1 mês atrás',
    service: 'Automação',
    initial: 'M',
  },
  {
    name: 'Carolina Lima',
    location: 'Itaim Bibi, SP',
    rating: 5,
    text: 'Manutenção preventiva essencial. Identificou riscos sérios.',
    date: '2 semanas atrás',
    service: 'Manutenção',
    initial: 'C',
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
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            O que nossos <span className="text-yellow">clientes</span> dizem
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {visibleTestimonials.map((item, index) => (
            <div
              key={index}
              className={`bg-dark-50 border border-dark-200 rounded-2xl p-6 transition-all duration-500 hover:border-yellow/30 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow/20 rounded-full flex items-center justify-center">
                    <span className="text-yellow font-bold">
                      {item.initial}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-white text-sm font-semibold">
                      {item.name}
                    </h4>
                    <p className="text-gray-500 text-xs">
                      {item.location}
                    </p>
                  </div>
                </div>

                {/* Nota com estrela */}
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow fill-yellow" />
                  <span className="text-white text-sm font-medium">
                    {item.rating}
                  </span>
                </div>
              </div>

              {/* Tag */}
              <div className="mb-3">
                <span className="text-xs text-yellow bg-yellow/10 px-2 py-1 rounded-full">
                  {item.service}
                </span>
              </div>

              {/* Texto */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                "{item.text}"
              </p>

              {/* Data */}
              <p className="text-gray-600 text-xs">{item.date}</p>
            </div>
          ))}
        </div>

        {/* Botão */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="border border-yellow/30 text-yellow px-8 py-3 rounded-lg hover:bg-yellow/10 transition-all flex items-center gap-2 mx-auto"
          >
            {showAll ? 'Ver menos avaliações' : 'Ver todas as avaliações'}
            <ChevronDown
              className={`w-5 h-5 transition-transform ${
                showAll ? 'rotate-180' : ''
              }`}
            />
          </button>
        </div>

        {/* Link */}
        <div className="text-center mt-6">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow text-sm transition-colors"
          >
            Ver todas as avaliações no Google

            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}