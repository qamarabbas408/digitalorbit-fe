import React from 'react';

export default function WhyUs() {
  return (
    <section id="why-us" className="why-us section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Why Us</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>{/* End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-5">
          <div className="col-lg-5" data-aos="fade-right" data-aos-delay="200">
            <div className="sidebar-content">
              <div className="badge-wrapper">
                <span className="section-badge"><i className="bi bi-stars"></i> Our Difference</span>
              </div>
              <h2>Transform Your Vision Into Digital Excellence</h2>
              <p className="description">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>

              <div className="stat-cards">
                <div className="stat-card" data-aos="zoom-in" data-aos-delay="300">
                  <div className="stat-value">
                    <span className="purecounter" data-purecounter-start="0" data-purecounter-end="180" data-purecounter-duration="2">180</span>+
                  </div>
                  <div className="stat-text">Successful Campaigns</div>
                </div>
                <div className="stat-card" data-aos="zoom-in" data-aos-delay="350">
                  <div className="stat-value">
                    <span className="purecounter" data-purecounter-start="0" data-purecounter-end="95" data-purecounter-duration="2">95</span>%
                  </div>
                  <div className="stat-text">Customer Satisfaction</div>
                </div>
                <div className="stat-card" data-aos="zoom-in" data-aos-delay="400">
                  <div className="stat-value">
                    <span className="purecounter" data-purecounter-start="0" data-purecounter-end="320" data-purecounter-duration="2">320</span>%
                  </div>
                  <div className="stat-text">Growth Achieved</div>
                </div>
              </div>

              <div className="action-buttons">
                <a href="#" className="btn-main">Get Started Today</a>
                <a href="#" className="btn-outline">Explore Portfolio</a>
              </div>
            </div>
          </div>

          <div className="col-lg-7" data-aos="fade-left" data-aos-delay="200">
            <div className="features-grid">
              <div className="feature-box highlight" data-aos="fade-up" data-aos-delay="250">
                <div className="feature-ribbon">Top Rated</div>
                <div className="feature-icon">
                  <i className="bi bi-rocket-takeoff-fill"></i>
                </div>
                <div className="feature-content">
                  <h4>Rapid Implementation</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.</p>
                  <a href="#" className="feature-link">Discover How <i className="bi bi-chevron-right"></i></a>
                </div>
              </div>{/* End Feature Box */}

              <div className="feature-box" data-aos="fade-up" data-aos-delay="300">
                <div className="feature-icon">
                  <i className="bi bi-bar-chart-line-fill"></i>
                </div>
                <div className="feature-content">
                  <h4>Analytics-First Approach</h4>
                  <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.</p>
                  <a href="#" className="feature-link">Discover How <i className="bi bi-chevron-right"></i></a>
                </div>
              </div>{/* End Feature Box */}

              <div className="feature-box" data-aos="fade-up" data-aos-delay="350">
                <div className="feature-icon">
                  <i className="bi bi-award-fill"></i>
                </div>
                <div className="feature-content">
                  <h4>Award-Winning Team</h4>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
                  <a href="#" className="feature-link">Discover How <i className="bi bi-chevron-right"></i></a>
                </div>
              </div>{/* End Feature Box */}
            </div>

            <div className="process-timeline" data-aos="fade-up" data-aos-delay="400">
              <h5 className="timeline-title"><i className="bi bi-diagram-3-fill"></i> Our Proven Methodology</h5>
              <div className="timeline-steps">
                <div className="timeline-step">
                  <div className="step-marker">1</div>
                  <div className="step-info">
                    <strong>Research</strong>
                    <span>Gathering insights</span>
                  </div>
                </div>
                <div className="timeline-connector"></div>
                <div className="timeline-step">
                  <div className="step-marker">2</div>
                  <div className="step-info">
                    <strong>Blueprint</strong>
                    <span>Creating roadmap</span>
                  </div>
                </div>
                <div className="timeline-connector"></div>
                <div className="timeline-step">
                  <div className="step-marker">3</div>
                  <div className="step-info">
                    <strong>Build</strong>
                    <span>Developing solution</span>
                  </div>
                </div>
                <div className="timeline-connector"></div>
                <div className="timeline-step">
                  <div className="step-marker">4</div>
                  <div className="step-info">
                    <strong>Refine</strong>
                    <span>Iterating results</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="capabilities-section" data-aos="fade-up" data-aos-delay="450">
              <h5 className="capabilities-heading">What We Bring to the Table</h5>
              <div className="capabilities-grid">
                <div className="capability-card">
                  <div className="capability-icon">
                    <i className="bi bi-bullseye"></i>
                  </div>
                  <h6>Strategic Consulting</h6>
                  <p>Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                </div>
                <div className="capability-card">
                  <div className="capability-icon">
                    <i className="bi bi-code-slash"></i>
                  </div>
                  <h6>Tailored Development</h6>
                  <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.</p>
                </div>
                <div className="capability-card">
                  <div className="capability-icon">
                    <i className="bi bi-arrow-repeat"></i>
                  </div>
                  <h6>Continuous Enhancement</h6>
                  <p>Itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis voluptatibus maiores.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}