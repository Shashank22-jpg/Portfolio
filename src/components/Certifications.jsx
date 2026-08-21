import React from 'react';
import { Award, ExternalLink, PlusCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Certifications = () => {
  const hasCertifications = portfolioData.certifications && portfolioData.certifications.length > 0 && portfolioData.certifications[0].name !== "Certification Name Placeholder";

  return (
    <section id="certifications" className="section">
      <div className="container">
        <span className="section-badge">Credentials</span>
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
          Professional course certifications and technical credentials.
        </p>

        {hasCertifications ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {portfolioData.certifications.map((cert, idx) => (
              <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Award size={20} color="var(--accent-blue)" />
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>{cert.name}</h3>
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{cert.organization} — {cert.year}</div>
                {cert.certificateUrl && cert.certificateUrl !== '#' && (
                  <a href={cert.certificateUrl} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ fontSize: '0.8rem', padding: '0.4rem 0.75rem', marginTop: '0.5rem', width: 'fit-content' }}>
                    <span>Verify Certificate</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div
            className="card"
            style={{
              padding: '2.5rem 1.5rem',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              border: '1px dashed var(--border-color)',
              background: 'transparent'
            }}
          >
            <div style={{ padding: '0.6rem', borderRadius: '50%', background: 'var(--accent-subtle)', color: 'var(--accent-blue)' }}>
              <PlusCircle size={24} />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              Certifications Coming Soon
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', maxWidth: '480px', lineHeight: 1.6 }}>
              Currently preparing for core technical certifications in Python, Data Structures, and Web Technologies. Certificates will be added here upon completion.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
