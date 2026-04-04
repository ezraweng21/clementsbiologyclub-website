function Contact() {
  return (
    <section className="section page-section">
      <div className="container">
        <div className="page-header">
          <p className="page-eyebrow">Contact</p>
          <h1>Get in Touch</h1>
          <p className="section-text">
            Have questions about meetings, membership, events, or club
            opportunities? This page can help students find the right way to
            reach out.
          </p>
        </div>

        <div className="card-grid">
          <article className="card">
            <h3>Join the Club</h3>
            <p>
              Add membership information, sign-up steps, or instructions for how
              new students can get involved.
            </p>
          </article>

          <article className="card">
            <h3>Officer Contact</h3>
            <p>
              You can later include officer emails, sponsor contact information,
              or a general contact channel for questions.
            </p>
          </article>

          <article className="card">
            <h3>Meeting Information</h3>
            <p>
              Include details about when and where the club meets, along with
              any reminders or expectations for members.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Contact;
