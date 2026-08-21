import React from 'react';
import { Target, BookOpen, Code, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <span className="section-badge">Background</span>
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          My journey as a Computer Science & Engineering student and my goals in software & AI.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
            alignItems: 'stretch'
          }}
        >
          {/* Main Bio Card */}
          <div className="card" style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              Passionate CSE Student & Problem Solver
            </h3>

            {portfolioData.about.paragraphs.map((p, idx) => (
              <p key={idx} style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1.02rem' }}>
                {p}
              </p>
            ))}
          </div>

          {/* Quick Highlight Box */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ padding: '0.5rem', borderRadius: '8px', background: 'var(--accent-subtle)', color: 'var(--accent-blue)' }}>
                <Target size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>Primary Goal</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>Internship & Job Readiness</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ padding: '0.5rem', borderRadius: '8px', background: 'var(--accent-subtle)', color: 'var(--accent-blue)' }}>
                <BookOpen size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>Current Focus</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>Python, DSA, SQL & AI</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ padding: '0.5rem', borderRadius: '8px', background: 'var(--accent-subtle)', color: 'var(--accent-blue)' }}>
                <Code size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>Approach</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>Building Practical Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .card { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  );
};
