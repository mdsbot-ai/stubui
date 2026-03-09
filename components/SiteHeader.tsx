import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export function SiteHeader() {
  return (
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
      <nav style={{ display: 'flex', gap: '16px', flex: 1 }}>
        <Link href="/components" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '13px' }}>components</Link>
        <Link href="/layouts" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '13px' }}>layouts</Link>
        <Link href="/guide" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '13px' }}>guide</Link>
        <Link href="/builder" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '13px' }}>builder</Link>
      </nav>
      <ThemeToggle />
    </header>
  );
}
