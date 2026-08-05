import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import siteContent from "../data/siteContent";

function MemberSpotlight() {
  const spotlights = siteContent.homepage.memberSpotlights;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (spotlights.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % spotlights.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [spotlights.length]);

  const activeSpotlight = spotlights[activeIndex];

  return (
    <section className="home-section member-spotlight-section home-spotlight-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">Member Spotlight</p>
          <h2>Ways Members Can Contribute</h2>
          <p className="section-lead">
            We want the club to reward real contribution, not just attendance.
          </p>
        </div>

        <div className="section-panel spotlight-panel">
          <div className="spotlight-copy">
            <p className="resource-label">{activeSpotlight.role}</p>
            <h3>{activeSpotlight.name}</h3>
            <p>{activeSpotlight.contribution}</p>
            <blockquote className="spotlight-quote">
              "{activeSpotlight.quote}"
            </blockquote>
          </div>

          <div className="spotlight-actions">
            <Link to="/get-involved" className="resource-link">
              Explore Ways to Help
            </Link>
            <div className="spotlight-dots" aria-label="Spotlight rotation">
              {spotlights.map((spotlight, index) => (
                <button
                  key={`${spotlight.name}-${index}`}
                  type="button"
                  className={
                    index === activeIndex
                      ? "spotlight-dot spotlight-dot-active"
                      : "spotlight-dot"
                  }
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show spotlight ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MemberSpotlight;
