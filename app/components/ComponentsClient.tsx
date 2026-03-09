'use client';
import { useState } from 'react';
import Fuse from 'fuse.js';
import { AsciiBlock } from '@/components/AsciiBlock';
import Link from 'next/link';
import type { Component } from '@/lib/types';
import { CATEGORIES } from '@/lib/data';

export function ComponentsClient({ components }: { components: Component[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [query, setQuery] = useState('');

  const filtered = query.trim()
    ? new Fuse(components, { keys: ['name', 'description', 'category'], threshold: 0.3 })
        .search(query).map(r => r.item)
    : selectedCategory === 'all' ? components : components.filter(c => c.category === selectedCategory);

  const categoryCounts: Record<string, number> = {};
  for (const c of components) {
    categoryCounts[c.category] = (categoryCounts[c.category] || 0) + 1;
  }

  return (
    <div style={{ display: 'flex', gap: '0', flex: 1 }}>
      {/* Sidebar */}
      <aside style={{
        width: '200px',
        flexShrink: 0,
        borderRight: '1px solid var(--border)',
        padding: '24px 0',
        position: 'sticky',
        top: '49px',
        height: 'calc(100vh - 49px)',
        overflowY: 'auto',
      }}>
        <button
          onClick={() => { setSelectedCategory('all'); setQuery(''); }}
          style={{
            display: 'block',
            width: '100%',
            textAlign: 'left',
            padding: '6px 16px',
            background: selectedCategory === 'all' && !query ? 'var(--border)' : 'none',
            border: 'none',
            color: 'var(--fg)',
            fontFamily: 'var(--font-mono), monospace',
            fontSize: '12px',
            cursor: 'pointer',
          }}
        >
          All ({components.length})
        </button>
        {Object.entries(CATEGORIES).map(([id, label]) => (
          <button
            key={id}
            onClick={() => { setSelectedCategory(id); setQuery(''); }}
            style={{
              display: 'block',
              width: '100%',
              textAlign: 'left',
              padding: '6px 16px',
              background: selectedCategory === id && !query ? 'var(--border)' : 'none',
              border: 'none',
              color: selectedCategory === id && !query ? 'var(--fg)' : 'var(--muted)',
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '11px',
              cursor: 'pointer',
            }}
          >
            {label} ({categoryCounts[id] || 0})
          </button>
        ))}
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, padding: '24px', overflowY: 'auto' }}>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: '100%',
            maxWidth: '400px',
            background: 'var(--card-bg)',
            border: '1px solid var(--border)',
            color: 'var(--fg)',
            fontFamily: 'var(--font-mono), monospace',
            fontSize: '13px',
            padding: '8px 12px',
            outline: 'none',
            marginBottom: '24px',
          }}
        />
        <div style={{ marginBottom: '12px', fontSize: '11px', color: 'var(--muted)' }}>
          {filtered.length} components
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {filtered.map((component) => (
            <div key={component.slug} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link href={`/components/${component.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <AsciiBlock ascii={component.ascii} />
              </Link>
              <div>
                <p style={{ margin: 0, fontSize: '12px', fontWeight: 'bold', color: 'var(--fg)' }}>{component.name}</p>
                <p style={{ margin: 0, fontSize: '11px', color: 'var(--muted)' }}>{component.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
