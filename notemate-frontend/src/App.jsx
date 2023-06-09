import "./App.css";
import LandingNav from './components/LandingNav/LandingNav';
import LandingHeroMain from './components/LandingHero/LandingHeroMain';
import Features from "./components/Features/Features";

function App() {
  return (
    <div className="app">
      <LandingNav />
      <LandingHeroMain />
      <Features />
    </div>
  );
}

export default App;
