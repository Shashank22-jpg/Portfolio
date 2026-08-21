import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  return (
    <footer style={{ background: '#090d16', padding: '2.5rem 0', borderTop: '1px solid rgba(255, 255, 255, 0.08)', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '1rem' }}>
            {portfolioData.personal.name}
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            {portfolioData.personal.role}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }} title="GitHub">
            <Github size={18} />
          </a>
          <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }} title="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${portfolioData.personal.email}`} style={{ color: 'var(--text-secondary)' }} title="Email">
            <Mail size={18} />
          </a>
        </div>

        <div>
          © 2026 {portfolioData.personal.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
