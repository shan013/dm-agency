
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  const latestProjects = projects.slice(0, 3);

  return (
    <section className="project-section">
      <div className="site-container">
        <div className="project-head">
          <div>
            <div className="eyebrow light">OUR PROJECT</div>
            <h2 className="animate-letters">
              Explore Our Successful
              <br />
              SEO Growth Projects
            </h2>
          </div>

          <div className="fade-up">
            <div className="project-view-more">
              <Link href="/projects">
                View All Projects
                <span><i className="fa-solid fa-arrow-right"></i></span>
              </Link>
            </div>
          </div>
        </div>

        <div className="project-grid">
          {latestProjects.map((project) => (
            <div className="project-card fade-up" key={project.slug}>
              {project.image && (
                <img src={project.image} alt={project.title} />
              )}

              <div className="project-overlay">
                <h4>{project.title}</h4>

                <p>{project.category}</p>

                <div className="read-more-wrap">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="overlay-btn"
                  >
                    Read More
                    <span>
                      <i className="fa-solid fa-arrow-up"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="free-line">
          <span>Free</span> Let's make something great work together.{" "}
          <Link href="/contact">
            Let's Talk About Your Project.
          </Link>
        </div>

      </div>
    </section>
  );
}
