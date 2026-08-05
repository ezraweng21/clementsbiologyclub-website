import { Link } from "react-router-dom";
import siteContent from "../data/siteContent";

function BioBox() {
  const { biobox } = siteContent;

  return (
    <section className="section page-section programs-page-shell biobox-page">
      <div className="container">
        <div className="page-header programs-page-header">
          <p className="page-eyebrow">BioBox</p>
          <h1>{biobox.title}</h1>
          <p className="section-text">{biobox.subtitle}</p>
        </div>

        <div className="programs-layout">
          <section className="section-panel programs-panel">
            <div className="section-header-row">
              <div className="section-header-block">
                <p className="section-kicker">Impact</p>
                <h2 className="subsection-title">Monthly Impact Snapshot</h2>
              </div>
            </div>

            <div className="content-grid three-col">
              {biobox.impact.map((item) => (
                <article className="content-card impact-card" key={item.label}>
                  <p className="impact-value">{item.value}</p>
                  <h3>{item.label}</h3>
                </article>
              ))}
            </div>
          </section>

          <section className="section-panel programs-panel">
            <div className="section-header-row">
              <div className="section-header-block">
                <p className="section-kicker">Kits</p>
                <h2 className="subsection-title">The Six Core Kits</h2>
              </div>
            </div>

            <div className="card-grid">
              {biobox.kits.map((kit) => (
                <article className="card card-accent kit-card" key={kit.name}>
                  <div className="kit-photo-shell">
                    {kit.photo ? (
                      <img
                        src={kit.photo}
                        alt={`${kit.name} in use`}
                        className="kit-photo"
                      />
                    ) : (
                      <div className="kit-photo-placeholder">
                        <span>Photo archive coming soon</span>
                      </div>
                    )}
                  </div>

                  <h3>{kit.name}</h3>
                  <p>{kit.hook}</p>
                  <p className="resource-meta">
                    <strong>Age range:</strong> {kit.ageRange}
                  </p>

                  {kit.scienceCardLink ? (
                    <a
                      href={kit.scienceCardLink}
                      className="resource-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read the Science Card
                    </a>
                  ) : (
                    <span className="resource-link resource-link-disabled">
                      Science card link coming soon
                    </span>
                  )}
                </article>
              ))}
            </div>
          </section>

          <section className="section-panel programs-panel">
            <div className="section-header-row">
              <div className="section-header-block">
                <p className="section-kicker">Request a Kit</p>
                <h2 className="subsection-title">School Request Pathway</h2>
              </div>
            </div>

            <div className="content-grid two-col">
              <article className="content-card">
                <h3>Teacher / Coordinator Requests</h3>
                <p>
                  Are you a teacher or school coordinator interested in receiving
                  a BioBox kit? Fill out the request form and the club will
                  follow up when public kit requests open.
                </p>
                {biobox.requestFormLink ? (
                  <a
                    href={biobox.requestFormLink}
                    className="resource-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open Request Form
                  </a>
                ) : (
                  <span className="resource-link resource-link-disabled">
                    {biobox.requestFormFallback}
                  </span>
                )}
              </article>

              <article className="content-card">
                <h3>Get Involved</h3>
                <p>{biobox.memberContact}</p>
                <Link to="/get-involved" className="resource-link">
                  Member Opportunities
                </Link>
              </article>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default BioBox;
