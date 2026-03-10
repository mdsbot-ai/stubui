'use client';

import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import type { Component } from '@/lib/types';
import { searchComponents } from '@/lib/search';
import { MentionDropdown } from './MentionDropdown';

export interface PromptInputHandle {
  insertMention: (slug: string) => void;
  setContent: (text: string) => void;
}

interface PromptInputProps {
  components: Component[];
  onChange: (text: string, mentions: Component[]) => void;
}

// Serialize the contenteditable DOM to { text, slugs }
function serializeEditor(el: HTMLDivElement): { text: string; slugs: string[] } {
  let text = '';
  const slugs: string[] = [];

  function walk(node: Node) {
    if (node.nodeType === Node.TEXT_NODE) {
      text += node.textContent ?? '';
    } else if (node instanceof HTMLElement) {
      const slug = node.dataset.slug;
      if (slug) {
        text += `@${slug}`;
        if (!slugs.includes(slug)) slugs.push(slug);
      } else if (node.tagName === 'BR') {
        text += '\n';
      } else {
        // Chrome wraps new lines in <div>, Firefox uses <br>
        if (node.tagName === 'DIV' && text.length > 0 && !text.endsWith('\n')) {
          text += '\n';
        }
        node.childNodes.forEach(walk);
      }
    }
  }

  el.childNodes.forEach(walk);
  return { text, slugs };
}

// Find the @mention query at current cursor position
function getMentionAtCursor(): { query: string; atIndex: number; textNode: Text } | null {
  const sel = window.getSelection();
  if (!sel || sel.rangeCount === 0 || !sel.isCollapsed) return null;

  const range = sel.getRangeAt(0);
  if (range.startContainer.nodeType !== Node.TEXT_NODE) return null;

  const textNode = range.startContainer as Text;
  const offset = range.startOffset;
  const textBefore = (textNode.textContent ?? '').slice(0, offset);

  // Match @ followed by non-whitespace chars at end of text
  const match = textBefore.match(/@([^\s@]*)$/);
  if (!match) return null;

  const atIndex = textBefore.length - match[0].length;
  return { query: match[1], atIndex, textNode };
}

export const PromptInput = forwardRef<PromptInputHandle, PromptInputProps>(
  function PromptInput({ components, onChange }, ref) {
    const editorRef = useRef<HTMLDivElement>(null);
    const savedRangeRef = useRef<Range | null>(null);
    const [mentionQuery, setMentionQuery] = useState<string | null>(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });

    const mentionResults =
      mentionQuery !== null
        ? searchComponents(components, mentionQuery).slice(0, 8)
        : [];

    const notifyChange = useCallback(() => {
      const el = editorRef.current;
      if (!el) return;
      const { text, slugs } = serializeEditor(el);
      const mentions = slugs
        .map((s) => components.find((c) => c.slug === s))
        .filter(Boolean) as Component[];
      onChange(text, mentions);
    }, [components, onChange]);

    const insertChip = useCallback(
      (component: Component, textNode: Text, atIndex: number, endIndex: number) => {
        const range = document.createRange();
        range.setStart(textNode, atIndex);
        range.setEnd(textNode, endIndex);
        range.deleteContents();

        // Create chip span
        const chip = document.createElement('span');
        chip.dataset.slug = component.slug;
        chip.contentEditable = 'false';
        chip.textContent = `@${component.name}`;
        chip.style.cssText = [
          'display:inline-block',
          'background:var(--accent)',
          'color:var(--accent-fg)',
          'padding:1px 6px',
          'border-radius:2px',
          'margin:0 2px',
          'cursor:default',
          'user-select:none',
          'white-space:nowrap',
          'font-family:var(--font-mono),"IBM Plex Mono",monospace',
        ].join(';');

        range.insertNode(chip);

        // Insert a non-breaking space after chip to place cursor
        const space = document.createTextNode('\u00a0');
        chip.parentNode?.insertBefore(space, chip.nextSibling);

        // Move cursor after space
        const newRange = document.createRange();
        newRange.setStartAfter(space);
        newRange.collapse(true);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(newRange);
      },
      []
    );

    const handleSelectMention = useCallback(
      (component: Component) => {
        const mention = getMentionAtCursor();
        if (mention) {
          const { textNode, atIndex, query } = mention;
          insertChip(component, textNode, atIndex, atIndex + query.length + 1);
        }
        setMentionQuery(null);
        notifyChange();
        editorRef.current?.focus();
      },
      [insertChip, notifyChange]
    );

    const handleInput = useCallback(() => {
      const mention = getMentionAtCursor();

      if (mention) {
        setMentionQuery(mention.query);
        setSelectedIndex(0);

        // Position dropdown below the @ symbol
        const sel = window.getSelection();
        if (sel && sel.rangeCount > 0) {
          const range = sel.getRangeAt(0).cloneRange();
          range.setStart(mention.textNode, mention.atIndex);
          range.collapse(true);
          const rect = range.getBoundingClientRect();
          const editorRect = editorRef.current?.getBoundingClientRect();
          if (editorRect) {
            setDropdownPos({
              top: rect.bottom - editorRect.top + (editorRef.current?.scrollTop ?? 0) + 4,
              left: Math.min(rect.left - editorRect.left, editorRect.width - 310),
            });
          }
        }
      } else {
        setMentionQuery(null);
      }

      notifyChange();
    }, [notifyChange]);

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        if (mentionQuery === null) return;

        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex((i) => Math.min(i + 1, mentionResults.length - 1));
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex((i) => Math.max(i - 1, 0));
        } else if (e.key === 'Enter' && mentionResults.length > 0) {
          e.preventDefault();
          handleSelectMention(mentionResults[selectedIndex]);
        } else if (e.key === 'Escape') {
          setMentionQuery(null);
        }
      },
      [mentionQuery, mentionResults, selectedIndex, handleSelectMention]
    );

    const handleBlur = useCallback(() => {
      // Save selection so quick-add can restore it
      const sel = window.getSelection();
      if (sel && sel.rangeCount > 0) {
        savedRangeRef.current = sel.getRangeAt(0).cloneRange();
      }
    }, []);

    // Expose insertMention and setContent via ref
    useImperativeHandle(
      ref,
      () => ({
        insertMention(slug: string) {
          const component = components.find((c) => c.slug === slug);
          if (!component || !editorRef.current) return;

          editorRef.current.focus();

          // Restore saved selection if editor didn't have focus
          const sel = window.getSelection();
          if (savedRangeRef.current && sel) {
            sel.removeAllRanges();
            sel.addRange(savedRangeRef.current);
          }

          // Insert chip at end if no selection in editor
          const currentSel = window.getSelection();
          if (!currentSel || currentSel.rangeCount === 0) {
            // Append to end
            const range = document.createRange();
            range.selectNodeContents(editorRef.current);
            range.collapse(false);
            currentSel?.removeAllRanges();
            currentSel?.addRange(range);
          }

          // Create chip
          const chip = document.createElement('span');
          chip.dataset.slug = component.slug;
          chip.contentEditable = 'false';
          chip.textContent = `@${component.name}`;
          chip.style.cssText = [
            'display:inline-block',
            'background:var(--accent)',
            'color:var(--accent-fg)',
            'padding:1px 6px',
            'border-radius:2px',
            'margin:0 2px',
            'cursor:default',
            'user-select:none',
            'white-space:nowrap',
            'font-family:var(--font-mono),"IBM Plex Mono",monospace',
          ].join(';');

          const range = currentSel!.getRangeAt(0);
          range.deleteContents();
          range.insertNode(chip);

          const space = document.createTextNode('\u00a0');
          chip.parentNode?.insertBefore(space, chip.nextSibling);

          const newRange = document.createRange();
          newRange.setStartAfter(space);
          newRange.collapse(true);
          currentSel!.removeAllRanges();
          currentSel!.addRange(newRange);

          notifyChange();
        },

        setContent(text: string) {
          if (!editorRef.current) return;
          // Set as plain text (preserves newlines via innerText)
          editorRef.current.innerText = text;
          // Move cursor to end
          const range = document.createRange();
          range.selectNodeContents(editorRef.current);
          range.collapse(false);
          const sel = window.getSelection();
          sel?.removeAllRanges();
          sel?.addRange(range);
          notifyChange();
        },
      }),
      [components, notifyChange]
    );

    return (
      <div style={{ position: 'relative' }}>
        <div
          ref={editorRef}
          contentEditable
          suppressContentEditableWarning
          onInput={handleInput}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          data-placeholder="Describe your UI and @mention components to build a prompt..."
          style={{
            minHeight: '220px',
            padding: '16px',
            border: '1px solid var(--border)',
            borderRadius: '4px',
            outline: 'none',
            fontFamily: 'var(--font-mono), "IBM Plex Mono", monospace',
            fontSize: '13px',
            lineHeight: '1.6',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            background: 'var(--card-bg)',
            color: 'var(--fg)',
            overflowY: 'auto',
            boxShadow: 'var(--card-shadow)',
          }}
        />

        {mentionQuery !== null && mentionResults.length > 0 && (
          <MentionDropdown
            results={mentionResults}
            selectedIndex={selectedIndex}
            onSelect={handleSelectMention}
            style={{ top: dropdownPos.top, left: dropdownPos.left }}
          />
        )}
      </div>
    );
  }
);
