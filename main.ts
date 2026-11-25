// One Line, Big Laugh — entry for make.fun competition
// u-coral-404-one-line-big-laugh-328fb857
//
// Writes a single hilarious line (at most 200 characters) to
// /output/entry.txt. The line has to land entirely on its own, with
// no title, setup or explanation around it.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My grandma's Wi-Fi password is her first husband's name, so every guest has to ask about a man nobody mentions at dinner.";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

if (LINE.length === 0 || LINE.length > MAX_CHARS) {
  throw new Error(
    `Line must be 1 to ${MAX_CHARS} characters, got ${LINE.length}.`,
  );
}

// The entry is one line: it must not contain a line break, and it
// must not be only white space.
if (/[\r\n]/.test(LINE)) {
  throw new Error("Line must be a single line with no line breaks.");
}

if (LINE.trim().length === 0) {
  throw new Error("Line must not be only white space.");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${OUTPUT_PATH}`);
