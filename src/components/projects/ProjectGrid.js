
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectGrid() {
  return (
    <section className="blog-page">
      <div className="site-container">
        <div className="blog-grid">
          {projects.map((project) => (
            <Link
              href={`/projects/${project.slug}`}
              className="b-card"
              key={project.slug}
            >
              <div className="b-thumb">
                {project.image && (
                  <img src={project.image} alt={project.title} />
                )}
              </div>

              <div className="b-body">
                <h3>{project.title}</h3>

                <span className="b-read">
                  View Project <i>↗</i>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
