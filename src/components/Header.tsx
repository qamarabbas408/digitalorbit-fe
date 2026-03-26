import Link from "next/link";

export default function Header() {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container position-relative d-flex align-items-center justify-content-between">
        <Link href="/" className="logo d-flex align-items-center me-auto me-xl-0">
          {/* Uncomment the line below if you also wish to use an image logo */}
          {/* <img src="/assets/img/logo.webp" alt=""> */}
          <h1 className="sitename">Orbit</h1>
          <span>.</span>
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link href="/#hero" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#about">About</Link>
            </li>
            <li>
              <Link href="/#services">Services</Link>
            </li>
            <li>
              <Link href="/#portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/#team">Team</Link>
            </li>
            <li className="dropdown">
              <Link href="#">
                <span>Dropdown</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </Link>
              <ul>
                <li>
                  <Link href="#">Dropdown 1</Link>
                </li>
                <li className="dropdown">
                  <Link href="#">
                    <span>Deep Dropdown</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </Link>
                  <ul>
                    <li>
                      <Link href="#">Deep Dropdown 1</Link>
                    </li>
                    <li>
                      <Link href="#">Deep Dropdown 2</Link>
                    </li>
                    <li>
                      <Link href="#">Deep Dropdown 3</Link>
                    </li>
                    <li>
                      <Link href="#">Deep Dropdown 4</Link>
                    </li>
                    <li>
                      <Link href="#">Deep Dropdown 5</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="#">Dropdown 2</Link>
                </li>
                <li>
                  <Link href="#">Dropdown 3</Link>
                </li>
                <li>
                  <Link href="#">Dropdown 4</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a className="btn-getstarted" href="/#about">
          Get Started
        </a>
      </div>
    </header>
  );
}