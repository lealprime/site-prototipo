import { ArrowRight, Clock, Phone, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CTABannerProps {
  variant?: 'default' | 'compact';
  text?: string;
  subtext?: string;
}

export default function CTABanner({ 
  variant = 'default',
  text = 'Entre em contato agora',
  subtext = 'Resposta em até 30 minutos'
}: CTABannerProps) {
  if (variant === 'compact') {
    return (
      <div className="bg-neutral-950 border-y border-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8">
            <div className="flex items-center gap-2 text-yellow-400">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">Resposta rápida</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-yellow-500/30" />
            <div className="flex items-center gap-2 text-yellow-400">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Disponível hoje</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-yellow-500/30" />
            <div className="flex items-center gap-2 text-yellow-400">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Atendimento 24h</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-950 border-y border-gray-800 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
              {text}
            </h3>
            <p className="text-gray-400">{subtext}</p>
          </div>
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-6 text-base group whitespace-nowrap"
          >
            Falar agora
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
}
