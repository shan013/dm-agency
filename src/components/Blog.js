
import Link from "next/link";
import { blogPosts } from "@/data/blog";

export default function Blog() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="blog-section">
      <div className="site-container">
        <div className="section-head center">
          <div className="eyebrow">
            <span className="dot"></span>
            LATEST BLOG
          </div>

          <h2 className="animate-letters">
            Stay Updated with Industry
            <br />
            Trends Today
          </h2>
        </div>

        <div className="blog-grid">
          {posts.map((post) => (
            <article className="blog-card fade-up" key={post.slug}>
              <div className="blog-img">
                {post.image && (
                  <img src={post.image} alt={post.title} />
                )}
              </div>

              <div className="blog-body">
                <h3>{post.title}</h3>

                <Link
                  href={`/blog/${post.slug}`}
                  className="read-more"
                >
                  Read More
                  <span>
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-view-all">
          <Link href="/blog">
            View All Blogs
            <span><i className="fa-solid fa-arrow-right"></i></span>
          </Link>
        </div>
      </div>
    </section>
  );
}
