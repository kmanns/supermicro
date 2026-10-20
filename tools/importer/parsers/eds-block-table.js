/* eslint-disable */
/* global WebImporter */
/**
 * Shared helper: converts an authored EDS block (div.<name> > row divs > cell divs)
 * back into an importer block table, keeping cell content as authored.
 */
export default function edsBlockTable(element, { document }, blockName) {
  const cells = [...element.children].map((row) => {
    const cols = [...row.children];
    return cols.length ? cols.map((col) => [...col.childNodes]) : [[...row.childNodes]];
  });
  const variants = [...element.classList].filter((c) => c !== element.classList[0] && c !== 'block');
  const name = variants.length ? `${blockName} (${variants.join(', ')})` : blockName;
  const table = WebImporter.Blocks.createBlock(document, { name, cells });
  element.replaceWith(table);
}
