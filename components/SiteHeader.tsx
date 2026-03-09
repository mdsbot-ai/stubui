'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header style={{
        borderBottom: '1px solid var(--border)',
        padding: '12px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
        background: 'var(--bg)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <Link href="/" style={{ color: 'var(--fg)', textDecoration: 'none', fontWeight: 'bold', fontSize: '13px' }}>
          stubui
        </Link>
        <nav className="desktop-nav" style={{ display: 'flex', gap: '16px', flex: 1 }}>
          <Link href="/components" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '13px' }}>components</Link>
          <Link href="/layouts" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '13px' }}>layouts</Link>
          <Link href="/guide" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '13px' }}>guide</Link>
          <Link href="/builder" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '13px' }}>builder</Link>
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: 'auto' }}>
          <ThemeToggle />
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              display: 'none',
              background: 'none',
              border: '1px solid var(--border)',
              color: 'var(--fg)',
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '13px',
              padding: '4px 8px',
              cursor: 'pointer',
              lineHeight: 1,
            }}
          >
            {menuOpen ? '✕' : '≡'}
          </button>
        </div>
      </header>

      {/* Mobile slide-out menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99,
            background: 'rgba(0,0,0,0.5)',
          }}
          onClick={() => setMenuOpen(false)}
        />
      )}
      <nav
        className="mobile-nav"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '260px',
          background: 'var(--bg)',
          borderLeft: '1px solid var(--border)',
          zIndex: 101,
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.2s ease',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px',
          gap: '8px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <span style={{ fontWeight: 'bold', fontSize: '13px', color: 'var(--fg)' }}>stubui</span>
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--fg)',
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '13px',
              cursor: 'pointer',
            }}
          >
            ✕
          </button>
        </div>
        <Link href="/components" onClick={() => setMenuOpen(false)} style={{ color: 'var(--fg)', textDecoration: 'none', fontSize: '13px', padding: '8px 0', borderBottom: '1px solid var(--border)' }}>components</Link>
        <Link href="/layouts" onClick={() => setMenuOpen(false)} style={{ color: 'var(--fg)', textDecoration: 'none', fontSize: '13px', padding: '8px 0', borderBottom: '1px solid var(--border)' }}>layouts</Link>
        <Link href="/guide" onClick={() => setMenuOpen(false)} style={{ color: 'var(--fg)', textDecoration: 'none', fontSize: '13px', padding: '8px 0', borderBottom: '1px solid var(--border)' }}>guide</Link>
        <Link href="/builder" onClick={() => setMenuOpen(false)} style={{ color: 'var(--fg)', textDecoration: 'none', fontSize: '13px', padding: '8px 0', borderBottom: '1px solid var(--border)' }}>builder</Link>
      </nav>
    </>
  );
}
