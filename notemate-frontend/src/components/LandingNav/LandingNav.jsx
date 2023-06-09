import "./LandingNav.css";
const LandingNav = () => {
  return (
    <header className="landing-nav__header">
      <h2 className="logo">Notemate</h2>
      <nav className="landing-nav__nav">
        <ol className="landing-nav__nav-list">
          <li className="landing-nav__nav-list--item">
            <a href="">home</a>
          </li>
          <li className="landing-nav__nav-list--item">
            <a href="">about</a>
          </li>
          <li className="landing-nav__nav-list--item">
            <a href="">features</a>
          </li>
          <li className="landing-nav__cta">
            <div>
              <a
                href=""
                className="landing-nav__cta-btn landing-nav__cta-btn-pri"
              >
                sign up (free)
              </a>
              <a
                href=""
                className="landing-nav__cta-btn landing-nav__cta-btn-sec"
              >
                log in
              </a>
            </div>
          </li>
        </ol>
      </nav>
    </header>
  );
};

export default LandingNav;
