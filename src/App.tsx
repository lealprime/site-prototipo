import Navbar from './components/Navbar';
import Problems from './sections/Problems';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import PorQueEscolher from './sections/PorQueEscolher';
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
        <Services />
        <Areas />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
