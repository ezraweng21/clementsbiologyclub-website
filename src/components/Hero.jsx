function Hero() {
  return (
    <section className="hero">
      <div className="container hero-layout">
        <div className="hero-left">
          <p className="hero-tag">
            Clements High School • Student-Led • Life Sciences
          </p>

          <h1>
            Explore biology
            <span className="hero-accent"> beyond the classroom.</span>
          </h1>

          <p className="hero-text">
            Clements Biology Club brings together students interested in
            biology, medicine, research, competition, and scientific curiosity
            through meetings, enrichment, events, and community.
          </p>

          <div className="hero-buttons">
            <a href="/about" className="primary-btn">
              Learn More
            </a>
            <a href="/events" className="secondary-btn">
              View Events
            </a>
          </div>

          <div className="hero-highlights">
            <div className="highlight-pill">USABO</div>
            <div className="highlight-pill">Science Olympiad</div>
            <div className="highlight-pill">Meetings & Activities</div>
            <div className="highlight-pill">Student Community</div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-panel hero-panel-main">
            <p className="panel-label">What We Do</p>
            <h3>Learn, compete, and connect.</h3>
            <p>
              From deeper biology discussions to competition preparation and
              collaborative events, the club is designed to help members grow
              both academically and as part of a scientific community.
            </p>
          </div>

          <div className="hero-panel-grid">
            <div className="hero-panel small-panel">
              <p className="panel-number">01</p>
              <h4>Explore</h4>
              <p>
                Go beyond class content with richer biological topics and ideas.
              </p>
            </div>

            <div className="hero-panel small-panel">
              <p className="panel-number">02</p>
              <h4>Prepare</h4>
              <p>
                Build skills for competitions, enrichment, and academic growth.
              </p>
            </div>

            <div className="hero-panel small-panel">
              <p className="panel-number">03</p>
              <h4>Belong</h4>
              <p>Join a community of students interested in life science.</p>
            </div>

            <div className="hero-panel small-panel">
              <p className="panel-number">04</p>
              <h4>Engage</h4>
              <p>
                Take part in meetings, projects, activities, and club events.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
