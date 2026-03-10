'use client';

import { useCallback, useRef, useState } from 'react';
import type { Component, Layout } from '@/lib/types';
import { buildPrompt } from '@/lib/prompt';
import { PromptInput, type PromptInputHandle } from '@/components/PromptInput';
import { QuickAddBar } from '@/components/QuickAddBar';
import { PromptOutput } from '@/components/PromptOutput';

interface BuilderClientProps {
  components: Component[];
  layouts: Layout[];
}

const EXAMPLE_PROMPT =
  'Build me a dashboard with @sidebar, @data-table, and @pagination. The sidebar should have nav links. The main area shows a data table with filters above it.';

export function BuilderClient({ components, layouts }: BuilderClientProps) {
  const promptInputRef = useRef<PromptInputHandle>(null);
  const [text, setText] = useState('');
  const [mentions, setMentions] = useState<Component[]>([]);
  const [templateOpen, setTemplateOpen] = useState(false);

  const handleChange = useCallback((newText: string, newMentions: Component[]) => {
    setText(newText);
    setMentions(newMentions);
  }, []);

  const handleQuickAdd = useCallback((slug: string) => {
    promptInputRef.current?.insertMention(slug);
  }, []);

  // Map layout templates to @mention-based prompts
  const TEMPLATE_PROMPTS: Record<string, string> = {
    dashboard:
      'Build me a dashboard layout with @sidebar for navigation, @avatar in the top right, a row of @badge stat cards, and a @data-table below with @pagination at the bottom.',
    'landing-page':
      'Build me a landing page with a @navigation-menu at the top, a large hero section with a @button CTA, three @card feature columns, and a @separator before the footer.',
    'settings-page':
      'Build me a settings page with a @sidebar for section nav, @input fields with @label for each setting, a @select dropdown, and @button for save and cancel actions.',
    blog:
      'Build me a blog layout with a @navigation-menu header, a hero area, a grid of @card article cards, a @sidebar for categories and tags, and @pagination at the bottom.',
    ecommerce:
      'Build me an e-commerce product listing with a @navigation-menu and search @input at the top, @accordion filter sidebar on the left, a grid of @card product cards, and @pagination.',
  };

  const handleTemplateSelect = useCallback(
    (layout: Layout) => {
      const prompt = TEMPLATE_PROMPTS[layout.slug] || `Build me a ${layout.name.toLowerCase()} layout.`;
      promptInputRef.current?.setContent(prompt);
      setTemplateOpen(false);
    },
    []
  );

  const handleExampleClick = useCallback(() => {
    promptInputRef.current?.setContent(EXAMPLE_PROMPT);
  }, []);

  const generatedPrompt = buildPrompt(text, mentions);
  const isEmpty = !text.trim() && mentions.length === 0;

  return (
    <div
      style={{
        padding: '32px 24px',
        maxWidth: '1400px',
        margin: '0 auto',
      }}
    >
      {/* Page header */}
      <div style={{ marginBottom: '24px' }}>
        <h1
          style={{
            margin: '0 0 6px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          Prompt Builder
        </h1>
        <p style={{ margin: 0, color: 'var(--muted)' }}>
          Describe your UI and @mention components to assemble a copy-ready prompt for Claude.
        </p>
      </div>

      {/* Two-panel layout */}
      <div className="builder-layout">
        {/* Left panel: input */}
        <div className="builder-left">
          {/* Template selector */}
          <div style={{ marginBottom: '12px', position: 'relative' }}>
            <button
              onClick={() => setTemplateOpen((o) => !o)}
              style={{
                background: 'none',
                border: '1px solid var(--border)',
                padding: '4px 12px',
                borderRadius: '2px',
                fontFamily: 'var(--font-mono), "IBM Plex Mono", monospace',
                fontSize: '13px',
                color: 'var(--muted)',
                cursor: 'pointer',
              }}
            >
              START FROM TEMPLATE {templateOpen ? '↑' : '↓'}
            </button>

            {templateOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 4px)',
                  left: 0,
                  zIndex: 40,
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border)',
                  borderRadius: '4px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
                  minWidth: '240px',
                }}
              >
                {layouts.map((layout) => (
                  <div
                    key={layout.slug}
                    onClick={() => handleTemplateSelect(layout)}
                    style={{
                      padding: '10px 16px',
                      cursor: 'pointer',
                      borderBottom: '1px solid var(--border)',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.background = 'var(--bg)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.background = 'transparent';
                    }}
                  >
                    <div style={{ marginBottom: '2px' }}>{layout.name}</div>
                    <div style={{ color: 'var(--muted)', fontSize: '11px' }}>
                      {layout.description}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Editor */}
          <PromptInput
            ref={promptInputRef}
            components={components}
            onChange={handleChange}
          />

          {/* Quick-add bar */}
          <div style={{ marginTop: '10px' }}>
            <QuickAddBar components={components} onAdd={handleQuickAdd} />
          </div>

          {/* Empty state hint */}
          {isEmpty && (
            <div
              style={{
                marginTop: '20px',
                padding: '16px',
                border: '1px dashed var(--border)',
                borderRadius: '4px',
                color: 'var(--muted)',
                lineHeight: '1.8',
              }}
            >
              <p style={{ margin: '0 0 8px' }}>
                Type @ to search and insert any of the 99 components.
              </p>
              <p style={{ margin: 0 }}>
                Or{' '}
                <button
                  onClick={handleExampleClick}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    color: 'var(--fg)',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    fontFamily: 'var(--font-mono), "IBM Plex Mono", monospace',
                    fontSize: '13px',
                  }}
                >
                  load an example prompt
                </button>{' '}
                to get started.
              </p>
            </div>
          )}
        </div>

        {/* Right panel: output */}
        <div className="builder-right">
          <PromptOutput prompt={generatedPrompt} />
        </div>
      </div>

      <style>{`
        .builder-layout {
          display: flex;
          gap: 24px;
          align-items: flex-start;
        }
        .builder-left {
          flex: 0 0 60%;
          min-width: 0;
        }
        .builder-right {
          flex: 1;
          min-width: 0;
          min-height: 500px;
        }
        @media (max-width: 768px) {
          .builder-layout {
            flex-direction: column;
          }
          .builder-left,
          .builder-right {
            flex: none;
            width: 100%;
          }
          .builder-right {
            min-height: 400px;
          }
        }

        /* Contenteditable placeholder */
        [contenteditable]:empty:before {
          content: attr(data-placeholder);
          color: var(--muted);
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
