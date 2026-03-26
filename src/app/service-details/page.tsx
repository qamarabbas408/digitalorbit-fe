import HtmlContent from '@/components/HtmlContent';

export default function ServiceDetailsPage() {
  const html = `

    <!-- Page Title -->
    <div class="page-title">
      <div class="breadcrumbs">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#"><i class="bi bi-house"></i> Home</a></li>
            <li class="breadcrumb-item"><a href="#">Category</a></li>
            <li class="breadcrumb-item active current">Service Details</li>
          </ol>
        </nav>
      </div>

      <div class="title-wrapper">
        <h1>Service Details</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      </div>
    </div><!-- End Page Title -->

    <!-- Service Details Section -->
    <section id="service-details" class="service-details section">

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row gy-5">

          <!-- Main Content Column -->
          <div class="col-lg-8">

            <!-- Service Hero Image -->
            <div class="service-hero" data-aos="fade-up" data-aos-delay="100">
              <img src="/assets/img/services/services-7.webp" alt="Service detail" class="img-fluid">
              <div class="service-badge">
                <i class="bi bi-star-fill"></i>
                <span>Premium Solution</span>
              </div>
            </div>

            <!-- Service Overview -->
            <div class="service-overview" data-aos="fade-up" data-aos-delay="200">
              <div class="overview-label">
                <span class="dot"></span>
                <span>What We Deliver</span>
              </div>
              <h2>Comprehensive Digital Transformation Solutions</h2>
              <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
              <p>Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.</p>
            </div>

            <!-- Key Features -->
            <div class="key-features" data-aos="fade-up" data-aos-delay="300">
              <h3>Key Capabilities</h3>
              <div class="row g-4">
                <div class="col-md-6">
                  <div class="feature-card">
                    <div class="feature-icon">
                      <i class="bi bi-lightning-charge"></i>
                    </div>
                    <div class="feature-content">
                      <h4>Rapid Deployment</h4>
                      <p>Mauris blandit aliquet elit eget tincidunt nibh pulvinar a sed porttitor lectus.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="feature-card">
                    <div class="feature-icon">
                      <i class="bi bi-shield-check"></i>
                    </div>
                    <div class="feature-content">
                      <h4>Enterprise Security</h4>
                      <p>Pellentesque in ipsum id orci porta dapibus cras ultricies ligula sed magna.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="feature-card">
                    <div class="feature-icon">
                      <i class="bi bi-graph-up-arrow"></i>
                    </div>
                    <div class="feature-content">
                      <h4>Scalable Architecture</h4>
                      <p>Quisque velit nisi pretium ut lacinia in elementum id enim sed porttitor.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="feature-card">
                    <div class="feature-icon">
                      <i class="bi bi-headset"></i>
                    </div>
                    <div class="feature-content">
                      <h4>Dedicated Support</h4>
                      <p>Nulla quis lorem ut libero malesuada feugiat proin eget tortor risus.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Process Section -->
            <div class="service-process" data-aos="fade-up" data-aos-delay="400">
              <h3>Implementation Process</h3>
              <div class="process-timeline">
                <div class="process-item">
                  <div class="process-number">01</div>
                  <div class="process-content">
                    <h4>Discovery &amp; Analysis</h4>
                    <p>Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat accumsan id imperdiet et.</p>
                  </div>
                </div>
                <div class="process-item">
                  <div class="process-number">02</div>
                  <div class="process-content">
                    <h4>Strategic Planning</h4>
                    <p>Donec sollicitudin molestie malesuada. Praesent sapien massa convallis a pellentesque nec egestas.</p>
                  </div>
                </div>
                <div class="process-item">
                  <div class="process-number">03</div>
                  <div class="process-content">
                    <h4>Development &amp; Testing</h4>
                    <p>Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet.</p>
                  </div>
                </div>
                <div class="process-item">
                  <div class="process-number">04</div>
                  <div class="process-content">
                    <h4>Launch &amp; Optimization</h4>
                    <p>Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit eget tincidunt nibh.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Gallery Section -->
            <div class="service-gallery" data-aos="fade-up" data-aos-delay="500">
              <h3>Project Showcase</h3>
              <div class="row g-3">
                <div class="col-md-6">
                  <a href="/assets/img/services/services-3.webp" class="glightbox" data-gallery="service-gallery">
                    <img src="/assets/img/services/services-3.webp" alt="Project showcase" class="img-fluid" loading="lazy">
                  </a>
                </div>
                <div class="col-md-6">
                  <a href="/assets/img/services/services-5.webp" class="glightbox" data-gallery="service-gallery">
                    <img src="/assets/img/services/services-5.webp" alt="Project showcase" class="img-fluid" loading="lazy">
                  </a>
                </div>
                <div class="col-md-4">
                  <a href="/assets/img/services/services-8.webp" class="glightbox" data-gallery="service-gallery">
                    <img src="/assets/img/services/services-8.webp" alt="Project showcase" class="img-fluid" loading="lazy">
                  </a>
                </div>
                <div class="col-md-4">
                  <a href="/assets/img/services/services-10.webp" class="glightbox" data-gallery="service-gallery">
                    <img src="/assets/img/services/services-10.webp" alt="Project showcase" class="img-fluid" loading="lazy">
                  </a>
                </div>
                <div class="col-md-4">
                  <a href="/assets/img/services/services-12.webp" class="glightbox" data-gallery="service-gallery">
                    <img src="/assets/img/services/services-12.webp" alt="Project showcase" class="img-fluid" loading="lazy">
                  </a>
                </div>
              </div>
            </div>

          </div><!-- End Main Content Column -->

          <!-- Sidebar Column -->
          <div class="col-lg-4">

            <!-- Service List -->
            <div class="sidebar-widget service-list" data-aos="fade-up" data-aos-delay="200">
              <h3>All Services</h3>
              <ul>
                <li class="active">
                  <a href="#">
                    <i class="bi bi-arrow-right-circle"></i>
                    <span>Digital Transformation</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="bi bi-arrow-right-circle"></i>
                    <span>Cloud Infrastructure</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="bi bi-arrow-right-circle"></i>
                    <span>Data Analytics</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="bi bi-arrow-right-circle"></i>
                    <span>Cybersecurity Solutions</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="bi bi-arrow-right-circle"></i>
                    <span>Custom Development</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="bi bi-arrow-right-circle"></i>
                    <span>IT Consulting</span>
                  </a>
                </li>
              </ul>
            </div><!-- End Service List -->

            <!-- Stats Widget -->
            <div class="sidebar-widget stats-widget" data-aos="fade-up" data-aos-delay="300">
              <div class="stat-item">
                <div class="stat-number">
                  <span data-purecounter-start="0" data-purecounter-end="850" data-purecounter-duration="1" class="purecounter"></span>+
                </div>
                <p>Projects Delivered</p>
              </div>
              <div class="stat-item">
                <div class="stat-number">
                  <span data-purecounter-start="0" data-purecounter-end="99" data-purecounter-duration="1" class="purecounter"></span>%
                </div>
                <p>Client Satisfaction</p>
              </div>
              <div class="stat-item">
                <div class="stat-number">
                  <span data-purecounter-start="0" data-purecounter-end="24" data-purecounter-duration="1" class="purecounter"></span>/7
                </div>
                <p>Support Available</p>
              </div>
            </div><!-- End Stats Widget -->

            <!-- Download Brochure -->
            <div class="sidebar-widget download-widget" data-aos="fade-up" data-aos-delay="400">
              <h3>Resources</h3>
              <a href="#" class="download-item">
                <div class="download-icon">
                  <i class="bi bi-file-earmark-pdf"></i>
                </div>
                <div class="download-info">
                  <span class="file-name">Service Brochure</span>
                  <span class="file-size">PDF • 2.4 MB</span>
                </div>
                <i class="bi bi-download"></i>
              </a>
              <a href="#" class="download-item">
                <div class="download-icon">
                  <i class="bi bi-file-earmark-text"></i>
                </div>
                <div class="download-info">
                  <span class="file-name">Technical Overview</span>
                  <span class="file-size">PDF • 1.8 MB</span>
                </div>
                <i class="bi bi-download"></i>
              </a>
              <a href="#" class="download-item">
                <div class="download-icon">
                  <i class="bi bi-file-earmark-spreadsheet"></i>
                </div>
                <div class="download-info">
                  <span class="file-name">Pricing Guide</span>
                  <span class="file-size">PDF • 856 KB</span>
                </div>
                <i class="bi bi-download"></i>
              </a>
            </div><!-- End Download Widget -->

            <!-- CTA Widget -->
            <div class="sidebar-widget cta-widget" data-aos="fade-up" data-aos-delay="500">
              <div class="cta-content">
                <div class="cta-icon">
                  <i class="bi bi-chat-dots"></i>
                </div>
                <h3>Ready to Transform Your Business?</h3>
                <p>Connect with our specialists for a complimentary consultation.</p>
                <a href="#" class="cta-btn">Schedule a Call <i class="bi bi-arrow-right"></i></a>
              </div>
            </div><!-- End CTA Widget -->

          </div><!-- End Sidebar Column -->

        </div>

      </div>

    </section><!-- /Service Details Section -->

  `;
  
  return <HtmlContent html={html} />;
}
