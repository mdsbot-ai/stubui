import Link from 'next/link';
import { AsciiBlock } from './AsciiBlock';
import type { Component } from '@/lib/types';

export function ComponentCard({ component }: { component: Component }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    }}>
      <Link href={`/components/${component.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <AsciiBlock ascii={component.ascii} />
      </Link>
      <div>
        <p style={{ margin: 0, fontSize: '13px', fontWeight: 'bold', color: 'var(--fg)' }}>{component.name}</p>
        <p style={{ margin: 0, fontSize: '13px', color: 'var(--muted)' }}>{component.description}</p>
      </div>
    </div>
  );
}
