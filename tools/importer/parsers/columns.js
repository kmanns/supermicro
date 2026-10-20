/* eslint-disable */
/* global WebImporter */
import edsBlockTable from './eds-block-table.js';

/** Parser for the authored "Columns" block (EDS-native source). */
export default function parse(element, context) {
  edsBlockTable(element, context, 'Columns');
}
