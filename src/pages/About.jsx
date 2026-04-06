import siteContent from "../data/siteContent";

function About() {
  return (
    <section className="section page-section">
      <div className="container">
        <div className="page-header">
          <p className="page-eyebrow">About</p>
          <h1>About {siteContent.club.name}</h1>
          <p className="section-text">{siteContent.club.description}</p>
        </div>

        <div className="events-layout">
          <section className="section-panel">
            <div className="section-header-row">
              <div className="section-header-block">
                <p className="section-kicker">Mission</p>
                <h2 className="subsection-title">What the Club Is For</h2>
              </div>
            </div>

            <div className="card-grid">
              <article className="card">
                <h3>Explore Biology</h3>
                <p>
                  Learn beyond standard classroom content through themed
                  meetings, broader scientific ideas, and deeper discussion.
                </p>
              </article>

              <article className="card">
                <h3>Grow Academically</h3>
                <p>
                  Build understanding through enrichment, preparation, review,
                  and exposure to more advanced biology topics.
                </p>
              </article>

              <article className="card">
                <h3>Build Community</h3>
                <p>
                  Meet students with similar interests in biology, medicine,
                  research, and scientific learning.
                </p>
              </article>
            </div>
          </section>

          <section className="section-panel">
            <div className="section-header-row">
              <div className="section-header-block">
                <p className="section-kicker">Meetings</p>
                <h2 className="subsection-title">Meeting Information</h2>
              </div>
            </div>

            <div className="card-grid">
              <article className="card">
                <h3>When</h3>
                <p>{siteContent.meetingInfo.schedule}</p>
              </article>

              <article className="card">
                <h3>Where</h3>
                <p>{siteContent.meetingInfo.location}</p>
              </article>

              <article className="card">
                <h3>Joining</h3>
                <p>{siteContent.meetingInfo.joinText}</p>
              </article>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default About;
