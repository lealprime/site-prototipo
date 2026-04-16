import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Shield, Clock, Zap, Phone } from 'lucide-react';

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 25;
        const y = (e.clientY - rect.top - rect.height / 2) / 25;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/50" />
      </div>

      {/* Electric Particles Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 bg-yellow/10 border border-yellow/30 rounded-full px-4 py-2 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              <Shield className="w-4 h-4 text-yellow" />
              <span className="text-yellow text-sm font-medium">
                LICENCIADO & CERTIFICADO
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              Eletricista
              <br />
              Profissional
              <br />
              <span className="text-yellow">em São Paulo</span>
            </h1>

            {/* Subheadline */}
            <p
              className={`text-gray-400 text-lg max-w-lg transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.6s' }}
            >
              Instalações, reparos e manutenções elétricas com segurança e
              agilidade. Atendimento rápido, preço justo e garantia de serviço.
            </p>

            {/* CTA Button */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.8s' }}
            >
              <button
                onClick={() => scrollToSection('#agendamento')}
                className="group bg-yellow text-dark font-semibold px-8 py-4 rounded-xl text-base transition-all duration-300 hover:shadow-glow-strong hover:-translate-y-1 flex items-center gap-2"
              >
                Agendar Agora
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollToSection('#servicos')}
                className="border border-gray-600 text-white font-medium px-8 py-4 rounded-xl text-base transition-all duration-300 hover:border-yellow hover:text-yellow"
              >
                Ver Serviços
              </button>
            </div>

            <div
  className={`pt-8 border-t border-gray-800 transition-all duration-700 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`}
  style={{ transitionDelay: '1s' }}
>
  <div className="grid grid-cols-3 gap-6">
    
    <div className="text-center">
      <div className="flex items-center justify-center gap-2 mb-1">
        <Clock className="w-5 h-5 text-yellow-400" />
        <span className="text-2xl sm:text-3xl font-bold text-white">30-60min</span>
      </div>
      <p className="text-gray-500 text-sm">Tempo de resposta</p>
    </div>

    <div className="text-center border-x border-gray-800">
      <div className="flex items-center justify-center gap-2 mb-1">
        <Zap className="w-5 h-5 text-yellow-400" />
        <span className="text-2xl sm:text-3xl font-bold text-white">24h</span>
      </div>
      <p className="text-gray-500 text-sm">Disponibilidade</p>
    </div>

    <div className="text-center">
      <div className="flex items-center justify-center gap-2 mb-1">
        <Phone className="w-5 h-5 text-yellow-400" />
        <span className="text-2xl sm:text-3xl font-bold text-white">100%</span>
      </div>
      <p className="text-gray-500 text-sm">Garantia</p>
    </div>

  </div>
</div>
          </div>

          {/* Hero Image */}
          <div
            ref={imageRef}className={`relative hidden md:flex justify-center lg:justify-end transition-all duration-1000 ${
            
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '0.5s' }}
          >
            <div
              className="relative"
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-10 bg-yellow/20 rounded-full blur-3xl opacity-50" />
              
              {/* Image */}
              <img
                src="/images/electrician-hero.png"
                alt="Eletricista Profissional"
                className="relative z-10 w-full max-w-sm lg:max-w-md h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent z-10" />
    </section>
  );
}
