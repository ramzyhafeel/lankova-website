import { Routes, Route, useLocation } from 'react-router-dom';
import Seo from './components/seo/Seo';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';
import MobileConversionBar from './components/ui/MobileConversionBar';

import Home from './pages/Home';
import Packages from './pages/Packages';
import PackageDetails from './pages/PackageDetails';
import Destinations from './pages/Destinations';
import Services from './pages/Services';
import Transportation from './pages/Transportation';
import Hotels from './pages/Hotels';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import About from './pages/About';
import Contact from './pages/Contact';
import CustomizeTour from './pages/CustomizeTour';
import NotFound from './pages/NotFound';

export default function App() {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollToTop />
      <Seo path={pathname} />

      <div className="flex min-h-screen flex-col bg-ivory-100 pb-16 xl:pb-0">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/packages/:slug" element={<PackageDetails />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/services" element={<Services />} />
            <Route path="/transportation" element={<Transportation />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/customize-tour" element={<CustomizeTour />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
        <MobileConversionBar />
      </div>
    </>
  );
}