import React from 'react';

export default function StarterPagePage() {
  return (
    <>
      {/* Page Title */}
      <div className="page-title">
        <div className="breadcrumbs">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/"><i className="bi bi-house"></i> Home</a></li>
              <li className="breadcrumb-item"><a href="#">Category</a></li>
              <li className="breadcrumb-item active current">Starter Page</li>
            </ol>
          </nav>
        </div>
        <div className="title-wrapper">
          <h1>Starter Page</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
      </div>{/* End Page Title */}

      {/* Starter Section Section */}
      <section id="starter-section" className="starter-section section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Starter Section</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>{/* End Section Title */}

        <div className="container" data-aos="fade-up">
          <p>Use this page as a starter for your own custom pages.</p>
        </div>
      </section>{/* /Starter Section Section */}
    </>
  );
}