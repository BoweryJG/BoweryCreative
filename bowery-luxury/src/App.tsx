import { } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ClientLogos } from './components/ClientLogos';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bowery-white">
      <Navigation />
      <Hero />
      <ClientLogos />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
