// Write a script that prints two arguments passed to it, in the following format: “ is ”

//     You must use console.log(...) to print all output
//     You are not allowed to use var
const process = require("node:process");
const argv = process.argv;
console.log(`${argv[2]} is ${argv[3]}`);
