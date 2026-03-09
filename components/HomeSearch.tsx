'use client';
import { useState } from 'react';
import Fuse from 'fuse.js';
import Link from 'next/link';
import { AsciiBlock } from './AsciiBlock';
import type { Component } from '@/lib/types';

export function HomeSearch({ components }: { components: Component[] }) {
  const [query, setQuery] = useState('');

  const results = query.trim()
    ? new Fuse(components, { keys: ['name', 'description', 'category'], threshold: 0.3 })
        .search(query).map(r => r.item).slice(0, 12)
    : components.slice(0, 12);

  return (
    <div>
      <input
        type="text"
        placeholder="Search components..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: '100%',
          background: 'var(--card-bg)',
          border: '1px solid var(--border)',
          color: 'var(--fg)',
          fontFamily: 'var(--font-mono), monospace',
          fontSize: '13px',
          padding: '10px 12px',
          outline: 'none',
          marginBottom: '32px',
        }}
      />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '24px',
      }}>
        {results.map((component) => (
          <div key={component.slug} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Link href={`/components/${component.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <AsciiBlock ascii={component.ascii} />
            </Link>
            <div>
              <p style={{ margin: 0, fontSize: '13px', fontWeight: '400', color: 'var(--fg)' }}>{component.name}</p>
              <p style={{ margin: 0, fontSize: '13px', color: 'var(--muted)' }}>{component.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
