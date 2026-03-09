import { SiteHeader } from '@/components/SiteHeader';
import { AsciiBlock } from '@/components/AsciiBlock';
import { components, CATEGORIES } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export function generateStaticParams() {
  return components.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const component = components.find((c) => c.slug === slug);
  if (!component) return {};
  return { title: `${component.name} — stubui` };
}

export default async function ComponentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const component = components.find((c) => c.slug === slug);
  if (!component) notFound();

  const related = components
    .filter((c) => c.category === component.category && c.slug !== component.slug)
    .slice(0, 4);

  return (
    <div style={{ minHeight: '100vh' }}>
      <SiteHeader />
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '48px 24px' }}>
        <div style={{ marginBottom: '8px' }}>
          <Link
            href="/components"
            style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '13px' }}
          >
            ← components
          </Link>
          <span style={{ color: 'var(--muted)', margin: '0 8px', fontSize: '13px' }}>/</span>
          <span style={{ color: 'var(--muted)', fontSize: '13px' }}>
            {CATEGORIES[component.category] || component.category}
          </span>
        </div>

        <h1 style={{ margin: '16px 0 8px', fontSize: '13px', fontWeight: 'bold' }}>{component.name}</h1>
        <p style={{ margin: '0 0 32px', color: 'var(--muted)', fontSize: '13px' }}>{component.description}</p>

        <AsciiBlock ascii={component.ascii} />

        <div style={{ marginTop: '32px', padding: '16px', border: '1px solid var(--border)' }}>
          <p style={{ margin: '0 0 8px', fontSize: '13px', color: 'var(--muted)', fontWeight: 'bold' }}>DETAILS</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '4px 16px', fontSize: '13px' }}>
            <span style={{ color: 'var(--muted)' }}>category</span>
            <span>{CATEGORIES[component.category] || component.category}</span>
            <span style={{ color: 'var(--muted)' }}>sizing</span>
            <span>{component.sizing}</span>
            <span style={{ color: 'var(--muted)' }}>source</span>
            <span>{component.source}</span>
            <span style={{ color: 'var(--muted)' }}>slug</span>
            <span>{component.slug}</span>
          </div>
        </div>

        {related.length > 0 && (
          <div style={{ marginTop: '48px' }}>
            <h2 style={{ margin: '0 0 16px', fontSize: '13px', fontWeight: 'bold' }}>
              Related in {CATEGORIES[component.category] || component.category}
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: '16px',
            }}>
              {related.map((rel) => (
                <div key={rel.slug}>
                  <Link href={`/components/${rel.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <AsciiBlock ascii={rel.ascii} />
                    <p style={{ margin: '8px 0 0', fontSize: '13px', fontWeight: 'bold' }}>{rel.name}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
