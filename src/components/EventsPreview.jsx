function EventsPreview() {
  return (
    <section className="section" id="events">
      <div className="container">
        <h2>Upcoming Events</h2>

        <div className="card-grid">
          <div className="card">
            <h3>Weekly Meeting</h3>
            <p>Every Thursday after school</p>
          </div>

          <div className="card">
            <h3>Competition Prep</h3>
            <p>USABO / Science Olympiad training sessions</p>
          </div>

          <div className="card">
            <h3>Guest Speaker</h3>
            <p>Invited researchers and professionals</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventsPreview;
