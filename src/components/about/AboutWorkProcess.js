
export default function AboutWorkProcess() {
  const steps = [
    {
      number: "01",
      icon: "fa-solid fa-magnifying-glass-chart",
      title: "Research & Discovery",
      description:
        "We begin by understanding business, goals, and target audience. This helps us create a strong",
    },
    {
      number: "02",
      icon: "fa-regular fa-handshake",
      title: "Planning & Strategy",
      description:
        "We begin by understanding business, goals, and target audience. This helps us create a strong",
    },
    {
      number: "03",
      icon: "fa-solid fa-gear",
      title: "Research & Discovery",
      description:
        "We begin by understanding business, goals, and target audience. This helps us create a strong",
    },
  ];

  const avatars = [5, 8, 12, 15];

  return (
    <section className="about-page-work-wrap">
      <div className="site-container">

          <div className="about-page-work-heading">
            <div className="about-page-eyebrow about-page-eyebrow-light">
              <span className="about-page-dot"></span>
              OUR WORK PROCESS
            </div>

            <h2 className="animate-letters">How we Turn Ideas Into Reality</h2>

            <p>
              Our work process is designed to deliver efficient, high-quality
              results through a
              <br />
              structured and strategic approach.
            </p>
          </div>

          <div className="about-page-steps-grid">
            {steps.map((step) => (
              <div className="about-page-step-column" key={step.number}>
                <div className="about-page-step-badge">
                  <span></span>
                  STEP {step.number}
                </div>

                <div className="about-page-step-card">
                  <div className="about-page-step-icon">
                    <i className={step.icon}></i>
                  </div>

                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="about-page-work-bottom">
            <div className="about-page-mini-avatars">
              {avatars.map((avatar) => (
                <img
                  key={avatar}
                  src={`https://i.pravatar.cc/40?img=${avatar}`}
                  alt=""
                />
              ))}
            </div>

            <span>
              We thoroughly test every aspect to ensure
              <br />
              performance, responsiveness
            </span>
          </div>

        </div>
    </section>
  );
}
