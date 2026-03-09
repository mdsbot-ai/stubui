import Fuse from 'fuse.js';
import type { Component } from './types';

let fuseInstance: Fuse<Component> | null = null;

export function getSearchInstance(components: Component[]): Fuse<Component> {
  if (!fuseInstance) {
    fuseInstance = new Fuse(components, {
      keys: ['name', 'description', 'category'],
      threshold: 0.3,
      includeScore: true,
    });
  }
  return fuseInstance;
}

export function searchComponents(components: Component[], query: string): Component[] {
  if (!query.trim()) return components;
  const fuse = new Fuse(components, {
    keys: ['name', 'description', 'category'],
    threshold: 0.3,
  });
  return fuse.search(query).map((r) => r.item);
}
