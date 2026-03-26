import React from 'react';

export default function Services() {
  return (
    <section id="services" className="services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>{/* End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4">
          {/* Service Card 1 */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-card">
              <div className="icon-wrapper">
                <i className="bi bi-lightbulb"></i>
              </div>
              <h3>Strategic Consulting</h3>
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
              <a href="/service-details" className="service-link">
                <span>Discover More</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>{/* End Service Card */}

          {/* Service Card 2 */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="service-card">
              <div className="icon-wrapper">
                <i className="bi bi-graph-up-arrow"></i>
              </div>
              <h3>Growth Analytics</h3>
              <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
              <a href="/service-details" className="service-link">
                <span>Discover More</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>{/* End Service Card */}

          {/* Service Card 3 - Featured */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="service-card featured">
              <div className="featured-badge">
                <i className="bi bi-star-fill"></i>
                <span>Popular</span>
              </div>
              <div className="icon-wrapper">
                <i className="bi bi-palette"></i>
              </div>
              <h3>Creative Design</h3>
              <p>Praesent commodo cursus magna vel scelerisque nisl consectetur et vivamus sagittis.</p>
              <a href="/service-details" className="service-link">
                <span>Discover More</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>{/* End Service Card */}

          {/* Service Card 4 */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-card">
              <div className="icon-wrapper">
                <i className="bi bi-code-slash"></i>
              </div>
              <h3>Web Development</h3>
              <p>Cras mattis consectetur purus sit amet fermentum aenean lacinia bibendum nulla sed.</p>
              <a href="/service-details" className="service-link">
                <span>Discover More</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>{/* End Service Card */}

          {/* Service Card 5 */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="service-card">
              <div className="icon-wrapper">
                <i className="bi bi-megaphone"></i>
              </div>
              <h3>Digital Marketing</h3>
              <p>Donec ullamcorper nulla non metus auctor fringilla vestibulum id ligula porta felis.</p>
              <a href="/service-details" className="service-link">
                <span>Discover More</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>{/* End Service Card */}

          {/* Service Card 6 */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="service-card">
              <div className="icon-wrapper">
                <i className="bi bi-shield-check"></i>
              </div>
              <h3>Security Solutions</h3>
              <p>Maecenas sed diam eget risus varius blandit sit amet non magna integer posuere erat.</p>
              <a href="/service-details" className="service-link">
                <span>Discover More</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>{/* End Service Card */}
        </div>

        {/* Stats Row */}
        <div className="stats-row" data-aos="fade-up" data-aos-delay="400">
          <div className="row g-4 justify-content-center">
            <div className="col-6 col-md-3">
              <div className="stat-item">
                <span className="stat-number">250+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-item">
                <span className="stat-number">40+</span>
                <span className="stat-label">Team Experts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}