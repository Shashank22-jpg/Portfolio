import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(s);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 'var(--nav-height)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        background: scrolled ? 'rgba(15, 23, 42, 0.95)' : 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        transition: 'all 0.2s ease'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 800, fontSize: '1.2rem', color: '#f8fafc' }}>
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '8px',
              background: 'var(--accent-blue)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0f172a',
              fontWeight: 800
            }}
          >
            <Code2 size={20} />
          </div>
          <span>{portfolioData.personal.shortName}</span>
        </a>

        {/* Desktop Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              style={{
                fontSize: '0.9rem',
                fontWeight: activeSection === link.id ? 700 : 500,
                color: activeSection === link.id ? 'var(--accent-blue)' : 'var(--text-secondary)',
                transition: 'color 0.2s ease'
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-toggle"
          style={{
            padding: '0.5rem',
            borderRadius: '6px',
            background: 'var(--bg-secondary)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border-color)'
          }}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'var(--nav-height)',
            left: 0,
            right: 0,
            background: 'var(--bg-card)',
            borderBottom: '1px solid var(--border-color)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: activeSection === link.id ? 'var(--accent-blue)' : 'var(--text-primary)'
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 820px) {
          .desktop-nav { display: none !important; }
        }
        @media (min-width: 821px) {
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
};
