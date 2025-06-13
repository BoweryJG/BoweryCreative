import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Work } from './components/Work';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { ClientLogos } from './components/ClientLogos';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { trackPageView } from './lib/analytics';

function App() {
  useEffect(() => {
    // Track initial page view
    trackPageView(window.location.pathname);

    // Track navigation changes
    const handleLocationChange = () => {
      trackPageView(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  return (
    <div className="min-h-screen bg-bowery-white">
      <Navigation />
      <Hero />
      <About />
      <Work />
      <Services />
      <Process />
      <ClientLogos />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
