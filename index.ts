#!/usr/bin/env node
import childProcess from "child_process";

const args = process.argv;

if (args[args.length - 1] === ".") {
  console.log("git diff .");

  const diff = childProcess.execSync("git diff .").toString();
  getReviewFromGemma(diff);
}

async function getReviewFromGemma(diff: string) {
  const res = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gemma4",
      prompt: `You are a senior software engineer.
Analyze this git diff and return ONLY valid JSON in this format:
{
  "summary": "string",
  "impact": "string",
  "risk": "low | medium | high"
}
Diff:
${diff}
`,
      stream: false,
      temperature: 0.2,
    }),
  });

  const data = await res.json();

  console.log("\n=== AI Analysis ===\n");
  console.log(data.response);
}
