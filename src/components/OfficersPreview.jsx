import { Link } from "react-router-dom";

function OfficersPreview() {
  return (
    <section className="home-section">
      <div className="container">
        <div className="section-heading section-heading-row">
          <div>
            <p className="section-kicker">Leadership</p>
            <h2>Officer Team</h2>
            <p className="section-lead">
              Meet the students helping lead the club through planning,
              communication, and organization.
            </p>
          </div>

          <Link to="/officers" className="inline-text-link">
            See full officer page
          </Link>
        </div>

        <div className="content-grid three-col">
          <article className="content-card">
            <h3>President</h3>
            <p>Helps guide club direction, planning, and overall leadership.</p>
          </article>

          <article className="content-card">
            <h3>Vice President</h3>
            <p>Supports organization, coordination, and club-wide execution.</p>
          </article>

          <article className="content-card">
            <h3>Officer Team</h3>
            <p>
              Contributes to events, operations, communication, and member
              support.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default OfficersPreview;
