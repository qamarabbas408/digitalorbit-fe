import React from 'react';

export default function Team() {
  return (
    <section id="team" className="team section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Team</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>{/* End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-5">
          {/* Team Member 1 */}
          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="team-card">
              <div className="member-img">
                <img src="/assets/img/person/person-m-1.webp" className="img-fluid" alt="Team Member" />
                <div className="social-overlay">
                  <div className="social-links">
                    <a href="#"><i className="bi bi-twitter-x"></i></a>
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                    <a href="#"><i className="bi bi-instagram"></i></a>
                  </div>
                </div>
              </div>
              <div className="member-info">
                <span className="member-badge">Founder</span>
                <h4>Marcus Wellington</h4>
                <p>Chief Executive Officer</p>
              </div>
            </div>
          </div>{/* End Team Member */}

          {/* Team Member 2 */}
          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="team-card">
              <div className="member-img">
                <img src="/assets/img/person/person-f-2.webp" className="img-fluid" alt="Team Member" />
                <div className="social-overlay">
                  <div className="social-links">
                    <a href="#"><i className="bi bi-twitter-x"></i></a>
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                    <a href="#"><i className="bi bi-dribbble"></i></a>
                  </div>
                </div>
              </div>
              <div className="member-info">
                <span className="member-badge">Strategy</span>
                <h4>Elena Rodriguez</h4>
                <p>Creative Director</p>
              </div>
            </div>
          </div>{/* End Team Member */}

          {/* Team Member 3 - Featured */}
          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="team-card featured">
              <div className="member-img">
                <img src="/assets/img/person/person-m-5.webp" className="img-fluid" alt="Team Member" />
                <div className="social-overlay">
                  <div className="social-links">
                    <a href="#"><i className="bi bi-twitter-x"></i></a>
                    <a href="#"><i className="bi bi-github"></i></a>
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
              <div className="member-info">
                <span className="member-badge">Tech Lead</span>
                <h4>David Chen</h4>
                <p>Head of Engineering</p>
              </div>
            </div>
          </div>{/* End Team Member */}

          {/* Team Member 4 */}
          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="team-card">
              <div className="member-img">
                <img src="/assets/img/person/person-f-7.webp" className="img-fluid" alt="Team Member" />
                <div className="social-overlay">
                  <div className="social-links">
                    <a href="#"><i className="bi bi-twitter-x"></i></a>
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                    <a href="#"><i className="bi bi-behance"></i></a>
                  </div>
                </div>
              </div>
              <div className="member-info">
                <span className="member-badge">Growth</span>
                <h4>Sophia Martinez</h4>
                <p>Marketing Director</p>
              </div>
            </div>
          </div>{/* End Team Member */}
        </div>

        {/* Stats Row */}
        <div className="team-stats" data-aos="fade-up" data-aos-delay="500">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="stats-wrapper">
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Team Members</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">12</span>
                  <span className="stat-label">Countries</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">8+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}