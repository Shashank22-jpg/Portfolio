import React from 'react';
import { Mail, Github, Linkedin, MessageSquare } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container" style={{ maxWidth: '800px' }}>
        <span className="section-badge">Get In Touch</span>
        <h2 className="section-title">Have an idea or want to connect?</h2>
        <p className="section-subtitle">
          I'm always open to discussing software projects, learning opportunities, or technical collaborations. Feel free to reach out!
        </p>

        <div className="card" style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {/* Email Card */}
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="card"
              style={{
                width: '100%',
                maxWidth: '420px',
                padding: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                background: 'var(--bg-secondary)'
              }}
            >
              <div style={{ padding: '0.6rem', borderRadius: '8px', background: 'var(--accent-subtle)', color: 'var(--accent-blue)' }}>
                <Mail size={20} />
              </div>
              <div style={{ overflow: 'hidden' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>Email</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', wordBreak: 'break-all' }}>
                  {portfolioData.personal.email}
                </div>
              </div>
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
              style={{ padding: '0.65rem 1.25rem' }}
            >
              <Github size={18} />
              <span>GitHub Profile</span>
            </a>

            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
              style={{ padding: '0.65rem 1.25rem' }}
            >
              <Linkedin size={18} />
              <span>LinkedIn Profile</span>
            </a>

            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="btn btn-primary"
              style={{ padding: '0.65rem 1.25rem' }}
            >
              <MessageSquare size={18} />
              <span>Send Message</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
