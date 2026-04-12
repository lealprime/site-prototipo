import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { name: 'Serviços', href: '#servicos' },
  { name: 'Áreas', href: '#areas' },
  { name: 'Avaliações', href: '#avaliacoes' },
  { name: 'Agendamento', href: '#agendamento' },
  { name: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-dark/90 backdrop-blur-lg shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2 group"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="relative">
                <Zap className="w-6 h-6 text-yellow transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-yellow/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="text-white font-semibold text-lg">
                Carlos <span className="text-yellow">Elétrica</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="relative text-gray-300 hover:text-white text-sm font-medium transition-colors duration-300 group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button
                onClick={() => scrollToSection('#agendamento')}
                className="bg-yellow text-dark font-semibold px-5 py-2.5 rounded-lg text-sm transition-all duration-300 hover:shadow-glow hover:-translate-y-0.5"
              >
                Agendar Agora
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-20 left-4 right-4 bg-dark-50 rounded-2xl p-6 shadow-2xl transition-all duration-500 ${
            isMobileMenuOpen
              ? 'translate-y-0 opacity-100'
              : '-translate-y-10 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-left text-gray-300 hover:text-yellow text-base font-medium py-2 transition-colors duration-300"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#agendamento')}
              className="bg-yellow text-dark font-semibold px-5 py-3 rounded-lg text-center mt-2 transition-all duration-300 hover:shadow-glow"
            >
              Agendar Agora
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
