import { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';

const areas = [
  'Centro',
  'Zona Norte',
  'Zona Sul',
  'Zona Leste',
  'Zona Oeste',
  'Grande ABC',
  'Guarulhos',
  'Osasco',
  'Taboão da Serra',
  'Barueri',
  'Cotia',
  'Carapicuíba',
];

export default function Areas() {
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
      id="areas"
      ref={sectionRef}
      className="relative py-16 bg-black overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />
      
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow/5 rounded-full blur-3xl" />
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
            Áreas de <span className="text-yellow">Atendimento</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Atuamos em toda a região metropolitana de São Paulo, levando
            qualidade e segurança até você.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {areas.map((area, index) => (
            <div
              key={area}
              className={`group flex items-center gap-3 bg-dark-50 border border-dark-200 rounded-xl px-3 py-3 transition-all duration-500 hover:border-yellow/50 hover:bg-yellow/5 cursor-default ${
                isVisible
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-90'
              }`}
              style={{ transitionDelay: `${index * 5 + 20}ms` }}
            >
              <div className="w-8 h-8 bg-yellow/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow/20 transition-colors duration-300">
                <MapPin className="w-4 h-4 text-yellow" />
              </div>
              <span className="text-white text-sm font-medium group-hover:text-yellow transition-colors duration-300">
                {area}
              </span>
            </div>
          ))}
        </div>

        {/* Map Illustration */}
        <div
          className={`mt-16 relative transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="relative bg-dark-50 border border-dark-200 rounded-2xl p-8 overflow-hidden">
            {/* Decorative Map Lines */}
            <svg
              className="absolute inset-0 w-full h-full opacity-10"
              viewBox="0 0 800 200"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Horizontal lines */}
              {[...Array(5)].map((_, i) => (
                <line
                  key={`h-${i}`}
                  x1="0"
                  y1={40 + i * 40}
                  x2="800"
                  y2={40 + i * 40}
                  stroke="#f5c518"
                  strokeWidth="1"
                  strokeDasharray="8 8"
                />
              ))}
              {/* Vertical lines */}
              {[...Array(10)].map((_, i) => (
                <line
                  key={`v-${i}`}
                  x1={80 + i * 80}
                  y1="0"
                  x2={80 + i * 80}
                  y2="200"
                  stroke="#f5c518"
                  strokeWidth="1"
                  strokeDasharray="8 8"
                />
              ))}
              {/* Connection nodes */}
              {[
                [120, 60],
                [280, 100],
                [440, 80],
                [600, 120],
                [720, 60],
                [200, 140],
                [520, 160],
              ].map(([x, y], i) => (
                <g key={`node-${i}`}>
                  <circle cx={x} cy={y} r="6" fill="#f5c518" />
                  <circle
                    cx={x}
                    cy={y}
                    r="12"
                    stroke="#f5c518"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.5"
                  >
                    <animate
                      attributeName="r"
                      values="12;18;12"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.5;0;0.5"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              ))}
              {/* Connection lines */}
              <path
                d="M120 60 L280 100 L440 80 L600 120"
                stroke="#f5c518"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M280 100 L200 140 L520 160"
                stroke="#f5c518"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>

            {/* Content */}
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 bg-yellow/10 border border-yellow/30 rounded-full px-4 py-1 mb-2">
                <MapPin className="w-4 h-4 text-yellow" />
                <span className="text-yellow text-sm font-medium">
                  São Paulo e Região Metropolitana
                </span>
              </div>
              <p className="text-gray-400 text-sm max-w-md mx-auto">
                Nossa equipe está pronta para atender em qualquer região da
                grande São Paulo com rapidez e eficiência.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
