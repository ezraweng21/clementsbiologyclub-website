import { upcomingEventTypes, pastEvents } from "../data/events";

function Events() {
  return (
    <section className="section page-section">
      <div className="container">
        <div className="page-header">
          <p className="page-eyebrow">Events</p>
          <h1>Club Events, Meetings, and Yearly Activity</h1>
          <p className="section-text">
            This page highlights the kinds of events Clements Biology Club runs
            throughout the year, while also documenting past meetings and club
            activities.
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
              Biology Club combines academic enrichment, community-building,
              competition support, and engaging biology-related activities.
              Throughout the year, members can participate in meetings,
              discussions, workshops, prep sessions, and collaborative events.
            </p>
          </section>

          <section className="section-panel">
            <div className="section-header-row">
              <div className="section-header-block">
                <p className="section-kicker">Structure</p>
                <h2 className="subsection-title">
                  Ongoing & Recurring Event Types
                </h2>
              </div>
            </div>

            <div className="card-grid">
              {upcomingEventTypes.map((event) => (
                <article className="card" key={event.title}>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
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
              Use this section as a running archive of the school year. You can
              update it after each meeting, workshop, speaker event, or activity
              to document what the club has done.
            </p>

            <div className="timeline">
              {pastEvents.map((event, index) => (
                <article
                  className="timeline-item"
                  key={`${event.date}-${event.title}-${index}`}
                >
                  <div className="timeline-marker"></div>

                  <div className="timeline-date-block">
                    <p className="timeline-date">{event.date}</p>
                    <span className="timeline-tag">{event.type}</span>
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
