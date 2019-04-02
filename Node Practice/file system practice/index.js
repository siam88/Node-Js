// const fs = require("fs");

// fs.writeFile("test.txt", "hello world", err => {
//   console.log(err);
// });

// fs.readFile("./text.txt", { encoding: "utf-8" }, (err, result) => {
//   if (err) console.log(err);
//   else console.log(result);
// });

//for action fire from outsider file
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("action", () => {
  console.log("äction fired");
});
emitter.emit("action");
