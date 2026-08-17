import { useState } from "react";
import { Link } from "react-router-dom";

const interests = [
  { id: "build", label: "Building, experiments, and making things", title: "Hands-on science & building", description: "You may enjoy turning biology ideas into something people can see, test, or use.", routes: ["Help assemble or facilitate BioBox activities.", "Design a controlled experiment for a science fair or club activity.", "Explore biotechnology and engineering design challenges."], link: "/biobox", linkLabel: "Explore BioBox" },
  { id: "research", label: "Discoveries, questions, and research", title: "Research & discovery", description: "You are drawn to asking why, reading deeply, and figuring out how new knowledge gets made.", routes: ["Start with one Bio Bites article or research-paper discussion.", "Practice identifying a study’s question, evidence, and limitation.", "Ask an officer about a research, mentorship, or journal-club opportunity."], link: "/articles", linkLabel: "Read Bio Bites" },
  { id: "health", label: "Health, medicine, and helping people", title: "Health & medicine", description: "You may enjoy learning how body systems work and how science improves people’s lives.", routes: ["Explore body-systems and enzyme BioBox activities.", "Build a foundation with physiology and health-science articles.", "Look for age-eligible community-health or hospital volunteering."], link: "/resources", linkLabel: "Explore health resources" },
  { id: "environment", label: "Ecology, animals, and the environment", title: "Ecology & environmental science", description: "You are interested in the outdoor world and the systems connecting organisms, water, and habitats.", routes: ["Try a water-quality, soil, food-web, or owl-pellet investigation.", "Turn a local environmental question into a data project.", "Explore conservation and ecology writing topics."], link: "/biobox", linkLabel: "Find ecology kits" },
  { id: "compete", label: "Deep study and academic competition", title: "Competition biology", description: "You may like mastering challenging content, setting goals, and testing your understanding.", routes: ["Choose one topic to study consistently each week.", "Join a low-pressure study group or introductory competition.", "Use articles and practice questions to identify a growth area."], link: "/competitions", linkLabel: "Explore competitions" },
  { id: "communicate", label: "Writing, teaching, and creative communication", title: "Science communication", description: "You can make biology more accessible by explaining, writing, designing, or teaching.", routes: ["Pitch or write a Bio Bites article.", "Create an explainer, poster, or social graphic for a club activity.", "Help facilitate a BioBox lesson for younger students."], link: "/articles", linkLabel: "Explore Bio Bites" },
];

const commitmentOptions = [
  { id: "try", label: "I want a low-pressure way to try something new.", detail: "Start with one meeting, one article, or one BioBox build session." },
  { id: "project", label: "I want a project I can build over time.", detail: "Choose a question, a competition goal, a writing series, or a recurring service role." },
  { id: "community", label: "I want to meet people who care about similar things.", detail: "Come to a study group, activity, or officer-led discussion and ask where help is needed." },
];

function Explore() {
  const [interest, setInterest] = useState(null);
  const [commitment, setCommitment] = useState(null);
  const result = interests.find((item) => item.id === interest);
  const reset = () => { setInterest(null); setCommitment(null); };

  return (
    <section className="section page-section programs-page-shell involved-page explore-page">
      <div className="container">
        <header className="page-header programs-page-header">
          <p className="page-eyebrow">Explore</p>
          <h1>Find your next step in science.</h1>
          <p className="section-text">Answer two quick questions for a practical place to start. There is no commitment — just a way to find the part of biology that feels like yours.</p>
        </header>

        <section className="section-panel explore-panel">
          {!interest && <>
            <p className="section-kicker">01 · Your interest</p>
            <h2 className="subsection-title">What sounds most exciting?</h2>
            <div className="explore-options">
              {interests.map((item) => <button key={item.id} type="button" onClick={() => setInterest(item.id)}><span>{item.label}</span><b>→</b></button>)}
            </div>
          </>}

          {interest && !commitment && <>
            <button type="button" className="explore-back" onClick={reset}>← Change my interest</button>
            <p className="section-kicker">02 · Your starting point</p>
            <h2 className="subsection-title">What kind of next step feels right?</h2>
            <div className="explore-options explore-options-single">
              {commitmentOptions.map((item) => <button key={item.id} type="button" onClick={() => setCommitment(item.id)}><span><strong>{item.label}</strong><small>{item.detail}</small></span><b>→</b></button>)}
            </div>
          </>}

          {result && commitment && <div className="explore-result">
            <button type="button" className="explore-back" onClick={reset}>← Start over</button>
            <p className="section-kicker">Your starting path</p>
            <h2 className="subsection-title">{result.title}</h2>
            <p className="section-text">{result.description} {commitmentOptions.find((item) => item.id === commitment).detail}</p>
            <div className="explore-next-steps">{result.routes.map((step, index) => <p key={step}><b>{String(index + 1).padStart(2, "0")}</b>{step}</p>)}</div>
            <div className="explore-actions"><Link to={result.link} className="primary-btn">{result.linkLabel}</Link><Link to="/get-involved" className="secondary-btn">See member opportunities</Link></div>
          </div>}
        </section>
      </div>
    </section>
  );
}

export default Explore;
