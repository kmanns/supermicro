/* eslint-disable */
/* global WebImporter */

import heroParser from './parsers/hero.js';
import columnsParser from './parsers/columns.js';
import sectionMetadataParser from './parsers/section-metadata.js';
import edsNativeTransformer from './transformers/eds-native.js';

const PAGE_TEMPLATE = {
  name: 'eds-native',
  description: 'Pages already authored in Document Authoring for this EDS site; imported from their published .plain.html to refresh the workspace content copy',
  urls: [
    'https://main--supermicro--kmanns.aem.live/index.plain.html',
    'https://main--supermicro--kmanns.aem.live/nav.plain.html',
  ],
  blocks: [
    { name: 'hero', instances: ['div.hero'] },
    { name: 'columns', instances: ['div.columns'] },
    { name: 'section-metadata', instances: ['div.section-metadata'] },
  ],
};

const parsers = {
  hero: heroParser,
  columns: columnsParser,
  'section-metadata': sectionMetadataParser,
};
const transformers = [edsNativeTransformer];

function executeTransformers(hookName, element, payload) {
  const enhancedPayload = { ...payload, template: PAGE_TEMPLATE };
  transformers.forEach((fn) => {
    try { fn(hookName, element, enhancedPayload); }
    catch (e) { console.error(`Transformer failed at ${hookName}:`, e); }
  });
}

function findBlocksOnPage(document, template) {
  const pageBlocks = [];
  template.blocks.forEach((blockDef) => {
    blockDef.instances.forEach((selector) => {
      document.querySelectorAll(selector).forEach((element) => {
        pageBlocks.push({ name: blockDef.name, selector, element });
      });
    });
  });
  return pageBlocks;
}

export default {
  // runs before the importer's own DOM cleanup, which drops empty elements such as icon spans
  preprocess: (payload) => {
    executeTransformers('preprocess', payload.document.body, payload);
  },

  transform: (payload) => {
    const { document, url, params } = payload;
    const main = document.body;

    executeTransformers('beforeTransform', main, payload);

    const pageBlocks = findBlocksOnPage(document, PAGE_TEMPLATE);
    pageBlocks.forEach((block) => {
      if (!block.element.parentNode) return;
      const parser = parsers[block.name];
      if (!parser) return;
      try { parser(block.element, { document, url, params }); }
      catch (e) { console.error(`Failed to parse ${block.name} (${block.selector}):`, e); }
    });

    executeTransformers('afterTransform', main, payload);

    main.appendChild(document.createElement('hr'));
    WebImporter.rules.createMetadata(main, document);
    WebImporter.rules.transformBackgroundImages(main, document);
    WebImporter.rules.adjustImageUrls(main, url, params.originalURL);

    // source URLs are published .plain.html documents; drop the ".plain" suffix from the path
    const rawPath = new URL(params.originalURL).pathname
      .replace(/\/$/, '')
      .replace(/\.html?$/, '')
      .replace(/\.plain$/, '');
    const path = WebImporter.FileUtils.sanitizePath(rawPath === '' ? '/index' : rawPath);

    return [{
      element: main,
      path,
      report: { title: document.title, template: PAGE_TEMPLATE.name, blocks: pageBlocks.map((b) => b.name) },
    }];
  },
};
