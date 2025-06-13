import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Capabilities } from './components/Capabilities';
import { Showcase } from './components/Showcase';
import { Technology } from './components/Technology';
import { Process } from './components/Process';
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
    <div className="min-h-screen bg-obsidian cursor-luxury">
      <Navigation />
      <Hero />
      <Capabilities />
      <Showcase />
      <Technology />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
