
export default function BlogDetail({ post }) {
  return (
    <section className="blog-single">
      <div className="site-container">
        <div className="single-wrap">

          {post.image && (
            <div className="single-hero">
              <img src={post.image} alt={post.title} />
            </div>
          )}

          <div className="single-content">

            <div className="wp-post-content">

              {post.paragraphs?.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              {post.quote && (
                <blockquote>{post.quote}</blockquote>
              )}

              {post.introduction && <p>{post.introduction}</p>}

              {post.heading && <h2>{post.heading}</h2>}

              {post.trendDescription && <p>{post.trendDescription}</p>}

              {post.trends?.length > 0 && (
                <ul>
                  {post.trends.map((trend, index) => (
                    <li key={index}>{trend}</li>
                  ))}
                </ul>
              )}

              {post.conclusion && <p>{post.conclusion}</p>}

            </div>

            <div className="single-meta">

              <div className="tags">
                <strong>Tags:</strong>

                {post.tags?.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>

              <div className="share">
                <a href="#" aria-label="Share on Facebook">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>

                <a href="#" aria-label="Share on WhatsApp">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>

                <a href="#" aria-label="Share on LinkedIn">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>

            </div>

            {/* COMMENT FORM */}
            <div className="comment-box">

              <h3>Leave a Reply</h3>

              <small>
                Your email address will not be published. Required fields are marked *
              </small>

              <form>

                <label htmlFor="comment">Comment *</label>
                <textarea id="comment" rows="6"></textarea>

                <div className="c-row">

                  <div>
                    <label htmlFor="comment-name">Name *</label>
                    <input type="text" id="comment-name" />
                  </div>

                  <div>
                    <label htmlFor="comment-email">Email *</label>
                    <input type="email" id="comment-email" />
                  </div>

                  <div>
                    <label htmlFor="comment-website">Website</label>
                    <input type="text" id="comment-website" />
                  </div>

                </div>

                <label className="save">
                  <input type="checkbox" />
                  Save my name, email, and website in this browser for the next time I comment.
                </label>

                <button type="button" className="post-btn">
                  Post Comment
                </button>

              </form>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
