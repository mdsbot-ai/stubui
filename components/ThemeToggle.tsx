'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <span style={{ width: 48, display: 'inline-block' }}></span>;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      style={{
        background: 'none',
        border: '1px solid var(--border)',
        color: 'var(--fg)',
        fontFamily: 'var(--font-mono), monospace',
        fontSize: '13px',
        padding: '4px 8px',
        cursor: 'pointer',
        borderRadius: '2px',
      }}
    >
      {theme === 'dark' ? '[light]' : '[dark]'}
    </button>
  );
}
