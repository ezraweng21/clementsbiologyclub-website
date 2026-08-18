import siteContent from "../data/siteContent";
import { Link } from "react-router-dom";
function QuickAccess() {
  const clubLinks = [
    { label: "Join the club", detail: "Interest form", href: siteContent.contact.interestFormLink },
    { label: "Join Discord", detail: "Announcements and updates", href: siteContent.contact.discordLink },
    { label: "Join Remind", detail: `Code ${siteContent.contact.remindCode}`, href: siteContent.contact.remindLink },
    { label: "Meeting materials", detail: "Past slides and resources", href: siteContent.resources[0]?.link },
    { label: "Follow Instagram", detail: "Bio Bites and club updates", href: "https://www.instagram.com/chsbiologyclub/" },
  ];

  return (
    <section className="home-section home-quick-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">Quick Access</p>
          <h2>Meeting Info, Joining, and Links</h2>
          <p className="section-lead">
            The most important club information in one place.
          </p>
        </div>

        <div className="quick-access-schedule">
          <p><strong>General meetings:</strong> {siteContent.meetingInfo.shortSchedule} <span>·</span> {siteContent.meetingInfo.location}</p>
          <p><strong>Review meetings:</strong> {siteContent.meetingInfo.reviewSchedule}</p>
        </div>

        <div className="quick-access-links" aria-label="Club links">
          {clubLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              <span><b>{link.label}</b><small>{link.detail}</small></span>
              <span aria-hidden="true">→</span>
            </a>
          ))}
          <Link to="/get-involved">
            <span><b>Find a role</b><small>Ways to contribute beyond meetings</small></span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default QuickAccess;
