import siteContent from "../data/siteContent";
import ResourcesVisual from "../components/ResourcesVisual";

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
        </div>
      </div>
    </section>
  );
}

export default Resources;
