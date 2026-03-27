'use client';

import { useState, useEffect } from 'react';
import { useSettings } from "@/context/SettingsContext";

interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}

export default function Contact() {
  const { settings, loading } = useSettings();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string, type: 'success' | 'error' | 'info') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 5000);
  };

  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '', phone: '' });
      showToast('Your message has been sent successfully! We will get back to you soon.', 'success');
      
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      showToast(error instanceof Error ? error.message : 'Failed to send message. Please try again.', 'error');
      
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <>
      {/* Toast Notifications */}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className={`toast toast-${toast.type}`}>
            <div className="toast-icon">
              {toast.type === 'success' && <i className="bi bi-check-circle-fill"></i>}
              {toast.type === 'error' && <i className="bi bi-exclamation-circle-fill"></i>}
              {toast.type === 'info' && <i className="bi bi-info-circle-fill"></i>}
            </div>
            <div className="toast-content">
              <p className="toast-message">{toast.message}</p>
            </div>
            <button 
              className="toast-close"
              onClick={() => removeToast(toast.id)}
            >
              <i className="bi bi-x"></i>
            </button>
            <div className="toast-progress"></div>
          </div>
        ))}
      </div>

      <section id="contact" className="contact section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>Get in touch with us for your next project</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-5 align-items-stretch">
            <div className="col-lg-5" data-aos="fade-right" data-aos-delay="200">
              <div className="info-panel">
                <div className="panel-header">
                  <span className="section-badge">
                    <i className="bi bi-chat-dots-fill"></i>
                    Get In Touch
                  </span>
                  <h3>Let&apos;s Build Something Amazing</h3>
                  <p>Ready to transform your ideas into reality? We&apos;d love to hear from you.</p>
                </div>

                <div className="contact-methods">
                  <div className="method-item">
                    <div className="method-icon">
                      <i className="bi bi-envelope-paper-fill"></i>
                    </div>
                    <div className="method-details">
                      <span className="method-label">Email Us</span>
                      <a href={`mailto:${loading ? '' : settings.company_email}`}>
                        {loading ? 'Loading...' : settings.company_email}
                      </a>
                    </div>
                  </div>

                  <div className="method-item">
                    <div className="method-icon">
                      <i className="bi bi-headset"></i>
                    </div>
                    <div className="method-details">
                      <span className="method-label">Call Us</span>
                      <a href={`tel:${loading ? '' : settings.company_phone.replace(/\s/g, '')}`}>
                        {loading ? 'Loading...' : settings.company_phone}
                      </a>
                    </div>
                  </div>

                  {settings.company_address && (
                    <div className="method-item">
                      <div className="method-icon">
                        <i className="bi bi-pin-map-fill"></i>
                      </div>
                      <div className="method-details">
                        <span className="method-label">Location</span>
                        <span>{settings.company_address}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="stats-strip">
                  <div className="stat-item">
                    <span className="stat-number">98%</span>
                    <span className="stat-text">Satisfaction</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">24/7</span>
                    <span className="stat-text">Support</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">3.2k</span>
                    <span className="stat-text">Projects</span>
                  </div>
                </div>

                <div className="social-connect">
                  <span>Follow Us</span>
                  <div className="social-icons">
                    <a href={settings.facebook_url || '#'} aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                    <a href={settings.twitter_url || '#'} aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
                    <a href={settings.linkedin_url || '#'} aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                    <a href={settings.instagram_url || '#'} aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7" data-aos="fade-left" data-aos-delay="300">
              <div className="form-card">
                <div className="form-card-header">
                  <div className="header-icon">
                    <i className="bi bi-send-fill"></i>
                  </div>
                  <div className="header-text">
                    <h4>Send Us a Message</h4>
                    <p>Fill out the form and our team will respond within 24 hours.</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="php-email-form">
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="input-group-custom">
                        <label>Your Name *</label>
                        <div className="input-wrapper">
                          <i className="bi bi-person"></i>
                          <input 
                            type="text" 
                            name="name" 
                            placeholder="John Doe" 
                            required 
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="input-group-custom">
                        <label>Email Address *</label>
                        <div className="input-wrapper">
                          <i className="bi bi-envelope"></i>
                          <input 
                            type="email" 
                            name="email" 
                            placeholder="john@example.com" 
                            required 
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="input-group-custom">
                        <label>Phone Number</label>
                        <div className="input-wrapper">
                          <i className="bi bi-telephone"></i>
                          <input 
                            type="tel" 
                            name="phone" 
                            placeholder="+92 300 1234567" 
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="input-group-custom">
                        <label>Subject</label>
                        <div className="input-wrapper">
                          <i className="bi bi-chat-square-text"></i>
                          <input 
                            type="text" 
                            name="subject" 
                            placeholder="How can we help?" 
                            value={formData.subject}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="input-group-custom">
                        <label>Your Message *</label>
                        <div className="input-wrapper textarea-wrapper">
                          <i className="bi bi-pencil-square"></i>
                          <textarea 
                            name="message" 
                            rows={5} 
                            placeholder="Tell us about your project..." 
                            required 
                            value={formData.message}
                            onChange={handleChange}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="btn-submit" disabled={status === 'loading'}>
                      {status === 'loading' ? (
                        <>
                          <span>Sending...</span>
                          <i className="bi bi-arrow-right-circle-fill"></i>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <i className="bi bi-arrow-right-circle-fill"></i>
                        </>
                      )}
                    </button>

                    <div className="secure-note">
                      <i className="bi bi-lock-fill"></i>
                      <span>Your data is encrypted and secure</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
