import { Link } from "react-router-dom";
import { bioboxCollections } from "../data/bioboxKits";

function BioBox() {
  return (
    <section className="section page-section programs-page-shell biobox-page">
      <div className="container">
        <header className="page-header programs-page-header biobox-list-header">
          <p className="page-eyebrow">BioBox classroom collection</p>
          <h1>Biology kits made for curious classrooms.</h1>
          <p className="section-text">
            Explore ready-to-use investigations for middle and high school. Every kit includes a concise TEKS connection, classroom integration notes, a science card, and an extension idea.
          </p>
        </header>

        <div className="biobox-collection-nav" aria-label="BioBox collections">
          {bioboxCollections.map((collection) => <a href={`#${collection.id}`} key={collection.id}>{collection.label}</a>)}
        </div>

        <div className="biobox-collections">
          {bioboxCollections.map((collection) => (
            <section className="biobox-collection" id={collection.id} key={collection.id}>
              <div className="biobox-collection-heading">
                <div>
                  <p className="section-kicker">{collection.grades}</p>
                  <h2>{collection.label} collection</h2>
                </div>
                <span>{collection.kits.length} kits</span>
              </div>
              <div className="biobox-kit-grid">
                {collection.kits.map((kit) => (
                  <Link to={`/biobox/${kit.slug}`} className="biobox-kit-card" key={kit.slug}>
                    <div className="biobox-kit-image" aria-label={`Photo space for ${kit.name}`}>
                      {kit.image ? <img src={kit.image} alt={kit.name} /> : <span>Kit photo</span>}
                      <b>{kit.number}</b>
                    </div>
                    <div className="biobox-kit-copy">
                      <p className="biobox-teks">{kit.teks}</p>
                      <h3>{kit.name}</h3>
                      <p>{kit.summary}</p>
                      <span className="biobox-open-link">View kit details <span>→</span></span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="biobox-grant-help" aria-labelledby="grant-help-title">
          <div className="biobox-grant-help-heading">
            <p className="section-kicker">Teacher support</p>
            <h2 id="grant-help-title">Teacher Grant Help Program</h2>
            <p>BioBox can help teachers find funding for the science supplies their budget cannot cover — even when a kit delivery is not the right fit.</p>
          </div>
          <div className="biobox-grant-help-grid">
            <article>
              <h3>What we can do</h3>
              <ul>
                <li>Help set up a DonorsChoose project in about 20 minutes.</li>
                <li>Research three relevant funding sources for a specific course or supply request.</li>
                <li>Help write a clear one-paragraph project description for a funding application.</li>
              </ul>
            </article>
            <article>
              <h3>How it works</h3>
              <ol>
                <li>Tell us the supply, approximate cost, and TEKS it supports.</li>
                <li>Our student grant-research team identifies the strongest next options and deadlines.</li>
                <li>You receive direct links and writing help; you remain in control of the application.</li>
              </ol>
            </article>
            <article className="biobox-grant-help-action">
              <h3>Start a request</h3>
              <p>We are not promising to purchase supplies. We are promising to help teachers find the right path to funding them.</p>
              <a className="primary-btn" href="mailto:chs.biologyolympiad@gmail.com?subject=BioBox%20Teacher%20Grant%20Help">Ask for grant help</a>
            </article>
          </div>
          <details className="biobox-email-template">
            <summary>View the teacher outreach email</summary>
            <div>
              <p><strong>Subject: We’ll Help You Get Your Science Lab Funded (Free)</strong></p>
              <p>Hi [Teacher name],</p>
              <p>Even if our BioBox delivery program does not fit your schedule, Clements Biology Club would love to help you find funding for science supplies you need.</p>
              <p>We can help you set up a DonorsChoose project, research grants specific to your course, and write a one-paragraph project description for a funding application.</p>
              <p>If there is equipment or a supply set your budget does not cover, let us know. We are not promising to buy it for you — but we are promising to help you find a way to get it.</p>
              <p>Would this be useful?<br />[Name] | Clements Biology Club</p>
            </div>
          </details>
        </section>
      </div>
    </section>
  );
}

export default BioBox;
