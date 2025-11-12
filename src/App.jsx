import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import AdvantagePage from './pages/AdvantagePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProofPage from './pages/ProofPage.jsx';
import BookPage from './pages/BookPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-950 text-white min-h-screen">
        <Navigation />
        <main className="pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/advantage" element={<AdvantagePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/proof" element={<ProofPage />} />
            <Route path="/book" element={<BookPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
