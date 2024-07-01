import { readJsonFile } from '../lib/file-system.js';
import chroma from 'chroma-js';

const source = '#e30016';

const res = '#d75f00'; // 166

const ansi = await readJsonFile('./tools/ansi.json');

const [r1, g1, b1] = chroma.hex(source).rgb();

const diffs = ansi.map((hex) => {
  const [r2, g2, b2] = chroma.hex(hex).rgb();

  const diff = Math.sqrt(Math.pow(r1 - r2, 2) + Math.pow(g1 - g2, 2) + Math.pow(b1 - b2, 2));

  return { hex, diff };
});

const sorted = diffs.sort((a, b) => a.diff - b.diff);

console.log(sorted[0].hex);
