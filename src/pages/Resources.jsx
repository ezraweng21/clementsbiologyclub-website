function Resources() {
  return (
    <section className="section page-section">
      <div className="container">
        <div className="page-header">
          <p className="page-eyebrow">Resources</p>
          <h1>Resources for Members</h1>
          <p className="section-text">
            Use this page as a central place for meeting materials, competition
            preparation, useful biology links, and club documents.
          </p>
        </div>

        <div className="events-layout">
          <section className="section-panel">
            <div className="section-header-row">
              <div className="section-header-block">
                <p className="section-kicker">Club</p>
                <h2 className="subsection-title">Club Materials</h2>
              </div>
            </div>

            <div className="resource-grid">
              <article className="resource-card">
                <p className="resource-label">Meetings</p>
                <h3>Meeting Slides</h3>
                <p>
                  Upload or link slides, notes, and summaries from each club
                  meeting so members can review them later.
                </p>
                <a href="/" className="resource-link">
                  Add Link Later
                </a>
              </article>

              <article className="resource-card">
                <p className="resource-label">Documents</p>
                <h3>Club Forms & Info</h3>
                <p>
                  Store schedules, sign-up forms, membership information, and
                  other important club documents in one place.
                </p>
                <a href="/" className="resource-link">
                  Add Link Later
                </a>
              </article>

              <article className="resource-card">
                <p className="resource-label">Archive</p>
                <h3>Past Meeting Archive</h3>
                <p>
                  Keep a record of prior meeting decks, recap notes, and event
                  documentation throughout the school year.
                </p>
                <a href="/" className="resource-link">
                  Add Link Later
                </a>
              </article>
            </div>
          </section>

          <section className="section-panel">
            <div className="section-header-row">
              <div className="section-header-block">
                <p className="section-kicker">Study</p>
                <h2 className="subsection-title">Competition & Study</h2>
              </div>
            </div>

            <div className="resource-grid">
              <article className="resource-card">
                <p className="resource-label">USABO</p>
                <h3>Competition Preparation</h3>
                <p>
                  Add study guides, topic outlines, practice resources, and
                  recommended prep materials for biology competitions.
                </p>
                <a href="/" className="resource-link">
                  Add Link Later
                </a>
              </article>

              <article className="resource-card">
                <p className="resource-label">Review</p>
                <h3>Biology Review Resources</h3>
                <p>
                  Share resources covering major topics like cell biology,
                  genetics, physiology, ecology, and molecular biology.
                </p>
                <a href="/" className="resource-link">
                  Add Link Later
                </a>
              </article>

              <article className="resource-card">
                <p className="resource-label">Topics</p>
                <h3>Topic Collections</h3>
                <p>
                  Organize materials into categories so members can easily find
                  resources for specific areas of biology.
                </p>
                <a href="/" className="resource-link">
                  Add Link Later
                </a>
              </article>
            </div>
          </section>

          <section className="section-panel">
            <div className="section-header-row">
              <div className="section-header-block">
                <p className="section-kicker">Links</p>
                <h2 className="subsection-title">Useful Links</h2>
              </div>
            </div>

            <div className="resource-grid">
              <article className="resource-card">
                <p className="resource-label">Learning</p>
                <h3>Recommended Websites</h3>
                <p>
                  Include trusted biology websites, videos, articles, and
                  learning platforms that members may find helpful.
                </p>
                <a href="/" className="resource-link">
                  Add Link Later
                </a>
              </article>

              <article className="resource-card">
                <p className="resource-label">Reference</p>
                <h3>Research & Exploration</h3>
                <p>
                  Add links to scientific databases, educational tools, or
                  enrichment resources for students who want to explore further.
                </p>
                <a href="/" className="resource-link">
                  Add Link Later
                </a>
              </article>

              <article className="resource-card">
                <p className="resource-label">Curated</p>
                <h3>Officer Picks</h3>
                <p>
                  Later, officers can add favorite resources, recommended
                  videos, article lists, or themed study sets for members.
                </p>
                <a href="/" className="resource-link">
                  Add Link Later
                </a>
              </article>
            </div>

            <p className="resource-note">
              These links are placeholders for now. Later, you can replace them
              with Google Drive folders, PDFs, slide decks, competition docs, or
              external websites.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Resources;
