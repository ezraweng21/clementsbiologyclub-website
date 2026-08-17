import { Link, useParams } from "react-router-dom";
import { getBioBoxKit } from "../data/bioboxKits";

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
            <p className="section-text">{kit.summary}</p>
          </div>
          <div className="biobox-detail-image" aria-label={`Photo space for ${kit.name}`}>
            {kit.image ? <img src={kit.image} alt={kit.name} /> : <span>Kit photo</span>}
          </div>
        </header>

        <div className="biobox-detail-grid">
          <section className="section-panel biobox-detail-card">
            <p className="section-kicker">Classroom integration</p>
            <h2>Ready for your lesson flow</h2>
            <p>{kit.classroomIntegration}</p>
          </section>
          <section className="section-panel biobox-detail-card">
            <p className="section-kicker">Science card</p>
            <h2>Core investigation</h2>
            <p><strong>Question:</strong> {kit.scienceCard.question}</p>
            <p><strong>Key idea:</strong> {kit.scienceCard.takeaway}</p>
            <p><strong>Materials:</strong> {kit.scienceCard.materials}</p>
          </section>
          <section className="section-panel biobox-detail-card">
            <p className="section-kicker">Expansion card</p>
            <h2>Take it further</h2>
            <p>{kit.expansionCard}</p>
          </section>
          <section className="section-panel biobox-detail-card biobox-curriculum-card">
            <p className="section-kicker">Curriculum fit</p>
            <h2>{kit.teks}</h2>
            <p>{kit.curriculumFit}</p>
          </section>
        </div>
      </div>
    </section>
  );
}

export default BioBoxDetail;
