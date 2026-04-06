import siteContent from "../data/siteContent";

function Officers() {
  return (
    <section className="section page-section">
      <div className="container">
        <div className="page-header officer-page-header">
          <p className="page-eyebrow">Leadership</p>
          <h1>Meet Our Officers</h1>
          <p className="section-text officer-intro">
            The students helping lead {siteContent.club.name} through meetings,
            planning, competitions, communication, and club activities.
          </p>
        </div>

        <div className="officer-grid-compact">
          {siteContent.officers.map((officer, index) => (
            <article
              className="officer-card-compact"
              key={`${officer.role}-${officer.name}-${index}`}
            >
              <div className="officer-image-shell">
                {officer.image ? (
                  <img
                    src={officer.image}
                    alt={`${officer.name} - ${officer.role}`}
                    className="officer-image-compact"
                  />
                ) : (
                  <div className="officer-placeholder">
                    <span>{officer.name.charAt(0)}</span>
                  </div>
                )}
              </div>

              <div className="officer-info-compact">
                <p className="officer-role-compact">{officer.role}</p>
                <h2 className="officer-name-compact">{officer.name}</h2>
                <p className="officer-grade-compact">Grade {officer.grade}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Officers;
