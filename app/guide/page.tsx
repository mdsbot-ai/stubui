import { SiteHeader } from '@/components/SiteHeader';
import { AsciiBlock } from '@/components/AsciiBlock';

const notationExamples = [
  { label: 'Fill — stretches to fill available space', ascii: '(~ fill ~)' },
  { label: 'Fixed — explicit/fixed width', ascii: '[ fixed ]' },
  { label: 'Hug — shrinks to fit content', ascii: '( hug )' },
  { label: 'Fill center with fixed width on sides', ascii: '[logo] (~ nav ~) [btn]' },
  { label: 'Fixed sidebar with fill content', ascii: '[ sidebar ] (~ content ~)' },
  { label: 'Centering a card', ascii: '(~ ~) [ card ] (~ ~)' },
  { label: 'Width via dash count (compact to wide)', ascii: '[btn]\n[- - btn - -]\n[- - - - btn - - - -]' },
  { label: 'Column layout', ascii: '| col | col | col |' },
  { label: 'Rating', ascii: '★ ★ ★ ☆ ☆' },
  { label: 'Progress bar', ascii: '[████████░░░░░░░░] 50%' },
  { label: 'Stepper', ascii: '(●)---(●)---(○)---( )\n  1     2     3     4' },
  { label: 'Tree view', ascii: 'Root\n+-- Folder\n|   +-- File\n+-- Folder' },
  { label: 'Timeline', ascii: '  ●  Event\n  |\n  ○  Event\n  |\n  ○  Event' },
];

export default function GuidePage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <SiteHeader />
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 24px' }}>
        <h1 style={{ margin: '0 0 8px', fontSize: '13px', fontWeight: '400' }}>Notation Guide</h1>
        <p style={{ margin: '0 0 48px', color: 'var(--muted)', fontSize: '13px' }}>
          The stubui notation system lets you describe UI layout in plain ASCII text.
          Borrowed from Figma&apos;s auto layout mental model.
        </p>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ margin: '0 0 16px', fontSize: '13px', fontWeight: '400' }}>The Three Sizing Modes</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {notationExamples.slice(0, 3).map((ex) => (
              <div key={ex.label}>
                <p style={{ margin: '0 0 8px', fontSize: '13px', color: 'var(--muted)' }}>{ex.label}</p>
                <AsciiBlock ascii={ex.ascii} />
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ margin: '0 0 16px', fontSize: '13px', fontWeight: '400' }}>Layout Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {notationExamples.slice(3).map((ex) => (
              <div key={ex.label}>
                <p style={{ margin: '0 0 8px', fontSize: '13px', color: 'var(--muted)' }}>{ex.label}</p>
                <AsciiBlock ascii={ex.ascii} />
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ margin: '0 0 16px', fontSize: '13px', fontWeight: '400' }}>Symbol Reference</h2>
          <div style={{
            border: '1px solid var(--border)',
            background: 'var(--card-bg)',
            boxShadow: 'var(--card-shadow)',
          }}>
            {[
              ['[ ]', 'Fixed width container'],
              ['( )', 'Hug content container'],
              ['(~ ~)', 'Fill available space'],
              ['- -', 'Spacer / relative width (more = wider)'],
              ['|', 'Vertical divider / column separator'],
              ['● / ○', 'Active / inactive state'],
              ['✓', 'Complete / checked'],
              ['★ / ☆', 'Filled / empty (ratings)'],
              ['≡', 'Hamburger menu / collapsed'],
              ['├── └── │', 'Tree hierarchy connectors'],
              ['█ ░', 'Progress fill / empty'],
            ].map(([symbol, meaning], i) => (
              <div key={symbol} style={{
                display: 'grid',
                gridTemplateColumns: '160px 1fr',
                padding: '8px 16px',
                borderTop: i === 0 ? 'none' : '1px solid var(--border)',
                fontSize: '13px',
              }}>
                <code style={{
                  fontFamily: 'var(--font-mono), monospace',
                  fontVariantLigatures: 'none',
                  fontFeatureSettings: '"liga" 0, "calt" 0',
                  letterSpacing: 0,
                }}>{symbol}</code>
                <span style={{ color: 'var(--muted)' }}>{meaning}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ margin: '0 0 16px', fontSize: '13px', fontWeight: '400' }}>Prompt Tips</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: 'var(--muted)' }}>
            <p style={{ margin: 0 }}>1. Start with the layout structure, then describe components within regions.</p>
            <p style={{ margin: 0 }}>2. Use fill/fixed/hug notation to specify sizing intent clearly.</p>
            <p style={{ margin: 0 }}>3. Include component names in brackets to be explicit: <code style={{ fontFamily: 'inherit' }}>[DataTable]</code>, <code style={{ fontFamily: 'inherit' }}>[Sidebar]</code>.</p>
            <p style={{ margin: 0 }}>4. Reference pre-built layout templates from /layouts as starting points.</p>
            <p style={{ margin: 0 }}>5. Copy ASCII blocks and paste directly into Claude Code prompts.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
