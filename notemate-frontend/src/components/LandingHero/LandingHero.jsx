import "./LandingHero.css";
const LandingHero = ({ mainTitle, descriptionText, image }) => {
  return (
    <section className="landing-hero">
      <div className="landing-hero__left">
        <h2 className="landing-hero__left--heading">{mainTitle}</h2>
        <p className="landing-hero__left--text">{descriptionText}</p>
        <a href="" className="landing-hero__left--link">
          Get started
        </a>
      </div>

      <img src={image} alt="note taking" className="landing-hero__image" />
    </section>
  );
};

export default LandingHero;
