import { useState } from "react";
import { Link } from "react-router-dom";

const paths = {
  handsOn: {
    title: "Hands-on science & building",
    description: "You may enjoy assembling BioBox kits, leading demonstrations, or designing a science-fair investigation.",
    next: ["Try a BioBox build session.", "Explore engineering or biotechnology design challenges.", "Turn a class question into a controlled experiment."],
    link: "/biobox",
    linkLabel: "Explore BioBox",
  },
  research: {
    title: "Research & discovery",
    description: "You are drawn to asking questions, reading deeply, and figuring out how new knowledge is made.",
    next: ["Start with a Bio Bites article or journal-club discussion.", "Practice reading abstracts and identifying a study’s question.", "Ask an officer about research or mentorship opportunities."],
    link: "/articles",
    linkLabel: "Read Bio Bites",
  },
  health: {
    title: "Health & medicine",
    description: "You may enjoy learning how body systems work and how science can improve people’s lives.",
    next: ["Explore hospital volunteering when you are eligible.", "Follow a health-science topic through Bio Bites.", "Try physiology-focused study and competition resources."],
    link: "/resources",
    linkLabel: "Explore resources",
  },
  environment: {
    title: "Ecology & the environment",
    description: "You are interested in the outdoors, conservation, and the systems that connect living things.",
    next: ["Try a food-web or biodiversity BioBox kit.", "Look for schoolyard observation or conservation projects.", "Write about a local environmental question."],
    link: "/biobox",
    linkLabel: "Find ecology kits",
  },
  compete: {
    title: "Competition biology",
    description: "You may like challenging yourself, building a study plan, and learning biology in more depth.",
    next: ["Start with the competition overview.", "Join a study group and set a manageable weekly goal.", "Use articles and practice questions to identify a topic to master."],
    link: "/competitions",
    linkLabel: "Explore competitions",
  },
};

function Explore() {
  const [selection, setSelection] = useState(null);
  const result = selection ? paths[selection] : null;

  return (
    <section className="section page-section programs-page-shell involved-page explore-page">
      <div className="container">
        <header className="page-header programs-page-header">
          <p className="page-eyebrow">Explore</p>
          <h1>Find your next step in biology.</h1>
          <p className="section-text">Pick what sounds most like you. This is a no-pressure starting point, not a commitment.</p>
        </header>

        <section className="section-panel explore-panel">
          {!result ? (
            <>
              <p className="section-kicker">Interest explorer</p>
              <h2 className="subsection-title">What sounds exciting to you?</h2>
              <div className="explore-options">
                {Object.entries(paths).map(([key, path]) => (
                  <button key={key} type="button" onClick={() => setSelection(key)}>
                    <span>{path.title}</span><b>→</b>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="explore-result">
              <p className="section-kicker">Your match</p>
              <h2 className="subsection-title">{result.title}</h2>
              <p className="section-text">{result.description}</p>
              <div className="explore-next-steps">
                {result.next.map((step, index) => <p key={step}><b>{String(index + 1).padStart(2, "0")}</b>{step}</p>)}
              </div>
              <div className="explore-actions">
                <Link to={result.link} className="primary-btn">{result.linkLabel}</Link>
                <button type="button" className="secondary-btn" onClick={() => setSelection(null)}>Start over</button>
              </div>
            </div>
          )}
        </section>
      </div>
    </section>
  );
}

export default Explore;
