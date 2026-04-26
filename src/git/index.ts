import { execSync } from "child_process";

export function getStagedDiff(): string {
  try {
    return execSync("git diff --staged", { encoding: "utf-8" });
  } catch (error) {
    console.error("❌ Failed to get staged diff");
    return "";
  }
}

export function getCommitDiff(hash: string): string {
  try {
    return execSync(`git show ${hash}`, { encoding: "utf-8" });
  } catch (error) {
    console.error("❌ Failed to get commit diff");
    return "";
  }
}
