import { Link } from "react-router-dom";
import { bioboxCollections } from "../data/bioboxKits";

const teacherRequestForm = "https://docs.google.com/forms/d/e/1FAIpQLSeHdBwtWE7oeubHmAgJ7wBTKe_v0_GcWJHCMWn4WSVHxP6GTA/viewform?usp=header";

const teacherFaqs = [
  ["Is BioBox free?", "Yes. We aim to provide confirmed kits and facilitation at no cost when inventory and funding allow. A request is not confirmed until we coordinate the date and materials with the teacher."],
  ["What do you need from me?", "Your course and unit, approximate student count, class length, available equipment, and any safety or accessibility needs. We will suggest a format that fits."],
  ["How much teacher preparation is required?", "For a standard visit, we bring the activity plan, materials, and setup/cleanup support. The teacher remains the classroom authority and approves the final lesson plan."],
  ["How long does a visit take?", "Many kits work as a 10-15 minute demonstration, a 30-45 minute activity, or a 45-55 minute investigation. Multi-day options are only used when a teacher wants the follow-up."],
  ["Is it safe?", "We use age-appropriate, teacher-approved materials and share any safety needs before confirming. We do not offer uncontrolled cultures, unsealed mold, or real blood."],
  ["Can you match my TEKS and current lesson?", "Yes. Tell us the grade/course and current unit. We will suggest a direct fit, and activities requiring teacher-confirmed TEKS stay clearly labeled."],
  ["What if I have limited time or equipment?", "We can adapt many activities into a demonstration, pair station, reusable paper model, or smaller-group investigation."],
  ["Do you need photos or student names?", "Never student names. With school and teacher permission, we may ask for non-identifying photos of materials, student work, or hands-on activity plus a short teacher quote. That helps document impact for future grants."],
  ["Can I decline photos?", "Absolutely. Photos are helpful, never a condition of receiving BioBox support. A teacher quote, supply photo, anonymized work sample, or no media at all is fine."],
  ["Can you help with supplies beyond BioBox?", "Yes. The Teacher Grant Help Program can help identify likely funding sources, direct links, and a short project description. We cannot promise funding, but we can make the search easier."],
];

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
          <p className="section-text">
            Good science feels different when students can touch it, test it, argue about it, and connect it to their own lives. BioBox exists to give local teachers one more way to make science memorable - and to let Clements students build something useful beyond our own campus.
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
              <a className="primary-btn" href={teacherRequestForm} target="_blank" rel="noreferrer">Request BioBox or grant help</a>
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

        <section className="section-panel biobox-program-faq" aria-labelledby="biobox-faq-title">
          <p className="section-kicker">Questions, answered</p>
          <h2 id="biobox-faq-title">Teacher FAQ</h2>
          <div className="biobox-program-faq-grid">
            {teacherFaqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default BioBox;
