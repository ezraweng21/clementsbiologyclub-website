import { Link } from "react-router-dom";

function EventsPreview() {
  return (
    <section className="home-section alt-surface">
      <div className="container">
        <div className="section-heading section-heading-row">
          <div>
            <p className="section-kicker">Events</p>
            <h2>Meetings and Activities</h2>
            <p className="section-lead">
              The club includes recurring meetings, academic preparation, and
              activities that make biology more engaging.
            </p>
          </div>

          <Link to="/events" className="inline-text-link">
            View event archive
          </Link>
        </div>

        <div className="content-grid three-col">
          <article className="content-card">
            <h3>General Meetings</h3>
            <p>
              Announcements, biology topics, discussion, and member engagement.
            </p>
          </article>

          <article className="content-card">
            <h3>Competition Preparation</h3>
            <p>
              Preparation and review for biology-related academic competitions.
            </p>
          </article>

          <article className="content-card">
            <h3>Special Events</h3>
            <p>
              Workshops, speakers, themed activities, and club documentation.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default EventsPreview;
