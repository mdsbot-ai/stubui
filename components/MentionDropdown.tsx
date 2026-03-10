import type { Component } from '@/lib/types';

interface MentionDropdownProps {
  results: Component[];
  selectedIndex: number;
  onSelect: (component: Component) => void;
  style?: React.CSSProperties;
}

export function MentionDropdown({ results, selectedIndex, onSelect, style }: MentionDropdownProps) {
  if (results.length === 0) return null;

  return (
    <div
      style={{
        position: 'absolute',
        zIndex: 50,
        background: 'var(--card-bg)',
        border: '1px solid var(--border)',
        boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
        borderRadius: '4px',
        width: '300px',
        maxHeight: '300px',
        overflowY: 'auto',
        ...style,
      }}
    >
      {results.map((component, index) => (
        <div
          key={component.slug}
          onMouseDown={(e) => {
            e.preventDefault();
            onSelect(component);
          }}
          style={{
            padding: '8px 12px',
            cursor: 'pointer',
            background: index === selectedIndex ? 'var(--accent)' : 'transparent',
            color: index === selectedIndex ? 'var(--accent-fg)' : 'var(--fg)',
            borderBottom: index < results.length - 1 ? '1px solid var(--border)' : 'none',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '3px' }}>
            <span>{component.name}</span>
            <span
              style={{
                color: index === selectedIndex ? 'var(--accent-fg)' : 'var(--muted)',
                opacity: 0.75,
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              {component.category}
            </span>
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono), "IBM Plex Mono", monospace',
              fontVariantLigatures: 'none',
              fontFeatureSettings: '"liga" 0, "calt" 0',
              whiteSpace: 'pre',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              fontSize: '11px',
              color: index === selectedIndex ? 'var(--accent-fg)' : 'var(--muted)',
              opacity: 0.8,
            }}
          >
            {component.ascii.split('\n')[0]}
          </div>
        </div>
      ))}
    </div>
  );
}
