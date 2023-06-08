import heroImg from '../../assets/note-taking.svg'
import "./LandingHero.css";
const LandingHero = () => {
    return(
        <section className="landing-hero">
            <div className="landing-hero__left">
                <h2 className='landing-hero__left--heading'>
                Securely store and organize your study notes
                </h2>
                <p className='landing-hero__left--text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam tempora et sed quas aspernatur, perspiciatis repudiandae quasi molestiae explicabo ducimus?
                </p>
                <a href="" className='landing-hero__left--link'>Get started</a>
            </div>

            <img src={heroImg} alt="note taking" className='landing-hero__image' />
            
        </section>
    )
}

export default LandingHero;