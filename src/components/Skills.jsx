import React from 'react';
import { Terminal, Globe, Database, Wrench, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const getCategoryIcon = (category) => {
  switch (category) {
    case 'Programming':
      return <Terminal size={20} color="var(--accent-blue)" />;
    case 'Web Development':
    case 'Web':
      return <Globe size={20} color="var(--accent-blue)" />;
    case 'Database':
      return <Database size={20} color="var(--accent-blue)" />;
    case 'Tools & Platforms':
    case 'Tools':
      return <Wrench size={20} color="var(--accent-blue)" />;
    case 'AI & Development':
    case 'AI / Development':
      return <Cpu size={20} color="var(--accent-blue)" />;
    default:
      return <Terminal size={20} color="var(--accent-blue)" />;
  }
};

export const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <span className="section-badge">Technical Stack</span>
        <h2 className="section-title">Skills & Competencies</h2>
        <p className="section-subtitle">
          Core programming languages, web technologies, tools, and AI concepts I work with.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {portfolioData.skills.map((skillGroup, idx) => (
            <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{ padding: '0.4rem', borderRadius: '6px', background: 'var(--accent-subtle)' }}>
                  {getCategoryIcon(skillGroup.category)}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {skillGroup.category}
                </h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {skillGroup.items.map((item, itemIdx) => (
                  <span key={itemIdx} className="tech-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
