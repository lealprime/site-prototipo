import { useEffect, useRef, useState } from 'react';
import { Star, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Fernanda Oliveira',
    role: 'Residencial',
    initial: 'F',
    rating: 5,
    text: 'Excelente profissional! Resolveu o problema elétrico da minha casa em poucas horas. Super atencioso e pontual.',
  },
  {
    name: 'Ricardo Mendes',
    role: 'Comercial',
    initial: 'R',
    rating: 5,
    text: 'Carlos trocou todo o quadro de distribuição do meu escritório. Trabalho limpo, organizado e com garantia. Recomendo!',
  },
  {
    name: 'Ana Paula Costa',
    role: 'Residencial',
    initial: 'A',
    rating: 5,
    text: 'Ótimo atendimento. Instalou o ar-condicionado rapidamente e explicou tudo sobre a parte elétrica. Voltarei a contratar.',
  },
];

export default function Testimonials() {
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

  return (
    <section
      id="avaliacoes"
      ref={sectionRef}
      className="relative py-24 bg-dark overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow/5 rounded-full blur-3xl" />
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
            O que nossos <span className="text-yellow">clientes</span> dizem
          </h2>
        </div>

        {/* Testimonials Grid - 3 cards side by side */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`bg-dark-50 border border-dark-200 rounded-2xl p-6 transition-all duration-700 hover:border-yellow/30 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              {/* Header with avatar and info */}
              <div className="flex items-center gap-4 mb-4">
                {/* Avatar with initial */}
                <div className="w-12 h-12 bg-yellow/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-yellow text-lg font-bold">
                    {testimonial.initial}
                  </span>
                </div>
                
                {/* Name and rating */}
                <div className="flex-1">
                  <h4 className="text-white font-semibold">
                    {testimonial.name}
                  </h4>
                  {/* Rating stars */}
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow fill-yellow"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial text */}
              <p className="text-gray-400 text-sm leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-yellow hover:underline transition-all duration-300"
            onClick={(e) => e.preventDefault()}
          >
            <span>Ver todas as avaliações no Google</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
