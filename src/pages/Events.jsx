import events from "../data/events";

function Events() {
  return (
    <section className="section page-section">
      <div className="container">
        <h1>Events</h1>
        <p className="section-text">
          See what the club is involved in throughout the year.
        </p>

        <div className="card-grid">
          {events.map((event) => (
            <div className="card" key={event.title}>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;
