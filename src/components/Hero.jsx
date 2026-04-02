function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <p className="hero-tag">Clements High School</p>
        <h1>Welcome to Biology Club</h1>
        <p className="hero-text">
          Exploring biology beyond the classroom through curiosity,
          collaboration, competition, and community.
        </p>
        <div className="hero-buttons">
          <a href="#about" className="primary-btn">
            Learn More
          </a>
          <a href="#events" className="secondary-btn">
            View Events
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
