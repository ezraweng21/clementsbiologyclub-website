function About() {
  return (
    <section className="section page-section">
      <div className="container">
        <div className="page-header">
          <p className="page-eyebrow">About</p>
          <h1>About Clements Biology Club</h1>
          <p className="section-text">
            Clements Biology Club is a student-led organization centered around
            curiosity, scientific learning, and building a strong community of
            students interested in the life sciences.
          </p>
        </div>

        <div className="events-layout">
          <section className="section-panel">
            <div className="section-header-row">
              <div className="section-header-block">
                <p className="section-kicker">Purpose</p>
                <h2 className="subsection-title">What the Club Is About</h2>
              </div>
            </div>
            <p className="section-text">
              Biology Club is a place for students to explore biology beyond the
              classroom, engage with meaningful scientific topics, and connect
              with others who share similar interests.
            </p>
            <div className="section-divider"></div>
            <div className="card-grid">
              <article className="card">
                <h3>Our Mission</h3>
                <p>
                  Make biology more engaging, accessible, and exciting through
                  enrichment, exploration, and community.
                </p>
              </article>

              <article className="card">
                <h3>What We Do</h3>
                <p>
                  Host meetings, activities, competition preparation,
                  discussions, and special events that deepen interest in the
                  life sciences.
                </p>
              </article>

              <article className="card">
                <h3>Who It’s For</h3>
                <p>
                  Students interested in biology, medicine, research, health,
                  competitions, or simply learning more.
                </p>
              </article>
            </div>
          </section>

          <section className="section-panel">
            <div className="section-header-row">
              <div className="section-header-block">
                <p className="section-kicker">Community</p>
                <h2 className="subsection-title">Why Join?</h2>
              </div>
            </div>
            <p className="section-text">
              The club gives students a place to grow academically while also
              meeting others with similar interests. Whether you are new to
              biology or already deeply involved, the club is meant to support
              curiosity, exploration, and collaboration.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}

export default About;
