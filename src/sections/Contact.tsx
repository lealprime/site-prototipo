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
    label: 'Ligar agora',
    value: '(11) 99999-9999',
    href: 'tel:+5511999999999',
  },
  {
    icon: MessageCircle,
    label: 'Chamar no WhatsApp',
    value: 'Atendimento imediato',
    href: 'https://wa.me/5511999999999',
    isExternal: true,
  },
  {
    icon: Mail,
    label: 'Enviar e-mail',
    value: 'contato@carloseletrica.com',
    href: 'mailto:contato@carloseletrica.com',
  },
];

const businessHours = [
  { day: 'Segunda a Sexta', hours: '7h às 19h' },
  { day: 'Sábado', hours: '8h às 14h' },
  { day: 'Domingo', hours: 'Emergências', destaque: true },
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

    if (sectionRef.current) observer.observe(sectionRef.current);
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
      className="relative py-24 bg-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Agendamento <span className="text-yellow">& Contato</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Entre em contato agora e resolva seu problema com rapidez e segurança.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">

          {/* LEFT */}
          <div className="space-y-6 flex flex-col justify-between h-full">

            {/* Title */}
            <div>
              <h3 className="text-white text-xl font-semibold">
                Contato Direto
              </h3>

              <p className="text-gray-400 text-sm mt-2 max-w-sm">
                Fale comigo agora e receba um retorno rápido para resolver seu problema sem complicação.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target={method.isExternal ? '_blank' : undefined}
                  rel={method.isExternal ? 'noopener noreferrer' : undefined}
                  className={`group flex items-center justify-between bg-dark-50 border border-dark-200 rounded-xl p-4 hover:border-yellow/40 transition ${
                    isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-yellow/10 rounded-xl flex items-center justify-center">
                      <method.icon className="w-5 h-5 text-yellow" />
                    </div>

                    <div>
                      <p className="text-gray-500 text-sm">{method.label}</p>
                      <p className="text-white text-sm font-medium">{method.value}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {method.value.includes('@') && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          copyToClipboard(method.value);
                        }}
                        className="p-2 text-gray-400 hover:text-yellow"
                      >
                        {copiedText === method.value ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    )}

                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-yellow transition" />
                  </div>
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="bg-dark-50 border border-dark-200 rounded-xl p-4">
              <p className="text-gray-500 text-xs mb-4">Redes sociais</p>

              <div className="flex gap-4">
                <a className="flex items-center gap-3 flex-1 bg-dark border border-dark-200 rounded-lg p-2.5 hover:border-yellow/30 transition">
                  <Instagram className="w-5 h-5 text-yellow" />
                  <span className="text-white text-sm">@carloseletrica</span>
                </a>

                <a className="flex items-center gap-3 flex-1 bg-dark border border-dark-200 rounded-lg p-2.5 hover:border-yellow/30 transition">
                  <Facebook className="w-5 h-5 text-yellow" />
                  <span className="text-white text-sm">/carloseletrica</span>
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT */}
          <div className="space-y-4 mt-6 lg:mt-24">

            {/* Hours */}
            <div className="bg-dark-50 border border-dark-200 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-yellow/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-yellow" />
                </div>
                <h3 className="text-white font-semibold">
                  Horários de Atendimento
                </h3>
              </div>

              {businessHours.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between py-2 border-b border-dark-200 last:border-0"
                >
                  <span className="text-gray-400 text-sm">{item.day}</span>
                  <span className={`text-sm font-medium ${
                    item.destaque ? 'text-yellow' : 'text-white'
                  }`}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>

            {/* Location */}
            <div className="bg-dark-50 border border-dark-200 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-yellow/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-yellow" />
                </div>
                <h3 className="text-white font-semibold">Localização</h3>
              </div>

              <p className="text-gray-400 text-sm mb-4">
                Atendimento rápido em toda a região. Deslocamento incluso.
              </p>

              <div className="flex flex-wrap gap-2">
                {locations.map((loc, i) => (
                  <span
                    key={i}
                    className="bg-dark text-gray-300 text-xs px-3 py-1.5 rounded-full border border-dark-200"
                  >
                    {loc}
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