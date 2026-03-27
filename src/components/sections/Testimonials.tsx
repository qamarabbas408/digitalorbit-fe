'use client';

import { useState, useEffect } from 'react';
import { useSettings } from '@/context/SettingsContext';

interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  content: string;
  rating: number;
  image: string;
  featured: boolean;
  status: string;
}

export default function Testimonials() {
  const { settings } = useSettings();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const res = await fetch('/api/testimonials');
      const data = await res.json();
      setTestimonials(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Failed to fetch testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  if (loading) {
    return (
      <section id="testimonials" className="testimonials section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
          <p>Loading testimonials...</p>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return (
      <section id="testimonials" className="testimonials section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
          <p>What our clients say about us</p>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>What our clients say about us</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-lg-4" data-aos="fade-right" data-aos-delay="150">
            <div className="testimonials-sidebar">
              <div className="avatar-stack">
                {testimonials.slice(0, 4).map((t, i) => (
                  <div 
                    key={t.id} 
                    className="avatar" 
                    style={{ zIndex: 4 - i }}
                  >
                    {t.image ? (
                      <img src={t.image} alt={t.name} loading="lazy" />
                    ) : (
                      <span>{getInitials(t.name)}</span>
                    )}
                  </div>
                ))}
                <span className="avatar-count">+{testimonials.length}</span>
              </div>
              <div className="sidebar-content">
                <span className="satisfied-badge">
                  <i className="bi bi-heart-fill"></i> Satisfied Clients
                </span>
                <h3>Discover What Our Clients Say About Us</h3>
                <p>We take pride in delivering exceptional results for our clients. Here&apos;s what they have to say about their experience working with us.</p>
                <a href="#contact" className="btn-view-all">
                  Work With Us <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-8" data-aos="fade-left" data-aos-delay="200">
            <div className="testimonials-carousel swiper init-swiper">
              <script type="application/json" className="swiper-config">
                {JSON.stringify({
                  loop: testimonials.length > 1,
                  speed: 700,
                  autoplay: { delay: 5000, disableOnInteraction: false },
                  slidesPerView: 1,
                  spaceBetween: 24,
                  pagination: testimonials.length > 1 ? {
                    el: ".swiper-pagination",
                    type: "bullets",
                    clickable: true
                  } : false,
                  breakpoints: {
                    768: {
                      slidesPerView: testimonials.length > 1 ? 2 : 1
                    }
                  }
                })}
              </script>

              <div className="swiper-wrapper">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="swiper-slide">
                    <div className="testimonial-card">
                      <div className="card-top">
                        <div className="stars">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <i 
                              key={star}
                              className={`bi ${star <= testimonial.rating ? 'bi-star-fill' : 'bi-star'}`}
                            ></i>
                          ))}
                        </div>
                        <span className="quote-mark">
                          <i className="bi bi-quote"></i>
                        </span>
                      </div>
                      <p className="testimonial-text">{testimonial.content}</p>
                      <div className="author-info">
                        {testimonial.image ? (
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="author-img" 
                            loading="lazy" 
                          />
                        ) : (
                          <div className="author-avatar">
                            {getInitials(testimonial.name)}
                          </div>
                        )}
                        <div className="author-details">
                          <h5>{testimonial.name}</h5>
                          {testimonial.title && (
                            <span>
                              {testimonial.title}
                              {testimonial.company && ` at ${testimonial.company}`}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {testimonials.length > 1 && <div className="swiper-pagination"></div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
