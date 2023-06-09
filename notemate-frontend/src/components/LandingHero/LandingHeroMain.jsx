import Carousel from 'nuka-carousel'
import LandingHero from "./LandingHero";
import heroImg from "../../assets/note-taking.svg";

const LandingHeroMain = () => {
  return (
    <Carousel>
      <LandingHero
        mainTitle="Securely store and organize your study notes 1"
        descriptionText="Notetaking is a great way to organize your thoughts"
        image={heroImg}
      />

      <LandingHero
        mainTitle="Securely store and organize your study notes 2"
        descriptionText="Notetaking is a great way to organize your thoughts"
        image={heroImg}
      />

      <LandingHero
        mainTitle="Securely store and organize your study notes 3"
        descriptionText="Notetaking is a great way to organize your thoughts"
        image={heroImg}
      />

      <LandingHero
        mainTitle="Securely store and organize your study notes 4"
        descriptionText="Notetaking is a great way to organize your thoughts"
        image={heroImg}
      />
    </Carousel>
  );
};

export default LandingHeroMain;
