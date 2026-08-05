import siteContent from "../data/siteContent";

function GetInvolved() {
  const { getInvolved } = siteContent;

  return (
    <section className="section page-section programs-page-shell involved-page">
      <div className="container">
        <div className="page-header programs-page-header">
          <p className="page-eyebrow">Get Involved</p>
          <h1>{getInvolved.title}</h1>
          <p className="section-text">
            A single place to find real ways to contribute, not just attend.
          </p>
        </div>

        <div className="programs-layout">
          <section className="section-panel programs-panel">
            <div className="section-header-row">
              <div className="section-header-block">
                <p className="section-kicker">Roles</p>
                <h2 className="subsection-title">Contributor Opportunities</h2>
              </div>
            </div>

            <div className="card-grid">
              {getInvolved.roles.map((role) => (
                <article className="card card-accent role-card" key={role.name}>
                  <h3>{role.name}</h3>
                  <p>{role.description}</p>
                  <p className="resource-meta">
                    <strong>Time:</strong> {role.timeCommitment}
                  </p>
                  <p className="resource-meta">
                    <strong>What you get:</strong> {role.benefits}
                  </p>
                  {role.interestLink ? (
                    <a
                      href={role.interestLink}
                      className="resource-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      I'm Interested
                    </a>
                  ) : (
                    <span className="resource-link resource-link-disabled">
                      Interest form can be linked here
                    </span>
                  )}
                </article>
              ))}
            </div>
          </section>

          <section className="section-panel programs-panel">
            <div className="content-grid two-col">
              <article className="content-card">
                <p className="section-kicker">Featured</p>
                <h3>{getInvolved.articleCompetition.title}</h3>
                <p>{getInvolved.articleCompetition.description}</p>
                {getInvolved.articleCompetition.link ? (
                  <a
                    href={getInvolved.articleCompetition.link}
                    className="resource-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open Submission Form
                  </a>
                ) : (
                  <span className="resource-link resource-link-disabled">
                    Submission form can be linked here
                  </span>
                )}
              </article>

              <article className="content-card">
                <p className="section-kicker">Planning</p>
                <h3>How the Program Is Being Built</h3>
                <p>{getInvolved.planningNote}</p>
              </article>
            </div>
          </section>

          <section className="section-panel programs-panel">
            <div className="section-header-row">
              <div className="section-header-block">
                <p className="section-kicker">Explore</p>
                <h2 className="subsection-title">What Do You Want to Do?</h2>
              </div>
            </div>

            <div className="content-grid two-col">
              {getInvolved.interestExplorer.map((path) => (
                <article className="content-card" key={path.prompt}>
                  <h3>{path.prompt}</h3>
                  <p>{path.suggestions}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section-panel programs-panel">
            <div className="section-header-row">
              <div className="section-header-block">
                <p className="section-kicker">Questions</p>
                <h2 className="subsection-title">{getInvolved.questionBox.title}</h2>
              </div>
            </div>

            <article className="content-card">
              <p>{getInvolved.questionBox.description}</p>
              <a href={getInvolved.questionBox.link} className="resource-link">
                Ask an Officer
              </a>
            </article>
          </section>
        </div>
      </div>
    </section>
  );
}

export default GetInvolved;
