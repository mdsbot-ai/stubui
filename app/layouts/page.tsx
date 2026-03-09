import { SiteHeader } from '@/components/SiteHeader';
import { AsciiBlock } from '@/components/AsciiBlock';
import { layouts } from '@/lib/data';

export default function LayoutsPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <SiteHeader />
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '48px 24px' }}>
        <h1 style={{ margin: '0 0 8px', fontSize: '13px', fontWeight: '400' }}>Layout Templates</h1>
        <p style={{ margin: '0 0 48px', color: 'var(--muted)', fontSize: '13px' }}>
          Pre-built full-page ASCII layout templates for common patterns.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {layouts.map((layout) => (
            <div key={layout.slug}>
              <h2 style={{ margin: '0 0 4px', fontSize: '13px', fontWeight: '400' }}>{layout.name}</h2>
              <p style={{ margin: '0 0 16px', fontSize: '13px', color: 'var(--muted)' }}>{layout.description}</p>
              <AsciiBlock ascii={layout.ascii} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
