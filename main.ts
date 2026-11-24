import { mkdirSync, writeFileSync } from "node:fs";

const entry = "It passed every test we wrote. Production was the one test we didn't.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
