
export default function AboutTeam() {
  const teamMembers = [
    {
      image: "/images/team-1.jpg",
      name: "Emma Roberts",
      role: "Founder & Creative Director",
    },
    {
      image: "/images/team-2.jpg",
      name: "Daniel Morgan",
      role: "Digital Marketing Manager",
    },
    {
      image: "/images/team-3.jpg",
      name: "Sophia Bennett",
      role: "Content & Analytics Specialist",
    },
  ];

  return (
    <section className="about-page-team-section">
      <div className="site-container">

        <div className="about-page-team-heading">
          <div className="about-page-eyebrow">
            <span className="about-page-dot"></span>
            OUR TEAM
          </div>

          <h2 className="animate-letters">
            The Creative Minds Driving
            <br />
            Digital Success
          </h2>
        </div>

        <div className="about-page-team-grid">
          {teamMembers.map((member) => (
            <div className="about-page-team-card fade-up" key={member.name}>
              <div className="about-page-team-image">
                <img src={member.image} alt={member.name} />
              </div>

              <div className="about-page-team-info">
                <strong>{member.name}</strong>
                <span>{member.role}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
