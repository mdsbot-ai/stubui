'use client';

import { useState } from 'react';

interface AsciiBlockProps {
  ascii: string;
  className?: string;
}

export function AsciiBlock({ ascii, className = '' }: AsciiBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(ascii);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className={`relative group ${className}`} style={{
      background: 'var(--card-bg)',
      border: '1px solid var(--border)',
      boxShadow: 'var(--card-shadow)',
      borderRadius: '4px',
    }}>
      <pre
        className="ascii-block p-4 text-sm"
        style={{
          fontFamily: 'var(--font-mono), "IBM Plex Mono", monospace',
          fontVariantLigatures: 'none',
          fontFeatureSettings: '"liga" 0, "calt" 0',
          whiteSpace: 'pre',
          letterSpacing: '0',
          tabSize: 4,
          overflowX: 'auto',
          lineHeight: '1.5',
          margin: 0,
        }}
      >
        <code style={{ fontFamily: 'inherit' }}>{ascii}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: 'var(--fg)',
          color: 'var(--bg)',
          border: 'none',
          padding: '2px 8px',
          fontSize: '11px',
          fontFamily: 'var(--font-mono), monospace',
          cursor: 'pointer',
          borderRadius: '2px',
        }}
        aria-label="Copy ASCII"
      >
        {copied ? 'copied!' : 'copy'}
      </button>
    </div>
  );
}
