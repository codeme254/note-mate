import './App.css'
import LandingNav from './components/LandingNav/LandingNav';
// import LandingHero from './components/LandingHero/LandingHero';
import LandingHeroMain from './components/LandingHero/LandingHeroMain';

function App() {

  return (
    <div className='app'>
      <LandingNav />
      <LandingHeroMain />
    </div>
  )
}

export default App
