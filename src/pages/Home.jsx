import Hero from "../components/Hero";
import QuickAccess from "../components/QuickAccess";
import About from "../components/About";
import WhyJoin from "../components/WhyJoin";
import EventsPreview from "../components/EventsPreview";
import MemberSpotlight from "../components/MemberSpotlight";
import { Link } from "react-router-dom";
import siteContent from "../data/siteContent";

function Home() {
  return (
    <>
      <Hero />
      <QuickAccess />
      <About />
      <WhyJoin />
      <MemberSpotlight />
      <section className="home-section home-skills-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Apply It</p>
            <h2>Skills That Carry Beyond Club Meetings</h2>
            <p className="section-lead">
              Biology Club should help members practice work that is directly
              useful in labs, research, service, teamwork, and communication.
            </p>
          </div>

          <div className="content-grid two-col">
            {siteContent.practicalSkills.map((skill) => (
              <article className="content-card" key={skill.title}>
                <h3>{skill.title}</h3>
                <p>{skill.text}</p>
              </article>
            ))}
          </div>

          <div className="resource-grid top-spacing">
            <article className="resource-card">
              <p className="resource-label">BioBox</p>
              <h3>See the Kit Initiative</h3>
              <p>Documented outreach, school requests, and public impact.</p>
              <Link to="/biobox" className="resource-link">
                Open BioBox
              </Link>
            </article>

            <article className="resource-card">
              <p className="resource-label">Bio Bites</p>
              <h3>Read or Write Articles</h3>
              <p>Student-facing science writing with room for contributors.</p>
              <Link to="/articles" className="resource-link">
                Open Articles
              </Link>
            </article>

            <article className="resource-card">
              <p className="resource-label">Programs</p>
              <h3>Find a Way to Help</h3>
              <p>Explore roles, opportunities, and realistic contribution paths.</p>
              <Link to="/get-involved" className="resource-link">
                Get Involved
              </Link>
            </article>
          </div>
        </div>
      </section>
      <EventsPreview />
    </>
  );
}

export default Home;
