import siteContent from "../data/siteContent";

function About() {
  return (
    <section className="home-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">About</p>
          <h2>What {siteContent.club.name} Is About</h2>
          <p className="section-lead">{siteContent.club.description}</p>
        </div>

        <div className="content-grid three-col">
          {siteContent.aboutPoints.map((point) => (
            <article className="content-card" key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
