import "./App.css";
import LandingNav from './components/LandingNav/LandingNav';
import LandingHeroMain from './components/LandingHero/LandingHeroMain';
import Features from "./components/Features/Features";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <LandingNav />
      <LandingHeroMain />
      <About />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
