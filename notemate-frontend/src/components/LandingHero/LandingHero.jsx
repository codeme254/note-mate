import heroImg from "../../assets/note-taking.svg";
import { motion } from "framer-motion";
import "./LandingHero.css";
const LandingHero = () => {
  return (
    <section className="landing-hero">
      <div className="landing-hero__left">
        <motion.h2
          className="landing-hero__left--heading"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Securely store and organize your study notes
        </motion.h2>
        <motion.p
          className="landing-hero__left--text"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam tempora
          et sed quas aspernatur, perspiciatis repudiandae quasi molestiae
          explicabo ducimus?
        </motion.p>
        <motion.a
          href=""
          className="landing-hero__left--link"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Get started
        </motion.a>
      </div>

      <motion.img
        src={heroImg}
        alt="note taking"
        className="landing-hero__image"
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      />
      <h2></h2>
    </section>
  );
};

export default LandingHero;
