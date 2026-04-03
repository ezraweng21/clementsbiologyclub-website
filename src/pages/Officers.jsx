import officers from "../data/officers";

function Officers() {
  return (
    <section className="section page-section">
      <div className="container">
        <div className="page-header officer-page-header">
          <p className="page-eyebrow">Leadership</p>
          <h1>Meet Our Officers</h1>
          <p className="section-text officer-intro">
            The students helping lead Clements Biology Club through meetings,
            planning, events, and community-building.
          </p>
        </div>

        <div className="officer-grid-compact">
          {officers.map((officer, index) => (
            <article
              className="officer-card-compact"
              key={`${officer.role}-${index}`}
            >
              <div className="officer-image-shell">
                <img
                  src={officer.image}
                  alt={`${officer.name} - ${officer.role}`}
                  className="officer-image-compact"
                />
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
