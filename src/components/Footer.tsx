import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="footer light-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6 footer-info">
            <Link href="/" className="logo d-flex align-items-center mb-4">
              <span className="sitename">DigitalOrbit</span>
            </Link>
            <p>
              Building innovative digital solutions for your business. We specialize in web development, mobile applications, and custom software.
            </p>
            <div className="social-links d-flex mt-4">
              <a href="#" aria-label="Twitter">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" aria-label="TikTok">
                <i className="bi bi-tiktok"></i>
              </a>
              <a href="#" aria-label="Pinterest">
                <i className="bi bi-pinterest"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="/#services">Web Development</a>
              </li>
              <li>
                <a href="/#services">Mobile Apps</a>
              </li>
              <li>
                <a href="/#services">UI/UX Design</a>
              </li>
              <li>
                <a href="/#services">Custom Software</a>
              </li>
              <li>
                <a href="/#services">API Integration</a>
              </li>
              <li>
                <a href="/#services">Cloud Solutions</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="/#about">About Us</a>
              </li>
              <li>
                <a href="/#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/#team">Our Team</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms">Terms of Service</a>
              </li>
              <li>
                <a href="/#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="footer-newsletter">
              <h4>Stay Updated</h4>
              <p>
                Subscribe to our newsletter for the latest tech insights, project updates, and industry news.
              </p>
              <form action="/api/newsletter" method="post" className="php-email-form">
                <div className="position-relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                  <button type="submit" className="btn-subscribe">
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your subscription request has been sent. Thank you!
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <div className="row gy-3">
          <div className="col-md-6 order-2 order-md-1">
            <div className="copyright">
              <p>
                © <span>Copyright</span>{" "}
                <strong className="sitename">DigitalOrbit</strong>. All Rights
                Reserved.
              </p>
            </div>
           
          </div>
          <div className="col-md-6 order-1 order-md-2">
            <div className="legal-links">
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}