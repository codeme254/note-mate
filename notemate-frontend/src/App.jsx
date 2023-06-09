import "./App.css";
import LandingNav from './components/LandingNav/LandingNav';
import LandingHeroMain from './components/LandingHero/LandingHeroMain';
import Features from "./components/Features/Features";
import About from "./components/About/About";

function App() {
  return (
    <div className="app">
      <LandingNav />
      <LandingHeroMain />
      <About />
      <Features />
    </div>
  );
}

export default App;
