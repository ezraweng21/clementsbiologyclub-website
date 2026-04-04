function About() {
  return (
    <section className="home-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">About</p>
          <h2>What Biology Club Is About</h2>
          <p className="section-lead">
            Biology Club is a student-led organization focused on making biology
            more engaging, approachable, and meaningful beyond the classroom.
          </p>
        </div>

        <div className="content-grid three-col">
          <article className="content-card">
            <h3>Explore Topics</h3>
            <p>
              Go beyond standard coursework through discussions, themed
              meetings, and broader biological ideas.
            </p>
          </article>

          <article className="content-card">
            <h3>Build Knowledge</h3>
            <p>
              Strengthen understanding through enrichment, review, and academic
              preparation.
            </p>
          </article>

          <article className="content-card">
            <h3>Be Part of a Community</h3>
            <p>
              Meet students who share interests in biology, medicine, research,
              and scientific learning.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;
