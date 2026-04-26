# smartDiff ⚡

A local-first CLI tool that analyzes git diffs using an LLM (Gemma via Ollama) to generate structured summaries, risks, and insights directly in your terminal.

---

## 🚀 Overview

smartDiff helps developers quickly understand code changes before committing by providing:

* 🧾 Summary of changes
* ⚠️ Risk analysis
* 🔥 Severity estimation

All processing runs locally using Ollama — no external API calls required.

---

## 🧠 Why smartDiff?

Instead of manually reviewing diffs, smartDiff:

* Integrates into your terminal workflow
* Uses AI to highlight potential issues
* Works locally (privacy-first)
* Provides structured, developer-friendly output

---

## 🏗️ Architecture

CLI → Core → Git → AI

* **CLI** — Handles commands and user input
* **Core** — Orchestrates flow and validation
* **Git Layer** — Fetches diffs
* **AI Layer** — Communicates with local LLM

---

## ⚙️ Installation

Clone the repository:

git clone <your-repo-url>
cd smartDiff

Install dependencies:

npm install

Build the project:

npm run build

Link CLI globally:

npm link

Make sure Ollama is running with Gemma:

ollama run gemma

---

## 🧪 Usage

Analyze staged changes:

smartdiff review

Analyze a specific commit:

smartdiff commit <commit-hash>

---

## 🖥️ Example Output

📊 smartDiff Analysis

🧾 Summary:
Refactored user creation logic and improved validation.

⚠️ Risks:

* Response structure change may affect frontend
* Missing null checks in edge cases

🔥 Severity: HIGH

---

## ⚠️ Current Limitations

* LLM responses may include formatting inconsistencies
* Large diffs are not yet optimized
* Requires local Ollama instance

---

## 🛠️ Tech Stack

* Node.js + TypeScript
* Ollama
* Gemma

---

## 📌 Future Improvements

* Diff filtering & chunking
* Multi-step AI analysis
* Git hook integration
* Improved output formatting

---

## 📄 License

MIT License
