import React from 'react';

export default function PrivacyPage() {
  return (
    <section id="privacy" className="privacy section">
      <div className="container" data-aos="fade-up">
        <div className="row g-5">
          {/* Sidebar Navigation */}
          <div className="col-lg-3" data-aos="fade-right" data-aos-delay="100">
            <div className="sidebar-nav">
              <div className="nav-header">
                <i className="bi bi-shield-lock"></i>
                <span>Privacy Policy</span>
              </div>
              <ul className="nav-links">
                <li><a href="#intro">Introduction</a></li>
                <li><a href="#collection">Information Collection</a></li>
                <li><a href="#usage">How We Use Data</a></li>
                <li><a href="#sharing">Information Sharing</a></li>
                <li><a href="#security">Data Security</a></li>
                <li><a href="#rights">Your Rights</a></li>
                <li><a href="#updates">Policy Updates</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
              <div className="effective-date">
                <i className="bi bi-calendar3"></i>
                <span>Effective: March 15, 2025</span>
              </div>
            </div>
          </div>{/* End Sidebar Navigation */}

          {/* Main Content */}
          <div className="col-lg-9" data-aos="fade-left" data-aos-delay="200">
            <div className="policy-intro-card" data-aos="zoom-in" data-aos-delay="250">
              <div className="intro-icon">
                <i className="bi bi-info-circle"></i>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>

            <div className="policy-section" id="intro" data-aos="fade-up" data-aos-delay="100">
              <div className="section-number">01</div>
              <div className="section-content">
                <h2>Introduction</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
              </div>
            </div>{/* End Policy Section */}

            <div className="policy-section" id="collection" data-aos="fade-up" data-aos-delay="150">
              <div className="section-number">02</div>
              <div className="section-content">
                <h2>Information We Collect</h2>
                <p>Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit.</p>
                <div className="info-cards">
                  <div className="info-card">
                    <div className="card-icon">
                      <i className="bi bi-person-badge"></i>
                    </div>
                    <h4>Data You Provide</h4>
                    <ul>
                      <li>Full name and contact details</li>
                      <li>Login credentials</li>
                      <li>Billing information</li>
                      <li>Notification settings</li>
                    </ul>
                  </div>
                  <div className="info-card">
                    <div className="card-icon">
                      <i className="bi bi-gear-wide-connected"></i>
                    </div>
                    <h4>Automated Data</h4>
                    <ul>
                      <li>Device specifications</li>
                      <li>Activity logs and metrics</li>
                      <li>Geographic data when permitted</li>
                      <li>Browser configuration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>{/* End Policy Section */}

            <div className="policy-section" id="usage" data-aos="fade-up" data-aos-delay="200">
              <div className="section-number">03</div>
              <div className="section-content">
                <h2>How We Use Your Information</h2>
                <p>Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
                <div className="usage-grid">
                  <div className="usage-item">
                    <i className="bi bi-stars"></i>
                    <span>Deliver personalized experiences</span>
                  </div>
                  <div className="usage-item">
                    <i className="bi bi-credit-card"></i>
                    <span>Handle transactions and billing</span>
                  </div>
                  <div className="usage-item">
                    <i className="bi bi-bell"></i>
                    <span>Send service notifications</span>
                  </div>
                  <div className="usage-item">
                    <i className="bi bi-shield-check"></i>
                    <span>Ensure security and verification</span>
                  </div>
                  <div className="usage-item">
                    <i className="bi bi-graph-up-arrow"></i>
                    <span>Improve platform performance</span>
                  </div>
                  <div className="usage-item">
                    <i className="bi bi-headset"></i>
                    <span>Provide customer support</span>
                  </div>
                </div>
              </div>
            </div>{/* End Policy Section */}

            <div className="policy-section" id="sharing" data-aos="fade-up" data-aos-delay="250">
              <div className="section-number">04</div>
              <div className="section-content">
                <h2>Information Sharing and Disclosure</h2>
                <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et.</p>
                <div className="sharing-block">
                  <h4><i className="bi bi-hand-thumbs-up"></i> With Your Permission</h4>
                  <p>Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                </div>
                <div className="sharing-block">
                  <h4><i className="bi bi-bank"></i> For Legal Compliance</h4>
                  <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt.</p>
                  <ul>
                    <li>Comply with applicable regulations and legal requirements</li>
                    <li>Enforce our service agreements</li>
                    <li>Address security threats and fraudulent activity</li>
                    <li>Safeguard user rights and property</li>
                  </ul>
                </div>
              </div>
            </div>{/* End Policy Section */}

            <div className="policy-section" id="security" data-aos="fade-up" data-aos-delay="300">
              <div className="section-number">05</div>
              <div className="section-content">
                <h2>Data Security</h2>
                <p>Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed.</p>
                <div className="security-features">
                  <div className="security-item">
                    <div className="security-icon">
                      <i className="bi bi-lock"></i>
                    </div>
                    <div className="security-text">
                      <h5>SSL Encryption</h5>
                      <p>All data transmissions are encrypted</p>
                    </div>
                  </div>
                  <div className="security-item">
                    <div className="security-icon">
                      <i className="bi bi-clipboard-check"></i>
                    </div>
                    <div className="security-text">
                      <h5>Regular Audits</h5>
                      <p>Continuous security assessments</p>
                    </div>
                  </div>
                  <div className="security-item">
                    <div className="security-icon">
                      <i className="bi bi-person-lock"></i>
                    </div>
                    <div className="security-text">
                      <h5>Access Control</h5>
                      <p>Restricted data access policies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>{/* End Policy Section */}

            <div className="policy-section" id="rights" data-aos="fade-up" data-aos-delay="350">
              <div className="section-number">06</div>
              <div className="section-content">
                <h2>Your Rights and Choices</h2>
                <p>Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
                <div className="rights-list">
                  <div className="right-item">
                    <i className="bi bi-eye"></i>
                    <div>
                      <strong>Access</strong>
                      <span>Review your personal data anytime</span>
                    </div>
                  </div>
                  <div className="right-item">
                    <i className="bi bi-pencil-square"></i>
                    <div>
                      <strong>Correction</strong>
                      <span>Update inaccurate information</span>
                    </div>
                  </div>
                  <div className="right-item">
                    <i className="bi bi-trash3"></i>
                    <div>
                      <strong>Deletion</strong>
                      <span>Request removal of your data</span>
                    </div>
                  </div>
                  <div className="right-item">
                    <i className="bi bi-slash-circle"></i>
                    <div>
                      <strong>Restriction</strong>
                      <span>Limit how we process your information</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>{/* End Policy Section */}

            <div className="policy-section" id="updates" data-aos="fade-up" data-aos-delay="400">
              <div className="section-number">07</div>
              <div className="section-content">
                <h2>Changes to This Policy</h2>
                <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada feugiat.</p>
                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Pellentesque in ipsum id orci porta dapibus.</p>
              </div>
            </div>{/* End Policy Section */}

            <div className="policy-section contact-section" id="contact" data-aos="fade-up" data-aos-delay="450">
              <div className="section-number">08</div>
              <div className="section-content">
                <h2>Get in Touch</h2>
                <p>Nulla porttitor accumsan tincidunt. Proin eget tortor risus.</p>
                <div className="contact-cards">
                  <div className="contact-card">
                    <i className="bi bi-envelope"></i>
                    <span>support@example.com</span>
                  </div>
                  <div className="contact-card">
                    <i className="bi bi-geo-alt"></i>
                    <span>456 Oak Avenue, Portland, OR 97201</span>
                  </div>
                  <div className="contact-card">
                    <i className="bi bi-telephone"></i>
                    <span>+1 (555) 234-5678</span>
                  </div>
                </div>
              </div>
            </div>{/* End Policy Section */}
          </div>{/* End Main Content */}
        </div>
      </div>
    </section>
  );
}