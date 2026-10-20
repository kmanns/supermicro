/* eslint-disable */
/* global WebImporter */
import edsBlockTable from './eds-block-table.js';

/** Parser for the authored "Hero" block (EDS-native source). */
export default function parse(element, context) {
  edsBlockTable(element, context, 'Hero');
}
