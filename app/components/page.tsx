import { SiteHeader } from '@/components/SiteHeader';
import { ComponentsClient } from './ComponentsClient';
import { components } from '@/lib/data';

export default function ComponentsPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SiteHeader />
      <div style={{ flex: 1, display: 'flex' }}>
        <ComponentsClient components={components} />
      </div>
    </div>
  );
}
