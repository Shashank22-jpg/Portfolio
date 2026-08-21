import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero = () => {
  return (
    <section
      id="hero"
      className="section"
      style={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(var(--nav-height) + 2rem)'
      }}
    >
      <div className="container" style={{ maxWidth: '850px' }}>
        {/* Student Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 0.9rem',
            borderRadius: 'var(--radius-full)',
            background: 'var(--accent-subtle)',
            color: 'var(--accent-blue)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            fontSize: '0.85rem',
            fontWeight: 600,
            marginBottom: '1.5rem'
          }}
        >
          <GraduationCap size={16} />
          <span>{portfolioData.personal.role}</span>
        </div>

        {/* Title / Name */}
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '1rem',
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)'
          }}
        >
          {portfolioData.personal.name}
        </h1>

        {/* Positioning Subtitle */}
        <h2
          style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
            fontWeight: 600,
            color: 'var(--accent-blue)',
            marginBottom: '1.25rem'
          }}
        >
          {portfolioData.personal.positioning}
        </h2>

        {/* Short Introduction */}
        <p
          style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
            maxWidth: '680px'
          }}
        >
          {portfolioData.personal.intro}
        </p>

        {/* Action Buttons & Socials */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#projects" className="btn btn-primary">
            <span>View Projects</span>
            <ArrowRight size={16} />
          </a>

          <a href={portfolioData.personal.resumeUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
            <Download size={16} />
            <span>Download Resume</span>
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginLeft: '0.5rem' }}>
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
              style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)' }}
              title="GitHub Profile"
            >
              <Github size={18} />
            </a>

            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
              style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)' }}
              title="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>

            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="btn btn-outline"
              style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)' }}
              title="Email Contact"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
