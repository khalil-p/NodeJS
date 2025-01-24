import path from "path";
import fs from "fs";
import event from "events";
console.log(path.join("/src", "/foo", ".."));
console.log(path.isAbsolute("/src"));
console.log(path.isAbsolute("www.google.com"));
const pathObject = {
  dir: "/src//image",
  name: "file",
  ext: ".jpeg",
};
console.log(path.format(pathObject));

console.log(path.parse("/home/user/dir/file.txt"));
console.log(path.relative("/src", "/views"));
console.log(path.dirname("index.js"));
// If base is specified, name and ext are ignored.
// If dir and root are both specified, root is ignored.
// This method is the inverse of path.parse(), which breaks down a path string into an object.
fs.ReadStream("read.txt").on("open", () => {
  console.log("file opened");
});
fs.ReadStream("read.txt").on("ready", () => {
  console.log("file read");
});

const eventEmitter = event.EventEmitter;

let emitter = new eventEmitter();
// emitter.on("done", (res) => {
//   const arr = [1, 2, 3,4];
//   console.log(arr[res]);
// });
// emitter.on("done", (res) => {
//   const arr = [5,6,7,8];
//   console.log(arr[res] );
// });

// emitter.on("done", (x) => {
//   console.log("done");
//   x.handle = true;
// });

// emitter.on("done", (x) => {
//   if (x.handle) {
//     console.log("Already done");
//   }
// });

// emitter.emit("done", 3);
// emitter.emit("done", { handle: false });

function eventHandler() {
  console.log("done...");
  emitter.removeListener("done", eventHandler);
}

emitter.on("done", eventHandler);



emitter.emit("done",new Error("Custom Error Message"))
emitter.emit("done")
