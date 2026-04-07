import siteContent from "../data/siteContent";

function QuickAccess() {
  return (
    <section className="home-section alt-surface">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">Quick Access</p>
          <h2>Meeting Info, Joining, and Links</h2>
          <p className="section-lead">
            The most important club information in one place.
          </p>
        </div>

        <div className="content-grid three-col">
          <article className="content-card">
            <h3>General Meetings</h3>
            <p>{siteContent.meetingInfo.shortSchedule}</p>
            <p>Location: {siteContent.meetingInfo.location}</p>
          </article>

          <article className="content-card">
            <h3>Review Meetings</h3>
            <p>{siteContent.meetingInfo.reviewSchedule}</p>
          </article>

          <article className="content-card">
            <h3>Join the Club</h3>
            <p>{siteContent.meetingInfo.joinText}</p>
          </article>
        </div>

        <div className="resource-grid top-spacing">
          <article className="resource-card">
            <p className="resource-label">Discord</p>
            <h3>Join Discord</h3>
            <p>Stay updated on announcements, resources, and meetings.</p>
            <a
              href={siteContent.contact.discordLink}
              className="resource-link"
              target="_blank"
              rel="noreferrer"
            >
              Open Link
            </a>
          </article>

          <article className="resource-card">
            <p className="resource-label">Remind</p>
            <h3>Join Remind</h3>
            <p>Use code {siteContent.contact.remindCode} for club reminders.</p>
            <a
              href={siteContent.contact.remindLink}
              className="resource-link"
              target="_blank"
              rel="noreferrer"
            >
              Open Link
            </a>
          </article>

          <article className="resource-card">
            <p className="resource-label">Interest Form</p>
            <h3>Sign Up</h3>
            <p>Fill out the interest form to get involved with Biology Club.</p>
            <a
              href={siteContent.contact.interestFormLink}
              className="resource-link"
              target="_blank"
              rel="noreferrer"
            >
              Open Form
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

export default QuickAccess;
