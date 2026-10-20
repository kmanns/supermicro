/* eslint-disable */
/* global WebImporter */
/**
 * EDS-native source pages (published .plain.html):
 * - preprocess: turn decorated icon spans back into :icon-name: text before the importer's
 *   cleanup removes them as empty elements;
 * - afterTransform: rebuild Section Metadata from the section classes that EDS folded the
 *   authored metadata into, then restore the section breaks between top-level section divs.
 */
export default function transform(hookName, element, payload) {
  const { document } = payload;
  if (hookName === 'preprocess') {
    element.querySelectorAll('span.icon').forEach((span) => {
      const name = [...span.classList].find((c) => c.startsWith('icon-'));
      if (name) span.replaceWith(document.createTextNode(`:${name.slice(5)}:`));
    });
  }
  if (hookName === 'afterTransform') {
    const sections = [...element.children].filter((el) => el.tagName === 'DIV');
    sections.forEach((section) => {
      const styles = [...section.classList].filter((c) => c !== 'section');
      if (styles.length) {
        section.append(WebImporter.Blocks.createBlock(document, {
          name: 'Section Metadata',
          cells: { Style: styles.join(', ') },
        }));
      }
    });
    sections.slice(1).forEach((section) => section.before(document.createElement('hr')));
  }
}
