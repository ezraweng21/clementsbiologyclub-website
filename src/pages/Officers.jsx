import officers from "../data/officers";

function Officers() {
  return (
    <section className="section page-section">
      <div className="container">
        <h1>Officers</h1>
        <p className="section-text">
          Meet the students helping lead Clements Biology Club.
        </p>

        <div className="card-grid">
          {officers.map((officer) => (
            <div className="card" key={officer.role}>
              <h3>{officer.role}</h3>
              <p>
                <strong>{officer.name}</strong>
              </p>
              <p>{officer.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Officers;
