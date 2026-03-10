import type { Component } from '@/lib/types';

const POPULAR_ITEMS = [
  { slug: 'button', label: 'btn' },
  { slug: 'navigation-menu', label: 'nav' },
  { slug: 'data-table', label: 'table' },
  { slug: 'card', label: 'card' },
  { slug: 'sidebar', label: 'sidebar' },
  { slug: 'input', label: 'input' },
  { slug: 'dialog', label: 'dialog' },
  { slug: 'tabs', label: 'tabs' },
];

interface QuickAddBarProps {
  components: Component[];
  onAdd: (slug: string) => void;
}

export function QuickAddBar({ components, onAdd }: QuickAddBarProps) {
  const popular = POPULAR_ITEMS.filter(({ slug }) =>
    components.some((c) => c.slug === slug)
  );

  return (
    <div
      style={{
        display: 'flex',
        gap: '6px',
        overflowX: 'auto',
        paddingBottom: '2px',
        alignItems: 'center',
      }}
    >
      <span
        style={{
          color: 'var(--muted)',
          whiteSpace: 'nowrap',
          lineHeight: '24px',
          flexShrink: 0,
        }}
      >
        quick add:
      </span>
      {popular.map(({ slug, label }) => (
        <button
          key={slug}
          onMouseDown={(e) => {
            e.preventDefault();
            onAdd(slug);
          }}
          style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--border)',
            padding: '2px 10px',
            borderRadius: '2px',
            fontFamily: 'var(--font-mono), "IBM Plex Mono", monospace',
            fontSize: '13px',
            cursor: 'pointer',
            color: 'var(--fg)',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          @{label}
        </button>
      ))}
    </div>
  );
}
