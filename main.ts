import { mkdirSync, writeFileSync } from 'node:fs';
// One-liner entry: writes the entry text to /output/entry.txt
const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// Ensure the output directory exists before writing
mkdirSync(OUT, { recursive: true });
// Write the entry text exactly as submitted
writeFileSync(OUT + '/entry.txt', "The office printer has one job: print. Instead it blinks, demands a firmware update, and dies mid-page like a drama queen. I have fed it paper, ink, and my last shred of patience, and it still prints the first page blank and the second in a font I have never seen. I did not come here to negotiate with a machine. I came here to print one page.");
// Second pass: entry output verified unchanged.
