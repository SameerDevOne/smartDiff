import { getDiffReviewFromGemma } from "../ai";
import { getCommitDiff, getStagedDiff } from "../git";

export default async function analyzeDiff({
  type,
  value = "",
}: {
  type: "review" | "commit";
  value?: string;
}) {
  try {
    let diff = "";
    if (type === "review") {
      diff = getStagedDiff();
    } else if (type === "commit" && value) {
      diff = getCommitDiff(value);
    }

    if (!diff || diff.trim() === "") {
      console.log("No changes found to analyze");
      return;
    }
    const result = await getDiffReviewFromGemma(diff);
    if (result) {
      console.log(result);
      return;
    }
  } catch (e) {
    console.error("Smartdiff Error:", e);
  }
}
