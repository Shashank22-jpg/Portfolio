import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const CurrentlyLearning = () => {
  return (
    <section className="section" style={{ background: 'rgba(255, 255, 255, 0.015)' }}>
      <div className="container">
        <div
          className="card"
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid rgba(56, 189, 248, 0.2)',
            padding: '2rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
            <Sparkles size={20} color="var(--accent-blue)" />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              Currently Learning & Improving
            </h3>
          </div>

          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            Consistently investing time into mastering fundamental CS concepts, core programming, and modern developer technologies:
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {portfolioData.currentlyLearning.map((topic, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.45rem 0.9rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--accent-subtle)',
                  color: 'var(--accent-blue)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  fontSize: '0.88rem',
                  fontWeight: 600
                }}
              >
                <CheckCircle2 size={15} />
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
