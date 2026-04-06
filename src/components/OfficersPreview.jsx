import { Link } from "react-router-dom";
import siteContent from "../data/siteContent";

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
              communication, competitions, and organization.
            </p>
          </div>

          <Link to="/officers" className="inline-text-link">
            See full officer page
          </Link>
        </div>

        <div className="content-grid three-col">
          {siteContent.officers.slice(0, 3).map((officer, index) => (
            <article
              className="content-card"
              key={`${officer.role}-${officer.name}-${index}`}
            >
              <h3>{officer.role}</h3>
              <p>{officer.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OfficersPreview;
