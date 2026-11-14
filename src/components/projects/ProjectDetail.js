
export default function ProjectDetail({ project }) {
  return (
    <section className="blog-single">
      <div className="site-container">
        <div className="single-wrap">

          {project.image && (
            <div className="single-hero">
              <img src={project.image} alt={project.title} />
            </div>
          )}

          <div className="single-content">

            {project.category && (
              <div className="project-category">
                {project.category}
              </div>
            )}

            {project.description && (
              <div
                className="wp-post-content"
                dangerouslySetInnerHTML={{
                  __html: project.description,
                }}
              />
            )}

            {project.url && (
              <div className="project-visit">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="post-btn"
                >
                  Visit Project
                </a>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
