import { SiteHeader } from '@/components/SiteHeader';

export default function BuilderPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <SiteHeader />
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '48px 24px' }}>
        <h1 style={{ margin: '0 0 8px', fontSize: '22px', fontWeight: 'bold' }}>Prompt Builder</h1>
        <p style={{ color: 'var(--muted)', fontSize: '13px' }}>Coming in Phase 2 — @mention components to compose copy-ready prompts.</p>
      </main>
    </div>
  );
}
