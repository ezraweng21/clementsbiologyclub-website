import { Link } from "react-router-dom";
import siteContent from "../data/siteContent";

function Competitions() {
  const { competitions, resourceCollections } = siteContent;

  return (
    <section className="section page-section programs-page-shell competitions-page">
      <div className="container">
        <div className="page-header programs-page-header">
          <p className="page-eyebrow">Competitions</p>
          <h1>{competitions.title}</h1>
          <p className="section-text">{competitions.subtitle}</p>
        </div>

        <div className="programs-layout">
          <section className="section-panel programs-panel">
            <div className="section-header-row">
              <div className="section-header-block">
                <p className="section-kicker">Ladder</p>
                <h2 className="subsection-title">Competition Progression</h2>
              </div>
            </div>

            <div className="competition-ladder">
              {competitions.ladder.map((group) => (
                <div className="ladder-column" key={group.level}>
                  <div className="ladder-column-header">
                    <p className="resource-label">{group.level}</p>
                    <h3>{group.level} Track</h3>
                  </div>

                  <div className="ladder-items">
                    {group.items.map((item) => (
                      <article className="content-card ladder-card" key={item.name}>
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                        <p className="resource-meta">{item.difficulty}</p>
                        {item.registrationLink ? (
                          <a
                            href={item.registrationLink}
                            className="resource-link"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Registration Link
                          </a>
                        ) : (
                          <span className="resource-link resource-link-disabled">
                            Registration details can be added here
                          </span>
                        )}
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="section-panel programs-panel">
            <div className="content-grid two-col">
              <article className="content-card">
                <p className="section-kicker">Study Group</p>
                <h3>{competitions.studyGroup.title}</h3>
                <p>{competitions.studyGroup.description}</p>
                <a
                  href={competitions.studyGroup.link}
                  className="resource-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Join the Discord
                </a>
              </article>

              <article className="content-card">
                <p className="section-kicker">Resources</p>
                <h3>Competition Preparation Links</h3>
                <div className="stack-links">
                  {resourceCollections.competitionPrep.map((resource) =>
                    resource.internal ? (
                      <Link
                        key={resource.title}
                        to={resource.link}
                        className="resource-link"
                      >
                        {resource.title}
                      </Link>
                    ) : (
                      <a
                        key={resource.title}
                        href={resource.link}
                        className="resource-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {resource.title}
                      </a>
                    )
                  )}
                </div>
              </article>
            </div>
          </section>

          <section className="section-panel programs-panel">
            <div className="section-header-row">
              <div className="section-header-block">
                <p className="section-kicker">Results</p>
                <h2 className="subsection-title">Past Clements Results</h2>
              </div>
            </div>

            <div className="card-grid">
              {competitions.results.map((result) => (
                <article className="card card-accent" key={result.title}>
                  <h3>{result.title}</h3>
                  <p>{result.description}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Competitions;
