import { readJsonFile } from '../lib/file-system.js';
import chroma from 'chroma-js';

const args = process.argv.slice(2);

const source = args[0];

console.log(source);

if (!source) {
  console.log("usage: node tools/closest.js '<hex>'");
  process.exit(1);
}

const ansi = await readJsonFile('./tools/ansi.json');

const [r1, g1, b1] = chroma.hex(source).rgb();

const diffs = ansi.map((color) => {
  const { hex, ansi, r, g, b } = color;

  const diff = Math.sqrt(Math.pow(r1 - r, 2) + Math.pow(g1 - g, 2) + Math.pow(b1 - b, 2));

  return { hex, ansi, r, g, b, diff };
});

const sorted = diffs.sort((a, b) => a.diff - b.diff);

console.table(sorted.at(0));
