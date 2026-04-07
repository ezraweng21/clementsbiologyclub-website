import siteContent from "../data/siteContent";
import DecorativeLeaves from "../components/DecorativeLeaves";

function Contact() {
  const featuredResources = [
    siteContent.featuredLinks.dues,
    siteContent.featuredLinks.tShirtContest,
    siteContent.featuredLinks.bioBites,
  ];

  return (
    <section className="section page-section">
      <DecorativeLeaves variant="contactPage" />
      <div className="container">
        <div className="page-header">
          <p className="page-eyebrow">Contact</p>
          <h1>Get Involved</h1>
          <p className="section-text">
            Find joining information, meeting details, and ways to stay updated
            with {siteContent.club.name}.
          </p>
        </div>

        <div className="events-layout">
          <section className="section-panel">
            <div className="section-header-row">
              <div className="section-header-block">
                <p className="section-kicker">Highlights</p>
                <h2 className="subsection-title">Important This Season</h2>
              </div>
            </div>

            <div className="card-grid">
              {featuredResources.map((resource) => (
                <article className="card card-accent" key={resource.title}>
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

          <section className="section-panel">
            <div className="section-header-row">
              <div className="section-header-block">
                <p className="section-kicker">Join</p>
                <h2 className="subsection-title">{siteContent.join.title}</h2>
              </div>
            </div>

            <div className="card-grid">
              {siteContent.join.steps.map((step, index) => (
                <article className="card" key={step}>
                  <h3>Step {index + 1}</h3>
                  <p>{step}</p>
                </article>
              ))}
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
                <h3>General Meetings</h3>
                <p>{siteContent.meetingInfo.shortSchedule}</p>
              </article>

              <article className="card">
                <h3>Review Meetings</h3>
                <p>{siteContent.meetingInfo.reviewSchedule}</p>
              </article>

              <article className="card">
                <h3>Location</h3>
                <p>{siteContent.meetingInfo.location}</p>
              </article>
            </div>
          </section>

          <section className="section-panel">
            <div className="section-header-row">
              <div className="section-header-block">
                <p className="section-kicker">Contact</p>
                <h2 className="subsection-title">Club Contact Information</h2>
              </div>
            </div>

            <div className="card-grid">
              <article className="card">
                <h3>Email</h3>
                <p>
                  <a
                    href={`mailto:${siteContent.contact.generalEmail}`}
                    className="text-link"
                  >
                    {siteContent.contact.generalEmail}
                  </a>
                </p>
              </article>

              <article className="card">
                <h3>Instagram</h3>
                <p>{siteContent.contact.instagramHandle}</p>
                <a
                  href={siteContent.contact.instagramLink}
                  className="text-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Instagram
                </a>
              </article>

              <article className="card">
                <h3>Remind</h3>
                <p>{siteContent.contact.remindCode}</p>
                <a
                  href={siteContent.contact.remindLink}
                  className="text-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Join Remind
                </a>
              </article>

              <article className="card">
                <h3>Discord</h3>
                <p>Primary space for announcements and member updates.</p>
                <a
                  href={siteContent.contact.discordLink}
                  className="text-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Join Discord
                </a>
              </article>

              <article className="card">
                <h3>Sponsor</h3>
                <p>{siteContent.contact.sponsorName}</p>
              </article>

              <article className="card">
                <h3>Sponsor Email</h3>
                <p>
                  <a
                    href={`mailto:${siteContent.contact.sponsorEmail}`}
                    className="text-link"
                  >
                    {siteContent.contact.sponsorEmail}
                  </a>
                </p>
              </article>

              <article className="card">
                <h3>Linktree</h3>
                <p>{siteContent.contact.linktree}</p>
                <a
                  href={siteContent.contact.linktree}
                  className="text-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Linktree
                </a>
              </article>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Contact;
