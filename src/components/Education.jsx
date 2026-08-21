import React from 'react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <span className="section-badge">Academic Qualification</span>
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          My academic background and coursework history.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '800px' }}>
          {portfolioData.education.map((edu, idx) => (
            <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <GraduationCap size={18} color="var(--accent-blue)" />
                    <span>{edu.degree}</span>
                  </h3>
                  <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--accent-blue)', marginTop: '0.2rem' }}>
                    {edu.institution}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  <Calendar size={14} />
                  <span>{edu.period}</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.4rem', paddingTop: '0.6rem', borderTop: '1px solid rgba(255,255,255,0.06)', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <MapPin size={14} />
                  <span>{edu.location}</span>
                </span>

                {edu.score && (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    <Award size={14} color="var(--accent-blue)" />
                    <span>{edu.score}</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
