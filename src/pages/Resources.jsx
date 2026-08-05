import siteContent from "../data/siteContent";
import ResourcesVisual from "../components/ResourcesVisual";
import { Link } from "react-router-dom";

function Resources() {
  const featuredResources = [
    siteContent.featuredLinks.dues,
    siteContent.featuredLinks.tShirtContest,
    siteContent.featuredLinks.bioBites,
  ];
  const featuredLinks = new Set(
    featuredResources
      .map((resource) => resource.link)
      .filter(Boolean)
  );
  const featuredTitles = new Set(featuredResources.map((resource) => resource.title));
  const libraryResources = siteContent.resources.filter(
    (resource) =>
      !featuredTitles.has(resource.title) &&
      !(resource.link && featuredLinks.has(resource.link))
  );
  const houstonResources = siteContent.resourceCollections.houston;
  const explorationResources = siteContent.resourceCollections.exploration;
  const competitionResources = siteContent.resourceCollections.competitionPrep;

  return (
    <section className="section page-section resources-page-shell">
      <ResourcesVisual />
      <div className="container">
        <div className="page-header resources-page-header">
          <p className="page-eyebrow">Resources</p>
          <h1>Resources for Members</h1>
          <p className="section-text">
            Use this page as a central place for meeting materials, review
            content, competition preparation, forms, and public club links.
          </p>
        </div>

        <div className="resources-layout">
          <section className="section-panel resources-panel resources-panel-featured">
            <div className="section-header-row">
              <div className="section-header-block">
                <p className="section-kicker">Featured</p>
                <h2 className="subsection-title">Dues, Contest, and Bio Bites</h2>
              </div>
            </div>

            <div className="resource-grid">
              {featuredResources.map((resource) => (
                <article
                  className="resource-card resource-card-featured"
                  key={resource.title}
                >
                  <p className="resource-label">{resource.category}</p>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>

                  {resource.deadline ? (
                    <p className="resource-meta">
                      <strong>Deadline:</strong> {resource.deadline}
                    </p>
                  ) : resource.deadlineFallback ? (
                    <p className="resource-meta">{resource.deadlineFallback}</p>
                  ) : null}

                  {resource.status ? (
                    <p className="resource-meta">{resource.status}</p>
                  ) : null}

                  {resource.format ? (
                    <p className="resource-meta">{resource.format}</p>
                  ) : null}

                  {resource.link ? (
                    <a
                      href={resource.link}
                      className="resource-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {resource.ctaLabel || "Open Resource"}
                    </a>
                  ) : (
                    <span className="resource-link resource-link-disabled">
                      Link Coming Soon
                    </span>
                  )}
                </article>
              ))}
            </div>
          </section>

          <section className="section-panel resources-panel resources-panel-library">
            <div className="section-header-row">
              <div className="section-header-block">
                <p className="section-kicker">Resources</p>
                <h2 className="subsection-title">Club Links and Materials</h2>
              </div>
            </div>

            <div className="resource-grid">
              {libraryResources.map((resource, index) => (
                <article
                  className="resource-card"
                  key={`${resource.category}-${resource.title}-${index}`}
                >
                  <p className="resource-label">{resource.category}</p>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>

                  {resource.link ? (
                    <a
                      href={resource.link}
                      className="resource-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open Resource
                    </a>
                  ) : (
                    <span className="resource-link resource-link-disabled">
                      Link Coming Soon
                    </span>
                  )}
                </article>
              ))}
            </div>

            <p className="resource-note">
              Bio Bites is set up to link out now and can be upgraded into an
              embedded gallery later without changing the page structure.
            </p>
          </section>

          <section className="section-panel resources-panel resources-panel-houston">
            <div className="section-header-row">
              <div className="section-header-block">
                <p className="section-kicker">For Houston Students</p>
                <h2 className="subsection-title">Local Opportunities</h2>
              </div>
            </div>

            <div className="resource-grid">
              {houstonResources.map((resource) => (
                <article className="resource-card" key={resource.name}>
                  <p className="resource-label">Houston Area</p>
                  <h3>{resource.name}</h3>
                  <p>{resource.description}</p>
                  <a
                    href={resource.link}
                    className="resource-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open Resource
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section className="section-panel resources-panel resources-panel-explore">
            <div className="section-header-row">
              <div className="section-header-block">
                <p className="section-kicker">Explore Interests</p>
                <h2 className="subsection-title">Competitions, Paths, and Questions</h2>
              </div>
            </div>

            <div className="content-grid two-col">
              <article className="content-card">
                <h3>Competition Resources</h3>
                <div className="stack-links">
                  {competitionResources.map((resource) =>
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

              <article className="content-card">
                <h3>Find What Fits You</h3>
                <div className="stack-links">
                  {explorationResources.map((resource) =>
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
        </div>
      </div>
    </section>
  );
}

export default Resources;
