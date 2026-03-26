import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="footer light-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6 footer-info">
            <Link href="/" className="logo d-flex align-items-center mb-4">
              <span className="sitename">Orbit</span>
            </Link>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
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
            <h4>Shop</h4>
            <ul>
              <li>
                <a href="#">New Arrivals</a>
              </li>
              <li>
                <a href="#">Best Sellers</a>
              </li>
              <li>
                <a href="#">Sale Items</a>
              </li>
              <li>
                <a href="#">Men&apos;s Collection</a>
              </li>
              <li>
                <a href="#">Women&apos;s Collection</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Customer Service</h4>
            <ul>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Shipping &amp; Returns</a>
              </li>
              <li>
                <a href="#">Size Guide</a>
              </li>
              <li>
                <a href="#">Track Order</a>
              </li>
              <li>
                <a href="#">Gift Cards</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Sustainability</a>
              </li>
              <li>
                <a href="#">Affiliate Program</a>
              </li>
              <li>
                <a href="#">Store Locator</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="footer-newsletter">
              <h4>Stay Updated</h4>
              <p>
                Subscribe to our newsletter for exclusive offers, new arrivals,
                and fashion tips.
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
                <strong className="sitename">Orbit</strong>. All Rights
                Reserved.
              </p>
            </div>
            <div className="credits">
              {/* All the links in the footer should remain intact. */}
              {/* You can delete the links only if you've purchased the pro version. */}
              {/* Licensing information: https://bootstrapmade.com/license/ */}
              {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
              Designed by{" "}
              <a href="https://bootstrapmade.com/">BootstrapMade</a> |{" "}
              <a href="https://bootstrapmade.com/tools/">DevTools</a>
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