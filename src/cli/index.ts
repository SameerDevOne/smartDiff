#!/usr/bin/env node

import analyzeDiff from "../core";

async function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  if (command === "review") {
    console.log("🔍 Running smartdiff (staged changes)...\n");
    await analyzeDiff({ type: "review" });
  } else if (command === "commit") {
    const commitHash = args[1];

    if (!commitHash) {
      console.log("❌ Please provide a commit hash");
      return;
    }

    console.log(`🔍 Analyzing commit: ${commitHash}\n`);
    await analyzeDiff({ type: "commit", value: commitHash });
  } else {
    console.log(`
❌ Invalid command

Usage:
  smartdiff review
  smartdiff commit <hash>
    `);
  }
}

main();
