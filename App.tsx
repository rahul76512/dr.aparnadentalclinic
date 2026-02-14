
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Treatment from './pages/Treatment';
import Reviews from './pages/Reviews';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Book from './pages/Book';
import FAQ from './pages/FAQ';
import { LanguageProvider } from './components/LanguageContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/treatment" element={<Treatment />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/book" element={<Book />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
          <Footer />
          
          {/* Floating Action Buttons */}
          <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-40">
            <a
              href="tel:8588087214"
              className="bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 hover:scale-110 transition-all group relative"
              title="Call Now"
            >
              <Phone size={24} />
              <span className="absolute right-full mr-4 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">Call Now</span>
            </a>
            <a
              href="https://wa.me/918588087214"
              className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all group relative"
              title="WhatsApp Booking"
            >
              <MessageCircle size={24} />
              <span className="absolute right-full mr-4 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">WhatsApp Us</span>
            </a>
          </div>
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
