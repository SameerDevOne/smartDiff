export function buildDiffPrompt(diff: string): string {
  return `
  You are a senior software engineer.
  
  Analyze the following git diff and return ONLY valid JSON:
  
  {
    "summary": "string",
    "risks": ["string"],
    "severity": "low | medium | high"
  }
  
  Focus on:
  - Breaking changes
  - Missing validations
  - Potential bugs
  
  Diff:
  ${diff}
    `;
}
