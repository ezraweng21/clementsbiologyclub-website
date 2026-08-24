import { Link, useParams } from "react-router-dom";
import { getBioBoxKit } from "../data/bioboxKits";

function gradeAwareText(text) {
  return text.split(/((?:6th|7th|8th|9th|10th|11th|12th) grade:)/gi).map((part, index) => (
    /^(?:6th|7th|8th|9th|10th|11th|12th) grade:$/i.test(part)
      ? <strong key={`${part}-${index}`}>{part}</strong>
      : part
  ));
}

function BioBoxDetail() {
  const { kitSlug } = useParams();
  const kit = getBioBoxKit(kitSlug);

  if (!kit) {
    return (
      <section className="section page-section programs-page-shell biobox-page">
        <div className="container biobox-not-found">
          <p className="page-eyebrow">BioBox</p>
          <h1>That kit isn’t in the collection yet.</h1>
          <Link to="/biobox" className="primary-btn">Back to BioBox</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section page-section programs-page-shell biobox-page biobox-detail-page">
      <div className="container">
        <Link to="/biobox" className="biobox-back-link">← All BioBox kits</Link>
        <header className="biobox-detail-hero">
          <div>
            <p className="page-eyebrow">{kit.level} BioBox · Kit {kit.number}</p>
            <h1>{kit.name}</h1>
            <p className="section-text biobox-detail-summary">{kit.summary}</p>
          </div>
          <div className="biobox-detail-image" aria-label={`Photo space for ${kit.name}`}>
            {kit.image ? <img src={kit.image} alt={kit.name} /> : <span>Kit photo</span>}
          </div>
        </header>

        <div className="biobox-detail-grid">
          <div className="biobox-detail-column">
            <section className="section-panel biobox-detail-card biobox-flow-card">
              <p className="section-kicker">Classroom integration</p>
              <h2>Lesson flow</h2>
              <p className="biobox-setup-time">{kit.setup}</p>
              <p>{gradeAwareText(kit.classroomIntegration)}</p>
              <ul className="biobox-lesson-steps">
                {kit.lessonSteps.map((step) => <li key={step}>{gradeAwareText(step)}</li>)}
              </ul>
              <p className="biobox-student-output"><strong>Student output:</strong> {kit.studentOutput}</p>
            </section>
            <section className="section-panel biobox-detail-card biobox-extension-card">
              <p className="section-kicker">Expansion card</p>
              <h2>Take it further</h2>
              <p>{kit.extensionCard}</p>
            </section>
          </div>
          <div className="biobox-detail-column">
            <section className="section-panel biobox-detail-card biobox-curriculum-card">
              <p className="section-kicker">Curriculum fit</p>
              <h2>{kit.teks}</h2>
              <p>{kit.curriculumFit}</p>
            </section>
            <section className="section-panel biobox-detail-card biobox-faq-card">
              <p className="section-kicker">Quick teacher FAQ</p>
              <h2>Safety and materials</h2>
              {kit.faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </section>
            <section className="section-panel biobox-detail-card biobox-core-card">
              <p className="section-kicker">Science card</p>
              <h2>Core investigation</h2>
              <p><strong>Question:</strong> {kit.scienceCard.question}</p>
              <p><strong>What you’ll see:</strong> {kit.scienceCard.whatYouSee}</p>
              <p><strong>What it means:</strong> {kit.scienceCard.whatItMeans}</p>
              <p><strong>Why it matters:</strong> {kit.scienceCard.whyItMatters}</p>
              <div className="biobox-materials-list">
                <strong>Included in this kit</strong>
                <ul>{kit.scienceCard.materials.split(", ").map((material) => <li key={material}>{material}</li>)}</ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BioBoxDetail;
