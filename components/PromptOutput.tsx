'use client';

import { CopyButton } from './CopyButton';
import { estimateTokens } from '@/lib/prompt';

interface PromptOutputProps {
  prompt: string;
}

export function PromptOutput({ prompt }: PromptOutputProps) {
  const tokenCount = estimateTokens(prompt);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        border: '1px solid var(--border)',
        borderRadius: '4px',
        background: 'var(--card-bg)',
        boxShadow: 'var(--card-shadow)',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div
        style={{
          borderBottom: '1px solid var(--border)',
          padding: '10px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span
          style={{
            color: 'var(--muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          GENERATED OUTPUT
        </span>
        {prompt && (
          <span style={{ color: 'var(--muted)' }}>
            ~{tokenCount} tokens
          </span>
        )}
      </div>

      {/* Sticky copy button */}
      <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--border)' }}>
        <CopyButton text={prompt} sticky />
      </div>

      {/* Content */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '16px',
        }}
      >
        {prompt ? (
          <pre
            style={{
              fontFamily: 'var(--font-mono), "IBM Plex Mono", monospace',
              fontVariantLigatures: 'none',
              fontFeatureSettings: '"liga" 0, "calt" 0',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              letterSpacing: 0,
              lineHeight: '1.6',
              margin: 0,
              color: 'var(--fg)',
            }}
          >
            {prompt}
          </pre>
        ) : (
          <div style={{ color: 'var(--muted)', lineHeight: '1.8' }}>
            <p style={{ margin: '0 0 16px' }}>
              Your generated prompt will appear here in real-time.
            </p>
            <p style={{ margin: '0 0 8px' }}>The output includes:</p>
            <ul style={{ margin: 0, paddingLeft: '20px', listStyle: 'none' }}>
              <li>— your layout description</li>
              <li>— ASCII art for each @mentioned component</li>
              <li>— the notation key</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
