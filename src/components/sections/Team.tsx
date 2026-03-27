'use client';

import { useState, useEffect } from 'react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  facebook_url: string;
  twitter_url: string;
  linkedin_url: string;
  instagram_url: string;
}

export default function Team() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const res = await fetch('/api/team');
      const data = await res.json();
      setMembers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Failed to fetch team members:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="team" className="team section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Team</h2>
        <p>Meet the talented individuals behind our success</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        {loading ? (
          <div className="text-center py-5">
            <div className="w-10 h-10 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
          </div>
        ) : members.length === 0 ? (
          <div className="text-center py-5">
            <i className="bi bi-people text-5xl text-gray-300 mb-3"></i>
            <p className="text-gray-500">Our team is growing. Check back soon!</p>
          </div>
        ) : (
          <div className="row gy-5">
            {members.map((member, index) => (
              <div 
                key={member.id} 
                className="col-lg-3 col-md-6" 
                data-aos="fade-up" 
                data-aos-delay={(index + 1) * 100}
              >
                <div className="team-card">
                  <div className="member-img">
                    <img 
                      src={member.image || '/assets/img/team/placeholder.webp'} 
                      className="img-fluid" 
                      alt={member.name} 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/assets/img/person/person-m-1.webp';
                      }}
                    />
                    <div className="social-overlay">
                      <div className="social-links">
                        {member.facebook_url && member.facebook_url !== '#' && (
                          <a href={member.facebook_url} target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-facebook"></i>
                          </a>
                        )}
                        {member.twitter_url && member.twitter_url !== '#' && (
                          <a href={member.twitter_url} target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-twitter-x"></i>
                          </a>
                        )}
                        {member.linkedin_url && member.linkedin_url !== '#' && (
                          <a href={member.linkedin_url} target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-linkedin"></i>
                          </a>
                        )}
                        {member.instagram_url && member.instagram_url !== '#' && (
                          <a href={member.instagram_url} target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-instagram"></i>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>{member.name}</h4>
                    {member.role && <p>{member.role}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="team-stats" data-aos="fade-up" data-aos-delay="500">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="stats-wrapper">
                <div className="stat-item">
                  <span className="stat-number">{members.length}+</span>
                  <span className="stat-label">Team Members</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projects Delivered</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
