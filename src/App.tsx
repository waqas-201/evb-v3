import { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './components/theme/theme-provider';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';

// Lazy load other pages
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ClientsPage = lazy(() => import('./pages/ClientsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

import CookieConsent from './components/common/CookieConsent';
import WhatsAppWidget from './components/common/WhatsAppWidget';

function App() {
  const location = useLocation();
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setShowCookieConsent(true);
    }
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowCookieConsent(false);
  };

  return (
    <ThemeProvider defaultTheme="light" storageKey="elegant-events-theme">
      <Layout>
        <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/clients" element={<ClientsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
        {showCookieConsent && <CookieConsent onAccept={handleAcceptCookies} />}
        <WhatsAppWidget phoneNumber="0345-8867786" />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
