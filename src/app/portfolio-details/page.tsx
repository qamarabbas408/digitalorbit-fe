import HtmlContent from '@/components/HtmlContent';

export default function PortfolioDetailsPage() {
  const html = `

    <!-- Page Title -->
    <div class="page-title">
      <div class="breadcrumbs">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#"><i class="bi bi-house"></i> Home</a></li>
            <li class="breadcrumb-item"><a href="#">Category</a></li>
            <li class="breadcrumb-item active current">Portfolio Details</li>
          </ol>
        </nav>
      </div>

      <div class="title-wrapper">
        <h1>Portfolio Details</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      </div>
    </div><!-- End Page Title -->

    <!-- Portfolio Details Section -->
    <section id="portfolio-details" class="portfolio-details section">

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row gy-5">
          <div class="col-lg-7" data-aos="fade-right" data-aos-delay="100">
            <div class="hero-image-wrapper">
              <div class="portfolio-slider swiper init-swiper">
                <script type="application/json" class="swiper-config">
                  {
                    "loop": true,
                    "speed": 700,
                    "autoplay": {
                      "delay": 4500
                    },
                    "effect": "slide",
                    "slidesPerView": 1,
                    "navigation": {
                      "nextEl": ".swiper-button-next",
                      "prevEl": ".swiper-button-prev"
                    }
                  }
                </script>
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src="/assets/img/portfolio/portfolio-5.webp" alt="Project Showcase" class="img-fluid">
                  </div>
                  <div class="swiper-slide">
                    <img src="/assets/img/portfolio/portfolio-7.webp" alt="Project Showcase" class="img-fluid">
                  </div>
                  <div class="swiper-slide">
                    <img src="/assets/img/portfolio/portfolio-8.webp" alt="Project Showcase" class="img-fluid">
                  </div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
              <div class="floating-badge">
                <i class="bi bi-award"></i>
                <span>Award Winning</span>
              </div>
            </div>
          </div><!-- End Image Column -->

          <div class="col-lg-5" data-aos="fade-left" data-aos-delay="200">
            <div class="project-info-card">
              <div class="project-category">
                <span class="dot"></span>
                <span>Web Application</span>
              </div>
              <h1 class="project-title">Creative Digital Experience Platform</h1>
              <p class="project-excerpt">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae ultricies eget.</p>

              <div class="meta-grid">
                <div class="meta-item">
                  <span class="meta-label">Client</span>
                  <span class="meta-value">TechVenture Labs</span>
                </div>
                <div class="meta-item">
                  <span class="meta-label">Date</span>
                  <span class="meta-value">March 2024</span>
                </div>
                <div class="meta-item">
                  <span class="meta-label">Duration</span>
                  <span class="meta-value">4 Months</span>
                </div>
                <div class="meta-item">
                  <span class="meta-label">Website</span>
                  <a href="#" class="meta-value meta-link">project.example.com</a>
                </div>
              </div>

              <div class="tech-stack">
                <span class="tech-label">Tech Stack</span>
                <div class="tech-icons">
                  <span class="tech-badge">Vue.js</span>
                  <span class="tech-badge">Laravel</span>
                  <span class="tech-badge">PostgreSQL</span>
                  <span class="tech-badge">Docker</span>
                </div>
              </div>
            </div>
          </div><!-- End Info Column -->
        </div>

        <div class="stats-ribbon" data-aos="fade-up" data-aos-delay="300">
          <div class="stat-box">
            <span class="stat-number">25k+</span>
            <span class="stat-text">Monthly Users</span>
          </div>
          <div class="stat-box">
            <span class="stat-number">99.9%</span>
            <span class="stat-text">Uptime</span>
          </div>
          <div class="stat-box">
            <span class="stat-number">12</span>
            <span class="stat-text">Team Members</span>
          </div>
          <div class="stat-box">
            <span class="stat-number">4.9</span>
            <span class="stat-text">Client Rating</span>
          </div>
        </div>

        <div class="content-sections">
          <div class="row gy-5">
            <div class="col-lg-8" data-aos="fade-up" data-aos-delay="100">
              <div class="content-block">
                <div class="block-header">
                  <span class="block-icon"><i class="bi bi-file-text"></i></span>
                  <h3>Project Overview</h3>
                </div>
                <p class="lead-text">Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
                <p>Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit.</p>
                <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
              </div>

              <div class="challenge-solution" data-aos="fade-up" data-aos-delay="200">
                <div class="row g-4">
                  <div class="col-md-6">
                    <div class="cs-card challenge">
                      <div class="cs-icon">
                        <i class="bi bi-puzzle"></i>
                      </div>
                      <h4>The Challenge</h4>
                      <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Donec velit neque, auctor sit amet aliquam vel.</p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="cs-card solution">
                      <div class="cs-icon">
                        <i class="bi bi-check2-circle"></i>
                      </div>
                      <h4>Our Solution</h4>
                      <p>Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta mauris.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div><!-- End Main Content Column -->

            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div class="features-sidebar">
                <h3 class="sidebar-title">Key Features</h3>
                <div class="feature-list">
                  <div class="feature-item">
                    <div class="feature-icon">
                      <i class="bi bi-shield-lock"></i>
                    </div>
                    <div class="feature-content">
                      <h5>Advanced Security</h5>
                      <p>Multi-layer protection system</p>
                    </div>
                  </div>
                  <div class="feature-item">
                    <div class="feature-icon">
                      <i class="bi bi-speedometer2"></i>
                    </div>
                    <div class="feature-content">
                      <h5>High Performance</h5>
                      <p>Optimized for speed</p>
                    </div>
                  </div>
                  <div class="feature-item">
                    <div class="feature-icon">
                      <i class="bi bi-phone"></i>
                    </div>
                    <div class="feature-content">
                      <h5>Mobile Responsive</h5>
                      <p>Works on all devices</p>
                    </div>
                  </div>
                  <div class="feature-item">
                    <div class="feature-icon">
                      <i class="bi bi-cloud-arrow-up"></i>
                    </div>
                    <div class="feature-content">
                      <h5>Cloud Integration</h5>
                      <p>Seamless cloud sync</p>
                    </div>
                  </div>
                </div>
              </div>
            </div><!-- End Sidebar Column -->
          </div>
        </div>

        <div class="gallery-section" data-aos="fade-up" data-aos-delay="100">
          <div class="gallery-header">
            <span class="section-label"><i class="bi bi-images"></i> Gallery</span>
            <h3>Project Screenshots</h3>
          </div>
          <div class="row g-4">
            <div class="col-md-6">
              <div class="gallery-card large">
                <a href="/assets/img/portfolio/portfolio-11.webp" class="glightbox">
                  <img src="/assets/img/portfolio/portfolio-11.webp" alt="Project Screenshot" class="img-fluid" loading="lazy">
                  <div class="gallery-overlay">
                    <i class="bi bi-zoom-in"></i>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row g-4">
                <div class="col-12">
                  <div class="gallery-card">
                    <a href="/assets/img/portfolio/portfolio-12.webp" class="glightbox">
                      <img src="/assets/img/portfolio/portfolio-12.webp" alt="Project Screenshot" class="img-fluid" loading="lazy">
                      <div class="gallery-overlay">
                        <i class="bi bi-zoom-in"></i>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-6">
                  <div class="gallery-card">
                    <a href="/assets/img/portfolio/portfolio-2.webp" class="glightbox">
                      <img src="/assets/img/portfolio/portfolio-2.webp" alt="Project Screenshot" class="img-fluid" loading="lazy">
                      <div class="gallery-overlay">
                        <i class="bi bi-zoom-in"></i>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-6">
                  <div class="gallery-card">
                    <a href="/assets/img/portfolio/portfolio-3.webp" class="glightbox">
                      <img src="/assets/img/portfolio/portfolio-3.webp" alt="Project Screenshot" class="img-fluid" loading="lazy">
                      <div class="gallery-overlay">
                        <i class="bi bi-zoom-in"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="navigation-bar" data-aos="fade-up" data-aos-delay="100">
          <a href="#" class="nav-link prev">
            <span class="nav-icon"><i class="bi bi-arrow-left-short"></i></span>
            <span class="nav-text">Previous Work</span>
          </a>
          <a href="#" class="nav-link center">
            <span class="nav-icon"><i class="bi bi-grid-3x3-gap"></i></span>
            <span class="nav-text">View All</span>
          </a>
          <a href="#" class="nav-link next">
            <span class="nav-text">Next Work</span>
            <span class="nav-icon"><i class="bi bi-arrow-right-short"></i></span>
          </a>
        </div>

      </div>

    </section><!-- /Portfolio Details Section -->

  `;
  
  return <HtmlContent html={html} />;
}
