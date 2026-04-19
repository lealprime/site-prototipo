import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Problems from './sections/Problems';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import PorQueEscolher from './sections/PorQueEscolher';
import CTABanner from '@/components/CTABanner';
import Services from './sections/Services';
import Areas from './sections/Areas';
import Testimonials from './sections/Testimonials';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Problems />
        <PorQueEscolher />

        {/* CTA Banner */}
        <CTABanner
          text="Entre em contato agora"
          subtext="Resposta em até 30 minutos para emergências" />

        <Services />
        <Areas />

        {/* CTA Banner */}
        <CTABanner
          text="Disponível hoje para atender você"
          subtext="Não espere seu problema piorar, entre em contato agora" />

        <Testimonials />

        <About />

        {/* CTA Banner Compacto */}
        <CTABanner variant="compact" />

        <Contact />
      </main>
      <Footer />
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-lg hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center animate-pulse-glow"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}

export default App;
