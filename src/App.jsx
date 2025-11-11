import Navigation from './components/Navigation.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Advantage from './components/Advantage.jsx';
import About from './components/About.jsx';
import Testimonials from './components/Testimonials.jsx';
import FAQ from './components/FAQ.jsx';
import Booking from './components/Booking.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="bg-slate-950 text-white">
      <Navigation />
      <main className="pt-24">
        <Hero />
        <Services />
        <Advantage />
        <About />
        <Testimonials />
        <FAQ />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}

export default App;
