// Saves the printer rant as entry.txt for the make.fun run.
// Short and boring on purpose: the rant itself does all the work.
import * as fs from "node:fs";
import * as path from "node:path";

const folder = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const rant =
  "The office printer has one job: print. Instead it blinks, demands a firmware update, and dies mid-page like a drama queen. I have fed it paper, ink, and my last shred of patience, and it still prints the first page blank and the second in a font I have never seen. I did not come here to negotiate with a machine. I came here to print one page.";

fs.mkdirSync(folder, { recursive: true });
fs.writeFileSync(path.join(folder, "entry.txt"), rant);
console.log("saved entry.txt under " + folder);
