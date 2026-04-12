import { useEffect, useRef, useState } from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  Instagram,
  Facebook,
  Clock,
  MapPin,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react';

const contactMethods = [
  {
    icon: Phone,
    label: 'Ligar ou WhatsApp',
    value: '(11) 99999-9999',
    href: 'tel:+5511999999999',
    color: 'bg-green-500/10 text-green-500',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp Direto',
    value: 'Chamar no WhatsApp',
    href: 'https://wa.me/5511999999999',
    color: 'bg-green-500/10 text-green-500',
    isWhatsApp: true,
  },
  {
    icon: Mail,
    label: 'Enviar e-mail',
    value: 'contato@carloseletrica.com',
    href: 'mailto:contato@carloseletrica.com',
    color: 'bg-yellow/10 text-yellow',
  },
  {
    icon: Instagram,
    label: 'Siga no Instagram',
    value: '@carloseletrica',
    href: 'https://instagram.com/carloseletrica',
    color: 'bg-pink-500/10 text-pink-500',
  },
  {
    icon: Facebook,
    label: 'Curta no Facebook',
    value: '/carloseletrica',
    href: 'https://facebook.com/carloseletrica',
    color: 'bg-blue-500/10 text-blue-500',
  },
];

const businessHours = [
  { day: 'Segunda a Sexta', hours: '7h às 19h' },
  { day: 'Sábado', hours: '8h às 14h' },
  { day: 'Domingo', hours: 'Fechado' },
];

const locations = [
  'São Paulo',
  'Guarulhos',
  'Osasco',
  'Santo André',
  'São Bernardo',
  'Barueri',
];

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);
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

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section
      id="agendamento"
      ref={sectionRef}
      className="relative py-24 bg-dark overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow/5 rounded-full blur-3xl" />
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
            Agendamento <span className="text-yellow">& Contato</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Entre em contato conosco para agendar seu serviço ou tirar dúvidas.
            Estamos prontos para atender você!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Contact Methods */}
          <div
            className={`space-y-4 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <h3 className="text-white text-xl font-semibold mb-0">
              Contato Direto
            </h3>

            <div className="space-y-3">
              {contactMethods.map((method, index) => (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.isWhatsApp ? '_blank' : undefined}
                  rel={method.isWhatsApp ? 'noopener noreferrer' : undefined}
                  className={`group flex items-center justify-between bg-dark-50 border border-dark-200 rounded-xl p-4 transition-all duration-500 hover:border-yellow/50 ${
                    isVisible
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${method.color}`}
                    >
                      <method.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">{method.label}</p>
                      <p className="text-white font-medium">{method.value}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {!method.isWhatsApp && method.value.includes('@') && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          copyToClipboard(method.value);
                        }}
                        className="p-2 text-gray-400 hover:text-yellow transition-colors duration-300"
                      >
                        {copiedText === method.value ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    )}
                    <ExternalLink className="w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Business Hours & Location - Alinhados */}
          <div className="space-y-4 mt-11 flex flex-col justify-start h-full">
            {/* Business Hours */}
            <div
              className={`bg-dark-50 border border-dark-200 rounded-2xl p-6 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-yellow/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-yellow" />
                </div>
                <h3 className="text-white text-lg font-semibold">
                  Horários de Atendimento
                </h3>
              </div>

              <div className="space-y-3">
                {businessHours.map((item) => (
                  <div
                    key={item.day}
                    className="flex justify-between items-center py-2 border-b border-dark-200 last:border-0"
                  >
                    <span className="text-gray-400 text-sm">{item.day}</span>
                    <span
                      className={`text-sm font-medium ${
                        item.hours === 'Fechado'
                          ? 'text-red-400'
                          : 'text-white'
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div
              className={`bg-dark-50 border border-dark-200 rounded-2xl p-6 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-yellow/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-yellow" />
                </div>
                <h3 className="text-white text-lg font-semibold">
                  Localização
                </h3>
              </div>

              <p className="text-gray-400 text-sm mb-4">
                Atendemos em toda a Grande São Paulo e região metropolitana.
                Serviço rápido e deslocamento incluso.
              </p>

              <div className="flex flex-wrap gap-2">
                {locations.map((location) => (
                  <span
                    key={location}
                    className="bg-dark-100 text-gray-300 text-xs px-3 py-1.5 rounded-full"
                  >
                    {location}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
