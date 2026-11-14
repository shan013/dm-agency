export default function ContactSections() {
  return (
    <>
      {/* SECTION 1: CONTACT FORM */}
      <section className="contact-page-top">
        <div className="site-container">
          <div className="contact-page-sec-head">
            <span className="contact-page-eyebrow">GET IN TOUCH</span>
            <h2 className="animate-letters">
              Let's Grow your Business
              <br />
              Together Today
            </h2>
          </div>

          <div className="contact-page-grid">
            {/* Left Dark Card */}
            <div className="contact-page-info-card">
              <h3>Contact Information</h3>

              <p>
                Have a project in mind? Get in touch with our team to discuss
                your ideas, and we'll help turn them into reality with the
                right strategy and solutions.
              </p>

              <div className="contact-page-info-list">
                <div className="contact-page-info-item fade-up">
                  <div className="contact-page-info-icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <strong>Phone Number</strong>
                    <span>123 456 789</span>
                  </div>
                </div>

                <div className="contact-page-info-divider"></div>

                <div className="contact-page-info-item fade-up">
                  <div className="contact-page-info-icon">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <strong>Email Address</strong>
                    <span>support@domainname.com</span>
                  </div>
                </div>

                <div className="contact-page-info-divider"></div>

                <div className="contact-page-info-item fade-up">
                  <div className="contact-page-info-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <strong>Our Location</strong>
                    <span>
                      2nd Floor, Tech Park Building, Near City Center Mall,
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="contact-page-form-card fade-up">
              <h3>Get in Touch</h3>

              <p>
                Have a project in mind? Get in touch with our team to discuss
                your ideas, and we'll help turn them into reality with the
                right strategy and solutions.
              </p>

              <form>
                <div className="contact-page-form-row">
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
                </div>

                <div className="contact-page-form-row">
                  <input type="email" placeholder="Email Address" />
                  <input type="tel" placeholder="Phone Number" />
                </div>

                <textarea
                  placeholder="Your Message"
                  rows="5"
                ></textarea>

                <button type="button" className="contact-page-send-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: MAP */}
      <section className="contact-page-map">
        <div className="site-container">
          <div className="contact-page-sec-head">
            <span className="contact-page-eyebrow">VISIT OUR LOCATION</span>
            <h2 className="animate-letters">
              Let's Connect at Our Creative
              <br />
              Digital Studio
            </h2>
          </div>

          <div className="contact-page-map-wrap fade-up">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d522.4860169838009!2d76.89274540629208!3d8.568207557187556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bee1d0fd092d%3A0x25ef24c28fc48196!2sViyyat%20Power%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1794224567194!5m2!1sen!2sin"
              title="Our location on Google Maps"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}