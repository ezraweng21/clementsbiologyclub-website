import siteContent from "../data/siteContent";

function Events() {
  return (
    <section className="section page-section">
      <div className="container">
        <div className="page-header">
          <p className="page-eyebrow">Events</p>
          <h1>Club Events, Meetings, and Yearly Activity</h1>
          <p className="section-text">
            This page highlights the kinds of meetings and activities run by{" "}
            {siteContent.club.name}, along with a running archive of past
            events.
          </p>
        </div>

        <div className="events-layout">
          <section className="section-panel">
            <div className="section-header-row">
              <div className="section-header-block">
                <p className="section-kicker">Overview</p>
                <h2 className="subsection-title">What We Do</h2>
              </div>
            </div>

            <p className="section-text">
              {siteContent.club.name} includes general meetings, review
              sessions, competition preparation, guest speakers, alumni panels,
              and other interactive biology-related activities throughout the
              year.
            </p>
          </section>

          <section className="section-panel">
            <div className="section-header-row">
              <div className="section-header-block">
                <p className="section-kicker">Recurring</p>
                <h2 className="subsection-title">Ongoing Event Types</h2>
              </div>
            </div>

            <div className="card-grid">
              {siteContent.events.types.map((eventType) => (
                <article className="card" key={eventType}>
                  <h3>{eventType}</h3>
                  <p>
                    Part of the club’s recurring yearly structure and student
                    activity schedule.
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="section-panel">
            <div className="section-header-row">
              <div className="section-header-block">
                <p className="section-kicker">Archive</p>
                <h2 className="subsection-title">Past Meetings & Events</h2>
              </div>
            </div>

            <p className="section-text timeline-intro">
              This section can be updated throughout the year to document club
              meetings, reviews, workshops, panels, and special events.
            </p>

            <div className="timeline">
              {siteContent.events.timeline.map((event, index) => (
                <article
                  className="timeline-item"
                  key={`${event.date}-${event.title}-${index}`}
                >
                  <div className="timeline-marker"></div>

                  <div className="timeline-date-block">
                    <p className="timeline-date">{event.date}</p>
                  </div>

                  <div className="timeline-content">
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Events;
