import React from 'react';
import { Trophy, Code2, Users, Calendar } from 'lucide-react';

export const Hackathons = () => {
  return (
    <section id="activities" className="section">
      <div className="container">
        <span className="section-badge">Events & Engagement</span>
        <h2 className="section-title">Hackathons & Activities</h2>
        <p className="section-subtitle">
          Competitions, hackathons, open-source contributions, and technical events.
        </p>

        <div
          className="card"
          style={{
            padding: '3rem 1.5rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            border: '1px dashed var(--border-color)',
            background: 'transparent'
          }}
        >
          <div style={{ display: 'flex', gap: '0.75rem', color: 'var(--accent-blue)' }}>
            <div style={{ padding: '0.6rem', borderRadius: '50%', background: 'var(--accent-subtle)' }}>
              <Trophy size={22} />
            </div>
            <div style={{ padding: '0.6rem', borderRadius: '50%', background: 'var(--accent-subtle)' }}>
              <Code2 size={22} />
            </div>
            <div style={{ padding: '0.6rem', borderRadius: '50%', background: 'var(--accent-subtle)' }}>
              <Users size={22} />
            </div>
          </div>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>
            Activities & Achievements Placeholder
          </h3>

          <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', maxWidth: '520px', lineHeight: 1.6 }}>
            Actively looking forward to participating in upcoming college hackathons, coding competitions, open-source initiatives, and developer workshops. Highlights will be posted here!
          </p>
        </div>
      </div>
    </section>
  );
};
