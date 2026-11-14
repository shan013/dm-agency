
import Link from "next/link";
import { blogPosts } from "@/data/blog";

export default function BlogGrid() {
  return (
    <section className="blog-page">
      <div className="site-container">
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              className="b-card"
              key={post.slug}
            >
              <div className="b-thumb">
                {post.image && (
                  <img src={post.image} alt={post.title} />
                )}
              </div>

              <div className="b-body">
                <h3>{post.title}</h3>

                <span className="b-read">
                  Read More <i>↗</i>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
