
import { teamMembers } from "@/data/team";

const socialLinks = [
  {
    field: "linkedin",
    className: "fa-brands fa-linkedin-in",
    label: "LinkedIn",
  },
  {
    field: "x",
    className: "fa-brands fa-x-twitter",
    label: "X",
  },
  {
    field: "facebook",
    className: "fa-brands fa-facebook-f",
    label: "Facebook",
  },
  {
    field: "instagram",
    className: "fa-brands fa-instagram",
    label: "Instagram",
  },
];

export default function Team() {
  return (
    <section className="team-section">
      <div className="site-container">
        <div className="section-head center">
          <div className="eyebrow">OUR TEAM</div>

          <h2 className="animate-letters">
            Meet The SEO Experts Behind
            <br />
            Your Digital Growth
          </h2>
        </div>

        <div className="team-grid fade-up">
          {teamMembers.map((member) => (
            <div className="team-card" key={member.name}>
              <div className="team-img">
                {member.image && (
                  <img src={member.image} alt={member.name} />
                )}

                <span className="dot"></span>

                <div className="socials">
                  {socialLinks.map((social) => {
                    const url = member.socialLinks?.[social.field];

                    if (!url) return null;

                    return (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on ${social.label}`}
                        key={social.label}
                      >
                        <i className={social.className}></i>
                      </a>
                    );
                  })}
                </div>
              </div>

              <h4>{member.name}</h4>
              <p>{member.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
