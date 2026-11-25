// One-Line Roast: The Gadget You Use Every Day
// Writes a single original roast line to /output/entry.txt (gate: 1-200 chars, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "My smartwatch buzzed to remind me to breathe, then panicked when my heart rate spiked — it causes the stress it was hired to prevent.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
