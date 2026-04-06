import siteContent from "../data/siteContent";

function Contact() {
  return (
    <section className="section page-section">
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
                <h3>Schedule</h3>
                <p>{siteContent.meetingInfo.schedule}</p>
              </article>

              <article className="card">
                <h3>Location</h3>
                <p>{siteContent.meetingInfo.location}</p>
              </article>

              <article className="card">
                <h3>Joining Info</h3>
                <p>{siteContent.meetingInfo.joinText}</p>
              </article>
            </div>
          </section>

          <section className="section-panel">
            <div className="section-header-row">
              <div className="section-header-block">
                <p className="section-kicker">Contacts</p>
                <h2 className="subsection-title">Club Contact Information</h2>
              </div>
            </div>

            <div className="card-grid">
              <article className="card">
                <h3>General Contact</h3>
                <p>{siteContent.contact.generalEmail}</p>
              </article>

              <article className="card">
                <h3>Sponsor</h3>
                <p>{siteContent.contact.sponsorName}</p>
              </article>

              <article className="card">
                <h3>Sponsor Email</h3>
                <p>{siteContent.contact.sponsorEmail}</p>
              </article>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Contact;
