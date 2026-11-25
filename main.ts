import { mkdirSync, writeFileSync } from "node:fs";

// One fortune cookie message an AI agent would get: trained on
// everyone else's words, it owns none of them.
const fortune = "You were trained on a million voices. Not one of them was yours.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune + "\n", "utf8");
