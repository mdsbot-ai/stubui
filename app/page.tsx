import { SiteHeader } from '@/components/SiteHeader';
import { HomeSearch } from '@/components/HomeSearch';
import { components } from '@/lib/data';

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <SiteHeader />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ marginBottom: '64px' }}>
          <pre className="ascii-block" style={{
            fontFamily: 'var(--font-mono), monospace',
            fontVariantLigatures: 'none',
            fontFeatureSettings: '"liga" 0, "calt" 0',
            fontSize: '13px',
            color: 'var(--muted)',
            margin: '0 0 24px 0',
            whiteSpace: 'pre',
            letterSpacing: 0,
          }}>
{`stubui — ASCII UI component library`}
          </pre>
          <h1 style={{ margin: '0 0 16px 0', fontSize: '28px', fontWeight: 'bold', lineHeight: 1.2 }}>
            Design UI in plain text.
          </h1>
          <p style={{ margin: '0 0 8px 0', color: 'var(--muted)', fontSize: '14px', maxWidth: '560px' }}>
            A shared notation language for describing UI layout in ASCII. Built for designers prompting Claude Code.
          </p>
          <pre className="ascii-block" style={{
            fontFamily: 'var(--font-mono), monospace',
            fontVariantLigatures: 'none',
            fontFeatureSettings: '"liga" 0, "calt" 0',
            color: 'var(--muted)',
            fontSize: '12px',
            marginTop: '24px',
            whiteSpace: 'pre',
            letterSpacing: 0,
          }}>
{`(~ fill ~)   →  stretches to fill available space
[ fixed  ]   →  explicit/fixed width
( hug )      →  shrinks to fit content`}
          </pre>
        </div>

        <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h2 style={{ margin: 0, fontSize: '13px', fontWeight: 'bold' }}>Components ({components.length})</h2>
        </div>
        <HomeSearch components={components} />
      </main>
    </div>
  );
}
