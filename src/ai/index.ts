import { buildDiffPrompt } from "./prompt";

export async function getDiffReviewFromGemma(diff: string) {
  const prompt = buildDiffPrompt(diff);

  const res = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gemma4",
      prompt,
      stream: false,
      temperature: 0.2,
    }),
  });

  const data = await res.json();

  try {
    return JSON.parse(data.response);
  } catch (err) {
    console.log("⚠️ Failed to parse AI response");
    console.log(data.response);
    return null;
  }
}
