import React from 'react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>{/* End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          {/* Left Sidebar */}
          <div className="col-lg-4" data-aos="fade-right" data-aos-delay="150">
            <div className="testimonials-sidebar">
              <div className="avatar-stack">
                <img src="/assets/img/person/person-m-3.webp" alt="Happy Client" className="avatar" loading="lazy" />
                <img src="/assets/img/person/person-f-7.webp" alt="Happy Client" className="avatar" loading="lazy" />
                <img src="/assets/img/person/person-m-9.webp" alt="Happy Client" className="avatar" loading="lazy" />
                <img src="/assets/img/person/person-f-4.webp" alt="Happy Client" className="avatar" loading="lazy" />
                <span className="avatar-count">+2.5k</span>
              </div>
              <div className="sidebar-content">
                <span className="satisfied-badge"><i className="bi bi-heart-fill"></i> Satisfied Clients</span>
                <h3>Discover What Our Clients Say About Us</h3>
                <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.</p>
                <a href="#" className="btn-view-all">View All Reviews <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>{/* End Left Sidebar */}

          {/* Right Testimonials Slider */}
          <div className="col-lg-8" data-aos="fade-left" data-aos-delay="200">
            <div className="testimonials-carousel swiper init-swiper">
              <script type="application/json" className="swiper-config">
                {JSON.stringify({
                  loop: true,
                  speed: 700,
                  autoplay: { delay: 5000 },
                  slidesPerView: 1,
                  spaceBetween: 24,
                  pagination: {
                    el: ".swiper-pagination",
                    type: "bullets",
                    clickable: true
                  },
                  breakpoints: {
                    768: {
                      slidesPerView: 2
                    }
                  }
                })}
              </script>

              <div className="swiper-wrapper">
                {/* Testimonial Card 1 */}
                <div className="swiper-slide">
                  <div className="testimonial-card">
                    <div className="card-top">
                      <div className="stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                      <span className="quote-mark"><i className="bi bi-quote"></i></span>
                    </div>
                    <p className="testimonial-text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    <div className="author-info">
                      <img src="/assets/img/person/person-f-2.webp" alt="Client" className="author-img" loading="lazy" />
                      <div className="author-details">
                        <h5>Sophia Anderson</h5>
                        <span>Marketing Director</span>
                      </div>
                    </div>
                  </div>
                </div>{/* End Testimonial Card */}

                {/* Testimonial Card 2 */}
                <div className="swiper-slide">
                  <div className="testimonial-card">
                    <div className="card-top">
                      <div className="stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                      <span className="quote-mark"><i className="bi bi-quote"></i></span>
                    </div>
                    <p className="testimonial-text">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
                    <div className="author-info">
                      <img src="/assets/img/person/person-m-5.webp" alt="Client" className="author-img" loading="lazy" />
                      <div className="author-details">
                        <h5>Marcus Webb</h5>
                        <span>Tech Lead</span>
                      </div>
                    </div>
                  </div>
                </div>{/* End Testimonial Card */}

                {/* Testimonial Card 3 */}
                <div className="swiper-slide">
                  <div className="testimonial-card">
                    <div className="card-top">
                      <div className="stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                      <span className="quote-mark"><i className="bi bi-quote"></i></span>
                    </div>
                    <p className="testimonial-text">Itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                    <div className="author-info">
                      <img src="/assets/img/person/person-f-9.webp" alt="Client" className="author-img" loading="lazy" />
                      <div className="author-details">
                        <h5>Elena Rodriguez</h5>
                        <span>Startup Founder</span>
                      </div>
                    </div>
                  </div>
                </div>{/* End Testimonial Card */}

                {/* Testimonial Card 4 */}
                <div className="swiper-slide">
                  <div className="testimonial-card">
                    <div className="card-top">
                      <div className="stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                      <span className="quote-mark"><i className="bi bi-quote"></i></span>
                    </div>
                    <p className="testimonial-text">Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus omnis voluptas assumenda.</p>
                    <div className="author-info">
                      <img src="/assets/img/person/person-m-11.webp" alt="Client" className="author-img" loading="lazy" />
                      <div className="author-details">
                        <h5>James Mitchell</h5>
                        <span>Product Designer</span>
                      </div>
                    </div>
                  </div>
                </div>{/* End Testimonial Card */}

                {/* Testimonial Card 5 */}
                <div className="swiper-slide">
                  <div className="testimonial-card">
                    <div className="card-top">
                      <div className="stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                      <span className="quote-mark"><i className="bi bi-quote"></i></span>
                    </div>
                    <p className="testimonial-text">Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi consequatur reprehenderit.</p>
                    <div className="author-info">
                      <img src="/assets/img/person/person-f-14.webp" alt="Client" className="author-img" loading="lazy" />
                      <div className="author-details">
                        <h5>Olivia Chen</h5>
                        <span>Operations Manager</span>
                      </div>
                    </div>
                  </div>
                </div>{/* End Testimonial Card */}
              </div>

              <div className="swiper-pagination"></div>
            </div>
          </div>{/* End Right Testimonials Slider */}
        </div>
      </div>
    </section>
  );
}