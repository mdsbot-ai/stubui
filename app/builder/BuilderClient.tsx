'use client';

import { useCallback, useRef, useState } from 'react';
import type { Component, Layout, Style } from '@/lib/types';
import { buildPrompt } from '@/lib/prompt';
import { PromptInput, type PromptInputHandle } from '@/components/PromptInput';
import { QuickAddBar } from '@/components/QuickAddBar';
import { PromptOutput } from '@/components/PromptOutput';

interface BuilderClientProps {
  components: Component[];
  layouts: Layout[];
  styles: Style[];
}

const EXAMPLE_PROMPT =
  'Build me a dashboard with @sidebar, @data-table, and @pagination. The sidebar should have nav links. The main area shows a data table with filters above it.';

export function BuilderClient({ components, layouts, styles }: BuilderClientProps) {
  const promptInputRef = useRef<PromptInputHandle>(null);
  const [text, setText] = useState('');
  const [mentions, setMentions] = useState<Component[]>([]);
  const [templateOpen, setTemplateOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [styleOpen, setStyleOpen] = useState(false);
  const [expandedStyleCategory, setExpandedStyleCategory] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<Style | null>(null);

  const handleChange = useCallback((newText: string, newMentions: Component[]) => {
    setText(newText);
    setMentions(newMentions);
  }, []);

  const handleQuickAdd = useCallback((slug: string) => {
    promptInputRef.current?.insertMention(slug);
  }, []);

  const handleTemplateSelect = useCallback((layout: Layout) => {
    promptInputRef.current?.setContent(layout.prompt);
    setTemplateOpen(false);
    setExpandedCategory(null);
  }, []);

  const handleExampleClick = useCallback(() => {
    promptInputRef.current?.setContent(EXAMPLE_PROMPT);
  }, []);

  const handleCategoryClick = useCallback((category: string) => {
    setExpandedCategory((prev) => (prev === category ? null : category));
  }, []);

  const handleStyleCategoryClick = useCallback((category: string) => {
    setExpandedStyleCategory((prev) => (prev === category ? null : category));
  }, []);

  const handleStyleSelect = useCallback((style: Style) => {
    setSelectedStyle((prev) => (prev?.slug === style.slug ? null : style));
  }, []);

  // Group layouts by category
  const categories = layouts.reduce<{ id: string; label: string; items: Layout[] }[]>(
    (acc, layout) => {
      const existing = acc.find((g) => g.id === layout.category);
      if (existing) {
        existing.items.push(layout);
      } else {
        acc.push({ id: layout.category, label: layout.categoryLabel, items: [layout] });
      }
      return acc;
    },
    []
  );

  // Group styles by category
  const styleCategories = styles.reduce<{ id: string; label: string; items: Style[] }[]>(
    (acc, style) => {
      const existing = acc.find((g) => g.id === style.category);
      if (existing) {
        existing.items.push(style);
      } else {
        acc.push({ id: style.category, label: style.categoryLabel, items: [style] });
      }
      return acc;
    },
    []
  );

  const generatedPrompt = buildPrompt(text, mentions, selectedStyle);
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
              onClick={() => {
                setTemplateOpen((o) => !o);
                setExpandedCategory(null);
              }}
              style={{
                background: 'none',
                border: '1px solid var(--border)',
                padding: '4px 12px',
                borderRadius: '2px',
                fontFamily: '"IBM Plex Mono", var(--font-mono), monospace',
                fontSize: '13px',
                fontWeight: 400,
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
                  minWidth: '280px',
                  maxWidth: '360px',
                  overflow: 'hidden',
                }}
              >
                {categories.map((group, idx) => (
                  <div key={group.id}>
                    {/* Category header */}
                    <button
                      onClick={() => handleCategoryClick(group.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        padding: '8px 14px',
                        background: 'none',
                        border: 'none',
                        borderBottom:
                          idx < categories.length - 1 || expandedCategory === group.id
                            ? '1px solid var(--border)'
                            : 'none',
                        cursor: 'pointer',
                        fontFamily: '"IBM Plex Mono", var(--font-mono), monospace',
                        fontSize: '13px',
                        fontWeight: 400,
                        color: 'var(--fg)',
                        textAlign: 'left',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background = 'var(--bg)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background = 'none';
                      }}
                    >
                      <span>{group.label}</span>
                      <span style={{ color: 'var(--muted)', fontSize: '11px', marginLeft: '8px' }}>
                        {expandedCategory === group.id ? '↑' : '↓'}
                      </span>
                    </button>

                    {/* Template items */}
                    {expandedCategory === group.id &&
                      group.items.map((layout, itemIdx) => (
                        <button
                          key={layout.slug}
                          onClick={() => handleTemplateSelect(layout)}
                          style={{
                            display: 'block',
                            width: '100%',
                            padding: '9px 14px 9px 24px',
                            background: 'none',
                            border: 'none',
                            borderBottom:
                              itemIdx < group.items.length - 1
                                ? '1px solid var(--border)'
                                : '1px solid var(--border)',
                            cursor: 'pointer',
                            fontFamily: '"IBM Plex Mono", var(--font-mono), monospace',
                            fontSize: '13px',
                            fontWeight: 400,
                            color: 'var(--fg)',
                            textAlign: 'left',
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.background = 'var(--bg)';
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.background = 'none';
                          }}
                        >
                          <div style={{ marginBottom: '2px' }}>{layout.name}</div>
                          <div style={{ color: 'var(--muted)', fontSize: '11px' }}>
                            {layout.description}
                          </div>
                        </button>
                      ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Style Direction selector */}
          <div style={{ marginBottom: '12px', position: 'relative' }}>
            <button
              onClick={() => {
                setStyleOpen((o) => !o);
                setExpandedStyleCategory(null);
              }}
              style={{
                background: 'none',
                border: '1px solid var(--border)',
                padding: '4px 12px',
                borderRadius: '2px',
                fontFamily: '"IBM Plex Mono", var(--font-mono), monospace',
                fontSize: '13px',
                fontWeight: 400,
                color: selectedStyle ? 'var(--fg)' : 'var(--muted)',
                cursor: 'pointer',
              }}
            >
              STYLE DIRECTION {selectedStyle ? `— ${selectedStyle.name}` : ''}{styleOpen ? ' ↑' : ' ↓'}
            </button>

            {styleOpen && (
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
                  minWidth: '280px',
                  maxWidth: '380px',
                  overflow: 'hidden',
                }}
              >
                {styleCategories.map((group, idx) => (
                  <div key={group.id}>
                    {/* Category header */}
                    <button
                      onClick={() => handleStyleCategoryClick(group.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        padding: '8px 14px',
                        background: 'none',
                        border: 'none',
                        borderBottom:
                          idx < styleCategories.length - 1 || expandedStyleCategory === group.id
                            ? '1px solid var(--border)'
                            : 'none',
                        cursor: 'pointer',
                        fontFamily: '"IBM Plex Mono", var(--font-mono), monospace',
                        fontSize: '13px',
                        fontWeight: 400,
                        color: 'var(--fg)',
                        textAlign: 'left',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background = 'var(--bg)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background = 'none';
                      }}
                    >
                      <span>{group.label}</span>
                      <span style={{ color: 'var(--muted)', fontSize: '11px', marginLeft: '8px' }}>
                        {expandedStyleCategory === group.id ? '↑' : '↓'}
                      </span>
                    </button>

                    {/* Style items */}
                    {expandedStyleCategory === group.id &&
                      group.items.map((style) => {
                        const isSelected = selectedStyle?.slug === style.slug;
                        return (
                          <button
                            key={style.slug}
                            onClick={() => handleStyleSelect(style)}
                            style={{
                              display: 'block',
                              width: '100%',
                              padding: '9px 14px 9px 24px',
                              background: isSelected ? 'var(--accent-subtle, rgba(99,102,241,0.08))' : 'none',
                              border: 'none',
                              borderBottom: '1px solid var(--border)',
                              cursor: 'pointer',
                              fontFamily: '"IBM Plex Mono", var(--font-mono), monospace',
                              fontSize: '13px',
                              fontWeight: 400,
                              color: 'var(--fg)',
                              textAlign: 'left',
                            }}
                            onMouseEnter={(e) => {
                              if (!isSelected) {
                                (e.currentTarget as HTMLButtonElement).style.background = 'var(--bg)';
                              }
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLButtonElement).style.background = isSelected
                                ? 'var(--accent-subtle, rgba(99,102,241,0.08))'
                                : 'none';
                            }}
                          >
                            <div
                              style={{
                                marginBottom: '2px',
                                color: isSelected ? 'var(--accent, #6366f1)' : 'var(--fg)',
                                fontWeight: isSelected ? 500 : 400,
                              }}
                            >
                              {isSelected ? '✓ ' : ''}{style.name}
                            </div>
                            <div style={{ color: 'var(--muted)', fontSize: '11px' }}>
                              {style.description}
                            </div>
                          </button>
                        );
                      })}
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
                    fontFamily: '"IBM Plex Mono", var(--font-mono), monospace',
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
