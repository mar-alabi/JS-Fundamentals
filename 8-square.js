// Write a script that prints a square

//     The first argument is the size of the square
//     If the first argument can’t be converted to an integer, print “Missing size”
//     You must use the character X to print the square
//     You must use console.log(...) to print all output
//     You are not allowed to use var
//     You must use a loop (while, for, etc.)
const process = require("node:process");
const argv = process.argv;

argv[2] = Number(argv[2]);
if (Number.isNaN(argv[2]) == true) {
  console.log("Missing size");
} else {
  for (let j = 0; j < argv[2]; j++) {
    let line = "";
    for (let i = 0; i < argv[2]; i++) {
      line += "X";
    }
    console.log(line);
  }
}
