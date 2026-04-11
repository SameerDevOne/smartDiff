import childProcess from "child_process";
import process from "process";

const args = process.argv;
if (args[args.length - 1] === ".") {
  console.log(childProcess.execSync("git diff ."));
}
console.log(args);
