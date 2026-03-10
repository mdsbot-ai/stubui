'use client';

import { useState } from 'react';

interface CopyButtonProps {
  text: string;
  label?: string;
  sticky?: boolean;
}

export function CopyButton({ text, label = 'COPY PROMPT', sticky = false }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!text) return;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      disabled={!text}
      style={{
        background: text ? 'var(--accent)' : 'var(--border)',
        color: text ? 'var(--accent-fg)' : 'var(--muted)',
        border: 'none',
        padding: '10px 24px',
        fontFamily: 'var(--font-mono), "IBM Plex Mono", monospace',
        fontSize: '13px',
        fontWeight: 400,
        letterSpacing: '0.05em',
        cursor: text ? 'pointer' : 'default',
        width: '100%',
        textAlign: 'center',
        transition: 'opacity 0.15s',
        position: sticky ? 'sticky' : 'static',
        top: sticky ? '0' : undefined,
        zIndex: sticky ? 10 : undefined,
      }}
    >
      {copied ? '✓ COPIED!' : label}
    </button>
  );
}
