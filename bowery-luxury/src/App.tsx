import { } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ClientLogos } from './components/ClientLogos';
import { Services } from './components/Services';
import { SphereOS } from './components/SphereOS';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-luxury-black">
      <Navigation />
      <Hero />
      <ClientLogos />
      <Services />
      <SphereOS />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
