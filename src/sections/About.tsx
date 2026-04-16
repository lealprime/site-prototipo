import { useEffect, useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react';

const qualifications = [
  'Formado em Eletrotécnica pelo SENAI',
  'Certificação NR-10 em segurança',
  'Mais de 10 anos de experiência',
  'Atendimento 24 horas para emergências',
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageRevealed, setImageRevealed] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setImageRevealed(true), 500);
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
    <section ref={sectionRef} className="relative py-16 lg:py-20 bg-dark overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative">
              {/* Reveal Mask */}
              <div
                className="absolute inset-0 bg-dark z-10 transition-transform duration-1000 ease-out origin-left"
                style={{
                  transform: imageRevealed
                    ? 'scaleX(0)'
                    : 'scaleX(1)',
                }}
              />

              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden max-w-sm mx-auto lg:max-w-md">
                <img
                  src="/images/carlos-silva.jpg"
                  alt="Carlos Silva - Eletricista Profissional"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Sobre o <span className="text-yellow">Profissional</span>
              </h2>
            </div>

            <div
              className={`space-y-4 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <p className="text-gray-100 text-base leading-relaxed">
                Olá, eu sou o <span className="text-yellow font-semibold">Carlos Silva</span>{' '}
                — eletricista licenciado com mais de 10 anos de experiência
                atendendo toda a região metropolitana de São Paulo. Fundei a
                Carlos Elétrica com uma missão simples: entregar serviços
                elétricos honestos e de alta qualidade a preços justos.
              </p>

              <p className="text-gray-400 leading-relaxed">
                Após me formar em Eletrotécnica pelo SENAI e trabalhar em uma das
                principais empresas de instalação elétrica de SP, decidi seguir
                carreira independente para oferecer a cada cliente a atenção
                personalizada que merece. Cada trabalho recebe meu foco total, de
                um simples reparo a uma instalação completa.
              </p>

              <p className="text-gray-400 leading-relaxed">
                Quando não estou trabalhando, você me encontra em treinamentos de
                atualização técnica ou passando tempo com a família. Acredito em
                fazer certo da primeira vez — e garanto 100% de satisfação em cada
                projeto.
              </p>
            </div>

            {/* Qualifications */}
            <div
              className={`grid sm:grid-cols-2 gap-3 pt-4 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              {qualifications.map((qual, index) => (
                <div
                  key={qual}
                  className="flex items-center gap-3 text-gray-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-yellow flex-shrink-0" />
                  <span className="text-sm">{qual}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
