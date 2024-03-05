const path = require("path");

console.log(path.sep);

const filePaths = path.join("/content", "subfolder", "test.txt");
console.log(filePaths);

const base = path.basename(filePaths);
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
