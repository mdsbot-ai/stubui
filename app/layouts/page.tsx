import { SiteHeader } from '@/components/SiteHeader';
import { AsciiBlock } from '@/components/AsciiBlock';
import { layouts } from '@/lib/data';

export default function LayoutsPage() {
  // Group layouts by category
  const categories = layouts.reduce<{ id: string; label: string; items: typeof layouts }[]>(
    (acc, layout) => {
      const existing = acc.find((g) => g.id === layout.category);
      if (existing) {
        existing.items.push(layout);
      } else {
        acc.push({ id: layout.category, label: layout.categoryLabel, items: [layout] });
      }
      return acc;
    },
    []
  );

  return (
    <div style={{ minHeight: '100vh' }}>
      <SiteHeader />
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '48px 24px' }}>
        <h1 style={{ margin: '0 0 8px', fontSize: '13px', fontWeight: '400' }}>Layout Templates</h1>
        <p style={{ margin: '0 0 48px', color: 'var(--muted)', fontSize: '13px' }}>
          Pre-built full-page ASCII layout templates for common patterns.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
          {categories.map((group) => (
            <div key={group.id}>
              <h2
                style={{
                  margin: '0 0 32px',
                  fontSize: '13px',
                  fontWeight: 400,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: 'var(--muted)',
                  borderBottom: '1px solid var(--border)',
                  paddingBottom: '8px',
                }}
              >
                {group.label}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
                {group.items.map((layout) => (
                  <div key={layout.slug}>
                    <h3 style={{ margin: '0 0 4px', fontSize: '13px', fontWeight: '400' }}>
                      {layout.name}
                    </h3>
                    <p style={{ margin: '0 0 16px', fontSize: '13px', color: 'var(--muted)' }}>
                      {layout.description}
                    </p>
                    <AsciiBlock ascii={layout.ascii} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
