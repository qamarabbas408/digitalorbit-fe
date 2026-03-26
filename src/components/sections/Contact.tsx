import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>{/* End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-5 align-items-stretch">
          <div className="col-lg-5" data-aos="fade-right" data-aos-delay="200">
            <div className="info-panel">
              <div className="panel-header">
                <span className="section-badge">
                  <i className="bi bi-chat-dots-fill"></i>
                  Get In Touch
                </span>
                <h3>Let&apos;s Bring Your Vision to Life</h3>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.</p>
              </div>

              <div className="contact-methods">
                <div className="method-item">
                  <div className="method-icon">
                    <i className="bi bi-envelope-paper-fill"></i>
                  </div>
                  <div className="method-details">
                    <span className="method-label">Email Us</span>
                    <a href="mailto:support@example.com">support@example.com</a>
                  </div>
                </div>

                <div className="method-item">
                  <div className="method-icon">
                    <i className="bi bi-headset"></i>
                  </div>
                  <div className="method-details">
                    <span className="method-label">Call Us</span>
                    <a href="tel:+15558901234">+1 (555) 890-1234</a>
                  </div>
                </div>

                <div className="method-item">
                  <div className="method-icon">
                    <i className="bi bi-pin-map-fill"></i>
                  </div>
                  <div className="method-details">
                    <span className="method-label">Visit Us</span>
                    <span>1847 Oak Avenue, Portland, OR 97201</span>
                  </div>
                </div>
              </div>

              <div className="stats-strip">
                <div className="stat-item">
                  <span className="stat-number">98%</span>
                  <span className="stat-text">Satisfaction</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">24/7</span>
                  <span className="stat-text">Support</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">3.2k</span>
                  <span className="stat-text">Projects</span>
                </div>
              </div>

              <div className="social-connect">
                <span>Follow Us</span>
                <div className="social-icons">
                  <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                  <a href="#" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
                  <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                  <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>{/* End Info Panel */}

          <div className="col-lg-7" data-aos="fade-left" data-aos-delay="300">
            <div className="form-card">
              <div className="form-card-header">
                <div className="header-icon">
                  <i className="bi bi-send-fill"></i>
                </div>
                <div className="header-text">
                  <h4>Send Us a Message</h4>
                  <p>Fill out the form and our team will respond within 24 hours.</p>
                </div>
              </div>

              <form action="/api/contact" method="post" className="php-email-form">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="input-group-custom">
                      <label>Your Name</label>
                      <div className="input-wrapper">
                        <i className="bi bi-person"></i>
                        <input type="text" name="name" placeholder="John Doe" required />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-group-custom">
                      <label>Email Address</label>
                      <div className="input-wrapper">
                        <i className="bi bi-envelope"></i>
                        <input type="email" name="email" placeholder="john@example.com" required />
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="input-group-custom">
                      <label>Subject</label>
                      <div className="input-wrapper">
                        <i className="bi bi-chat-square-text"></i>
                        <input type="text" name="subject" placeholder="How can we help?" required />
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="input-group-custom">
                      <label>Your Message</label>
                      <div className="input-wrapper textarea-wrapper">
                        <i className="bi bi-pencil-square"></i>
                        <textarea name="message" rows={5} placeholder="Tell us about your project..." required></textarea>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-actions">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>

                  <button type="submit" className="btn-submit">
                    <span>Send Message</span>
                    <i className="bi bi-arrow-right-circle-fill"></i>
                  </button>

                  <div className="secure-note">
                    <i className="bi bi-lock-fill"></i>
                    <span>Your data is encrypted and secure</span>
                  </div>
                </div>
              </form>
            </div>
          </div>{/* End Form Card */}
        </div>
      </div>
    </section>
  );
}