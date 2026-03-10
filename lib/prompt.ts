import type { Component, Style } from './types';

const NOTATION_KEY = `(~ fill ~)   stretches to fill available space
[ fixed ]    explicit/fixed width
( hug )      shrinks to fit content`;

export function buildPrompt(
  text: string,
  mentionedComponents: Component[],
  style?: Style | null
): string {
  if (!text.trim() && mentionedComponents.length === 0) return '';

  const lines: string[] = [];

  lines.push('## LAYOUT INTENT');
  lines.push('');
  lines.push(text.trim() || '(describe your UI here)');

  if (mentionedComponents.length > 0) {
    lines.push('');
    lines.push('');
    lines.push('## COMPONENTS USED');

    for (const c of mentionedComponents) {
      lines.push('');
      lines.push(`### @${c.slug}`);
      lines.push('');
      lines.push(c.ascii);
      lines.push('');
      lines.push(c.description);
    }
  }

  if (style) {
    lines.push('');
    lines.push('');
    lines.push('## STYLE');
    lines.push('');
    lines.push(style.style);
    lines.push('');
    lines.push('');
    lines.push('## AVOID');
    lines.push('');
    lines.push(style.avoid);
  }

  lines.push('');
  lines.push('');
  lines.push('## NOTATION KEY');
  lines.push('');
  lines.push(NOTATION_KEY);

  return lines.join('\n');
}

export function estimateTokens(text: string): number {
  return Math.ceil(text.length / 4);
}
