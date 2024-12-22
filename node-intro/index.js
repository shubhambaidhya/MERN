// console.log("hello");
//? log is a function and console lets say is a object
import fs from "fs";
import crypto from "crypto";
// import os from "os";
// console.log(os.release());
// console.log(os.platform());
// console.log(os.version());
// console.log(os.cpus());
// console.log(os.totalmem() / (1024 * 1024 * 1024));
// console.log(os.machine());

fs.writeFileSync("log.txt", "App crashed due to email system failure");
fs.appendFileSync("log.txt", "Hello World");

// const randomText = crypto
