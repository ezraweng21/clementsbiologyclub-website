import { Link } from "react-router-dom";
import siteContent from "../data/siteContent";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-layout">
        <div className="hero-left">
          <p className="hero-tag">
            {siteContent.club.school} • Student-Led • Life Sciences
          </p>

          <h1>
            Explore biology
            <span className="hero-accent"> beyond the classroom.</span>
          </h1>

          <p className="hero-text">{siteContent.homepage.intro}</p>

          <div className="hero-buttons">
            <Link to="/about" className="primary-btn">
              Learn More
            </Link>
            <Link to="/events" className="secondary-btn">
              View Events
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-feature-card">
            <p className="feature-label">What the Club Offers</p>

            <div className="feature-list">
              {siteContent.homepage.highlights.map((item) => (
                <div className="feature-item" key={item}>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
