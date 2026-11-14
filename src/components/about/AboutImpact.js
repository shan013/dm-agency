
import Counter from "@/components/Counter";

export default function AboutImpact() {  

  return (
    <section className="about-page-impact">
      <div className="site-container">

        {/* Section heading */}
        <div className="about-page-impact-head">
          <div>
            <div className="about-page-eyebrow">
              <span className="about-page-dot"></span>
              OUR IMPACT
            </div>

            <h2 className="animate-letters">
              Features Built to Boost
              <br />
              Your Online Success
            </h2>
          </div>

          <p>
            Our impact is defined by the results we deliver. We help businesses
            grow, improve their digital presence, and achieve measurable success
            through innovative solutions and strategic execution.
          </p>
        </div>

        <div className="about-page-impact-grid">

          {/* Left dark card */}
          <div className="about-page-impact-card about-page-impact-dark about-page-impact-big fade-up">
            <h3>
              Advanced Keyword
              <br />
              Targeting
            </h3>

            <p>
              We identify and target high-value keywords that bring quality
              traffic and improve search visibility.
            </p>

            <a href="#" className="about-page-circle-arrow">
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>

          {/* Right cards */}
          <div className="about-page-impact-right">

            <div className="about-page-right-top">

              {/* Websites optimized */}
              <div className="about-page-impact-card about-page-impact-white about-page-impact-small fade-up">
                <strong>
                  On-Page Optimization
                  <br />
                  Excellence
                </strong>

                <p>
                  Every element of your website is optimized to enhance
                </p>

                <div className="about-page-big-num">
                  <div className="num-count"><Counter value={750} suffix="+" /></div>
                  <span>Websites Optimized</span>
                </div>
              </div>

              {/* Client retention */}
              <div className="about-page-impact-card about-page-impact-white about-page-impact-small about-page-center-stat fade-up">
                <img src="/images/impact-info-item-image-1.png" alt=""/>
              </div>

            </div>

            {/* Chart card */}
            <div className="about-page-impact-card about-page-impact-white about-page-chart fade-up">
              <img src="/images/impact-info-item-image-2.png" alt=""/>
            </div>

          </div>
        </div>

        {/* Trust line */}
        <div className="about-page-trust-line">
          Trusted By <b>58,900+</b> Users
          <span className="about-page-stars">★★★★★ 4.9/5</span>
          <br />
          Helping Brands Connect, Grow, and Succeed in the Modern Digital World
        </div>

      </div>
    </section>
  );
}
