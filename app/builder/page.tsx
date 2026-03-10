import { SiteHeader } from '@/components/SiteHeader';
import { BuilderClient } from './BuilderClient';
import { components, layouts } from '@/lib/data';

export default function BuilderPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <SiteHeader />
      <main>
        <BuilderClient components={components} layouts={layouts} />
      </main>
    </div>
  );
}
