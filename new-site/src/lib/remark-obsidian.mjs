/**
 * Remark plugin to support Obsidian-flavored markdown features:
 * - [[wikilinks]] - converts to internal links
 * - ![[image]] - embeds images
 * - > [!note] Callouts - converts to custom callout blocks
 */

import { visit } from 'unist-util-visit';

export function remarkObsidian() {
  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      const text = node.value;

      // Handle [[wikilinks]]
      const wikilinkRegex = /\[\[([^\]]+)\]\]/g;
      let match;
      const parts = [];
      let lastIndex = 0;

      while ((match = wikilinkRegex.exec(text)) !== null) {
        // Add text before the match
        if (match.index > lastIndex) {
          parts.push({
            type: 'text',
            value: text.slice(lastIndex, match.index)
          });
        }

        const linkContent = match[1];
        const [path, alias] = linkContent.split('|').map(s => s.trim());

        // Convert wikilink to markdown link
        // Assuming content is in /blog, /research, or /experiments
        parts.push({
          type: 'link',
          url: `/blog/${path.toLowerCase().replace(/\s+/g, '-')}`,
          children: [{
            type: 'text',
            value: alias || path
          }]
        });

        lastIndex = match.index + match[0].length;
      }

      // Add remaining text
      if (lastIndex < text.length) {
        parts.push({
          type: 'text',
          value: text.slice(lastIndex)
        });
      }

      // Replace node if we found wikilinks
      if (parts.length > 0) {
        parent.children.splice(index, 1, ...parts);
      }
    });

    // Handle callouts like > [!note]
    visit(tree, 'blockquote', (node) => {
      if (node.children && node.children[0]?.type === 'paragraph') {
        const firstChild = node.children[0];
        if (firstChild.children && firstChild.children[0]?.type === 'text') {
          const text = firstChild.children[0].value;
          const calloutMatch = text.match(/^\[!(note|warning|info|tip|important|caution)\]/i);

          if (calloutMatch) {
            const calloutType = calloutMatch[1].toLowerCase();

            // Remove the callout marker from text
            firstChild.children[0].value = text.replace(calloutMatch[0], '').trim();

            // Add data attribute for styling
            node.data = node.data || {};
            node.data.hProperties = {
              className: `callout callout-${calloutType}`
            };
          }
        }
      }
    });
  };
}
