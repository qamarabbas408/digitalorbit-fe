import HtmlContent from '@/components/HtmlContent';

export default function TermsPage() {
  const html = `

    <!-- Terms Of Service Section -->
    <section id="terms-of-service" class="terms-of-service section">

      <div class="container" data-aos="fade-up">
        <!-- Page Header -->
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="terms-header" data-aos="fade-up">
              <div class="header-badge">
                <i class="bi bi-file-earmark-text"></i>
                <span>Legal Document</span>
              </div>
              <h2>Terms of Service</h2>
              <p>Review our terms and conditions governing your use of our platform and services</p>
              <div class="update-info">
                <i class="bi bi-calendar3"></i>
                <span>Effective Date: March 15, 2025</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Navigation -->
        <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="100">
          <div class="col-lg-10">
            <div class="quick-nav">
              <span class="nav-label">Quick Navigation:</span>
              <div class="nav-links">
                <a href="#acceptance">Acceptance</a>
                <a href="#ip-rights">IP Rights</a>
                <a href="#accounts">Accounts</a>
                <a href="#restrictions">Restrictions</a>
                <a href="#warranties">Warranties</a>
                <a href="#liability">Liability</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Content Sections -->
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="terms-body" data-aos="fade-up" data-aos-delay="200">

              <!-- Acceptance Section -->
              <article id="acceptance" class="terms-article">
                <div class="article-number">01</div>
                <div class="article-content">
                  <h3>Acceptance of Terms</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                  <div class="highlight-card info">
                    <div class="card-icon">
                      <i class="bi bi-lightbulb"></i>
                    </div>
                    <div class="card-text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor lectus nibh.</p>
                    </div>
                  </div>
                </div>
              </article>

              <!-- IP Rights Section -->
              <article id="ip-rights" class="terms-article">
                <div class="article-number">02</div>
                <div class="article-content">
                  <h3>Intellectual Property Rights</h3>
                  <p>Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                  <div class="checklist">
                    <div class="check-item">
                      <i class="bi bi-check2-circle"></i>
                      <span>Exclusive ownership of all platform content</span>
                    </div>
                    <div class="check-item">
                      <i class="bi bi-check2-circle"></i>
                      <span>Prohibited modification or reproduction</span>
                    </div>
                    <div class="check-item">
                      <i class="bi bi-check2-circle"></i>
                      <span>Protected trademarks and branding</span>
                    </div>
                    <div class="check-item">
                      <i class="bi bi-check2-circle"></i>
                      <span>Limited personal usage rights only</span>
                    </div>
                  </div>
                </div>
              </article>

              <!-- Accounts Section -->
              <article id="accounts" class="terms-article">
                <div class="article-number">03</div>
                <div class="article-content">
                  <h3>User Account Responsibilities</h3>
                  <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                  <div class="highlight-card warning">
                    <div class="card-icon">
                      <i class="bi bi-shield-exclamation"></i>
                    </div>
                    <div class="card-text">
                      <h5>Security Reminder</h5>
                      <p>Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
                    </div>
                  </div>
                </div>
              </article>

              <!-- Restrictions Section -->
              <article id="restrictions" class="terms-article">
                <div class="article-number">04</div>
                <div class="article-content">
                  <h3>Usage Restrictions</h3>
                  <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus cras ultricies ligula sed magna dictum porta.</p>
                  <div class="restrictions-grid">
                    <div class="restriction-card">
                      <i class="bi bi-slash-circle"></i>
                      <p>Automated data extraction or scraping</p>
                    </div>
                    <div class="restriction-card">
                      <i class="bi bi-slash-circle"></i>
                      <p>Distribution of harmful software</p>
                    </div>
                    <div class="restriction-card">
                      <i class="bi bi-slash-circle"></i>
                      <p>Unauthorized system access attempts</p>
                    </div>
                    <div class="restriction-card">
                      <i class="bi bi-slash-circle"></i>
                      <p>Content manipulation or framing</p>
                    </div>
                  </div>
                </div>
              </article>

              <!-- Warranties Section -->
              <article id="warranties" class="terms-article">
                <div class="article-number">05</div>
                <div class="article-content">
                  <h3>Disclaimer of Warranties</h3>
                  <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat. Pellentesque in ipsum id orci porta dapibus.</p>
                  <div class="disclaimer-panel">
                    <div class="panel-header">
                      <i class="bi bi-info-lg"></i>
                      <span>Service Limitations</span>
                    </div>
                    <ul class="panel-list">
                      <li>Vestibulum ante ipsum primis in faucibus orci</li>
                      <li>Donec velit neque, auctor sit amet aliquam vel</li>
                      <li>Nulla porttitor accumsan tincidunt curabitur</li>
                      <li>Praesent sapien massa convallis pellentesque</li>
                    </ul>
                  </div>
                </div>
              </article>

              <!-- Liability Section -->
              <article id="liability" class="terms-article">
                <div class="article-number">06</div>
                <div class="article-content">
                  <h3>Limitation of Liability</h3>
                  <p>Curabitur aliquet quam id dui posuere blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec velit neque.</p>
                </div>
              </article>

              <!-- Indemnification Section -->
              <article class="terms-article">
                <div class="article-number">07</div>
                <div class="article-content">
                  <h3>Indemnification Clause</h3>
                  <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
                </div>
              </article>

              <!-- Termination Section -->
              <article class="terms-article">
                <div class="article-number">08</div>
                <div class="article-content">
                  <h3>Account Termination</h3>
                  <p>Pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                </div>
              </article>

              <!-- Governing Law Section -->
              <article class="terms-article">
                <div class="article-number">09</div>
                <div class="article-content">
                  <h3>Applicable Jurisdiction</h3>
                  <p>Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Cras ultricies ligula sed magna dictum porta vestibulum ac diam.</p>
                </div>
              </article>

              <!-- Modifications Section -->
              <article class="terms-article">
                <div class="article-number">10</div>
                <div class="article-content">
                  <h3>Terms Modifications</h3>
                  <p>Proin eget tortor risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo lacinia eget consectetur sed convallis tellus.</p>
                  <div class="highlight-card notice">
                    <div class="card-icon">
                      <i class="bi bi-megaphone"></i>
                    </div>
                    <div class="card-text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit vestibulum ante ipsum primis faucibus orci luctus et ultrices posuere cubilia curae.</p>
                    </div>
                  </div>
                </div>
              </article>

            </div>
          </div>
        </div>

        <!-- Contact Footer -->
        <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="300">
          <div class="col-lg-10">
            <div class="terms-footer">
              <div class="footer-content">
                <div class="footer-text">
                  <h4>Need Clarification?</h4>
                  <p>Our legal team is available to address your questions regarding these terms.</p>
                </div>
                <div class="footer-actions">
                  <a href="#" class="btn-primary-action">
                    <i class="bi bi-chat-dots"></i>
                    <span>Get Support</span>
                  </a>
                  <a href="#" class="btn-secondary-action">
                    <i class="bi bi-download"></i>
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section><!-- /Terms Of Service Section -->

  `;
  
  return <HtmlContent html={html} />;
}
