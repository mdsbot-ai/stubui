import componentsData from '@/data/components.json';
import layoutsData from '@/data/layouts.json';
import type { Component, Layout } from './types';

export const components: Component[] = componentsData as Component[];
export const layouts: Layout[] = layoutsData as Layout[];

export const CATEGORIES: Record<string, string> = {
  'layout': 'Layout',
  'navigation': 'Navigation',
  'overlay': 'Overlay / Modal',
  'form-inputs': 'Form Inputs',
  'data-display': 'Data Display',
  'feedback': 'Feedback',
  'disclosure': 'Disclosure',
  'command': 'Command',
  'utility': 'Utility',
  'gap-fills-tier1': 'Gap Fills — Tier 1',
  'gap-fills-tier2': 'Gap Fills — Tier 2',
  'gap-fills-tier3': 'Gap Fills — Tier 3',
  'gap-fills-tier4': 'Gap Fills — Tier 4',
};

export function getComponentsByCategory(category: string): Component[] {
  return components.filter((c) => c.category === category);
}

export function getComponentBySlug(slug: string): Component | undefined {
  return components.find((c) => c.slug === slug);
}
