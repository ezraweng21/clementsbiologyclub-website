import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-layout">
        <div className="hero-left">
          <p className="hero-tag">
            William P. Clements High School • Student-Led • Life Sciences
          </p>

          <h1>
            Explore biology
            <span className="hero-accent"> beyond the classroom.</span>
          </h1>

          <p className="hero-text">
            Clements Biology Club is a space for students interested in biology,
            medicine, research, and scientific curiosity to learn, connect, and
            grow through meetings, activities, competitions, and enrichment.
          </p>

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
              <div className="feature-item">
                <h3>Meetings</h3>
                <p>
                  Regular club meetings with biology topics, discussion, and
                  announcements.
                </p>
              </div>

              <div className="feature-item">
                <h3>Academic Growth</h3>
                <p>
                  Competition preparation, enrichment, and broader exposure to
                  biology.
                </p>
              </div>

              <div className="feature-item">
                <h3>Community</h3>
                <p>
                  A place to meet other students interested in life science and
                  related fields.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
