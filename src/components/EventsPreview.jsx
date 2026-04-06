import { Link } from "react-router-dom";
import siteContent from "../data/siteContent";

function EventsPreview() {
  return (
    <section className="home-section alt-surface">
      <div className="container">
        <div className="section-heading section-heading-row">
          <div>
            <p className="section-kicker">Events</p>
            <h2>Meetings and Activities</h2>
            <p className="section-lead">
              The club includes recurring meetings, reviews, competition prep,
              and special biology-related events throughout the year.
            </p>
          </div>

          <Link to="/events" className="inline-text-link">
            View event archive
          </Link>
        </div>

        <div className="content-grid three-col">
          {siteContent.events.types.slice(0, 3).map((eventType) => (
            <article className="content-card" key={eventType}>
              <h3>{eventType}</h3>
              <p>
                Part of the club’s recurring structure and yearly meeting flow.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventsPreview;
