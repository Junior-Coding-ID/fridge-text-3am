import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "3:02 AM. Fridge here. Synced with the oven. It got 45 minutes with the lasagna. I've had custody since Tuesday.";

const outDir = process.env.MAKEFUN_OUTPUT || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY + "\n", "utf8");
