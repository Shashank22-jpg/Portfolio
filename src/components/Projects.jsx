import React from 'react';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <span className="section-badge">Portfolio Work</span>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Practical software applications and AI experiments built to solve real-world problems.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {portfolioData.projects.map((project) => (
            <div
              key={project.id}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                {/* Project Header Placeholder Icon / Visual */}
                <div
                  style={{
                    height: '140px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    marginBottom: '1.25rem',
                    color: 'var(--text-muted)'
                  }}
                >
                  <FolderGit2 size={32} color="var(--accent-blue)" />
                  <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{project.title}</span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
                  {project.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  {project.githubUrl && project.githubUrl !== '#' ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary"
                      style={{ flex: 1, padding: '0.55rem 0.9rem', fontSize: '0.85rem' }}
                    >
                      <Github size={15} />
                      <span>GitHub</span>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="btn btn-secondary"
                      style={{ flex: 1, padding: '0.55rem 0.9rem', fontSize: '0.85rem', opacity: 0.5 }}
                    >
                      <Github size={15} />
                      <span>GitHub</span>
                    </button>
                  )}

                  {project.liveUrl && project.liveUrl !== '#' ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                      style={{ flex: 1, padding: '0.55rem 0.9rem', fontSize: '0.85rem' }}
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={15} />
                    </a>
                  ) : (
                    <button
                      disabled
                      className="btn btn-primary"
                      style={{ flex: 1, padding: '0.55rem 0.9rem', fontSize: '0.85rem', opacity: 0.5 }}
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={15} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
